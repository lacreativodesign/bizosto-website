import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { trialAccessSummary } from "@/lib/launch-stage";

export const metadata: Metadata = {
  title: "About Bizosto — Built by Operators, for Operators",
  description:
    "Bizosto is a product of LA CREATIVO GROUP, LLC, shaped by the operating needs of service businesses and prepared for controlled beta.",
  alternates: {
    canonical: "https://www.bizosto.com/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="flex flex-col">

        {/* Hero */}
        <Section variant="premium">
          <Container className="space-y-6">
            <ScrollReveal>
              <SectionHeading
                as="h1"
                eyebrow="About Bizosto"
                title="Built by operators, for service-business operators."
                subtitle="Bizosto didn't start in a pitch deck. It started in a problem — the same one every service business faces when they're trying to run a real operation on five disconnected tools."
              />
            </ScrollReveal>
          </Container>
        </Section>

        {/* The Story */}
        <Container className="section-spacing">
          <div className="mx-auto max-w-3xl space-y-6">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-surface p-8 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  The Origin
                </p>
                <h2 className="text-2xl font-semibold text-foreground leading-snug">
                  LA CREATIVO GROUP, LLC built Bizosto to run its own businesses.
                </h2>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    LA CREATIVO GROUP, LLC is a privately held group of companies built around one core mission: helping businesses market better, operate smarter, and grow faster. The group&apos;s flagship company —{" "}
                    <a
                      href="https://lacreativo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-foreground transition-colors"
                    >
                      LA CREATIVO
                    </a>
                    {" "}— is a full-service digital marketing agency serving businesses across the United States, specialising in website design, mobile apps, digital marketing, SEO, branding, and process automation. Listed on Clutch among the top digital marketing agencies, LA CREATIVO&apos;s tagline has always been: <em>&quot;Where ideas become revenue-generating realities.&quot;</em>
                  </p>
                  <p>
                    As LA CREATIVO scaled — managing more clients, more projects, more team members, and more deliverables — the operational complexity outgrew every tool on the market. CRM in one place. Projects in another. Finance in a third. HR nowhere. The team was spending as much time managing the tools as they were serving clients.
                  </p>
                  <p>
                    Every solution evaluated was either built for a different type of company, priced for enterprise budgets, or too disconnected to give leadership the real-time visibility a fast-moving agency needs. So the decision was made to build exactly what was needed.
                  </p>
                  <p>
                    So we built our own.
                  </p>
                  <p>
                    What started as an internal operating system became something the entire team relied on every single day. Leads stopped falling through the cracks. Projects shipped on time. Invoices went out the moment work was completed. Finance connected directly to delivery. The team had clarity instead of chaos — not because of a new methodology, but because everyone was working from the same system.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-surface p-8 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Why We Opened It Up
                </p>
                <h2 className="text-2xl font-semibold text-foreground leading-snug">
                  When it worked better than anything available, it stopped being just ours.
                </h2>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    The internal experience shaped Bizosto around clearer ownership, shared operating records, and structured handoffs. Work that had depended on manual chasing, version-controlled spreadsheets, and status meetings could be brought into one system.
                  </p>
                  <p>
                    Other service businesses — agencies, consultancies, operations teams — started asking what we were running on. When we explained it, the response was always the same:{" "}
                    <em>&quot;We need that too.&quot;</em>
                  </p>
                  <p>
                    That was the moment Bizosto became more than an internal tool. It became a decision to prepare the system for controlled-beta service businesses — built by people who live the same operational challenges and designed around how service businesses actually work.
                  </p>
                  <p>
                    Bizosto exists because we believe every service business deserves greater operating clarity. It is a focused, opinionated system shaped around the practical complexity of sales, delivery, finance, people operations, and client work.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Principles */}
        <section className="section-spacing">
          <Container>
            <div className="mx-auto max-w-3xl">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="How We Think"
                  title="Three principles that shape everything we build."
                />
              </ScrollReveal>
              <div className="mt-8 space-y-4">
                {[
                  {
                    number: "01",
                    title: "Operators first.",
                    body: "Every feature in Bizosto was built because someone running a service business needed it — not because it looked good in a demo. We build for the people who use the system every day, not the people who buy it once.",
                  },
                  {
                    number: "02",
                    title: "Connected by design.",
                    body: "The most expensive problem in any service business isn't the cost of tools — it's the cost of tools that don't talk to each other. Every module in Bizosto is built to feed the next one. That's not a feature. It's the architecture.",
                  },
                  {
                    number: "03",
                    title: "Clarity creates growth.",
                    body: "When every person in a business knows what's happening, what's expected, and what's at stake — the business grows faster. Bizosto doesn't just organise information. It makes clarity the default state of your operation.",
                  },
                ].map((item) => (
                  <ScrollReveal key={item.number}>
                    <div className="flex gap-6 rounded-xl border border-border bg-surface p-6">
                      <span className="flex-shrink-0 text-3xl font-semibold leading-none text-primary/30">
                        {item.number}
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <Container className="section-spacing">
          <ScrollReveal>
            <CTASection
              title="The same system we built for ourselves — now yours."
              description={trialAccessSummary}
              primaryAction="Start Free Trial"
              secondaryAction="Book a Demo"
            />
          </ScrollReveal>
        </Container>

      </div>
    </PageShell>
  );
}
