import Card from "@/components/Card";
import Button from "@/components/Button";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  highlight?: boolean;
  features: string[];
  limits: string[];
}

const tiers: PricingTier[] = [
  {
    name: "Foundation",
    price: "Starting from $1,200/mo",
    description: "For emerging service teams standardizing delivery workflows.",
    features: [
      "Lead capture + pipeline board",
      "Project templates + delivery checklists",
      "Client portal access",
      "Automated status updates",
    ],
    limits: ["Up to 10 active clients", "Core reporting", "Email support"],
  },
  {
    name: "Growth",
    price: "Starting from $2,800/mo",
    description: "For agencies scaling multi-team operations and finance controls.",
    highlight: true,
    features: [
      "Everything in Foundation",
      "Resource allocation + capacity view",
      "Invoices, retainers, and collections",
      "Role-based approvals",
    ],
    limits: ["Up to 35 active clients", "Advanced reporting", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Starting from $6,000/mo",
    description: "For multi-entity teams that need governance and automation.",
    features: [
      "Everything in Growth",
      "Custom automations",
      "Multi-entity finance workflows",
      "Dedicated onboarding",
    ],
    limits: ["Unlimited clients", "Custom reporting", "Dedicated support"],
  },
];

export default function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={`flex h-full flex-col justify-between gap-6 ${
            tier.highlight ? "border-primary/40 shadow-lg shadow-primary/10" : ""
          }`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
              <p className="text-2xl font-semibold text-foreground">{tier.price}</p>
              <p className="text-sm text-muted-foreground">
                Finalized in demo. Pricing aligns to scope, modules, and automation depth.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{tier.description}</p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">What is included</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">Typical limits</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tier.limits.map((limit) => (
                  <li key={limit} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{limit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Button href="/book-demo" variant={tier.highlight ? "primary" : "outline"}>
            Book a Demo
          </Button>
        </Card>
      ))}
    </div>
  );
}
