import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import HeroLeadForm from "@/components/HeroLeadForm";
import PricingTiers from "@/components/PricingTiers";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScreenshotGallery from "@/components/ScreenshotGallery";

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

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24 pt-16">
      <section className="hero-surface">
        <Container className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ScrollReveal className="space-y-7">
            <span className="inline-flex items-center rounded-full border border-border bg-surface/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Bizosto
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                The operating system for modern service businesses.
              </h1>
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                Manage clients, projects, sales, finance, and teams — in one system.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/book-demo">Book a Demo</Button>
              <Button href="/how-it-works" variant="outline">
                See How It Works
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Built by operators. Designed for teams scaling beyond spreadsheets.
            </p>
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
          </ScrollReveal>
          <ScrollReveal className="rounded-2xl border border-border bg-surface/80 p-6 shadow-xl shadow-slate-900/20 backdrop-blur">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Request ERP Access</p>
                <span className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Enterprise intake
                </span>
              </div>
              <HeroLeadForm />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Bizosto"
            title="Operational confidence without the complexity"
            subtitle="Every workflow stays connected so leaders can scale delivery with clarity."
          />
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "One source of truth",
              description:
                "Unify pipeline, delivery, finance, and client data so every team works from the same record.",
              icon: (
                <path
                  d="M4 12h16M4 6h10M4 18h7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ),
            },
            {
              title: "Built for delivery teams",
              description:
                "Standardize scopes, approvals, and handoffs so projects move smoothly and predictably.",
              icon: (
                <path
                  d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              ),
            },
            {
              title: "SaaS-ready control",
              description:
                "Role-based access, audit trails, and reporting give leadership the visibility they need.",
              icon: (
                <path
                  d="M12 4v16m8-8H4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ),
            },
          ].map((item) => (
            <ScrollReveal
              key={item.title}
              className="card-hover rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-primary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      <section className="premium-section">
        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Outcomes"
              title="Operational outcomes that leaders can measure"
              subtitle="Every module is designed to move service businesses from reactive work to predictable performance."
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <ScrollReveal
                key={outcome.title}
                className="card-hover rounded-xl border border-border bg-surface p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-muted text-primary">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 12h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 4v16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{outcome.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{outcome.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="How it works"
            title="From lead intake to revenue, every step stays connected"
            subtitle="A simple operating rhythm that keeps pipeline, delivery, and finance aligned."
          />
        </ScrollReveal>
        <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-surface p-6 md:grid-cols-3">
          {[
            {
              title: "Capture leads",
              description: "Centralize inbound requests and qualify faster.",
              icon: (
                <path
                  d="M4 12h16M12 4v16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ),
            },
            {
              title: "Run delivery",
              description: "Move work through scoped, automated delivery playbooks.",
              icon: (
                <path
                  d="M5 12l4 4L19 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ),
            },
            {
              title: "Track revenue",
              description: "Tie delivery to billing, margin, and client renewals.",
              icon: (
                <path
                  d="M4 8h16M4 16h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ),
            },
          ].map((step) => (
            <ScrollReveal
              key={step.title}
              className="space-y-3 rounded-xl border border-border bg-card p-5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-primary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {step.icon}
                </svg>
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {step.title}
              </p>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Feature highlights"
            title="Built for modern service operators"
            subtitle="Everything you need to enforce process without slowing teams down."
          />
        </ScrollReveal>
        <div className="mt-8">
          <FeatureGrid items={featureHighlights} />
        </div>
      </Container>

      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Product Preview"
            title="Explore the ERP Master UI"
            subtitle="Premium dashboards and controls designed for service leadership teams."
          />
        </ScrollReveal>
        <div className="mt-8">
          <ScreenshotGallery />
        </div>
      </Container>

      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Proof"
            title="Trusted by service teams that value control"
            subtitle="Replace scattered tools with a system designed for repeatable delivery."
          />
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ScrollReveal>
            <TestimonialCard
              quote="Bizosto gave our directors a single view of pipeline, delivery, and cash flow."
              name="Alex Morgan"
              title="COO"
              company="Echelon Agency"
            />
          </ScrollReveal>
          <ScrollReveal>
            <TestimonialCard
              quote="We finally have consistent delivery playbooks and automated handoffs."
              name="Priya Shah"
              title="VP Operations"
              company="Signal Dev Studio"
            />
          </ScrollReveal>
          <ScrollReveal>
            <TestimonialCard
              quote="Reporting is now weekly, not quarterly. The accountability layer is real."
              name="Diego Torres"
              title="Managing Partner"
              company="Momentum Consulting"
            />
          </ScrollReveal>
        </div>
      </Container>

      <section className="premium-section">
        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Hybrid pricing aligned to your operations"
              subtitle="Start with a tier and finalize scope, modules, and automation in your demo."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-8">
            <PricingTiers />
          </ScrollReveal>
        </Container>
      </section>

      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for service leaders"
            subtitle="Everything you need to prepare for a Bizosto rollout."
          />
        </ScrollReveal>
        <ScrollReveal className="mt-8">
          <FAQAccordion items={faqs} />
        </ScrollReveal>
      </Container>

      <Container>
        <ScrollReveal>
          <CTASection
            title="Ready to see Bizosto in action?"
            description="Get a guided walkthrough and rollout plan."
            primaryAction="Book a Demo"
            secondaryAction="Contact"
          />
        </ScrollReveal>
      </Container>
    </div>
  );
}
