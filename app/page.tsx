import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import HeroLeadForm from "@/components/HeroLeadForm";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import PricingPreview from "@/components/PricingPreview";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Business Operating System",
  description:
    "Bizosto is the Business Operating System and service business management software that unifies clients, projects, sales, finance, and teams.",
  alternates: {
    canonical: "https://www.bizosto.com/",
  },
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

const heroBullets = [
  "Locked ERP UI that mirrors executive-level operations control.",
  "Workflow automation, approvals, and SLAs in one unified command layer.",
  "Deep reporting across delivery, finance, and client success in real time.",
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24 pt-14">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal>
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Bizosto ERP
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                The locked ERP operating system for modern service businesses.
              </h1>
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                Align pipeline, delivery, and finance with a master UI that keeps every team on the
                same operating rhythm.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/book-demo">Book a Demo</Button>
              <Button href="/how-it-works" variant="outline">
                See How It Works
              </Button>
            </div>
            <div className="grid gap-3">
              {heroBullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  <p className="text-sm text-muted-foreground">{bullet}</p>
                </div>
              ))}
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
        </Reveal>
        <Reveal delay={0.1}>
          <HeroLeadForm />
        </Reveal>
      </Container>

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Product preview"
            title="Elite ERP experience with premium motion"
            subtitle="Preview the locked master UI. Each panel reflects the same ERP theme, typography, and spacing used in production."
          />
        </Reveal>
        <div className="mt-8">
          <ScreenshotGallery />
        </div>
      </Container>

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Bizosto"
            title="Operational confidence without the complexity"
            subtitle="Every workflow stays connected so leaders can scale delivery with clarity."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "One source of truth",
              description:
                "Unify pipeline, delivery, finance, and client data so every team works from the same record.",
            },
            {
              title: "Built for delivery teams",
              description:
                "Standardize scopes, approvals, and handoffs so projects move smoothly and predictably.",
            },
            {
              title: "SaaS-ready control",
              description:
                "Role-based access, audit trails, and reporting give leadership the visibility they need.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-card-hover)]">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Outcomes"
            title="Operational outcomes that leaders can measure"
            subtitle="Every module is designed to move service businesses from reactive work to predictable performance."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <Reveal key={outcome.title} delay={index * 0.05}>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-card-hover)]">
                <h3 className="text-lg font-semibold text-foreground">{outcome.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{outcome.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From lead intake to revenue, every step stays connected"
            subtitle="A simple operating rhythm that keeps pipeline, delivery, and finance aligned."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-surface p-6 md:grid-cols-3">
          {[
            {
              title: "Capture leads",
              description: "Centralize inbound requests and qualify faster.",
            },
            {
              title: "Run delivery",
              description: "Move work through scoped, automated delivery playbooks.",
            },
            {
              title: "Track revenue",
              description: "Tie delivery to billing, margin, and client renewals.",
            },
          ].map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <div className="space-y-2 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {step.title}
                </p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Feature highlights"
            title="Built for modern service operators"
            subtitle="Everything you need to enforce process without slowing teams down."
          />
        </Reveal>
        <div className="mt-8">
          <FeatureGrid items={featureHighlights} />
        </div>
      </Container>

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof"
            title="Trusted by service teams that value control"
            subtitle="Replace scattered tools with a system designed for repeatable delivery."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              quote: "Bizosto gave our directors a single view of pipeline, delivery, and cash flow.",
              name: "Alex Morgan",
              title: "COO",
              company: "Echelon Agency",
            },
            {
              quote: "We finally have consistent delivery playbooks and automated handoffs.",
              name: "Priya Shah",
              title: "VP Operations",
              company: "Signal Dev Studio",
            },
            {
              quote: "Reporting is now weekly, not quarterly. The accountability layer is real.",
              name: "Diego Torres",
              title: "Managing Partner",
              company: "Momentum Consulting",
            },
          ].map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.05}>
              <TestimonialCard {...testimonial} />
            </Reveal>
          ))}
        </div>
      </Container>

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Hybrid pricing aligned to your operations"
            subtitle="Start with a tier and finalize scope, modules, and automation in your demo."
          />
        </Reveal>
        <div className="mt-8">
          <PricingPreview />
        </div>
      </Container>

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for service leaders"
            subtitle="Everything you need to prepare for a Bizosto rollout."
          />
        </Reveal>
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </Container>

      <Container>
        <Reveal>
          <CTASection
            title="Ready to see Bizosto in action?"
            description="Get a guided walkthrough and rollout plan."
            primaryAction="Book a Demo"
            secondaryAction="Contact"
          />
        </Reveal>
      </Container>
    </div>
  );
}
