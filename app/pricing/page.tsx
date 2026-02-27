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
    question: "Is there a free trial?",
    answer: "Yes. Every plan includes a 14-day free trial with full access to all selected modules. No credit card required to start.",
  },
  {
    question: "What happens when my trial ends?",
    answer: "You will be prompted to choose a plan and add a payment method. If no payment is added, your account enters a read-only grace period before being locked.",
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes. Upgrade immediately with prorated billing, or downgrade at the end of your billing period.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees. The monthly subscription price is all-inclusive for your selected plan.",
  },
  {
    question: "Can I enable or disable modules?",
    answer: "Yes. Modules are configurable by your workspace admin so you only use what your team needs.",
  },
  {
    question: "Is there a fee for accepting client payments?",
    answer: "A 0.5% platform handling fee applies to payments processed through Bizosto. This is in addition to Stripe's standard processing fee.",
  },
  {
    question: "How is tax calculated on my subscription?",
    answer: "Tax is calculated automatically based on your billing location using Stripe Tax. The applicable rate for your jurisdiction is applied at checkout.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All data is encrypted, isolated per workspace, and stored securely on Google Cloud / Firebase infrastructure with role-based access controls.",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Pricing"
                title="Simple, transparent pricing for every business"
                subtitle="Start with a 14-day free trial. No credit card required. Cancel anytime."
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

        <Section>
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
