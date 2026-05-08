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
      label: "Start Free Trial",
      monthlyHref: "https://app.bizosto.com/signup?plan=starter&billing=monthly",
      annualHref: "https://app.bizosto.com/signup?plan=starter&billing=annual",
    },
    benefits: [
      "Up to 10 users",
      "20GB storage",
      "CRM, Sales & Project management",
      "10 client portal seats",
      "Notifications & basic Reports",
      "Email support (48h response)",
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
      label: "Start Free Trial",
      monthlyHref: "https://app.bizosto.com/signup?plan=pro&billing=monthly",
      annualHref: "https://app.bizosto.com/signup?plan=pro&billing=annual",
    },
    highlight: true,
    benefits: [
      "Up to 20 users",
      "75GB storage",
      "Full Finance & Production suite",
      "Unlimited client portal seats",
      "Approvals & full Reports",
      "AI Workforce — COO, Finance & Sales agents",
      "Natural language AI reports",
      "Website embed integration",
      "Priority support + live chat",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "$299/month",
    annualPrice: "$2,990/year",
    annualPerMonth: "$249.17/month",
    annualSaving: "Save $598",
    who: "For larger teams needing HR and unlimited everything.",
    cta: {
      label: "Start Free Trial",
      monthlyHref: "https://app.bizosto.com/signup?plan=enterprise&billing=monthly",
      annualHref: "https://app.bizosto.com/signup?plan=enterprise&billing=annual",
    },
    benefits: [
      "Unlimited users",
      "250GB storage",
      "All modules including HR",
      "Client Stripe Connect payments",
      "AI Workforce — all 4 agents + AI Reports",
      "Website embed integration",
      "White-label options",
      "Dedicated same-day support",
    ],
  },
];
