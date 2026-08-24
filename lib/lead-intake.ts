export const MAX_LEAD_BODY_BYTES = 32 * 1024;
export const RECAPTCHA_ACTION = "lead_form";

const TOP_LEVEL_KEYS = new Set([
  "company",
  "consent",
  "email",
  "message",
  "meta",
  "name",
  "page",
  "recaptchaToken",
  "source",
  "submissionId",
  "website",
]);
const META_KEYS = new Set(["phone", "referrer", "serviceType", "teamSize", "utm"]);
const UTM_KEYS = new Set([
  "utm_campaign",
  "utm_content",
  "utm_medium",
  "utm_source",
  "utm_term",
]);
const TEAM_SIZES = new Set(["1-10", "11-25", "26-50", "51-100", "101+"]);
const SERVICE_TYPES = new Set([
  "Agency",
  "Consulting",
  "Digital Agency",
  "Ecommerce",
  "Education",
  "Healthcare",
  "Internal operations team",
  "Legal",
  "Logistics",
  "Other",
  "Real Estate",
  "SaaS",
  "Service provider",
  "agency",
  "consultancy",
  "internal-ops",
  "other",
  "service-provider",
]);

export interface LeadSubmission {
  company: string;
  consent: true;
  email: string;
  message: string;
  meta: {
    phone: string | null;
    referrer: string | null;
    serviceType: string | null;
    teamSize: string | null;
    utm: Record<string, string> | null;
  };
  name: string;
  page: string;
  recaptchaToken: string;
  source: "bizosto-website";
  submissionId: string;
  website: string;
}

export type LeadParseResult =
  | { ok: true; value: LeadSubmission }
  | { ok: false; error: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function hasOnlyKeys(value: Record<string, unknown>, allowed: ReadonlySet<string>): boolean {
  return Object.keys(value).every((key) => allowed.has(key));
}

function cleanSingleLine(value: unknown, minimum: number, maximum: number): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.trim();
  if (cleaned.length < minimum || cleaned.length > maximum) return null;
  if (/[\u0000-\u001f\u007f]/.test(cleaned)) return null;
  return cleaned;
}

function cleanMessage(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.trim();
  if (cleaned.length < 1 || cleaned.length > 4_000) return null;
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(cleaned)) return null;
  return cleaned;
}

function cleanOptional(value: unknown, maximum: number): string | null | undefined {
  if (value === undefined || value === null || value === "") return null;
  const cleaned = cleanSingleLine(value, 1, maximum);
  return cleaned ?? undefined;
}

function cleanPage(value: unknown): string | null {
  const cleaned = cleanSingleLine(value, 1, 300);
  if (!cleaned || !cleaned.startsWith("/") || cleaned.startsWith("//")) return null;
  try {
    const base = "https://www.bizosto.com";
    const url = new URL(cleaned, base);
    if (url.origin !== base || url.search || url.hash) return null;
    return url.pathname;
  } catch {
    return null;
  }
}

function cleanReferrer(value: unknown): string | null | undefined {
  const cleaned = cleanOptional(value, 1_000);
  if (cleaned === null || cleaned === undefined) return cleaned;
  try {
    const url = new URL(cleaned);
    if (
      (url.protocol !== "http:" && url.protocol !== "https:") ||
      url.username ||
      url.password
    ) {
      return undefined;
    }
    return `${url.origin}${url.pathname}`.slice(0, 1_000);
  } catch {
    return undefined;
  }
}

export function parseLeadSubmission(input: unknown): LeadParseResult {
  if (!isRecord(input) || !hasOnlyKeys(input, TOP_LEVEL_KEYS)) {
    return { ok: false, error: "Invalid submission fields." };
  }
  if (!isRecord(input.meta) || !hasOnlyKeys(input.meta, META_KEYS)) {
    return { ok: false, error: "Invalid submission metadata." };
  }

  const name = cleanSingleLine(input.name, 2, 120);
  const email = cleanSingleLine(input.email, 3, 254)?.toLowerCase() ?? null;
  const company = cleanSingleLine(input.company, 2, 160);
  const message = cleanMessage(input.message);
  const page = cleanPage(input.page);
  const recaptchaToken =
    typeof input.recaptchaToken === "string" && input.recaptchaToken.length <= 4_096
      ? input.recaptchaToken.trim()
      : null;
  const submissionId = cleanSingleLine(input.submissionId, 16, 128);
  const website = typeof input.website === "string" ? input.website.trim() : null;

  if (!name) return { ok: false, error: "Enter your full name." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter a valid work email." };
  }
  if (!company) return { ok: false, error: "Enter your company name." };
  if (!message) return { ok: false, error: "Enter a message." };
  if (!page) {
    return { ok: false, error: "Invalid form page." };
  }
  if (input.source !== "bizosto-website") {
    return { ok: false, error: "Invalid submission source." };
  }
  if (!submissionId || !/^[A-Za-z0-9_-]+$/.test(submissionId)) {
    return { ok: false, error: "Invalid submission identifier." };
  }
  if (website === null) return { ok: false, error: "Invalid submission." };
  if (website) return { ok: false, error: "Invalid submission." };
  if (input.consent !== true) {
    return { ok: false, error: "Consent is required so we can respond." };
  }

  const phone = cleanOptional(input.meta.phone, 40);
  const referrer = cleanReferrer(input.meta.referrer);
  const teamSize = cleanOptional(input.meta.teamSize, 20);
  const serviceType = cleanOptional(input.meta.serviceType, 60);
  if (phone === undefined || (phone && !/^[+()\d.\-\s]+$/.test(phone))) {
    return { ok: false, error: "Enter a valid phone number." };
  }
  if (referrer === undefined) {
    return { ok: false, error: "Invalid referrer." };
  }
  if (teamSize === undefined || (teamSize && !TEAM_SIZES.has(teamSize))) {
    return { ok: false, error: "Select a valid team size." };
  }
  if (serviceType === undefined || (serviceType && !SERVICE_TYPES.has(serviceType))) {
    return { ok: false, error: "Select a valid business type." };
  }

  let utm: Record<string, string> | null = null;
  if (input.meta.utm !== undefined && input.meta.utm !== null) {
    if (!isRecord(input.meta.utm) || !hasOnlyKeys(input.meta.utm, UTM_KEYS)) {
      return { ok: false, error: "Invalid campaign attribution." };
    }
    const parsedUtm: Record<string, string> = {};
    for (const [key, value] of Object.entries(input.meta.utm)) {
      const cleaned = cleanSingleLine(value, 1, 200);
      if (!cleaned) return { ok: false, error: "Invalid campaign attribution." };
      parsedUtm[key] = cleaned;
    }
    if (Object.keys(parsedUtm).length) utm = parsedUtm;
  }

  return {
    ok: true,
    value: {
      company,
      consent: true,
      email,
      message,
      meta: { phone, referrer, serviceType, teamSize, utm },
      name,
      page,
      recaptchaToken: recaptchaToken ?? "",
      source: "bizosto-website",
      submissionId,
      website: "",
    },
  };
}
