import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { Bot, Brain, TrendingUp, BarChart3, ShieldCheck, Key } from "lucide-react";
import { signupCtaLabel, signupHref } from "@/lib/launch-stage";

export const metadata: Metadata = {
  title: "AI Workforce — Intelligent Agents for Your Service Business | Bizosto",
  description:
    "Explore Bizosto's controlled-beta, plan-scoped AI capabilities, tenant-controlled BYOK model, and human-approval boundaries.",
  alternates: {
    canonical: "https://www.bizosto.com/ai-workforce",
  },
};

const agents = [
  {
    icon: <Bot className="h-5 w-5" />,
    name: "COO Agent",
    status: "Controlled beta",
    statusColor: "text-amber-700 bg-amber-500/10 border-amber-500/30 dark:text-amber-300",
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
    status: "Controlled beta",
    statusColor: "text-amber-700 bg-amber-500/10 border-amber-500/30 dark:text-amber-300",
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
    status: "Controlled beta",
    statusColor: "text-amber-700 bg-amber-500/10 border-amber-500/30 dark:text-amber-300",
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
    status: "Controlled beta",
    statusColor: "text-amber-700 bg-amber-500/10 border-amber-500/30 dark:text-amber-300",
    description:
      "Ask any question about your business in plain English and get a chart or table powered by your live data. No exports, no SQL, no waiting.",
    capabilities: [
      "Natural language question input",
      "Bar, line, pie chart and table output",
      "Revenue, leads, projects, invoices, team data",
      "Built-in tenant-scoped data tools",
      "Accessible at Reports → AI Reports",
    ],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect your AI key",
    description:
      "A permitted workspace administrator configures a tenant-controlled provider key in AI Workforce settings. Provider usage is billed under the tenant's provider account.",
  },
  {
    step: "02",
    title: "Activate an agent",
    description:
      "Enable an available controlled-beta agent for the workspace, then generate an output from the tenant-scoped data it is permitted to read.",
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
                as="h1"
                eyebrow="AI Workforce"
                title="Your business runs on Bizosto. Now your AI agents do too."
                subtitle="Bizosto AI Workforce gives service businesses intelligent agents that work inside your existing system — reading live data, surfacing what matters, and handling routine work so your team doesn't have to."
              />
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={signupHref()}
                  className="btn-sheen inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25"
                >
                  {signupCtaLabel} →
                </a>
                <a
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition duration-200 hover:border-primary/40 hover:text-primary"
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
                  Each agent has a defined role, a bounded set of tools, and a separation between read and write actions. Dangerous actions such as sending communications or changing records require explicit human approval. AI Workforce is available during controlled beta, with availability varying by provider configuration and workspace readiness.
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
                    Use a tenant-controlled provider key.
                  </h2>
                  <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                    <p>
                      Bizosto AI Workforce uses a Bring Your Own Key model where applicable. A permitted workspace administrator connects a supported provider key, and usage is governed and billed by that provider.
                    </p>
                    <p>
                      AI Workforce is included in Pro and Enterprise plan scope. Provider usage charges are separate from the Bizosto subscription and remain the tenant&apos;s responsibility.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    {[
                      { icon: <ShieldCheck className="h-4 w-4" />, title: "Tenant-scoped configuration", body: "Provider credentials and agent settings are scoped to the workspace and must be managed by a permitted administrator." },
                      { icon: <Key className="h-4 w-4" />, title: "Supported provider options", body: "Provider and model availability depends on the tenant's own provider account and controlled-beta readiness." },
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
                AI Workforce is included in Pro ($149/month) and Enterprise ($299/month) plan scope. Controlled-beta access requires a supported tenant BYOK configuration.
              </p>
              <a
                href={signupHref()}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                {signupCtaLabel} →
              </a>
            </div>
          </ScrollReveal>
        </Container>

        {/* CTA */}
        <Container className="section-spacing">
          <ScrollReveal>
            <CTASection
              title="Your competitors are still doing this manually."
              description="Request controlled-beta access to plan-scoped AI capabilities for tenant data, operational insights, and approval-gated routine work."
              primaryAction="Start Free Trial"
              secondaryAction="Book a Demo"
            />
          </ScrollReveal>
        </Container>

      </div>
    </PageShell>
  );
}
