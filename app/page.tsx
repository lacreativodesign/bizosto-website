import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import PricingCards from "@/components/PricingCards";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";

export const metadata = {
  title: "Home",
  description:
    "Bizosto is a business OS that turns chaos into process, automation, and accountability for service providers.",
};

const outcomes = [
  {
    title: "Operational clarity",
    description:
      "Unify delivery, finance, and reporting so every project has a clear owner and next action.",
  },
  {
    title: "Predictable revenue",
    description:
      "Automate retainers, milestones, and collections with finance workflows built for services.",
  },
  {
    title: "Accountability at scale",
    description:
      "Align teams around defined workflows, approvals, and SLAs without extra meetings.",
  },
];

const featureHighlights = [
  {
    title: "ERP-grade workflows",
    description:
      "Map every stage from lead intake to delivery and reporting with structured playbooks.",
  },
  {
    title: "Automation-ready data",
    description:
      "Standardize inputs so automations and reporting deliver consistent insight.",
  },
  {
    title: "Client-facing transparency",
    description:
      "Share clear timelines, approvals, and status updates to reduce churn and scope creep.",
  },
  {
    title: "Financial control center",
    description:
      "Align operations to invoices, retainers, and collections without spreadsheet handoffs.",
  },
  {
    title: "Executive visibility",
    description:
      "See margin, delivery risk, and utilization from one command view.",
  },
  {
    title: "Secure permissions",
    description:
      "Granular access by role and client keeps sensitive data in the right hands.",
  },
];

const faqs = [
  {
    question: "How long does onboarding take?",
    answer:
      "Most teams launch core workflows in 2-4 weeks, with automation and reporting layered in after go-live.",
  },
  {
    question: "Can we keep our existing tools?",
    answer:
      "Bizosto replaces fragmented workflows while integrating with the systems you keep for accounting or CRM.",
  },
  {
    question: "Is pricing fixed?",
    answer:
      "Pricing starts with clear tiers and is finalized in demo based on modules, data migration, and automation depth.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20 pt-12">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Business OS for service teams
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Turn chaos into process, automation, and accountability.
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Bizosto unifies lead capture, delivery, finance, and reporting in a single ERP built for
              agencies, consultancies, and professional services.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/book-demo">Book a Demo</Button>
            <Button href="/product" variant="outline">
              Explore the product
            </Button>
          </div>
          <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="space-y-1">
              <p className="text-2xl font-semibold text-foreground">95%</p>
              <p>Workflow adherence after rollout</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-semibold text-foreground">40%</p>
              <p>Reduction in project handoff delays</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-semibold text-foreground">3x</p>
              <p>Faster reporting cycles</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-lg shadow-slate-900/10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">ERP Master View</p>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Screenshot placeholder
              </span>
            </div>
            <div className="grid gap-4">
              <div className="h-36 rounded-lg border border-dashed border-border bg-surface-muted" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 rounded-lg border border-border bg-surface-muted" />
                <div className="h-24 rounded-lg border border-border bg-surface-muted" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Replace with ERP interface screenshots as assets are finalized.
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="Outcomes"
          title="Operational outcomes that leaders can measure"
          subtitle="Every module is designed to move service businesses from reactive work to predictable performance."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <div key={outcome.title} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold text-foreground">{outcome.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{outcome.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From lead intake to delivery, every step stays connected"
          subtitle="Bizosto builds a complete chain of accountability across pipeline, delivery, and finance."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Capture leads",
              description:
                "Centralize inbound requests, qualify faster, and route work to the right team.",
            },
            {
              title: "Manage pipeline",
              description:
                "Move opportunities into approved scopes with automated approvals and SLAs.",
            },
            {
              title: "Deliver and report",
              description:
                "Track delivery, collect payments, and surface profitability in one view.",
            },
          ].map((step) => (
            <div key={step.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="Feature highlights"
          title="Built for modern service operators"
          subtitle="Everything you need to enforce process without slowing teams down."
        />
        <div className="mt-8">
          <FeatureGrid items={featureHighlights} />
        </div>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="Proof"
          title="Trusted by service teams that value control"
          subtitle="Replace scattered tools with a system designed for repeatable delivery."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <TestimonialCard
            quote="Bizosto gave our directors a single view of pipeline, delivery, and cash flow."
            name="Alex Morgan"
            title="COO"
            company="Echelon Agency"
          />
          <TestimonialCard
            quote="We finally have consistent delivery playbooks and automated handoffs."
            name="Priya Shah"
            title="VP Operations"
            company="Signal Dev Studio"
          />
          <TestimonialCard
            quote="Reporting is now weekly, not quarterly. The accountability layer is real."
            name="Diego Torres"
            title="Managing Partner"
            company="Momentum Consulting"
          />
        </div>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Hybrid pricing aligned to your operations"
          subtitle="Start with a tier and finalize scope, modules, and automation in your demo."
        />
        <div className="mt-8">
          <PricingCards />
        </div>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for service leaders"
          subtitle="Everything you need to prepare for a Bizosto rollout."
        />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </Container>

      <Container>
        <CTASection
          title="Ready to build accountable operations?"
          description="Book a demo to align workflows, delivery, and finance in one ERP master system."
        />
      </Container>
    </div>
  );
}
