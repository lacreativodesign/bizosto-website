export type PlanSlug = "starter" | "pro" | "enterprise";
export type BillingInterval = "monthly" | "annual";

/**
 * Public, non-secret launch control for marketing CTAs. Keep this disabled until
 * the ERP's server-enforced public-signup gate is enabled and live-verified.
 */
export const selfServiceSignupEnabled =
  process.env.NEXT_PUBLIC_SELF_SERVICE_SIGNUP_ENABLED === "true";

export const signupCtaLabel = selfServiceSignupEnabled
  ? "Start Free Trial"
  : "Request Beta Access";

export const trialAccessSummary = selfServiceSignupEnabled
  ? "Start a 14-day free trial. A card is required; no charge is made before day 15, and cancelling during the trial means you pay nothing."
  : "Request controlled-beta access. Invited workspaces receive a 14-day trial; a card is required, with no charge before day 15 if cancelled during the trial.";

export function signupHref(plan?: PlanSlug, billing?: BillingInterval): string {
  const destination = selfServiceSignupEnabled
    ? new URL("https://app.bizosto.com/signup")
    : new URL("https://www.bizosto.com/book-demo");

  if (plan) destination.searchParams.set("plan", plan);
  if (billing) destination.searchParams.set("billing", billing);

  return selfServiceSignupEnabled
    ? destination.toString()
    : `${destination.pathname}${destination.search}`;
}
