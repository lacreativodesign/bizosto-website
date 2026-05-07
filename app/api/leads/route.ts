import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

const TENANT_ID = "bizosto";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (headers: Headers) => {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  return headers.get("x-real-ip") ?? "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
};

const normalizeField = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const optionalField = (value: unknown) => {
  const normalized = normalizeField(value);
  return normalized || undefined;
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

    // Honeypot check
    if (normalizeField(body.website)) {
      return NextResponse.json(
        { ok: false, code: "BAD_REQUEST", error: "Invalid submission." },
        { status: 400 }
      );
    }

    const name = normalizeField(body.name);
    const email = normalizeField(body.email).toLowerCase();
    const company = normalizeField(body.company);
    const message = normalizeField(body.message);
    const page = normalizeField(body.page) || "/";
    const source = normalizeField(body.source) || "website";

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

    const now = new Date().toISOString();
    const ref = adminDb.collection("leads").doc();

    await ref.set({
      id: ref.id,
      tenantId: TENANT_ID,
      name,
      email,
      phone: optionalField(body.meta?.phone) ?? null,
      company,
      teamSize: optionalField(body.meta?.teamSize) ?? null,
      serviceType: optionalField(body.meta?.serviceType) ?? null,
      message: message || `Website lead from ${page}`,
      source,
      page,
      stage: "New",
      status: "active",
      assignedTo: null,
      ownerName: null,
      meta: {
        userAgent: optionalField(body.meta?.userAgent),
        referrer: optionalField(body.meta?.referrer),
        utm: body.meta?.utm || null,
      },
      createdAt: now,
      updatedAt: now,
    });

    console.log(`[LEAD] Created lead ${ref.id} for ${email} from ${page}`);
    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    console.error("[LEAD] Submission error:", error);
    return NextResponse.json(
      { ok: false, code: "SERVER_ERROR", error: "Unexpected error processing lead." },
      { status: 500 }
    );
  }
}
