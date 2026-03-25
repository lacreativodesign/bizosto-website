import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Bizosto for Consulting Firms — Track Every Engagement, Bill Every Retainer",
  description:
    "Bizosto helps consulting firms manage engagements, track consultant utilization, automate retainer billing, and give partners real-time visibility — in one connected system.",
  alternates: {
    canonical: "https://www.bizosto.com/use-cases/consulting",
  },
};

const outcomes = [
  { metric: "100%", label: "Retainer visibility", description: "Every retainer is tracked against delivery. Know what's been billed, what's been delivered, and what's at risk — always." },
  { metric: "Real-time", label: "Utilization tracking", description: "See each consultant's capacity, allocation, and availability. Stop over-promising and under-delivering." },
  { metric: "Automated", label: "Invoicing & collection", description: "Invoices go out on schedule, payment reminders are automated, and collections are tracked — without your team chasing." },
];

export default function ConsultingPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Bizosto for Consulting"
                title="Your consulting firm runs on relationships. Don't let operations slow them down."
                subtitle="Consulting is a high-margin business when operations are tight. Bizosto gives you the system to track every engagement, utilize every consultant, and bill every retainer — without adding operational overhead to your team."
              />
            </ScrollReveal>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              {outcomes.map((item, index) => (
                <ScrollReveal key={item.label} delay={index * 80}>
                  <Card className="space-y-3">
                    <p className="text-3xl font-bold text-primary">{item.metric}</p>
                    <p className="text-base font-semibold text-foreground">{item.label}</p>
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
                eyebrow="Built for Consulting"
                title="The operational infrastructure your firm has been missing."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                { title: "Engagement management", description: "Every client engagement has a project in Bizosto with milestones, owners, deliverables, and approval gates. Nothing falls through the cracks between your consultants and the client." },
                { title: "Retainer billing on autopilot", description: "Set up recurring invoices for retainer clients and let Bizosto handle the billing cycle. Track what's been paid, what's outstanding, and which clients are at risk." },
                { title: "Consultant utilization", description: "See how every consultant is allocated across engagements. Spot over-utilization before it burns people out. Spot under-utilization before it hurts your margin." },
                { title: "Partner-level reporting", description: "Revenue per engagement, margin per client, delivery performance, and pipeline health — in dashboards your partners can review in five minutes, not five hours." },
                { title: "Client portal", description: "Give each client their own portal to see engagement status, review and approve deliverables, view invoices, and communicate — professionally and on the record." },
                { title: "HR for growing teams", description: "As your consulting firm grows, so does your people complexity. Bizosto HR manages employees, attendance, leave, onboarding, and payroll in the same system as your client work." },
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

        <Section>
          <Container>
            <ScrollReveal>
              <CTASection
                title="Tighter operations. Higher margins. Happier clients."
                description="See how Bizosto maps to your consulting engagement model in a 30-minute personalised walkthrough."
              />
            </ScrollReveal>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
