export interface PricingTier {
  name: string;
  price: string;
  who: string;
  cta: { label: string; href: string };
  highlight?: boolean;
  benefits: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$79/month",
    who: "For small teams replacing scattered tools. Up to 10 users.",
    cta: { label: "Start Free Trial", href: "https://app.bizosto.com/signup?plan=starter" },
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
    price: "$149/month",
    who: "For growing teams that need finance and production. Up to 20 users.",
    cta: { label: "Start Free Trial", href: "https://app.bizosto.com/signup?plan=pro" },
    highlight: true,
    benefits: [
      "Up to 20 users",
      "75GB storage",
      "Full Finance & Production suite",
      "Unlimited client portal seats",
      "Approvals & full Reports",
      "Priority support + live chat",
    ],
  },
  {
    name: "Enterprise",
    price: "$299/month",
    who: "For larger teams needing HR and unlimited everything.",
    cta: { label: "Start Free Trial", href: "https://app.bizosto.com/signup?plan=enterprise" },
    benefits: [
      "Unlimited users",
      "250GB storage",
      "All modules including HR",
      "Client Stripe Connect payments",
      "White-label options",
      "Dedicated same-day support",
    ],
  },
];
