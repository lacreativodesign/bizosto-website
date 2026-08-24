import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "How Bizosto Works — From First Lead to Final Invoice",
  description:
    "See how Bizosto connects lead capture, project delivery, client communication, finance, and reporting in one automated flow for service businesses.",
  alternates: { canonical: "https://www.bizosto.com/how-it-works" },
};

const steps = [
  {
    title: "Every lead enters the same system.",
    description:
      "Capture supported website, email, and referral enquiries in CRM, assign an owner, and move each opportunity through the approved pipeline.",
  },
  {
    title: "Deals become projects without the friction.",
    description:
      "When a deal closes in Bizosto, a project kicks off with the right team assigned, the right workflow loaded, and the right client briefed — all without a single manual handoff. Your ops team stops hearing 'wait, when did we close this?'",
  },
  {
    title: "Deliver the work. Get paid. See the numbers.",
    description:
      "Connect delivered projects to invoicing, payment tracking, and financial reporting so leadership can review current workspace records in one place.",
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
                as="h1"
                eyebrow="The Flow"
                title="The way your business should have always run."
                subtitle="Most service businesses run on a patchwork of tools that don't talk to each other. Bizosto connects every step — from the first conversation with a client to the final payment — in one continuous, automated flow."
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
                eyebrow="How Accountability Works"
                title="Things stop slipping when the system doesn't let them."
                subtitle="Bizosto doesn't rely on people remembering to chase things. Every workflow has built-in owners, deadlines, and escalation points — so the system does the chasing for you."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "The right person. The right task. Every time.",
                  description:
                    "Define who creates, approves, and executes across every department. Your sales team moves deals. Your ops team runs delivery. Your finance team invoices. Nobody is doing someone else's job.",
                },
                {
                  title: "The system escalates so you don't have to.",
                  description:
                    "When a milestone is missed, Bizosto flags it. When an approval is overdue, the right person gets notified. When a client hasn't paid, a reminder goes out. You focus on the business. The system handles the admin.",
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
                title="See your exact workflow in a live demo."
                description="We'll map your current process into Bizosto and show you exactly where the time, money, and accountability gaps close — before you commit to anything."
              />
            </ScrollReveal>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
