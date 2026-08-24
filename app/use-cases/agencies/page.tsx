import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { trialAccessSummary } from "@/lib/launch-stage";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Bizosto for Agencies — One System for Your Entire Agency Operation",
  description:
    "Connect agency CRM, project delivery, production, client portal, finance, and plan-scoped HR workflows in Bizosto.",
  alternates: {
    canonical: "https://www.bizosto.com/use-cases/agencies",
  },
};

const painPoints = [
  {
    problem: "Your briefs live in email. Your projects live in one tool. Your invoices live in another.",
    solution: "Bizosto connects your brief intake, project delivery, and invoicing in one system. When a deal closes, a project starts. When a project delivers, an invoice goes out. No manual handoffs.",
  },
  {
    problem: "Your clients chase you for updates because they have no visibility.",
    solution: "Every client gets their own portal to see project status, approve deliverables, view invoices, and pay — without sending a single WhatsApp message or email thread.",
  },
  {
    problem: "Your account managers don't know what production is working on.",
    solution: "Every job is in the same system. AMs see client status, Production sees its queue, and Finance sees what has been invoiced from a shared operating record.",
  },
  {
    problem: "You find out a project was unprofitable after it's delivered.",
    solution: "Bizosto tracks time, costs, and invoiced amounts against every project. See your margin as you work — not at month-end when it's too late to fix.",
  },
];

const modules = [
  { title: "CRM & Lead Management", description: "Capture every enquiry, qualify faster, and move leads through your pipeline with SLA controls and automated follow-ups." },
  { title: "Sales Pipeline", description: "Track deals from first conversation to signed proposal. Approval workflows ensure nothing moves forward without sign-off." },
  { title: "Project & Production", description: "Brief → assign → QA → deliver. Every job has owners, milestones, and file management. Your production team always knows what's next." },
  { title: "Client Portal", description: "Your clients get a branded portal to track progress, approve work, view invoices, and pay. Professional. Transparent. No chasing." },
  { title: "Finance & Invoicing", description: "Invoice on delivery, track retainers, and manage expenses alongside the projects that generate the revenue." },
  { title: "Reports & Dashboards", description: "Revenue per client, delivery performance, team utilization, and pipeline health — live dashboards your leadership can act on." },
  { title: "AI Workforce — Controlled Beta", description: "Plan-scoped AI capabilities can prepare operations briefings, flag finance and sales follow-ups, and generate supported reports. Tenant-controlled BYOK is used where applicable, and dangerous actions require explicit human approval." },
];

export default function AgenciesPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container>
            <ScrollReveal>
              <SectionHeading
                as="h1"
                eyebrow="Bizosto for Agencies"
                title="Your agency has outgrown the tools you started with."
                subtitle="You're running a serious business on a patchwork of subscriptions that don't talk to each other. Bizosto gives you one system where your pipeline, delivery, clients, and finance all live together — so your team stops switching tabs and starts doing the work."
              />
            </ScrollReveal>
          </Container>
        </Section>

        <Section>
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="The Problems We Solve"
                title="We've heard these exact complaints from agencies. We built Bizosto to fix them."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {painPoints.map((item, index) => (
                <ScrollReveal key={index} delay={index * 70}>
                  <Card className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">❌ &quot;{item.problem}&quot;</p>
                    <div className="border-t border-border pt-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-1">Bizosto fixes this</p>
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
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
                eyebrow="What You Get"
                title="Plan-scoped modules for agency operations."
                subtitle="Starter includes CRM, Sales, Projects, and Client Portal. Pro adds Finance and Production; Enterprise adds HR and other Enterprise capabilities."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module, index) => (
                <ScrollReveal key={module.title} delay={index * 60}>
                  <Card className="space-y-2">
                    <p className="text-base font-semibold text-foreground">{module.title}</p>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="How Agencies Get Started"
                title="You'll be running on Bizosto in under two weeks."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { step: "1", title: "Set up your workspace", description: "Your agency gets its own isolated workspace. Invite your team, assign roles, configure your modules." },
                { step: "2", title: "Import your clients and pipeline", description: "Bring your existing clients and deals in. Our CSV import and integrations make the transition smooth." },
                { step: "3", title: "Run your first project end-to-end", description: "See a deal close, a project kick off, a client approve, and an invoice go out — all without leaving Bizosto." },
              ].map((item) => (
                <ScrollReveal key={item.step} delay={parseInt(item.step) * 80}>
                  <Card className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Step {item.step}</p>
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
                title="Ready to run your agency on one system?"
                description={`${trialAccessSummary} Or book a walkthrough and we’ll review how your agency workflow maps to Bizosto.`}
              />
            </ScrollReveal>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
