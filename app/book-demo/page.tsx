import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Book a Live Bizosto Walkthrough — See Your Workflows in Action",
  description:
    "Book a personalised Bizosto demo. We'll map your exact service business workflow and show you how each module connects — so you can make a decision with confidence.",
};

export default function BookDemoPage() {
  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container className="space-y-6">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Book a Demo"
                title="See your business running on one system."
                subtitle="This isn't a generic product demo. We'll walk through your actual workflows — your pipeline, your delivery process, your finance setup — and show you exactly how Bizosto fits."
              />
            </ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="space-y-6">
                <ScrollReveal>
                  <Card className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">What you'll see in 30 minutes</p>
                      <p className="text-sm text-muted-foreground">
                        We walk through your real workflows, not a scripted slideshow. Expect to leave with a clear rollout plan.
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>How leads flow from capture to delivery</li>
                      <li>Your project and production workflow in action</li>
                      <li>Finance, invoicing, and how payments connect to projects</li>
                      <li>Your client portal — what your clients will actually see</li>
                    </ul>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="space-y-4 bg-surface-muted">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Who gets the most from this demo</p>
                      <p className="text-sm text-muted-foreground">
                        Founders, ops directors, and team leads at service businesses who are tired of running their company on six different tools.
                      </p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Agencies — stop losing deals and projects between Slack threads and spreadsheets.</p>
                      <p>Consultancies — track engagements, utilization, and retainers without manual work.</p>
                      <p>Operations leaders — give your leadership team a dashboard they can make decisions from.</p>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>
              <div className="space-y-4">
                <ScrollReveal>
                  <Card className="space-y-3 border-primary/40 bg-primary/5">
                    <p className="text-sm font-semibold text-foreground">Rather start right now?</p>
                    <p className="text-sm text-muted-foreground">
                      Skip the demo and sign up directly. Your 14-day free trial starts the moment you sign up. Card required - you won't be charged until day 15. Cancel anytime before then and pay nothing.
                    </p>
                    <a
                      href="https://app.bizosto.com/signup"
                      className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                      Start Free Trial →
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Or fill the form to book your personalised walkthrough.
                    </p>
                  </Card>
                </ScrollReveal>
                <ScrollReveal>
                  <ContactForm />
                </ScrollReveal>
                <ScrollReveal delay={120}>
                  <Card className="space-y-2 bg-surface-muted">
                    <p className="text-sm font-semibold text-foreground">Why teams trust Bizosto</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Built by people who ran service businesses.</li>
                      <li>30-minute walkthrough. No obligation.</li>
                      <li>Your workflows, not a generic demo script.</li>
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
