import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  CreditCard,
  Gauge,
  Layers3,
  LockKeyhole,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import HeroLeadForm from "@/components/HeroLeadForm";
import MarketplaceBadges from "@/components/MarketplaceBadges";
import OpsTicker from "@/components/OpsTicker";
import PageShell from "@/components/PageShell";
import PricingTiers from "@/components/PricingTiers";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import ScrollReveal from "@/components/ScrollReveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "One System for Your Entire Service Business",
  description:
    "Bizosto connects your CRM, sales pipeline, projects, production, finance, HR, and client portal in one platform. Stop switching tools. Start running your business.",
  alternates: { canonical: "https://www.bizosto.com/" },
};

const workflowSteps = [
  { label: "Lead", detail: "Captured and qualified", icon: MessageSquare },
  { label: "Deal", detail: "Scoped and approved", icon: BriefcaseBusiness },
  { label: "Project", detail: "Created with owners", icon: ClipboardCheck },
  { label: "Delivery", detail: "Reviewed and signed off", icon: Workflow },
  { label: "Payment", detail: "Invoiced and reconciled", icon: CreditCard },
];

const modules = [
  {
    title: "Sales becomes delivery without a handoff gap.",
    description: "CRM, leads, deals, proposals, and the project that follows all share the same client record.",
    eyebrow: "Revenue engine",
    icon: Gauge,
    className: "lg:col-span-2",
  },
  {
    title: "Finance follows the work.",
    description: "Connect invoices, expenses, payments, payroll, and reporting to the projects that create them.",
    eyebrow: "Financial control",
    icon: CircleDollarSign,
    className: "lg:col-span-1",
  },
  {
    title: "Every role sees the right next action.",
    description: "Role-based dashboards and permissions give each person clarity without exposing what they should not see.",
    eyebrow: "Team operating layer",
    icon: UsersRound,
    className: "lg:col-span-1",
  },
  {
    title: "Clients get one polished place to work with you.",
    description: "Progress, files, approvals, invoices, and payments live in a portal that reflects the quality of your service.",
    eyebrow: "Client experience",
    icon: Layers3,
    className: "lg:col-span-2",
  },
] as const;

const agents = [
  { name: "COO Agent", outcome: "Turns live operations into a focused daily briefing.", icon: Bot },
  { name: "Finance Agent", outcome: "Flags overdue invoices and drafts approval-gated follow-ups.", icon: CircleDollarSign },
  { name: "Sales Agent", outcome: "Surfaces stalled opportunities and pipeline movement.", icon: BarChart3 },
  { name: "AI Reports", outcome: "Answers business questions with live charts and tables.", icon: Sparkles },
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes. Every new workspace gets a full 14-day free trial on the plan you choose. A card is required, but you will not be charged until day 15. Cancel before then and pay nothing.",
  },
  {
    question: "Can I keep the tools my team already uses?",
    answer: "Yes. Bizosto integrates with tools including Google Workspace, Microsoft 365, Slack, QuickBooks, Xero, Mailchimp, DocuSign, Twilio, Calendly, and Stripe. You can connect your current stack and replace tools over time.",
  },
  {
    question: "How long does it take to get running?",
    answer: "Most teams can configure a workspace, invite their people, and start mapping real workflows during the trial. More complex migrations can be planned with the Bizosto team.",
  },
  {
    question: "Does Bizosto charge per user?",
    answer: "No. Bizosto uses flat plan pricing instead of adding a charge every time your team grows. Review the pricing page for current plan limits and included modules.",
  },
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="command-hero">
        <div className="command-hero__grid" aria-hidden="true" />
        <Container className="relative z-10 grid gap-12 pb-12 pt-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:pb-16 lg:pt-20">
          <ScrollReveal className="hero-stagger space-y-8">
            <div className="command-eyebrow">
              <span className="command-eyebrow__dot" aria-hidden="true" />
              One system. Every role. Complete visibility.
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.8rem]">
                <span className="font-normal text-white/55">The operating system</span>{" "}
                for service businesses.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Connect sales, delivery, finance, people, and every client relationship in one intelligent workspace built for how service businesses actually operate.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://app.bizosto.com/signup" className="btn-sheen inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#071225] shadow-[0_18px_55px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
                Start free for 14 days <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Button href="/book-demo" variant="outline" className="min-h-12 border-white/20 text-white hover:border-cyan-300 hover:text-cyan-200">
                See it with your workflow
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400" aria-label="Trial highlights">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300" aria-hidden="true" />Full product access</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300" aria-hidden="true" />No per-user fees</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300" aria-hidden="true" />Cancel before day 15</span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="command-stage-wrap">
            <div className="command-stage">
              <div className="command-stage__bar">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#37d5a2]" />
                </div>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-500">Bizosto / command center</span>
                <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Live workspace</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#071225]">
                <Image src="/screenshots/erp-admin-dark.png" alt="Bizosto operations command dashboard" fill priority sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover object-top" />
                <div className="command-stage__shade" aria-hidden="true" />
              </div>
            </div>

            <div className="stage-signal stage-signal--top" aria-hidden="true">
              <span className="stage-signal__icon bg-cyan-300/15 text-cyan-200"><Workflow className="h-4 w-4" /></span>
              <span><strong>Deal approved</strong><small>Project workflow created</small></span>
            </div>
            <div className="stage-signal stage-signal--bottom" aria-hidden="true">
              <span className="stage-signal__icon bg-emerald-300/15 text-emerald-200"><CreditCard className="h-4 w-4" /></span>
              <span><strong>Delivery signed off</strong><small>Invoice ready to send</small></span>
            </div>
            <div className="mt-4"><OpsTicker /></div>
          </ScrollReveal>
        </Container>

        <Container className="relative z-10 pb-10 lg:pb-14">
          <MarketplaceBadges />
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="One connected flow"
                title="Your business should move forward without being chased."
                subtitle="Bizosto turns the journey from first enquiry to paid invoice into one continuous operating flow. The record moves, the right people are notified, and the next action is already clear."
              />
            </ScrollReveal>

            <ScrollReveal className="workflow-rail">
              <ol className="relative space-y-1">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.label} className="workflow-step">
                      <div className="workflow-step__number">0{index + 1}</div>
                      <div className="workflow-step__icon"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-lg font-semibold text-foreground">{step.label}</p>
                        <p className="text-sm text-muted-foreground">{step.detail}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary/60" aria-hidden="true" />
                    </li>
                  );
                })}
              </ol>
            </ScrollReveal>
          </div>

          <div className="editorial-outcomes mt-16 grid border-y border-border md:grid-cols-3">
            {[
              ["One record", "No duplicate entry between sales, delivery, and finance."],
              ["One accountable owner", "The next action always belongs to someone."],
              ["One live view", "Leadership sees the business as it is, not as it was."],
            ].map(([title, copy]) => (
              <div key={title} className="px-0 py-7 md:px-8 md:first:pl-0 md:last:pr-0">
                <p className="font-display text-xl font-semibold tracking-tight text-foreground">{title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="premium" className="product-proof-section">
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <ScrollReveal>
              <SectionHeading
                eyebrow="The product, not a promise"
                title="A command center your whole company can understand."
                subtitle="The interface stays calm while the operation gets complex. Open a real product view, inspect the detail, and see how Bizosto keeps every function connected."
              />
            </ScrollReveal>
            <ScrollReveal>
              <Button href="/product" variant="outline" className="border-white/20 text-white hover:border-cyan-300 hover:text-cyan-200">
                Explore the platform <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </ScrollReveal>
          </div>
          <ScrollReveal><ScreenshotGallery /></ScrollReveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Designed as one system"
              title="Every team gets depth. The business keeps one source of truth."
              subtitle="Use the modules you need now and expand without rebuilding the way information moves through your company."
            />
          </ScrollReveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <ScrollReveal key={module.title} delay={index * 70} className={module.className}>
                  <article className="bento-panel group h-full">
                    <div className="flex items-start justify-between gap-4">
                      <span className="bento-panel__icon"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">{module.eyebrow}</span>
                    </div>
                    <div className="mt-12 max-w-xl">
                      <h3 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground">{module.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground sm:text-base">{module.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-surface-muted/70 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><LockKeyhole className="h-4 w-4" aria-hidden="true" /></span>
              <div><p className="text-sm font-bold text-foreground">Access stays intentional.</p><p className="text-sm text-muted-foreground">Role-based permissions keep sensitive operational and financial data in the right hands.</p></div>
            </div>
            <Button href="/security" variant="ghost" className="justify-start text-primary sm:justify-center">Review security <ArrowRight className="h-4 w-4" aria-hidden="true" /></Button>
          </div>
        </Container>
      </Section>

      <section className="ai-stage section-spacing">
        <Container className="relative z-10 grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="AI Workforce"
              title="AI that works inside the operation—not beside it."
              subtitle="Bizosto agents read the live business context already in your workspace, surface what matters, and keep people in control of every write action."
            />
            <div className="mt-7"><Button href="/ai-workforce" variant="outline" className="border-white/20 text-white hover:border-cyan-300 hover:text-cyan-200">Meet the AI workforce <ArrowRight className="h-4 w-4" aria-hidden="true" /></Button></div>
          </ScrollReveal>

          <div className="ai-agent-stack">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <ScrollReveal key={agent.name} delay={index * 70}>
                  <div className="ai-agent-row">
                    <span className="ai-agent-row__icon"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <div className="min-w-0 flex-1"><p className="font-display font-semibold text-white">{agent.name}</p><p className="mt-1 text-sm text-slate-400">{agent.outcome}</p></div>
                    <span className="ai-agent-row__status"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Available</span>
                  </div>
                </ScrollReveal>
              );
            })}
            <div className="mt-4 flex items-center gap-2 px-2 text-xs text-slate-500"><ShieldCheck className="h-4 w-4 text-cyan-300" aria-hidden="true" />Human approval stays in the loop for write actions.</div>
          </div>
        </Container>
      </section>

      <Section variant="muted">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Simple, flat pricing"
              title="Give the whole team one system without a per-seat penalty."
              subtitle="Choose the operating depth you need. Every plan starts with a full 14-day trial and a clear path to grow."
              align="center"
            />
          </ScrollReveal>
          <ScrollReveal className="mt-10"><PricingTiers /></ScrollReveal>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-16">
          <ScrollReveal className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Start with the real product"
              title="Build your workspace and see how your operation feels connected."
              subtitle="Use the form to create your 14-day trial. You get access to the real product—not a reduced demo—so your team can evaluate Bizosto with the workflows that matter."
            />
            <div className="mt-7 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" aria-hidden="true" />No charge until day 15</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" aria-hidden="true" />Cancel before the trial ends and pay nothing</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" aria-hidden="true" />Flat plan pricing for your team</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="conversion-panel">
            <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Your workspace</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Start your free 14-day trial</h2></div>
            <HeroLeadForm />
          </ScrollReveal>
        </Container>
      </Section>

      <Section variant="muted">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal><SectionHeading eyebrow="FAQ" title="The practical questions, answered clearly." subtitle="Everything you need to decide whether Bizosto fits the way your business runs." /></ScrollReveal>
          <ScrollReveal><FAQAccordion items={faqs} /></ScrollReveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <ScrollReveal>
            <CTASection title="Your business deserves an operating system, not a subscription pile." description="Bring one real workflow to a 30-minute walkthrough. We will show you how it moves through Bizosto from first action to financial outcome." />
          </ScrollReveal>
        </Container>
      </Section>
    </PageShell>
  );
}
