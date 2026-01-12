import { NextResponse } from "next/server";
const ERP_INGEST_ENDPOINT = "https://dashboard.lacreativo.com/api/ingest/lead";
const ERP_TENANT_ID = "bizosto";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (headers: Headers) => {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return headers.get("x-real-ip") ?? "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
};

const normalizeField = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const optionalField = (value: unknown) => {
  const normalized = normalizeField(value);
  return normalized ? normalized : undefined;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { ok: false, code: "BAD_REQUEST", error: "Invalid content type." },
      { status: 400 }
    );
  }

  const ip = getClientIp(request.headers);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, code: "RATE_LIMIT", error: "Too many requests." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const name = normalizeField(body.name);
    const email = normalizeField(body.email).toLowerCase();
    const company = normalizeField(body.company);
    const message = normalizeField(body.message);
    const page = normalizeField(body.page);
    const honeypot = normalizeField(body.website);
    if (honeypot) {
      return NextResponse.json(
        { ok: false, code: "BAD_REQUEST", error: "Invalid submission." },
        { status: 400 }
      );
    }

    if (!name) {
      return NextResponse.json(
        { ok: false, code: "BAD_REQUEST", error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, code: "BAD_REQUEST", error: "Valid email is required." },
        { status: 400 }
      );
    }

    if (!company) {
      return NextResponse.json(
        { ok: false, code: "BAD_REQUEST", error: "Company is required." },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { ok: false, code: "BAD_REQUEST", error: "Message is required." },
        { status: 400 }
      );
    }

    if (!page) {
      return NextResponse.json(
        { ok: false, code: "BAD_REQUEST", error: "Page is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEXT_PUBLIC_ERP_INGEST_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, code: "CONFIG_MISSING", error: "Ingest configuration is missing." },
        { status: 500 }
      );
    }

    const erpPayload = {
      fullName: name,
      email,
      message,
      phone: optionalField(body.meta?.phone),
      company: optionalField(body.company),
      teamSize: optionalField(body.meta?.teamSize),
      serviceType: optionalField(body.meta?.serviceType),
    };

    const erpResponse = await fetch(ERP_INGEST_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tenant-id": ERP_TENANT_ID,
        "x-api-key": apiKey,
      },
      body: JSON.stringify(erpPayload),
    });

    if (!erpResponse.ok) {
      const detail = await (async () => {
        try {
          const contentType = erpResponse.headers.get("content-type") ?? "";
          if (contentType.includes("application/json")) {
            const data = await erpResponse.json();
            if (typeof data === "string") {
              return data;
            }
            return JSON.stringify(data);
          }
          return await erpResponse.text();
        } catch {
          return "";
        }
      })();
      return NextResponse.json(
        {
          ok: false,
          code: "UPSTREAM_ERROR",
          detail: detail.slice(0, 200) || undefined,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Lead submission error", error);
    return NextResponse.json(
      { ok: false, code: "UPSTREAM_ERROR", error: "Unexpected error while processing lead." },
      { status: 500 }
    );
  }
}
