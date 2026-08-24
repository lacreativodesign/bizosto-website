import type { Metadata } from "next";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PricingTiers from "@/components/PricingTiers";
import ComparisonTable from "@/components/ComparisonTable";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import { signupCtaLabel, signupHref, trialAccessSummary } from "@/lib/launch-stage";

export const metadata: Metadata = {
  title: "Simple, Flat Plan Pricing — Monthly or Annual",
  description:
    "Compare Bizosto Starter, Pro, and Enterprise: $79, $149, or $299 monthly, with annual billing priced at ten months.",
  alternates: {
    canonical: "https://www.bizosto.com/pricing",
  },
};

const highlights = [
  "CRM, leads, deals & client management",
  "Project delivery; Production on Pro and Enterprise",
  "Finance on Pro and Enterprise",
  "HR on Enterprise",
  "Client portal: 10 Starter seats; unlimited on Pro and Enterprise",
  "Integration catalog with controlled-beta availability",
  "11 fixed roles with plan and permission controls",
  "AI Workforce BYOK in Pro and Enterprise plan scope",
  "Reports and operational dashboards",
  "Approval workflows & audit trails",
  "14-day free trial on your chosen plan",
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer: `Yes. ${trialAccessSummary}`,
  },
  {
    question: "What happens when my trial ends?",
    answer: "The selected paid plan starts automatically on day 15 unless you cancel during the trial. After a later failed payment, Bizosto applies a 7-day grace period, read-only access on day 8, and hard lock on day 21. Data is retained for 60 days after a non-payment hard lock and may then be deleted.",
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes. Upgrade immediately and the new modules activate right away — billing is prorated so you only pay for what you use. Downgrades take effect at the start of your next billing period.",
  },
  {
    question: "Is there a setup fee?",
    answer: "Self-service subscriptions use the plan prices shown here. Optional professional onboarding or custom integration work is separately scoped and quoted before purchase.",
  },
  {
    question: "How do the internal-user limits work?",
    answer: "Bizosto prices by plan rather than metering every seat. Starter includes up to 10 internal users, Pro up to 20, and Enterprise unlimited internal users. Moving beyond a plan limit requires a plan change.",
  },
  {
    question: "Can I enable or disable specific modules?",
    answer: "Yes. Your workspace admin can turn modules on or off at any time. If your team doesn't use HR yet, keep it off. Enable it when you need it — your plan tier determines which modules are available.",
  },
  {
    question: "Is there a fee when clients pay through Bizosto?",
    answer: "Only on the Enterprise plan, and only when your own clients pay their invoices through Bizosto's built-in Stripe Connect payments. In that case a 0.5% platform handling fee applies on top of Stripe's standard processing fee. It never applies to your Bizosto subscription, and Starter and Pro have no such fee.",
  },
  {
    question: "Which modules are included in each plan?",
    answer: "Starter includes CRM, Sales, Projects, and Client Portal. Pro adds Finance, Production, AI Workforce BYOK, and Website Embed. Enterprise adds HR, eligible Stripe Connect client payments, and white-label capabilities. The comparison table lists the exact limits.",
  },
  {
    question: "Does Bizosto include AI features?",
    answer: "AI Workforce is included in Pro and Enterprise plan scope and uses tenant-controlled BYOK where applicable. Availability varies by provider setup and controlled-beta readiness. Dangerous actions require explicit human approval, and provider usage charges are separate.",
  },
  {
    question: "What is the Website Embed feature?",
    answer: "Website Embed is included in Pro and Enterprise plan scope for routing supported website submissions into tenant-scoped CRM intake. Availability and supported form behavior vary during controlled beta.",
  },
  {
    question: "Is there a free trial for Pro or Enterprise?",
    answer: "Yes. Invited workspaces can use a 14-day trial on Pro or Enterprise to evaluate the selected plan's included modules. Controlled-beta capabilities such as AI Workforce require a supported provider setup. A card is required, no charge is made during the trial, and cancelling before day 15 means you pay nothing.",
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
                as="h1"
                eyebrow="Pricing"
                title="Three flat plan tiers. Monthly or annual."
                subtitle="Each plan has a fixed price and a defined internal-user limit: 10 on Starter, 20 on Pro, and unlimited on Enterprise. Annual billing is priced at ten months."
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal className="mt-10">
              <PricingTiers />
            </ScrollReveal>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Prices and included limits are shown above. Optional professional services are quoted separately.
            </p>
          </Container>
        </Section>



        <Section>
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Compare plans"
                title="Everything you get, side by side"
                subtitle="No per-user pricing. One flat monthly fee for your whole team."
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal className="mt-10">
              <ComparisonTable />
            </ScrollReveal>
          </Container>
        </Section>

        <Section>
          <Container className="relative z-10">
            <ScrollReveal>
              <SectionHeading
                eyebrow="What's Included"
                title="Core workflows in Starter. More operating depth in higher tiers."
                subtitle="Plan entitlements determine modules, internal-user limits, portal seats, and storage. The comparison above is the authoritative marketing summary."
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
                eyebrow="Pricing FAQ"
                title="Every pricing question, answered honestly."
                subtitle="Plan prices, limits, and the Enterprise Stripe Connect platform fee are published here. Controlled-beta onboarding begins with an access request."
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

        {/* ── Add-ons, Upgrades & Services ──────────── */}
        <Section>
          <Container>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Add-ons & Services"
                title="Annual billing and optional services."
                subtitle="Annual plan prices are fixed below. Professional onboarding and custom work require a written scope and quote."
              />
            </ScrollReveal>

            {/* Annual billing */}
            <ScrollReveal>
              <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-base font-semibold text-foreground">Annual Billing</p>
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-bold text-primary">
                        Best value
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pay annually and get 2 months free — a 16.7% saving on any plan.
                      Switch at any time from your billing settings.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm">
                      <span className="text-muted-foreground">
                        Starter: <strong className="text-foreground">$790/yr</strong>{" "}
                        <span className="text-xs line-through opacity-50">$948</span>
                      </span>
                      <span className="text-muted-foreground">
                        Pro: <strong className="text-foreground">$1,490/yr</strong>{" "}
                        <span className="text-xs line-through opacity-50">$1,788</span>
                      </span>
                      <span className="text-muted-foreground">
                        Enterprise: <strong className="text-foreground">$2,990/yr</strong>{" "}
                        <span className="text-xs line-through opacity-50">$3,588</span>
                      </span>
                    </div>
                  </div>
                  <a
                    href={signupHref(undefined, "annual")}
                    className="inline-flex flex-shrink-0 items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                  >
                    {signupCtaLabel} →
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Included features */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  badge: "Pro & Enterprise scope — controlled beta",
                  badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
                  title: "AI Workforce",
                  description:
                    "Tenant-controlled BYOK capabilities for operations, finance, sales, and reporting. Availability varies by provider setup during controlled beta; dangerous actions remain human-approval gated.",
                  cta: null,
                },
                {
                  badge: "Pro & Enterprise scope — controlled beta",
                  badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
                  title: "Website Embed Integration",
                  description:
                    "Routes supported website submissions into tenant-scoped CRM intake. Installation and form compatibility must be validated for each target website.",
                  cta: null,
                },
              ].map((item) => (
                <ScrollReveal key={item.title}>
                  <Card className="h-full space-y-3">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Paid services */}
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                {
                  badge: "Professional Service",
                  badgeColor: "bg-blue-500/10 text-blue-600",
                  title: "Professional Onboarding",
                  description:
                    "A scoped service for workspace setup, data-import planning, module configuration, and team enablement. Timing and price are confirmed in writing.",
                  cta: { label: "Book a session", href: "/book-demo" },
                },
                {
                  badge: "Professional Service",
                  badgeColor: "bg-blue-500/10 text-blue-600",
                  title: "Custom Integration Setup",
                  description:
                    "A separately scoped feasibility review and implementation service for integrations outside the available connector catalog.",
                  cta: { label: "Get a quote", href: "/contact" },
                },
                {
                  badge: "Planned capability",
                  badgeColor: "bg-amber-500/10 text-amber-700",
                  title: "WordPress Plugin",
                  description:
                    "A future WordPress connection is planned for supported website submissions. Availability, included form providers, and commercial terms will be published before release.",
                  cta: null,
                },
              ].map((item) => (
                <ScrollReveal key={item.title}>
                  <Card className="h-full space-y-3">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    {item.cta && (
                      <a
                        href={item.cta.href}
                        className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                      >
                        {item.cta.label} →
                      </a>
                    )}
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Platform fee note */}
            <ScrollReveal>
              <div className="mt-6 rounded-xl border border-border bg-surface-muted p-5 text-center">
                <p className="text-sm font-semibold text-foreground">
                  Enterprise client payments — 0.5% platform handling fee
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  On the Enterprise plan, when your own clients pay their invoices through Bizosto&apos;s
                  built-in Stripe Connect payments, a 0.5% platform handling fee applies on top of
                  Stripe&apos;s standard processing rate. It never applies to your Bizosto subscription, and
                  Starter and Pro have no such fee.
                </p>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

      </div>
    </PageShell>
  );
}
