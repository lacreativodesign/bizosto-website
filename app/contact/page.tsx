import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact Bizosto — We'll Reply Within One Business Day",
  description:
    "Get in touch with the Bizosto team. Tell us about your service business, your current tools, and your goals — and we'll come back with a tailored plan.",
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
                as="h1"
                eyebrow="Get In Touch"
                title="Tell us what you're trying to fix."
                subtitle="You don't need to have everything figured out. Tell us where the pain is — too many tools, no visibility, projects going over budget, clients out of the loop — and we'll show you how Bizosto solves it."
              />
            </ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal>
                  <Card className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">What happens after you send this</p>
                    <p className="text-sm text-muted-foreground">
                      A real person on our team reads every message. We don&apos;t hand you off to a bot or a generic drip sequence.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>A reply from a real person within 1 business day</li>
                      <li>A personalised walkthrough of the modules relevant to your business</li>
                      <li>A rollout plan based on your actual workflows — not a template</li>
                    </ul>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={110}>
                  <Card className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Prefer to reach out directly?</p>
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
