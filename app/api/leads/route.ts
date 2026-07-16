import { NextResponse } from "next/server";
import admin, { getAdminDb } from "@/lib/firebaseAdmin";

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

    // reCAPTCHA v3 verification — only blocks if score is very low (bot)
    const recaptchaToken = normalizeField(body.recaptchaToken);
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaToken && recaptchaSecret) {
      try {
        const captchaRes = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
          { method: "POST" }
        );
        const captchaData = await captchaRes.json().catch(() => null);
        if (captchaData && captchaData.success === true && typeof captchaData.score === "number") {
          if (captchaData.score < 0.4) {
            console.warn("[LEAD] reCAPTCHA score too low:", captchaData.score);
            return NextResponse.json(
              { ok: false, code: "BOT_DETECTED", error: "Submission blocked." },
              { status: 400 }
            );
          }
        }
      } catch {
        // reCAPTCHA verification failure is non-blocking — proceed
      }
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

    const adminDb = getAdminDb();
    const ref = adminDb.collection("leads").doc();
    // S34: match the ERP's canonical lead shape EXACTLY. The ERP inbox query is
    // `.where("isDeleted", "==", false).orderBy("createdAt", "desc")`, and Firestore excludes
    // documents that are MISSING the filtered field — so a website lead without isDeleted was
    // written to the tenant but never appeared in the sales inbox. It also sorts by a Firestore
    // Timestamp (createdAt.toDate()), so an ISO string sorted to the bottom / mistyped the query.
    // We now write isDeleted:false, the ERP's status/stage vocabulary, and real server
    // Timestamps, plus the same mirrored contact/company fields the ERP create route uses.
    const serverTimestamp = admin.firestore.FieldValue.serverTimestamp();
    const phone = optionalField(body.meta?.phone) ?? null;

    await ref.set({
      id: ref.id,
      leadId: ref.id,
      tenantId: TENANT_ID,
      // Mirrored contact/company fields — the ERP reads both the short and the contact* forms.
      name,
      email,
      phone,
      company,
      companyName: company,
      contactName: name,
      contactEmail: email,
      contactPhone: phone,
      teamSize: optionalField(body.meta?.teamSize) ?? null,
      serviceType: optionalField(body.meta?.serviceType) ?? null,
      message: message || `Website lead from ${page}`,
      notes: message || `Website lead from ${page}`,
      source,
      page,
      // ERP vocabulary: lowercase status, human-readable stage. A brand-new lead is "new".
      status: "new",
      stage: "New Lead",
      disposition: null,
      // Unassigned until a sales user picks it up in the ERP.
      ownerUid: null,
      ownerId: null,
      ownerName: null,
      assignedTo: null,
      createdBy: "website",
      createdById: "website",
      // The field whose ABSENCE hid these leads from the inbox.
      isDeleted: false,
      meta: {
        userAgent: optionalField(body.meta?.userAgent),
        referrer: optionalField(body.meta?.referrer),
        utm: body.meta?.utm || null,
      },
      lastActivityAt: serverTimestamp,
      createdAt: serverTimestamp,
      updatedAt: serverTimestamp,
    });

    // S34: do not log the lead's email address (PII). The document id is enough to trace it.
    console.log(`[LEAD] Created lead ${ref.id} from ${page}`);
    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    console.error("[LEAD] Submission error:", error);
    return NextResponse.json(
      { ok: false, code: "SERVER_ERROR", error: "Unexpected error processing lead." },
      { status: 500 }
    );
  }
}
