import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Button from "@/components/Button";
import HeroLeadForm from "@/components/HeroLeadForm";
import OpsTicker from "@/components/OpsTicker";
import PricingTiers from "@/components/PricingTiers";
import ScrollReveal from "@/components/ScrollReveal";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import PageShell from "@/components/PageShell";
import {
  selfServiceSignupEnabled,
  signupCtaLabel,
  signupHref,
  trialAccessSummary,
} from "@/lib/launch-stage";
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
      "Connect invoicing, retainer tracking, and cash-position review to the work your team delivers.",
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
      "Bring revenue, delivery performance, and team utilization into role-appropriate dashboards built for operational decisions.",
    icon: <Zap className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "A client portal they'll actually use",
    description:
      "Give clients their own login to see project progress, approve deliverables, and view invoices. Eligible Enterprise workspaces can also enable Stripe Connect client payments.",
    icon: <MessageSquare className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Finance that follows your work",
    description:
      "On eligible plans, connect invoices, expenses, and financial reporting to the projects that generate them.",
    icon: <Landmark className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Reports that actually show up",
    description:
      "Bring delivery reports, revenue breakdowns, and performance dashboards into the same workspace as the underlying records.",
    icon: <BarChart3 className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Role-based access done right",
    description:
      "Eleven fixed roles support tenant-scoped views for finance, HR, delivery, sales, administration, and clients.",
    icon: <Lock className="h-4 w-4" aria-hidden="true" />,
  },
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer: `Yes. ${trialAccessSummary}`,
  },
  {
    question: "Can I keep the tools I already use?",
    answer:
      "Bizosto includes a catalog for Google Workspace, Microsoft 365, Slack, QuickBooks, Xero, Mailchimp, DocuSign, Twilio, Calendly, and other connectors. Availability varies by plan, provider configuration, and controlled-beta readiness.",
  },
  {
    question: "How long does it take to get up and running?",
    answer: "Controlled-beta onboarding is planned around your tenant, data, roles, and required integrations. Bizosto confirms a rollout sequence after reviewing that scope rather than promising an unverified timeline.",
  },
  {
    question: "Is there a fee when my clients pay through Bizosto?",
    answer:
      "Only on the Enterprise plan, and only when your clients pay their invoices through Bizosto's built-in Stripe Connect payments — a 0.5% platform handling fee applies there, on top of Stripe's standard processing fee. It never applies to your subscription, and Starter and Pro have no such fee. No hidden fees and no per-user charges.",
  },
];

export default function HomePage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <section className="hero-surface hero-aurora section-spacing">
          <Container className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <ScrollReveal className="hero-stagger space-y-7">
              <span className="inline-flex items-center rounded-full border border-border/70 bg-surface/80 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground shadow-sm">
                BIZOSTO
              </span>
              <div className="space-y-5">
                <h1 className="text-balance text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.75rem]">
                  The Operating System for Service Businesses
                </h1>
                <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                  A client portal that connects your team and your clients — backed by role-based dashboards, structured project delivery, and finance visibility from lead to paid invoice.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={signupHref()} className="btn-sheen inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{signupCtaLabel} →</a>
                <Button href="/book-demo" variant="outline">
                  Book a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {selfServiceSignupEnabled
                  ? "14-day free trial. Card required — you won’t be charged until day 15. Cancel before then and pay nothing."
                  : "Controlled beta is onboarding a limited number of workspaces. Invited teams receive a 14-day trial; card required, with no charge before day 15 if cancelled during the trial."}
              </p>
              <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-foreground">$79</p>
                  <p>Starter monthly price</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-foreground">11</p>
                  <p>user roles from sales to client portal</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-foreground">14 days</p>
                  <p>free trial on the selected plan</p>
                </div>
              </div>
              <OpsTicker />
            </ScrollReveal>
            <ScrollReveal className="rounded-2xl border border-border bg-surface/90 p-6 shadow-xl shadow-slate-900/10 backdrop-blur">
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-bold text-foreground">
                    {selfServiceSignupEnabled ? "Start Your Free 14-Day Trial" : "Request Controlled-Beta Access"}
                  </p>
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
            subtitle="Disconnected tools create duplicate entry, unclear ownership, and slower handoffs. Bizosto brings those operating workflows into one tenant-scoped system."
          />
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
          {[
            {
              title: "One source of truth",
              description:
                "A shared system reduces duplicate entry and gives each handoff an explicit owner and record.",
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
                "Bring revenue, project health, team performance, and cash-position signals into dashboards designed for timely review.",
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

      {/* Published plan facts; no volatile competitor-price claims. */}
      <section className="section-spacing">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Choose by operating scope"
              title="Plan limits and modules are explicit."
              subtitle="Bizosto publishes fixed monthly and annual prices without relying on volatile competitor comparisons. Choose the tier that matches your users, modules, portal seats, and storage."
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { plan: "Starter", price: "$79/month · $790/year", detail: "10 internal users · CRM, Sales, Projects, Client Portal · 20 GB" },
              { plan: "Pro", price: "$149/month · $1,490/year", detail: "20 internal users · adds Finance, Production, AI Workforce BYOK, Website Embed · 75 GB" },
              { plan: "Enterprise", price: "$299/month · $2,990/year", detail: "Unlimited internal users · adds HR, eligible Stripe Connect client payments, white-label · 250 GB" },
            ].map((tier) => (
              <ScrollReveal key={tier.plan}>
                <div className="h-full rounded-xl border border-border bg-surface p-6">
                  <p className="text-lg font-semibold text-foreground">{tier.plan}</p>
                  <p className="mt-2 text-sm font-semibold text-primary">{tier.price}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{tier.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What Changes"
              title="From reactive work to more structured operations."
              subtitle="Bizosto is designed to make ownership, handoffs, and operating data easier to review. Here is what that model looks like."
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
                description: "Capture enquiries in CRM, assign an owner, and move each opportunity through the approved sales pipeline.",
                icon: <Inbox className="h-4 w-4" aria-hidden="true" />,
              },
              {
                title: "Deliver with confidence",
                description: "Assign tasks, track milestones, manage production queues, and keep clients updated — all from one screen your whole team actually uses.",
                icon: <Workflow className="h-4 w-4" aria-hidden="true" />,
              },
              {
                title: "Get paid and grow",
                description: "Create invoices from delivered work, track collections and expenses, and review financial performance alongside the projects that generated it.",
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

      <section className="section-spacing">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="AI Workforce"
              title="Your business runs on Bizosto. Now your AI agents do too."
              subtitle="Bizosto AI Workforce is a controlled-beta capability for surfacing tenant-scoped insights and preparing routine work inside the platform."
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                emoji: "🤖",
                name: "COO Agent",
                badge: "Live",
                badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
                description: "Daily plain-English briefing — overdue invoices, open leads, active projects, team status. No dashboards to open. Just answers.",
              },
              {
                emoji: "💰",
                name: "Finance Agent",
                badge: "Live",
                badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
                description: "Flags overdue invoices, drafts payment reminders, monitors cash flow. Every action requires your approval before anything is sent.",
              },
              {
                emoji: "📈",
                name: "Sales Agent",
                badge: "Live",
                badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
                description: "Spots stalling leads, proposes stage updates. Approval-gated — nothing changes in your pipeline until you say so.",
              },
              {
                emoji: "📊",
                name: "AI Reports",
                badge: "Live",
                badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
                description: "Ask supported business questions in plain English and generate charts for areas such as revenue by client, leads by stage, and invoice aging.",
              },
            ].map((agent) => (
              <ScrollReveal key={agent.name}>
                <div className="card-hover flex h-full flex-col rounded-xl border border-border bg-surface p-6 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl">{agent.emoji}</span>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${agent.badgeColor}`}>
                      {agent.badge}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{agent.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-6 flex items-center gap-4">
            <a
              href="/ai-workforce"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Explore AI Workforce →
            </a>
            <p className="text-sm text-muted-foreground">
              Tenant-controlled BYOK where applicable. Provider usage is separate. Pro and Enterprise plan scope.
            </p>
          </ScrollReveal>
        </Container>
      </section>

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
            eyebrow="Why Bizosto Exists"
            title="Built inside a real service business — not a boardroom."
            subtitle="Bizosto began as the internal operating system of a working digital agency. Six years of real client operations — quoting, delivery, invoicing, hiring — shaped every module before it ever had a name."
          />
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 space-y-2">
              <p className="text-2xl font-semibold text-foreground">Plan-scoped modules</p>
              <p className="text-sm text-muted-foreground">
                CRM, sales, projects, production, approvals, finance, HR, reports, notifications, and client portal capabilities are governed by the selected plan.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 space-y-2">
              <p className="text-2xl font-semibold text-foreground">11 role dashboards</p>
              <p className="text-sm text-muted-foreground">
                Sales, account management, production, finance, HR, leadership, and clients receive role-appropriate views within the tenant.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 space-y-2">
              <p className="text-2xl font-semibold text-foreground">Security first</p>
              <p className="text-sm text-muted-foreground">
                Tenant isolation, role-based permissions, and financial-history integrity are core platform design standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Product principles; avoids unsupported market statistics. */}
      <section className="section-spacing">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Operating principles"
              title="A service-business system should make its boundaries clear."
              subtitle="Bizosto is being prepared for controlled beta around four measurable standards: connected workflows, explicit plan limits, human-approved AI actions, and tenant-scoped access."
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "01",
                label: "Connected workflow",
                description:
                  "Sales, delivery, finance, and client records are designed to share tenant-scoped context instead of relying on manual re-entry.",
              },
              {
                stat: "02",
                label: "Published limits",
                description:
                  "Each plan publishes its user limit, modules, portal seats, storage, monthly price, and annual price.",
              },
              {
                stat: "03",
                label: "Human-approved AI",
                description:
                  "AI Workforce uses tenant-controlled BYOK where applicable, and dangerous actions require explicit human approval.",
              },
              {
                stat: "04",
                label: "Tenant boundaries",
                description:
                  "Workspace boundaries are designed to keep tenant data separate, with cross-tenant access limited to explicitly authorized Super Admin governance.",
              },
            ].map((item) => (
              <ScrollReveal key={item.stat}>
                <div className="card-hover rounded-xl border border-border bg-surface p-6 space-y-3 h-full">
                  <p className="text-3xl font-bold text-primary">{item.stat}</p>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </Container>
      </section>

      <section className="premium-section section-spacing">
        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Fixed plan prices with explicit user limits."
              subtitle="Starter supports 10 internal users, Pro supports 20, and Enterprise supports unlimited internal users. Choose monthly or annual billing."
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
            description="Start a 14-day trial on your selected plan. A card is required, no charge is made during the trial, and cancelling before day 15 means you pay nothing."
            primaryAction="Book a Demo"
            secondaryAction="Contact"
          />
        </ScrollReveal>
      </Container>
      </div>
    </PageShell>
  );
}
