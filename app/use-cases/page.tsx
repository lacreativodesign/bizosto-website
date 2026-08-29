import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Use Cases — How Service Businesses Use Bizosto",
  description:
    "See how agencies, consulting firms, and operations teams use Bizosto to replace disconnected tools with one system that actually works.",
  alternates: {
    canonical: "https://www.bizosto.com/use-cases",
  },
};

const useCases = [
  {
    href: "/use-cases/agencies",
    label: "Digital & Creative Agencies",
    eyebrow: "Agencies",
    title: "Stop managing 8 tools. Start running one system.",
    description:
      "From the moment a brief lands to the day an invoice is paid — Bizosto connects your pipeline, production, client portal, and finance in one place. Your account managers stop chasing updates. Your clients stop emailing for status. Your finance team stops reconciling at month-end.",
    outcomes: ["Pipeline → project handoff in one click", "Client portal with approvals and file sharing", "Invoice on delivery, not after chasing accounts"],
  },
  {
    href: "/use-cases/consulting",
    label: "Consulting Firms",
    eyebrow: "Consulting",
    title: "Every engagement tracked. Every retainer collected. Every consultant utilized.",
    description:
      "Consulting firms run on relationships, expertise, and delivery. Bizosto gives you the operational backbone to scale both — without the administrative overhead. Track engagements, manage utilization, bill retainers automatically, and give partners a real-time view of the business.",
    outcomes: ["Utilization tracking per consultant", "Retainer billing on autopilot", "Engagement reporting in real time"],
  },
  {
    href: "/use-cases/operations",
    label: "Operations Teams",
    eyebrow: "Operations",
    title: "Your whole company on one system your team will actually use.",
    description:
      "Operations leaders don't just need software — they need buy-in. Bizosto is designed to be used, not avoided. Role-based access means every person sees exactly what they need. Approval workflows replace email chains. And reports that used to take a day to build now just show up.",
    outcomes: ["11 user roles — every team member covered", "Approval workflows that replace email chains", "Real-time reports without manual building"],
  },
];

export default function UseCasesPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container>
            <ScrollReveal>
              <SectionHeading
                as="h1"
                eyebrow="Use Cases"
                title="Built for service businesses. Works for every type."
                subtitle="Bizosto was designed around the way service businesses actually operate. Whatever your model — agency, consulting, managed services, or internal ops — the system adapts to your workflow, not the other way around."
              />
            </ScrollReveal>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-8">
              {useCases.map((useCase, index) => (
                <ScrollReveal key={useCase.href} delay={index * 80}>
                  <Card className="space-y-5">
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{useCase.eyebrow}</p>
                          <h2 className="mt-2 text-xl font-semibold text-foreground">{useCase.title}</h2>
                        </div>
                        <p className="text-sm text-muted-foreground">{useCase.description}</p>
                        <ul className="space-y-2">
                          {useCase.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">✓</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-start lg:items-center">
                        <Link
                          href={useCase.href}
                          className="button-primary btn-sheen inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 whitespace-nowrap"
                        >
                          See how it works →
                        </Link>
                      </div>
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
                title="Not sure which use case fits you best?"
                description="Book a 30-minute walkthrough and we'll map your exact workflow into Bizosto — so you see precisely how it works for your team before you commit to anything."
              />
            </ScrollReveal>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
