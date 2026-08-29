import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import { BarChart3, Brain, ClipboardCheck, CreditCard, ShieldCheck, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Every Module Your Service Business Needs — Built to Work Together",
  description:
    "Explore Bizosto's full module suite — CRM, sales pipeline, project delivery, production, finance, HR, client portal, and more. One platform, every function, total visibility.",
};

const modules = [
  {
    title: "CRM & Sales Pipeline",
    description:
      "From first enquiry to signed deal — every lead is captured, qualified, and moved through your pipeline with automated follow-ups and SLA tracking. Never lose a prospect in a spreadsheet again.",
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
      "Invoices, payments, payroll, expenses, tax, and financial reporting — all connected directly to the projects that generate them. Know your margin before a project closes, not after.",
    icon: <CreditCard className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Reports & Analytics",
    description:
      "Revenue performance, delivery health, team utilization, sales pipeline, and HR data — in real-time dashboards you can act on today. No exporting. No building decks. Just answers.",
    icon: <BarChart3 className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Roles, Permissions & HR",
    description:
      "11 user roles from Super Admin to Client. Full HR module with employee records, attendance, leave, onboarding, and payroll. Every person sees exactly what they need — nothing more.",
    icon: <ShieldCheck className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "AI Workforce — 4 Live Agents",
    description:
      "COO daily briefings, Finance Agent with approval-gated payment reminders, Sales Agent with pipeline analysis, and AI Reports that answer plain-English questions with live charts. Powered by your own OpenAI or Anthropic API key. Included on Pro and Enterprise plans.",
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
      "Every task has an owner. Every project has a deadline. Every approval has a chain. Bizosto doesn't let things slip — it makes dropping the ball impossible to hide.",
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
                title="Every module your team needs. None of the tools they hate."
                subtitle="Bizosto was built by people who ran service businesses and got tired of the tool chaos. Every feature exists because it was needed — not because it looked good in a pitch deck."
              />
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#071225] p-3 shadow-2xl shadow-black/25">
                <div className="flex items-center justify-between gap-4 px-2 pb-3 pt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <span>Bizosto operations command</span>
                  <span className="inline-flex items-center gap-2 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Live workspace</span>
                </div>
                <div className="relative aspect-[16/8.4] overflow-hidden rounded-[1.25rem] border border-white/10">
                  <Image
                    src="/screenshots/erp-admin-dark.png"
                    alt="Bizosto operations command dashboard"
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
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
                title="15 modules. One platform. Zero tool-switching."
                subtitle="Each module is built to share data with every other module — so when a deal closes, a project starts. When a project delivers, an invoice goes out. When an invoice is paid, your reports update. It all just works."
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
                  title: "Numbers that tell the truth — automatically.",
                  description:
                    "Bizosto generates your financial and operational reports without anyone having to build them. Revenue, margin, utilization, and delivery risk are always current, always accurate.",
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

