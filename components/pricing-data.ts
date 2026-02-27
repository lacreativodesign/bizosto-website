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
    price: "$99/month",
    who: "For lean teams replacing scattered tools. Up to 10 users.",
    cta: { label: "Start Free Trial", href: "https://app.bizosto.com/signup?plan=starter" },
    benefits: [
      "Up to 10 users",
      "5GB storage",
      "Core modules: Clients, Sales, Finance, Admin",
      "Basic reporting and dashboards",
      "Email support",
      "14-day free trial",
    ],
  },
  {
    name: "Pro",
    price: "$299/month",
    who: "For scaling teams standardizing delivery. Up to 50 users.",
    cta: { label: "Start Free Trial", href: "https://app.bizosto.com/signup?plan=pro" },
    highlight: true,
    benefits: [
      "Up to 50 users",
      "50GB storage",
      "All 15 modules included",
      "Performance tracking and targets",
      "Advanced reports and analytics",
      "Priority support",
      "14-day free trial",
    ],
  },
  {
    name: "Enterprise",
    price: "$799/month",
    who: "For large organizations needing advanced governance.",
    cta: { label: "Start Free Trial", href: "https://app.bizosto.com/signup?plan=enterprise" },
    benefits: [
      "Unlimited users",
      "Unlimited storage",
      "All modules + custom integrations",
      "Dedicated onboarding support",
      "SLA guarantee",
      "Custom workflows",
      "14-day free trial",
    ],
  },
];
