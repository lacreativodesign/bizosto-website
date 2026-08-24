"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

type Consent = "accepted" | "declined" | "loading" | "undecided";

const storageKey = "bizosto-analytics-consent:v1";
const consentEvent = "bizosto:analytics-consent";
const configuredId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?.trim() ?? "";
const gtmId = /^GTM-[A-Z0-9]+$/.test(configuredId) ? configuredId : "";
let memoryConsent: "accepted" | "declined" | null = null;

function readConsent(): Consent {
  if (memoryConsent) return memoryConsent;
  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored === "accepted" || stored === "declined" ? stored : "undecided";
  } catch {
    return "declined";
  }
}

function subscribe(onChange: () => void): () => void {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === storageKey) onChange();
  };
  window.addEventListener("storage", handleStorage);
  window.addEventListener(consentEvent, onChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(consentEvent, onChange);
  };
}

export default function AnalyticsConsent() {
  const consent = useSyncExternalStore(subscribe, readConsent, () => "loading");

  const choose = (value: "accepted" | "declined") => {
    memoryConsent = value;
    try {
      window.localStorage.setItem(storageKey, value);
    } catch {
      // The in-memory choice still controls scripts for this page view.
    }
    window.dispatchEvent(new Event(consentEvent));
  };

  return (
    <>
      {consent === "accepted" && gtmId ? (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : null}
      {consent === "undecided" && gtmId ? (
        <aside
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-border bg-surface p-4 shadow-2xl sm:flex sm:items-center sm:justify-between sm:gap-6"
          aria-label="Analytics consent"
        >
          <p className="text-sm text-muted-foreground">
            Bizosto uses optional analytics to understand site usage. You can accept or decline;
            core site features work either way. Read our{" "}
            <a className="underline underline-offset-2 hover:text-foreground" href="/cookies">
              Cookie Policy
            </a>
            .
          </p>
          <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
            <button
              type="button"
              className="rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground hover:border-primary/60"
              onClick={() => choose("declined")}
            >
              Decline
            </button>
            <button
              type="button"
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              onClick={() => choose("accepted")}
            >
              Accept analytics
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
