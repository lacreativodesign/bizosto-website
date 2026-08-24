export interface LeadProxyConfig {
  captchaAllowedHostnames: ReadonlySet<string>;
  captchaMinimumScore: number;
  captchaSecret: string | null;
  ingestApiKey: string;
  ingestEndpoint: URL;
  isProduction: boolean;
}

type Environment = Record<string, string | undefined>;

function required(environment: Environment, name: string): string {
  const value = environment[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function isProductionRuntime(environment: Environment): boolean {
  if (environment.VERCEL_ENV) return environment.VERCEL_ENV === "production";
  return environment.NODE_ENV === "production";
}

function parseEndpoint(value: string, isProduction: boolean): URL {
  let endpoint: URL;
  try {
    endpoint = new URL(value);
  } catch {
    throw new Error("BIZOSTO_INGEST_ENDPOINT must be an absolute URL.");
  }

  if (endpoint.username || endpoint.password || endpoint.search || endpoint.hash) {
    throw new Error("BIZOSTO_INGEST_ENDPOINT cannot contain credentials, a query, or a fragment.");
  }
  if (endpoint.pathname.replace(/\/$/, "") !== "/api/ingest/leads") {
    throw new Error("BIZOSTO_INGEST_ENDPOINT must target /api/ingest/leads.");
  }
  if (isProduction && endpoint.protocol !== "https:") {
    throw new Error("BIZOSTO_INGEST_ENDPOINT must use HTTPS in production.");
  }
  if (isProduction && endpoint.hostname !== "app.bizosto.com") {
    throw new Error("Production BIZOSTO_INGEST_ENDPOINT must use app.bizosto.com.");
  }
  if (!isProduction && !["http:", "https:"].includes(endpoint.protocol)) {
    throw new Error("BIZOSTO_INGEST_ENDPOINT must use HTTP or HTTPS.");
  }

  return endpoint;
}

function parseAllowedHostnames(value: string | undefined, isProduction: boolean): ReadonlySet<string> {
  const hostnames = (value ?? "")
    .split(",")
    .map((hostname) => hostname.trim().toLowerCase().replace(/\.$/, ""))
    .filter(Boolean);

  if (isProduction && hostnames.length === 0) {
    throw new Error("RECAPTCHA_ALLOWED_HOSTNAMES is required in production.");
  }
  if (hostnames.some((hostname) => !/^[a-z0-9.-]+$/.test(hostname))) {
    throw new Error("RECAPTCHA_ALLOWED_HOSTNAMES contains an invalid hostname.");
  }

  return new Set(hostnames);
}

function parseMinimumScore(value: string | undefined): number {
  if (!value?.trim()) return 0.5;
  const score = Number(value);
  if (!Number.isFinite(score) || score < 0 || score > 1) {
    throw new Error("RECAPTCHA_MINIMUM_SCORE must be between 0 and 1.");
  }
  return score;
}

export function getLeadProxyConfig(environment: Environment = process.env): LeadProxyConfig {
  const isProduction = isProductionRuntime(environment);
  const ingestApiKey = required(environment, "BIZOSTO_INGEST_API_KEY");
  if (ingestApiKey.length < 24) {
    throw new Error("BIZOSTO_INGEST_API_KEY is unexpectedly short.");
  }

  const captchaSecret = environment.RECAPTCHA_SECRET_KEY?.trim() || null;
  if (isProduction && !captchaSecret) {
    throw new Error("RECAPTCHA_SECRET_KEY is required in production.");
  }
  if (isProduction && !environment.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim()) {
    throw new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is required in production.");
  }

  const ingestEndpoint = parseEndpoint(
    required(environment, "BIZOSTO_INGEST_ENDPOINT"),
    isProduction
  );
  if (!isProduction && ingestEndpoint.hostname === "app.bizosto.com") {
    throw new Error("Non-production deployments cannot submit leads to the production application.");
  }

  return {
    captchaAllowedHostnames: parseAllowedHostnames(
      environment.RECAPTCHA_ALLOWED_HOSTNAMES,
      isProduction
    ),
    captchaMinimumScore: parseMinimumScore(environment.RECAPTCHA_MINIMUM_SCORE),
    captchaSecret,
    ingestApiKey,
    ingestEndpoint,
    isProduction,
  };
}
