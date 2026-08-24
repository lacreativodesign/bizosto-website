"use client";

export default function CookieSettingsButton() {
  const resetConsent = () => {
    try {
      window.localStorage.removeItem("bizosto-analytics-consent:v1");
    } finally {
      window.location.reload();
    }
  };

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="text-left transition hover:text-foreground"
    >
      Cookie Settings
    </button>
  );
}
