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
    price: "Starting at $99/mo",
    who: "Ideal for lean teams replacing scattered tools.",
    cta: { label: "Get Started", href: "/contact" },
    benefits: [
      "Organized lead capture with fast routing",
      "Standardized client onboarding in one workspace",
      "Project workflows that stay consistent",
      "Visibility across accounts and tasks",
      "Guided setup for quick wins",
    ],
  },
  {
    name: "Growth",
    price: "Starting at $299/mo",
    who: "Built for scaling agencies standardizing delivery.",
    cta: { label: "Book a Demo", href: "/book-demo" },
    highlight: true,
    benefits: [
      "Revenue operations with a connected pipeline",
      "Automation for handoffs and approvals",
      "Utilization and margin clarity per account",
      "Role-based access for growing teams",
      "Launch support for multi-team rollouts",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    who: "For complex orgs needing advanced governance.",
    cta: { label: "Talk to Sales", href: "/book-demo" },
    benefits: [
      "Enterprise-grade controls and permissions",
      "Custom workflows and module orchestration",
      "Dedicated success team and onboarding",
      "Advanced reporting and data oversight",
      "Security alignment for larger orgs",
    ],
  },
];
