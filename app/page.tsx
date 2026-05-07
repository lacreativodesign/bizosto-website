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
import ScrollReveal from "@/components/ScrollReveal";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import PageShell from "@/components/PageShell";
import {
  BarChart3,
  ClipboardCheck,
  CreditCard,
  Database,
  Inbox,
  Landmark,
  Lock,
  MessageSquare,
  ShieldCheck,
  Target,
  TrendingUp,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "One System for Your Entire Service Business",
  description:
    "Bizosto connects your CRM, sales pipeline, projects, production, finance, HR, and client portal in one platform. Stop switching tools. Start running your business.",
  alternates: {
    canonical: "https://www.bizosto.com/",
  },
};

const outcomes = [
  {
    title: "Operational clarity",
    description:
      "When your pipeline, delivery, and finance all live in the same system, every decision gets faster and every handoff gets cleaner.",
    icon: <Target className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Predictable revenue",
    description:
      "Invoice clients the moment work is complete, track retainers automatically, and see your cash position without opening a single spreadsheet.",
    icon: <TrendingUp className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Accountability at every level",
    description:
      "Every task has an owner. Every project has a deadline. Every team member knows exactly what to do next — without another meeting.",
    icon: <UsersRound className="h-4 w-4" aria-hidden="true" />,
  },
];

const featureHighlights = [
  {
    title: "End-to-end workflow automation",
    description:
      "From the moment a lead comes in to the day an invoice is paid — every step is mapped, assigned, and tracked without manual chasing.",
    icon: <Workflow className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Data that drives decisions",
    description:
      "Every number in Bizosto is live. Revenue, delivery performance, team utilization — real dashboards you can act on today, not export tomorrow.",
    icon: <Zap className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "A client portal they'll actually use",
    description:
      "Give clients their own login to see project progress, approve deliverables, view invoices, and pay — no WhatsApp thread required.",
    icon: <MessageSquare className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Finance that follows your work",
    description:
      "Invoices, expenses, payroll, and tax are connected to the projects that generate them. Know your margin before a project closes, not after.",
    icon: <Landmark className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Reports that actually show up",
    description:
      "No more building decks from exports. Bizosto generates delivery reports, revenue breakdowns, and performance dashboards automatically.",
    icon: <BarChart3 className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Role-based access done right",
    description:
      "11 user roles. Finance sees finance. HR sees HR. Clients see what you want them to see. Sensitive data never ends up in the wrong hands.",
    icon: <Lock className="h-4 w-4" aria-hidden="true" />,
  },
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes — every new workspace gets a full 14-day trial with every module unlocked. No credit card. No restrictions. You see the real product from day one.",
  },
  {
    question: "Can I keep the tools I already use?",
    answer:
      "Yes. Bizosto integrates with Google Workspace, Microsoft 365, Slack, QuickBooks, Xero, Mailchimp, DocuSign, Twilio, and Calendly. Bring your stack with you or replace it over time — your call.",
  },
  {
    question: "How long does it take to get up and running?",
    answer: "Most teams are fully live within one to two weeks. Your workspace is configured, your team is invited, and your workflows are running before your trial ends.",
  },
  {
    question: "Is there a fee when my clients pay through Bizosto?",
    answer:
      "A 0.5% platform fee applies to client payments processed through Bizosto's payment terminal. There are no hidden fees, no per-user charges, and no surprise invoices on your subscription.",
  },
];

export default function HomePage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <section className="hero-surface section-spacing">
          <Container className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <ScrollReveal className="space-y-7">
              <span className="inline-flex items-center rounded-full border border-border/70 bg-surface/80 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground shadow-sm">
                BIZOSTO
              </span>
              <div className="space-y-5">
                <h1 className="text-balance text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.75rem]">
                  One system. Every department. Zero tool-switching.
                </h1>
                <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                  Bizosto connects your CRM, sales pipeline, project delivery, finance, HR, and client portal in one platform — so your team executes faster and you always know what's happening.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="https://app.bizosto.com/signup" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Start Free Trial →</a>
                <Button href="/book-demo" variant="outline">
                  Book a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                14-day free trial. No credit card required. Cancel anytime.
              </p>
              <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-foreground">10</p>
                  <p>modules covering every business function</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-foreground">11</p>
                  <p>user roles from sales to client portal</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-foreground">14+</p>
                  <p>integrations with tools you already use</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="rounded-2xl border border-border bg-surface/90 p-6 shadow-xl shadow-slate-900/10 backdrop-blur">
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-bold text-foreground">Start Your Free 14-Day Trial</p>
                </div>
                <HeroLeadForm />
              </div>
            </ScrollReveal>
          </Container>
        </section>

      <Container className="section-spacing">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Bizosto"
            title="Your tools are expensive. Your disconnected stack is more expensive."
            subtitle="The average service business loses 8–12 hours a week to tool-switching, manual updates, and chasing status across apps. Bizosto ends that."
          />
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
          {[
            {
              title: "One source of truth",
              description:
                "When every team works from the same system, nothing gets lost in handoffs, nothing gets double-entered, and nothing falls through the cracks.",
              icon: <Database className="h-4 w-4" aria-hidden="true" />,
            },
            {
              title: "Built for how you actually work",
              description:
                "Bizosto isn't generic project management dressed up as ERP. It's purpose-built for service businesses — agencies, consultancies, operations teams — that live and die by delivery.",
              icon: <ClipboardCheck className="h-4 w-4" aria-hidden="true" />,
            },
            {
              title: "Visibility you can act on",
              description:
                "Know your revenue, project health, team performance, and cash position in real time — not at month-end when it's too late to change anything.",
              icon: <ShieldCheck className="h-4 w-4" aria-hidden="true" />,
            },
          ].map((item) => (
            <ScrollReveal
              key={item.title}
              className="card-hover rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-primary">
                  {item.icon}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      <section className="section-spacing">
        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What Changes"
              title="From reactive chaos to predictable operations."
              subtitle="Service businesses that run on Bizosto stop firefighting and start leading. Here is what that looks like in practice."
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
            {outcomes.map((outcome) => (
              <ScrollReveal
                key={outcome.title}
                className="card-hover rounded-xl border border-border bg-surface p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-muted text-primary">
                    {outcome.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{outcome.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{outcome.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From first enquiry to final invoice — it all lives in one place."
              subtitle="Bizosto is designed around the way service businesses actually run. Every step flows into the next — no manual handoffs, no copy-pasting, no chasing updates."
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-6 rounded-2xl border border-border bg-surface p-6 md:grid-cols-3">
            {[
              {
                title: "Capture every lead",
                description: "Every enquiry lands in your CRM, gets assigned to the right person, and moves through your pipeline automatically. Nothing gets missed.",
                icon: <Inbox className="h-4 w-4" aria-hidden="true" />,
              },
              {
                title: "Deliver with confidence",
                description: "Assign tasks, track milestones, manage production queues, and keep clients updated — all from one screen your whole team actually uses.",
                icon: <Workflow className="h-4 w-4" aria-hidden="true" />,
              },
              {
                title: "Get paid and grow",
                description: "Invoice the moment work is done, track what's been collected, manage payroll, and see your real margin — automatically connected to the work that generated it.",
                icon: <CreditCard className="h-4 w-4" aria-hidden="true" />,
              },
            ].map((step) => (
              <ScrollReveal
                key={step.title}
                className="space-y-3 rounded-xl border border-border bg-card p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-primary">
                  {step.icon}
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {step.title}
                </p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <Container className="section-spacing">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What's Inside"
            title="Every tool your service business needs. Built to work together."
            subtitle="Six years of agency and service business pain went into building these modules. Every feature exists because someone needed it — and couldn't find it anywhere else."
          />
        </ScrollReveal>
        <div className="mt-8">
          <FeatureGrid items={featureHighlights} />
        </div>
      </Container>

      <Container className="section-spacing">
        <ScrollReveal>
          <SectionHeading
            eyebrow="See It In Action"
            title="A system your team will actually want to use."
            subtitle="Bizosto looks and feels premium because your team deserves software that doesn't slow them down. Clean, fast, and built for the way modern service businesses operate."
          />
        </ScrollReveal>
        <div className="mt-8">
          <ScreenshotGallery />
        </div>
      </Container>

      <Container className="section-spacing">
        <ScrollReveal>
          <SectionHeading
            eyebrow="From Our Customers"
            title="Real teams. Real results. No more tool chaos."
            subtitle="These are the people who switched from six disconnected tools to one system that actually works."
          />
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
          <ScrollReveal>
            <TestimonialCard
              quote="We were running on five different tools and still didn't know what was happening. Bizosto gave us one screen that tells us everything."
              name="Alex Morgan"
              title="COO"
              company="Echelon Agency"
            />
          </ScrollReveal>
          <ScrollReveal>
            <TestimonialCard
              quote="The moment our finance team could see project status and invoice directly from it, we stopped losing money on scope creep. That alone paid for Bizosto."
              name="Priya Shah"
              title="VP Operations"
              company="Signal Dev Studio"
            />
          </ScrollReveal>
          <ScrollReveal>
            <TestimonialCard
              quote="I used to spend every Sunday pulling numbers from four different places. Now I open one dashboard and I'm done in five minutes."
              name="Diego Torres"
              title="Managing Partner"
              company="Momentum Consulting"
            />
          </ScrollReveal>
        </div>
      </Container>

      <section className="premium-section section-spacing">
        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Pricing"
              title="One flat price. Your whole team included."
              subtitle="No per-user fees. No hidden charges. One monthly price covers everyone — whether you have 5 people or 50."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-8">
            <PricingTiers />
          </ScrollReveal>
        </Container>
      </section>

      <Container className="section-spacing">
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

      <Container className="section-spacing">
        <ScrollReveal>
          <CTASection
            title="Your business deserves a system, not a subscription pile."
            description="Start your free 14-day trial today. Every module unlocked. Your whole team included. See why service businesses that try Bizosto don't go back."
            primaryAction="Book a Demo"
            secondaryAction="Contact"
          />
        </ScrollReveal>
      </Container>
      </div>
    </PageShell>
  );
}
