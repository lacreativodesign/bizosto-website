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
    answer: "Yes — every new workspace gets a full 14-day free trial on the plan you choose. Card required - you won't be charged until day 15. Cancel anytime before then and pay nothing. You see the real product from day one.",
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
                  A client portal that connects your team and your clients — backed by a dashboard for every role, predictable project delivery, and finance visibility from lead to paid invoice.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="https://app.bizosto.com/signup" className="btn-sheen inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Start Free Trial →</a>
                <Button href="/book-demo" variant="outline">
                  Book a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                14-day free trial. Card required - you won&apos;t be charged until day 15. Cancel anytime before then and pay nothing.
              </p>
              <div
                className="grid gap-3 sm:grid-cols-3"
                aria-label="Bizosto trust and pricing highlights"
              >
                <a
                  href="https://www.saashub.com/bizosto?utm_source=badge&utm_campaign=badge&utm_content=bizosto&badge_variant=color&badge_kind=approved"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Bizosto's approved listing on SaaSHub"
                  className="flex min-h-20 items-center justify-center px-2 py-3 transition duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {/* SaaSHub provides this remote image as its official approved badge. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1"
                    alt="SaaSHub Approved badge for Bizosto"
                    width={150}
                    height={56}
                    className="h-auto w-[150px] max-w-full"
                  />
                </a>
                <div className="flex min-h-20 items-center gap-3 rounded-xl border border-border bg-surface/80 px-4 py-3 shadow-sm">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-foreground">
                      14-day full access
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      No charge until day 15
                    </p>
                  </div>
                </div>
                <div className="flex min-h-20 items-center gap-3 rounded-xl border border-border bg-surface/80 px-4 py-3 shadow-sm">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UsersRound className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-foreground">
                      No per-user fees
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      One flat price for your team
                    </p>
                  </div>
                </div>
              </div>
              <OpsTicker />
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

      {/* ── Competitor cost comparison ─────────────────────── */}
      <section className="section-spacing">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="The Real Cost of Your Current Stack"
              title="Your competitors are paying $779/month for less."
              subtitle="The average 20-person service business runs Monday.com, HubSpot, and QuickBooks separately. That stack costs $779/month — and still doesn't cover HR, production workflows, or client portals. Bizosto covers everything for $149/month flat."
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-muted">
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Platform</th>
                    <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">20 users/mo</th>
                    <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Finance</th>
                    <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">HR</th>
                    <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">AI Agents</th>
                    <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Client Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { name: "Monday + HubSpot + QuickBooks", price: "$779+", finance: true, hr: false, ai: false, portal: false, you: false },
                    { name: "HubSpot Professional", price: "$2,000+", finance: false, hr: false, ai: "Basic", portal: false, you: false },
                    { name: "Zoho One", price: "$800–1,800", finance: true, hr: true, ai: "Basic", portal: false, you: false },
                    { name: "Salesforce Essentials", price: "$1,200+", finance: false, hr: false, ai: "Add-on", portal: false, you: false },
                    { name: "Bizosto Pro", price: "$149", finance: true, hr: false, ai: true, portal: true, you: true },
                    { name: "Bizosto Enterprise", price: "$299", finance: true, hr: true, ai: true, portal: true, you: true },
                  ].map((row) => (
                    <tr
                      key={row.name}
                      className={`transition ${row.you ? "bg-primary/5 border-l-4 border-l-primary" : "bg-surface hover:bg-surface-muted"}`}
                    >
                      <td className="px-5 py-3 font-semibold text-foreground">
                        {row.name}
                        {row.you && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                            YOU
                          </span>
                        )}
                      </td>
                      <td className={`px-5 py-3 text-center font-bold ${row.you ? "text-primary" : "text-foreground"}`}>
                        {row.price}
                        <span className="text-xs font-normal text-muted-foreground">/mo</span>
                      </td>
                      {[row.finance, row.hr, row.ai, row.portal].map((val, i) => (
                        <td key={i} className="px-5 py-3 text-center">
                          {val === true ? (
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">✓</span>
                          ) : val === false ? (
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-surface-muted text-xs text-muted-foreground">—</span>
                          ) : (
                            <span className="text-xs text-muted-foreground">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Competitor pricing based on published list prices for 20 users. Verified May 2026.
            </p>
          </ScrollReveal>
        </Container>
      </section>

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

      <section className="section-spacing">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="AI Workforce"
              title="Your business runs on Bizosto. Now your AI agents do too."
              subtitle="Bizosto AI Workforce gives service businesses intelligent agents that work inside your existing system — reading live data, surfacing what matters, and handling routine work automatically."
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
                description: "Ask any business question in plain English. Get a live chart in seconds. Revenue by client, leads by stage, invoice aging — all instant.",
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
              Powered by your own OpenAI or Anthropic key. Pro and Enterprise plans.
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
              <p className="text-2xl font-semibold text-foreground">10 modules</p>
              <p className="text-sm text-muted-foreground">
                CRM, sales, projects, production, approvals, finance, HR, reports, notifications, and a client portal — one system, no integrations to babysit.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 space-y-2">
              <p className="text-2xl font-semibold text-foreground">11 role dashboards</p>
              <p className="text-sm text-muted-foreground">
                Every seat gets its own view — sales, account management, production, finance, HR, leadership, and your clients — so nobody works blind.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 space-y-2">
              <p className="text-2xl font-semibold text-foreground">Security first</p>
              <p className="text-sm text-muted-foreground">
                Tenant isolation, role-based permissions, and an append-only finance ledger are built into the core — not bolted on after the fact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* ── Market Trends ──────────────────────────── */}
      <section className="section-spacing">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="The Market Is Moving"
              title="2026 is the year service businesses stop improvising."
              subtitle="The tools, pricing models, and manual processes that worked at 5 people are actively hurting you at 20. Here is what the market data is showing — and what the leading service businesses are doing about it."
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "5–7",
                label: "Disconnected tools",
                description:
                  "The average service business runs 5 to 7 separate tools for CRM, projects, finance, HR, and communication. Each tool is a data silo. Each gap between them is a revenue leak.",
              },
              {
                stat: "18–24%",
                label: "SaaS price increases since 2022",
                description:
                  "Major SaaS platforms have raised per-user prices significantly since 2022. Teams that haven't consolidated are paying more every year for the same disconnected stack.",
              },
              {
                stat: "8–12h",
                label: "Per week lost to tool-switching",
                description:
                  "Service business employees lose 8 to 12 hours per week to context-switching, manual data entry, and chasing status across applications. That is one full working day, every week.",
              },
              {
                stat: "340%",
                label: "Growth in AI business adoption",
                description:
                  "AI adoption in business operations accelerated dramatically between 2023 and 2025. Businesses that don't have AI built into their workflows are already operating at a structural disadvantage.",
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

          <ScrollReveal>
            <div className="mt-8 rounded-2xl border border-border bg-surface p-8 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                What leading service businesses are doing differently in 2026
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Consolidating to a single platform",
                    body: "The fastest-growing agencies and consultancies are cutting their tool stack from 6+ to 1 integrated operating system. The savings in subscriptions alone fund the switch — the productivity gains fund the next hire.",
                  },
                  {
                    title: "Demanding flat pricing",
                    body: "Per-user pricing punishes growth. Service businesses scaling from 10 to 25 people are actively switching to flat-rate platforms so their software costs don't scale faster than their revenue.",
                  },
                  {
                    title: "Expecting AI to be built in",
                    body: "In 2026, AI agents are not a luxury add-on. The businesses winning are the ones where AI reads their data, flags what matters, and drafts recommendations before the leadership team has had their morning coffee.",
                  },
                ].map((item) => (
                  <div key={item.title} className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

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
            description="Start your 14-day free trial today. Card required - you won't be charged until day 15. Cancel anytime before then and pay nothing. See why service businesses that try Bizosto don't go back."
            primaryAction="Book a Demo"
            secondaryAction="Contact"
          />
        </ScrollReveal>
      </Container>
      </div>
    </PageShell>
  );
}
