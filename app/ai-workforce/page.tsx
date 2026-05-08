import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { Bot, Brain, TrendingUp, BarChart3, ShieldCheck, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Workforce — Intelligent Agents for Your Service Business | Bizosto",
  description:
    "Bizosto AI Workforce gives your service business AI agents that work inside your existing system — analysing data, surfacing insights, and handling routine work. Powered by your own API key.",
  alternates: {
    canonical: "https://www.bizosto.com/ai-workforce",
  },
};

const agents = [
  {
    icon: <Bot className="h-5 w-5" />,
    name: "COO Agent",
    status: "Available now",
    statusColor: "text-green-600 bg-green-500/10 border-green-500/20",
    description:
      "Your AI chief of operations. Every morning it reads your business — open leads, overdue invoices, active projects, team performance — and delivers a plain-English summary of what needs your attention today.",
    capabilities: [
      "Daily business health summary",
      "Overdue invoice alerts with amounts",
      "Lead pipeline status by stage",
      "Active project health overview",
      "Team utilization snapshot",
    ],
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    name: "Finance Agent",
    status: "Available now",
    statusColor: "text-green-600 bg-green-500/10 border-green-500/20",
    description:
      "Monitors your revenue, flags late payments, and drafts payment reminder emails — all requiring your approval before anything is sent. Finance intelligence without finance overhead.",
    capabilities: [
      "Overdue invoice detection and prioritisation",
      "Payment reminder drafts (approval-gated)",
      "Revenue trend analysis",
      "Cash position monitoring",
      "Expense anomaly alerts",
    ],
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    name: "Sales Agent",
    status: "Available now",
    statusColor: "text-green-600 bg-green-500/10 border-green-500/20",
    description:
      "Watches your pipeline, identifies stalling leads, and proposes stage updates for your approval. All inside Bizosto — no separate AI tool, no new login.",
    capabilities: [
      "Stalled lead identification (7+ days)",
      "Stage update proposals (approval-gated)",
      "Deal stage progression tracking",
      "Pipeline velocity reporting",
      "Lead source performance analysis",
    ],
  },
  {
    icon: <Brain className="h-5 w-5" />,
    name: "AI Reports",
    status: "Available now",
    statusColor: "text-green-600 bg-green-500/10 border-green-500/20",
    description:
      "Ask any question about your business in plain English and get a chart or table powered by your live data. No exports, no SQL, no waiting.",
    capabilities: [
      "Natural language question input",
      "Bar, line, pie chart and table output",
      "Revenue, leads, projects, invoices, team data",
      "8 built-in data tools — always live",
      "Accessible at Reports → AI Reports",
    ],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect your AI key",
    description:
      "Go to Settings → AI Workforce and paste in your OpenAI or Anthropic API key. Your key, your account, your bill — Bizosto never touches your AI spend.",
  },
  {
    step: "02",
    title: "Activate an agent",
    description:
      "Turn on the COO Agent from your dashboard. Click Generate — the agent reads your live business data and produces a summary in seconds.",
  },
  {
    step: "03",
    title: "Review and act",
    description:
      "Your agent's output appears directly in your Bizosto dashboard. For write actions (sending emails, updating records), everything requires your approval before it executes.",
  },
];

export default function AIWorkforcePage() {
  return (
    <PageShell>
      <div className="flex flex-col">

        {/* Hero */}
        <Section variant="premium">
          <Container className="space-y-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="AI Workforce"
                title="Your business runs on Bizosto. Now your AI agents do too."
                subtitle="Bizosto AI Workforce gives service businesses intelligent agents that work inside your existing system — reading live data, surfacing what matters, and handling routine work so your team doesn't have to."
              />
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://app.bizosto.com/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Start Free Trial →
                </a>
                <a
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-surface-muted"
                >
                  Book a Demo
                </a>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Not a chatbot */}
        <Container className="section-spacing">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-surface p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-primary">
                    <Brain className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    This is not a chatbot
                  </p>
                </div>
                <h2 className="text-2xl font-semibold text-foreground leading-snug">
                  Bizosto AI Workforce is a task execution system — not a conversation interface.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Each agent has a defined role, a set of tools it can call, and a clear boundary between what it can observe and what it can act on. Agents read your live Bizosto data — leads, projects, invoices, team — and produce structured outputs. Write actions (sending emails, updating records) always require your approval before they execute. Nothing happens in your business without a human in the loop.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Agents */}
        <section className="section-spacing">
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Meet Your AI Team"
                title="Agents built for service business roles."
                subtitle="Each agent is designed around a specific function in your business. They read real data, produce real outputs, and stay inside your Bizosto workspace."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {agents.map((agent) => (
                <ScrollReveal key={agent.name}>
                  <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-primary">
                        {agent.icon}
                      </span>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${agent.statusColor}`}>
                        {agent.status}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-foreground">{agent.name}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                    </div>
                    <ul className="space-y-1.5 mt-auto pt-2">
                      {agent.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="mt-0.5 flex-shrink-0 text-primary">✓</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* How it works */}
        <Container className="section-spacing">
          <ScrollReveal>
            <SectionHeading
              eyebrow="How It Works"
              title="Up and running in three steps."
              subtitle="No AI expertise required. No new platform to learn. It lives inside the Bizosto you already use."
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {howItWorks.map((step) => (
              <ScrollReveal key={step.step}>
                <div className="rounded-xl border border-border bg-surface p-6 space-y-3">
                  <span className="text-3xl font-semibold text-primary/25 leading-none">{step.step}</span>
                  <p className="text-sm font-semibold text-foreground">{step.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>

        {/* BYOK */}
        <section className="section-spacing">
          <Container>
            <div className="mx-auto max-w-3xl">
              <ScrollReveal>
                <div className="rounded-2xl border border-border bg-surface p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-primary">
                      <Key className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Bring Your Own Key
                    </p>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground leading-snug">
                    Your AI bill goes to you — not through us.
                  </h2>
                  <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                    <p>
                      Bizosto AI Workforce uses a Bring Your Own Key model. You connect your own OpenAI or Anthropic API key in Settings — and all AI usage is billed directly by your chosen provider to your account.
                    </p>
                    <p>
                      Bizosto charges for access to the AI Workforce platform as part of your plan. The AI tokens you consume are between you and your AI provider. No markup, no hidden usage fees, no surprises.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    {[
                      { icon: <ShieldCheck className="h-4 w-4" />, title: "Your data stays in your account", body: "Your API key means your AI requests go directly to OpenAI or Anthropic — never through a shared Bizosto key." },
                      { icon: <Key className="h-4 w-4" />, title: "Works with OpenAI and Anthropic", body: "Connect a GPT-4o key or a Claude key. Switch providers anytime from your settings page." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-border bg-surface-muted p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary">{item.icon}<p className="text-sm font-semibold text-foreground">{item.title}</p></div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* Plan requirement */}
        <Container className="section-spacing">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-6 text-center space-y-3">
              <p className="text-sm font-semibold text-foreground">Available on Pro and Enterprise plans</p>
              <p className="text-sm text-muted-foreground">
                AI Workforce is included on Pro ($149/mo) and Enterprise ($299/mo) plans. Start your 14-day free trial — all modules and AI Workforce unlocked from day one.
              </p>
              <a
                href="https://app.bizosto.com/signup"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Start Free Trial →
              </a>
            </div>
          </ScrollReveal>
        </Container>

        {/* CTA */}
        <Container className="section-spacing">
          <ScrollReveal>
            <CTASection
              title="Your competitors are still doing this manually."
              description="Give your service business an AI team that works inside your existing system — reading your data, surfacing what matters, and handling the routine so you can focus on what grows the business."
              primaryAction="Start Free Trial"
              secondaryAction="Book a Demo"
            />
          </ScrollReveal>
        </Container>

      </div>
    </PageShell>
  );
}
