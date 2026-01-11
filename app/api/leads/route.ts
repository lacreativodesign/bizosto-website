import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

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
    return NextResponse.json({ ok: false, error: "Invalid content type." }, { status: 400 });
  }

  const ip = getClientIp(request.headers);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const fullName = normalizeField(body.fullName);
    const email = normalizeField(body.email).toLowerCase();
    const honeypot = normalizeField(body.website);

    if (honeypot) {
      return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
    }

    if (!fullName) {
      return NextResponse.json({ ok: false, error: "Full name is required." }, { status: 400 });
    }

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "Valid email is required." }, { status: 400 });
    }

    const payload = {
      fullName,
      email,
      phone: optionalField(body.phone),
      company: optionalField(body.company),
      teamSize: optionalField(body.teamSize),
      serviceType: optionalField(body.serviceType),
      message: optionalField(body.message),
      source: "website",
      status: "new",
      ownerRole: "sales_manager",
      assignedTo: null,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    const docRef = await adminDb.collection("leads").add(payload);

    return NextResponse.json({ ok: true, id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error("Lead submission error", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
