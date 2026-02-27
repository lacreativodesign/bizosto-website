import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Schedule a demo of the Bizosto Business Operating System to plan your rollout and module scope.",
};

export default function BookDemoPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container className="space-y-6">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Book a demo"
                title="See how Bizosto runs your entire operation"
                subtitle="Book a live walkthrough or start your free 14-day trial right now."
              />
            </ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="space-y-6">
                <ScrollReveal>
                  <Card className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">What you&apos;ll see</p>
                      <p className="text-sm text-muted-foreground">
                        Walk through the workflows that run your day-to-day operations.
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Lead capture → assignment</li>
                      <li>Client &amp; project workflow</li>
                      <li>Roles, permissions, and reporting</li>
                      <li>Notifications and accountability</li>
                    </ul>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="space-y-4 bg-surface-muted">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Who this is for</p>
                      <p className="text-sm text-muted-foreground">
                        Teams that need one system to manage delivery, visibility, and follow-through.
                      </p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Agencies — align leads, client work, and staffing in one place.</p>
                      <p>Service providers — standardize delivery and keep everyone accountable.</p>
                      <p>Internal operations teams — replace spreadsheets with real-time reporting.</p>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>
              <div className="space-y-4">
                <ScrollReveal>
                  <Card className="space-y-3 border-primary/40 bg-primary/5">
                    <p className="text-sm font-semibold text-foreground">Ready to start now?</p>
                    <p className="text-sm text-muted-foreground">
                      Skip the demo and start your free 14-day trial immediately. No credit card
                      required.
                    </p>
                    <a
                      href="https://app.bizosto.com/signup"
                      className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                      Start Free Trial →
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Or fill the form below to book a guided demo.
                    </p>
                  </Card>
                </ScrollReveal>
                <ScrollReveal>
                  <ContactForm />
                </ScrollReveal>
                <ScrollReveal delay={120}>
                  <Card className="space-y-2 bg-surface-muted">
                    <p className="text-sm font-semibold text-foreground">Trusted by operators</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Built by operators</li>
                      <li>No obligation demo</li>
                      <li>Real workflows, not slides</li>
                    </ul>
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
