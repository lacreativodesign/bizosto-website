import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Bizosto for Operations Teams — The System Your Whole Company Will Actually Use",
  description:
    "Bizosto gives operations leaders a platform for standardized workflows, explicit accountability, fewer spreadsheet handoffs, and role-appropriate operational visibility.",
  alternates: {
    canonical: "https://www.bizosto.com/use-cases/operations",
  },
};

export default function OperationsPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container>
            <ScrollReveal>
              <SectionHeading
                as="h1"
                eyebrow="Bizosto for Operations"
                title="Operations leaders don't need another tool. They need the last one."
                subtitle="The biggest challenge in ops isn't finding software — it's getting the whole company to actually use it. Bizosto is designed around adoption. Every role gets a view built for them. Every workflow has built-in accountability. Every report generates itself."
              />
            </ScrollReveal>
          </Container>
        </Section>

        <Section>
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="The Ops Leader's Toolkit"
                title="Everything you need to run a company — in one system your team will use without being told."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "11 user roles", description: "Fixed roles span Super Admin through Client and are designed to expose only permitted tenant modules and records." },
                { title: "Approval workflows", description: "Every decision that currently happens over email, Slack, or a sticky note can have a proper approval chain in Bizosto. Requests, sign-offs, and escalations — all logged, all trackable." },
                { title: "Operational dashboards", description: "Review revenue, delivery status, team performance, and pipeline signals from the current tenant records available to your role." },
                { title: "Audit trails", description: "Every action in Bizosto is logged — who did what, when, and from where. For compliance, for accountability, and for the moments when leadership asks 'what happened?'" },
                { title: "Module-based rollout", description: "You don't have to implement everything on day one. Start with CRM and projects. Add finance when you're ready. Enable HR when you need it. The system grows with you." },
                { title: "Integration catalog", description: "Controlled-beta connections include Google Workspace, Microsoft 365, Slack, QuickBooks, and more. Availability varies by plan, provider configuration, and integration readiness." },
                { title: "AI that monitors operations so you can run them", description: "Four built-in AI agents — COO, Finance, Sales, and Reports — analyse your live data and surface what needs attention. The COO Agent delivers a daily business briefing. The Finance Agent monitors cash flow. The Sales Agent flags stalling pipeline. AI Reports answers any question with a live chart. Every recommended action requires your approval before it executes." },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 60}>
                  <Card className="space-y-2">
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="muted">
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="What Changes"
                title="Before Bizosto vs. after Bizosto."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                { before: "Status updates happen in 6 different places — Slack, email, WhatsApp, spreadsheets, stand-ups, and random DMs.", after: "Every project and task has one status, in one place. Anyone can check it in 10 seconds." },
                { before: "Reporting requires manual compilation because data lives in several tools.", after: "Role-appropriate dashboards assemble supported tenant records for a more direct review." },
                { before: "Approvals happen over email. Nobody knows what's been approved, by whom, or when.", after: "Every approval has a chain, a timestamp, and an audit trail. Accountability is built in." },
                { before: "New hires spend their first week figuring out which tool to use for what.", after: "Bizosto is their one system from day one. Their role determines their view — there's nothing irrelevant to navigate." },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 70}>
                  <Card className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-1">Before</p>
                      <p className="text-sm text-muted-foreground">{item.before}</p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-1">After Bizosto</p>
                      <p className="text-sm text-foreground font-medium">{item.after}</p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <ScrollReveal>
              <CTASection
                title="Give your company the operating system it deserves."
                description="Start your free 14-day trial and see what it feels like when every team works from one connected system."
              />
            </ScrollReveal>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
