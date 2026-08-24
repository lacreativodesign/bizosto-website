import Script from "next/script";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha-client";

export default function RecaptchaScript() {
  if (!RECAPTCHA_SITE_KEY) return null;

  return (
    <Script
      id="recaptcha-v3"
      src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`}
      strategy="lazyOnload"
    />
  );
}

