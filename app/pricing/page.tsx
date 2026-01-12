import type { Metadata } from "next";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PricingTiers from "@/components/PricingTiers";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Agency ERP Pricing",
  description:
    "Review Bizosto Agency ERP pricing for service business management software, with scope finalized during your demo.",
  alternates: {
    canonical: "https://www.bizosto.com/pricing",
  },
};

const highlights = [
  "Lead capture & routing",
  "Client & project workflow",
  "Roles & permissions",
  "Notifications & activity log",
  "Reporting & dashboards",
  "Module-based SaaS scaling",
];

const faqs = [
  {
    question: "Can I start small and upgrade?",
    answer:
      "Yes. Start with the essentials and add modules or seats as your team grows.",
  },
  {
    question: "Do you support agencies only?",
    answer:
      "Bizosto is built for service delivery teams, including agencies, consultancies, and professional services.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use secure hosting, role-based access, and audit-ready activity logs to protect data.",
  },
  {
    question: "Can I enable/disable modules?",
    answer:
      "Yes. Modules are configurable so you only pay for what your team needs.",
  },
  {
    question: "How onboarding works?",
    answer:
      "We map your workflows, configure modules, and train your team to launch confidently.",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section>
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Pricing"
                title="Conversion-ready pricing built for service delivery teams"
                subtitle="Pick your starting tier, then finalize modules and team size during onboarding."
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal className="mt-10">
              <PricingTiers />
            </ScrollReveal>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Final pricing depends on modules and team size.
            </p>
          </Container>
        </Section>

        <Section variant="premium">
          <Container className="relative z-10">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Included"
                title="What you get with Bizosto"
                subtitle="Everything you need to unify delivery, reporting, and governance."
                align="center"
              />
            </ScrollReveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item, index) => (
                <ScrollReveal key={item} delay={index * 60}>
                  <div className="card-hover rounded-xl border border-border bg-surface p-4 text-sm font-medium text-foreground">
                    {item}
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
                eyebrow="FAQ"
                title="Answers to common pricing questions"
                subtitle="Get clarity before you book your demo."
              />
            </ScrollReveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {faqs.map((item, index) => (
                <ScrollReveal key={item.question} delay={index * 70}>
                  <Card className="space-y-3">
                    <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
                    <p className="text-sm text-muted-foreground">{item.answer}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
