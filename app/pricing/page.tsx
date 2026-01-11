import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Pricing",
  description: "Hybrid pricing tiers for Bizosto ERP with scope finalized in your demo.",
};

const tiers = [
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

const highlights = [
  "Lead capture & routing",
  "Client & project workflow",
  "Roles & permissions",
  "Notifications & activity log",
  "Reporting & dashboards",
  "Module-based SaaS scaling",
];

const faqs = [
  {
    question: "Can I start small and upgrade?",
    answer:
      "Yes. Start with the essentials and add modules or seats as your team grows.",
  },
  {
    question: "Do you support agencies only?",
    answer:
      "Bizosto is built for service delivery teams, including agencies, consultancies, and professional services.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use secure hosting, role-based access, and audit-ready activity logs to protect data.",
  },
  {
    question: "Can I enable/disable modules?",
    answer:
      "Yes. Modules are configurable so you only pay for what your team needs.",
  },
  {
    question: "How onboarding works?",
    answer:
      "We map your workflows, configure modules, and train your team to launch confidently.",
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-20 pb-20 pt-12">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Conversion-ready pricing built for service delivery teams"
          subtitle="Pick your starting tier, then finalize modules and team size during onboarding."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.highlight
                  ? "relative border-primary/60 bg-surface shadow-lg shadow-primary/10"
                  : "bg-card"
              }
            >
              {tier.highlight ? (
                <Badge className="absolute right-6 top-6 border-primary/40 bg-primary/10 text-primary">
                  Most Popular
                </Badge>
              ) : null}
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">{tier.name}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">{tier.price}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.who}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={tier.cta.href}
                  className="mt-2 w-full"
                  variant={tier.highlight ? "primary" : "secondary"}
                >
                  {tier.cta.label}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Final pricing depends on modules and team size.
        </p>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="Included"
          title="What you get with Bizosto"
          subtitle="Everything you need to unify delivery, reporting, and governance."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-surface p-4 text-sm font-medium text-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common pricing questions"
          subtitle="Get clarity before you book your demo."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <Card key={item.question} className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
              <p className="text-sm text-muted-foreground">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
