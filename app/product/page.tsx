import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import { BarChart3, Brain, ClipboardCheck, CreditCard, ShieldCheck, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Bizosto Modules — Built to Work Together by Plan",
  description:
    "Explore Bizosto's plan-scoped modules for CRM, sales, project delivery, production, finance, HR, and the client portal.",
  alternates: { canonical: "https://www.bizosto.com/product" },
};

const modules = [
  {
    title: "CRM & Sales Pipeline",
    description:
      "From first enquiry to signed deal, capture and qualify leads through the approved pipeline with ownership, follow-up tracking, and tenant-scoped records.",
    icon: <TrendingUp className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Project & Production Delivery",
    description:
      "Brief → assign → QA → sign off. Every job moves through your production workflow with milestones, task owners, file management, and automated handoffs between teams.",
    icon: <ClipboardCheck className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Finance & Revenue",
    description:
      "Invoices, payments, expenses, and financial reporting connect to the projects that generate them, supporting margin and revenue review in one operating record.",
    icon: <CreditCard className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Reports & Analytics",
    description:
      "Bring revenue performance, delivery health, team utilization, sales pipeline, and HR data into plan- and role-appropriate dashboards.",
    icon: <BarChart3 className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Roles, Permissions & HR",
    description:
      "11 user roles from Super Admin to Client. Enterprise HR includes employee records, attendance, leave, and onboarding, with role-appropriate workspace views.",
    icon: <ShieldCheck className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "AI Workforce — Controlled-Beta Agents",
    description:
      "Controlled-beta COO briefings, finance monitoring, sales pipeline analysis, and natural-language AI reports. Tenant-controlled BYOK is used where applicable, provider usage is separate, and dangerous actions require human approval.",
    icon: <Brain className="h-4 w-4" aria-hidden="true" />,
  },
];

const outcomes = [
  {
    title: "Every team. One system.",
    description:
      "Sales, delivery, finance, HR, and your clients all work from the same data. No more conflicting spreadsheets, no more version confusion, no more status chasing.",
  },
  {
    title: "Accountability built in, not bolted on.",
    description:
      "Give tasks, projects, and approvals explicit owners and states so stalled work is visible and easier to address.",
  },
  {
    title: "Delivery you can promise — and prove.",
    description:
      "Know your capacity before you commit. Track milestones as they happen. Invoice the moment delivery is confirmed. Your clients see it. Your numbers reflect it.",
  },
];

export default function ProductPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container className="space-y-6">
            <ScrollReveal>
              <SectionHeading
                as="h1"
                eyebrow="The Platform"
                title="Choose the plan-scoped modules your team needs."
                subtitle="Bizosto was built by people who ran service businesses and got tired of the tool chaos. Every feature exists because it was needed — not because it looked good in a pitch deck."
              />
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {outcomes.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 80}>
                  <div className="card-hover rounded-xl border border-border bg-surface p-6">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="relative z-10">
            <ScrollReveal>
              <SectionHeading
                eyebrow="What's Inside"
                title="Plan-scoped modules designed to share one operating record."
                subtitle="Sales, delivery, finance, HR, and client-portal capabilities share tenant-scoped context. Automated handoffs remain subject to role, approval, plan, and lifecycle rules."
              />
            </ScrollReveal>
            <ScrollReveal className="mt-8">
              <FeatureGrid items={modules} />
            </ScrollReveal>
          </Container>
        </Section>

        <Section>
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="The Bottom Line"
                title="You didn't start your business to manage software subscriptions."
                subtitle="Bizosto replaces the fragmented stack with one system your team learns once, uses daily, and actually relies on. Less overhead. More output. Total visibility."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "One dashboard to run your entire operation.",
                  description:
                    "Every project, every team member, every client, and every invoice — visible from one screen. Your leadership team stops asking for updates because the answers are always there.",
                },
                {
                  title: "Numbers connected to the work.",
                  description:
                    "Bizosto assembles financial and operational reports from tenant records. Accuracy depends on complete source data and remains subject to review and reconciliation.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 90}>
                  <div className="card-hover rounded-xl border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <ScrollReveal>
              <CTASection
                title="Ready to stop duct-taping tools together?"
                description="Book a 30-minute walkthrough and we'll show you exactly how Bizosto maps to your operation. No generic demo. Your workflows, your modules, your team."
              />
            </ScrollReveal>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
