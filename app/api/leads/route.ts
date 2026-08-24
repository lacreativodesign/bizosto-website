import crypto from "node:crypto";
import { NextResponse } from "next/server";
import {
  MAX_LEAD_BODY_BYTES,
  RECAPTCHA_ACTION,
  parseLeadSubmission,
} from "@/lib/lead-intake";
import { getLeadProxyConfig, type LeadProxyConfig } from "@/lib/marketing-env";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_MAX_ENTRIES = 2_000;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

interface CaptchaResponse {
  action?: string;
  hostname?: string;
  score?: number;
  success?: boolean;
}

function json(body: Record<string, unknown>, status: number, headers?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || headers.get("x-real-ip")?.trim() || "unknown";
}

function rateLimitKey(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex").slice(0, 24);
}

function checkRateLimit(ip: string): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const key = rateLimitKey(ip);
  if (rateLimitStore.size >= RATE_LIMIT_MAX_ENTRIES && !rateLimitStore.has(key)) {
    for (const [key, entry] of rateLimitStore) {
      if (entry.resetAt <= now) rateLimitStore.delete(key);
    }
    if (rateLimitStore.size >= RATE_LIMIT_MAX_ENTRIES) {
      const oldestKey = rateLimitStore.keys().next().value as string | undefined;
      if (oldestKey) rateLimitStore.delete(oldestKey);
    }
  }

  const entry = rateLimitStore.get(key);
  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { limited: false, retryAfter: 0 };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { limited: true, retryAfter: Math.max(1, Math.ceil((entry.resetAt - now) / 1_000)) };
  }
  entry.count += 1;
  return { limited: false, retryAfter: 0 };
}

async function verifyCaptcha(
  token: string,
  ip: string,
  config: LeadProxyConfig
): Promise<boolean> {
  if (!config.captchaSecret) return !config.isProduction;
  if (!token) return false;

  const body = new URLSearchParams({
    remoteip: ip,
    response: token,
    secret: config.captchaSecret,
  });
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) return false;

  const result = (await response.json().catch(() => null)) as CaptchaResponse | null;
  const hostname = result?.hostname?.toLowerCase().replace(/\.$/, "");
  const hostnameAllowed = Boolean(
    hostname &&
      (config.captchaAllowedHostnames.size === 0 ||
        config.captchaAllowedHostnames.has(hostname))
  );

  return Boolean(
    result?.success === true &&
      result.action === RECAPTCHA_ACTION &&
      typeof result.score === "number" &&
      result.score >= config.captchaMinimumScore &&
      hostnameAllowed
  );
}

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  if (
    fetchSite === "cross-site" ||
    (origin && (() => {
      try {
        return new URL(origin).origin !== requestUrl.origin;
      } catch {
        return true;
      }
    })())
  ) {
    return json({ ok: false, code: "FORBIDDEN", error: "Cross-site submission rejected." }, 403);
  }

  const mediaType = request.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase();
  if (mediaType !== "application/json") {
    return json({ ok: false, code: "BAD_REQUEST", error: "Content-Type must be JSON." }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_LEAD_BODY_BYTES) {
    return json({ ok: false, code: "TOO_LARGE", error: "Submission is too large." }, 413);
  }

  const ip = getClientIp(request.headers);
  const rateLimit = checkRateLimit(ip);
  if (rateLimit.limited) {
    return json(
      { ok: false, code: "RATE_LIMIT", error: "Too many requests. Please try again later." },
      429,
      { "Retry-After": String(rateLimit.retryAfter) }
    );
  }

  const rawBody = await request.text().catch(() => "");
  if (Buffer.byteLength(rawBody, "utf8") > MAX_LEAD_BODY_BYTES) {
    return json({ ok: false, code: "TOO_LARGE", error: "Submission is too large." }, 413);
  }

  let rawSubmission: unknown;
  try {
    rawSubmission = JSON.parse(rawBody);
  } catch {
    return json({ ok: false, code: "BAD_REQUEST", error: "Invalid JSON." }, 400);
  }

  const parsed = parseLeadSubmission(rawSubmission);
  if (!parsed.ok) {
    return json({ ok: false, code: "BAD_REQUEST", error: parsed.error }, 400);
  }

  let config: LeadProxyConfig;
  try {
    config = getLeadProxyConfig();
  } catch (error) {
    console.error("[lead-proxy] configuration invalid", error);
    return json(
      { ok: false, code: "UNAVAILABLE", error: "This form is temporarily unavailable." },
      503
    );
  }

  try {
    if (!(await verifyCaptcha(parsed.value.recaptchaToken, ip, config))) {
      return json(
        { ok: false, code: "CAPTCHA_FAILED", error: "We could not verify this submission." },
        400
      );
    }
  } catch (error) {
    console.error("[lead-proxy] CAPTCHA verification unavailable", error);
    return json(
      { ok: false, code: "UNAVAILABLE", error: "Verification is temporarily unavailable." },
      503
    );
  }

  const currentPage = new URL(parsed.value.page, requestUrl).toString();
  const idempotencyKey = `bizosto-web-${parsed.value.submissionId}`;
  const upstreamPayload = {
    attribution: {
      currentPage,
      landingPage: currentPage,
      referrer: parsed.value.meta.referrer,
      utm: parsed.value.meta.utm,
    },
    consent: {
      agreedAt: new Date().toISOString(),
      contact: true,
      privacyPolicy: true,
    },
    lead: {
      company: parsed.value.company,
      email: parsed.value.email,
      message: parsed.value.message,
      name: parsed.value.name,
      pageUrl: currentPage,
      phone: parsed.value.meta.phone,
      serviceType: parsed.value.meta.serviceType,
      source: "website",
      teamSize: parsed.value.meta.teamSize,
    },
    submissionId: idempotencyKey,
  };

  try {
    const upstream = await fetch(config.ingestEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
        "X-Api-Key": config.ingestApiKey,
      },
      body: JSON.stringify(upstreamPayload),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(10_000),
    });
    const result = (await upstream.json().catch(() => null)) as { ok?: boolean } | null;
    if (!upstream.ok || result?.ok !== true) {
      console.error(`[lead-proxy] ingest rejected request with status ${upstream.status}`);
      const status = upstream.status === 429 ? 429 : 503;
      return json(
        {
          ok: false,
          code: status === 429 ? "RATE_LIMIT" : "UNAVAILABLE",
          error: status === 429 ? "Too many requests. Please try again later." : "Unable to submit right now.",
        },
        status
      );
    }

    return json({ ok: true }, 200);
  } catch (error) {
    console.error("[lead-proxy] ingest unavailable", error);
    return json(
      { ok: false, code: "UNAVAILABLE", error: "Unable to submit right now. Please try again." },
      503
    );
  }
}
