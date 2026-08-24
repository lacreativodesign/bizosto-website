import { signupCtaLabel, signupHref } from "@/lib/launch-stage";

export interface PricingTier {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  annualPerMonth: string;
  annualSaving: string;
  who: string;
  cta: { label: string; monthlyHref: string; annualHref: string };
  highlight?: boolean;
  benefits: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: "$79/month",
    annualPrice: "$790/year",
    annualPerMonth: "$65.83/month",
    annualSaving: "Save $158",
    who: "For small teams replacing scattered tools. Up to 10 users.",
    cta: {
      label: signupCtaLabel,
      monthlyHref: signupHref("starter", "monthly"),
      annualHref: signupHref("starter", "annual"),
    },
    benefits: [
      "Up to 10 users",
      "20 GB storage",
      "CRM, Sales & Project management",
      "10 client portal seats",
      "Notifications & basic Reports",
      "Email support",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: "$149/month",
    annualPrice: "$1,490/year",
    annualPerMonth: "$124.17/month",
    annualSaving: "Save $298",
    who: "For growing teams that need finance and production. Up to 20 users.",
    cta: {
      label: signupCtaLabel,
      monthlyHref: signupHref("pro", "monthly"),
      annualHref: signupHref("pro", "annual"),
    },
    highlight: true,
    benefits: [
      "Up to 20 users",
      "75 GB storage",
      "Full Finance & Production suite",
      "Unlimited client portal seats",
      "Approvals & full Reports",
      "AI Workforce with tenant BYOK (controlled beta)",
      "Natural language AI reports (controlled beta)",
      "Website embed integration (controlled beta)",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "$299/month",
    annualPrice: "$2,990/year",
    annualPerMonth: "$249.17/month",
    annualSaving: "Save $598",
    who: "For teams needing HR, unlimited internal users, and Enterprise capabilities.",
    cta: {
      label: signupCtaLabel,
      monthlyHref: signupHref("enterprise", "monthly"),
      annualHref: signupHref("enterprise", "annual"),
    },
    benefits: [
      "Unlimited users",
      "250 GB storage",
      "Pro modules plus HR",
      "Eligible Stripe Connect client payments",
      "AI Workforce with tenant BYOK (controlled beta)",
      "Website embed integration (controlled beta)",
      "White-label options",
      "Enterprise onboarding support",
    ],
  },
];
