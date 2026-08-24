export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? "";
export const RECAPTCHA_ACTION = "lead_form";

declare global {
  interface Window {
    grecaptcha?: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}

export async function createRecaptchaToken(): Promise<string> {
  if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return "";

  return new Promise<string>((resolve) => {
    const timeout = window.setTimeout(() => resolve(""), 8_000);
    window.grecaptcha?.ready(() => {
      window.grecaptcha
        ?.execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION })
        .then((token) => {
          window.clearTimeout(timeout);
          resolve(token);
        })
        .catch(() => {
          window.clearTimeout(timeout);
          resolve("");
        });
    });
  });
}

export function createSubmissionId(): string {
  if (typeof window !== "undefined" && window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    const bytes = window.crypto.getRandomValues(new Uint8Array(16));
    return Array.from(bytes, (value) => value.toString(16).padStart(2, "0")).join("");
  }
  return "";
}

export function getOrCreateSubmissionId(formKey: string): string {
  const storageKey = `bizosto-lead-submission:v1:${formKey}`;
  try {
    const existing = window.sessionStorage.getItem(storageKey);
    if (existing && /^[A-Za-z0-9_-]{16,128}$/.test(existing)) return existing;
    const created = createSubmissionId();
    if (created) window.sessionStorage.setItem(storageKey, created);
    return created;
  } catch {
    return createSubmissionId();
  }
}

export function clearSubmissionId(formKey: string): void {
  try {
    window.sessionStorage.removeItem(`bizosto-lead-submission:v1:${formKey}`);
  } catch {
    // The in-memory identifier is still cleared by the form.
  }
}

export function getSanitizedReferrer(): string | null {
  if (!document.referrer) return null;
  try {
    const referrer = new URL(document.referrer);
    if (referrer.protocol !== "http:" && referrer.protocol !== "https:") return null;
    return `${referrer.origin}${referrer.pathname}`.slice(0, 1_000);
  } catch {
    return null;
  }
}
