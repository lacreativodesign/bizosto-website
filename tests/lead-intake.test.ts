import assert from "node:assert/strict";
import test from "node:test";
import { parseLeadSubmission } from "../lib/lead-intake.ts";
import { getLeadProxyConfig } from "../lib/marketing-env.ts";

function validSubmission() {
  return {
    company: "Acme Services",
    consent: true,
    email: "OWNER@EXAMPLE.COM",
    message: "We need a connected sales and delivery workflow.",
    meta: {
      phone: "+1 212 555 0100",
      referrer: "https://www.google.com/",
      serviceType: "agency",
      teamSize: "11-25",
      utm: { utm_campaign: "controlled-beta", utm_source: "search" },
    },
    name: "Avery Owner",
    page: "/book-demo",
    recaptchaToken: "captcha-token",
    source: "bizosto-website",
    submissionId: "3d59f4dd-563c-41cb-bdb1-978c9158b63f",
    website: "",
  };
}

test("accepts and normalizes the canonical marketing lead payload", () => {
  const submission = validSubmission();
  submission.meta.referrer = "https://www.google.com/search?q=private-email%40example.com#result";
  const result = parseLeadSubmission(submission);
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.value.email, "owner@example.com");
    assert.equal(result.value.meta.referrer, "https://www.google.com/search");
    assert.deepEqual(result.value.meta.utm, {
      utm_campaign: "controlled-beta",
      utm_source: "search",
    });
  }
});

test("rejects unknown fields instead of forwarding arbitrary data", () => {
  const result = parseLeadSubmission({ ...validSubmission(), tenantId: "another-tenant" });
  assert.deepEqual(result, { ok: false, error: "Invalid submission fields." });
});

test("rejects missing consent and honeypot submissions", () => {
  assert.equal(parseLeadSubmission({ ...validSubmission(), consent: false }).ok, false);
  assert.equal(parseLeadSubmission({ ...validSubmission(), website: "https://spam.invalid" }).ok, false);
});

test("rejects invalid nested metadata and attribution", () => {
  const unexpectedMeta = validSubmission();
  Object.assign(unexpectedMeta.meta, { userAgent: "unbounded" });
  assert.equal(parseLeadSubmission(unexpectedMeta).ok, false);

  const unexpectedUtm = validSubmission();
  Object.assign(unexpectedUtm.meta.utm, { arbitrary: "value" });
  assert.equal(parseLeadSubmission(unexpectedUtm).ok, false);
});

test("rejects identifiers, email addresses, and pages outside the contract", () => {
  assert.equal(parseLeadSubmission({ ...validSubmission(), submissionId: "short" }).ok, false);
  assert.equal(parseLeadSubmission({ ...validSubmission(), email: "not-an-email" }).ok, false);
  assert.equal(parseLeadSubmission({ ...validSubmission(), page: "https://attacker.invalid" }).ok, false);
  assert.equal(parseLeadSubmission({ ...validSubmission(), page: "/book-demo?email=private" }).ok, false);
});

test("accepts a complete production environment without exposing secret values", () => {
  const config = getLeadProxyConfig({
    BIZOSTO_INGEST_API_KEY: "test-key-with-at-least-24-characters",
    BIZOSTO_INGEST_ENDPOINT: "https://app.bizosto.com/api/ingest/leads",
    NODE_ENV: "production",
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "test-site-key",
    RECAPTCHA_ALLOWED_HOSTNAMES: "www.bizosto.com,bizosto.com",
    RECAPTCHA_SECRET_KEY: "test-secret-long-enough",
    VERCEL_ENV: "production",
  });
  assert.equal(config.ingestEndpoint.hostname, "app.bizosto.com");
  assert.equal(config.isProduction, true);
  assert.equal(config.captchaAllowedHostnames.has("www.bizosto.com"), true);
});

test("fails closed when any non-production runtime points at production ingest", () => {
  assert.throws(() =>
    getLeadProxyConfig({
      BIZOSTO_INGEST_API_KEY: "test-key-with-at-least-24-characters",
      BIZOSTO_INGEST_ENDPOINT: "https://app.bizosto.com/api/ingest/leads",
      NODE_ENV: "production",
      RECAPTCHA_ALLOWED_HOSTNAMES: "preview.example.com",
      RECAPTCHA_SECRET_KEY: "test-secret-long-enough",
      VERCEL_ENV: "preview",
    })
  );

  assert.throws(() =>
    getLeadProxyConfig({
      BIZOSTO_INGEST_API_KEY: "test-key-with-at-least-24-characters",
      BIZOSTO_INGEST_ENDPOINT: "https://app.bizosto.com/api/ingest/leads",
      NODE_ENV: "development",
    })
  );
});

test("requires CAPTCHA secrets and HTTPS canonical ingest in production", () => {
  assert.throws(() =>
    getLeadProxyConfig({
      BIZOSTO_INGEST_API_KEY: "test-key-with-at-least-24-characters",
      BIZOSTO_INGEST_ENDPOINT: "http://app.bizosto.com/api/ingest/leads",
      NODE_ENV: "production",
      RECAPTCHA_ALLOWED_HOSTNAMES: "www.bizosto.com",
      VERCEL_ENV: "production",
    })
  );
});

test("requires the public CAPTCHA site key in production", () => {
  assert.throws(() =>
    getLeadProxyConfig({
      BIZOSTO_INGEST_API_KEY: "test-key-with-at-least-24-characters",
      BIZOSTO_INGEST_ENDPOINT: "https://app.bizosto.com/api/ingest/leads",
      NODE_ENV: "production",
      RECAPTCHA_ALLOWED_HOSTNAMES: "www.bizosto.com",
      RECAPTCHA_SECRET_KEY: "test-secret-long-enough",
      VERCEL_ENV: "production",
    })
  );
});
