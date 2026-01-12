import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact Bizosto",
  description:
    "Contact Bizosto to discuss Agency ERP needs, service business management software, and implementation scope.",
  alternates: {
    canonical: "https://www.bizosto.com/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container className="space-y-6">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Contact"
                title="Tell us about your service operation"
                subtitle="Share your goals and we will tailor the Bizosto ERP rollout to your workflows."
              />
            </ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal>
                  <Card className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">What happens next</p>
                    <p className="text-sm text-muted-foreground">
                      A Bizosto specialist will review your request and map the next steps for demo and onboarding.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Response within 1 business day</li>
                      <li>Guided walkthrough of modules</li>
                      <li>Operational assessment + rollout plan</li>
                    </ul>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={110}>
                  <Card className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Direct contact</p>
                    <p className="text-sm text-muted-foreground">hello@bizosto.com</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 212-9090</p>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
