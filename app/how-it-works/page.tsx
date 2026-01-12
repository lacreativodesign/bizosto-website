import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Bizosto service business management software turns lead capture into delivery, billing, and reporting.",
};

const steps = [
  {
    title: "Capture leads",
    description:
      "Collect inbound requests, standardize intake, and route leads to the right owners with SLA controls.",
  },
  {
    title: "Manage pipeline",
    description:
      "Convert pipeline into scoped delivery plans with approval gates, resourcing, and commitments.",
  },
  {
    title: "Deliver, collect, and report",
    description:
      "Track milestones, issue invoices, and surface performance reporting with real-time dashboards.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container className="space-y-6">
            <ScrollReveal>
              <SectionHeading
                eyebrow="How it works"
                title="A connected operational flow built for services"
                subtitle="Bizosto turns every lead into a governed project with accountability and measurable outcomes."
              />
            </ScrollReveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 80}>
                  <div className="card-hover rounded-xl border border-border bg-surface p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Built for accountability"
                title="Operational ownership is designed into every workflow"
                subtitle="Bizosto assigns owners, due dates, and approval checkpoints so nothing slips between teams."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Role-based execution",
                  description:
                    "Define who can create, approve, and execute across sales, delivery, and finance.",
                },
                {
                  title: "Automated checkpoints",
                  description:
                    "Trigger alerts, escalations, and audit trails to keep every project on track.",
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
                title="Map your workflow in a demo"
                description="We will help you align pipeline, delivery, and finance around a single accountability framework."
              />
            </ScrollReveal>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
