import type { Metadata } from "next";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PricingTiers from "@/components/PricingTiers";
import ComparisonTable from "@/components/ComparisonTable";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Simple, Flat Pricing — Your Whole Team for One Monthly Fee",
  description:
    "Bizosto pricing starts at $79/month for your entire team. No per-user fees. No hidden charges. Compare Starter, Pro, and Enterprise plans.",
  alternates: {
    canonical: "https://www.bizosto.com/pricing",
  },
};

const highlights = [
  "CRM, leads, deals & client management",
  "Project delivery & production workflows",
  "Finance, invoicing, payroll & tax",
  "HR, attendance, leave & onboarding",
  "Client portal with payment collection",
  "14 integrations: Slack, Google, QuickBooks, Xero & more",
  "11 user roles — every team member covered",
  "AI Workforce — 4 live agents built into your dashboard",
  "Natural language reports — ask questions, get charts",
  "Real-time reports & performance dashboards",
  "Approval workflows & audit trails",
  "14-day free trial, all modules unlocked",
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes — every new workspace gets a full 14-day trial with every module unlocked. No credit card required. No restrictions. You see the real product from day one, not a locked-down demo version.",
  },
  {
    question: "What happens when my trial ends?",
    answer: "You'll be prompted to choose a plan and add a payment method. If you don't subscribe, your workspace enters a read-only grace period for 30 days before being locked. Your data is always safe.",
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes. Upgrade immediately and the new modules activate right away — billing is prorated so you only pay for what you use. Downgrades take effect at the start of your next billing period.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees, ever. What you see on the pricing page is what you pay. No hidden charges, no surprise invoices.",
  },
  {
    question: "Why isn't Bizosto per-user like other tools?",
    answer: "Because per-user pricing punishes growth. When you hire your 11th person, your tool bill shouldn't jump. Bizosto charges a flat monthly fee so you can scale your team without scaling your software costs.",
  },
  {
    question: "Can I enable or disable specific modules?",
    answer: "Yes. Your workspace admin can turn modules on or off at any time. If your team doesn't use HR yet, keep it off. Enable it when you need it — your plan tier determines which modules are available.",
  },
  {
    question: "Is there a fee when clients pay through Bizosto?",
    answer: "A 0.5% platform handling fee applies to payments processed through the Bizosto payment terminal — on top of Stripe's standard processing fee. This only applies to client payments, not your subscription.",
  },
  {
    question: "How does Bizosto compare to Zoho or HubSpot?",
    answer: "Zoho One costs $37–$90 per user per month. HubSpot Professional starts at $100 per user per month. For a team of 20, that's $740–$2,000/month just for one of those platforms. Bizosto gives your entire team full ERP capability for $149/month flat. One price. Every module. No per-user penalties.",
  },
  {
    question: "Does Bizosto include AI features?",
    answer: "Yes — AI Workforce is built into Pro and Enterprise plans at no extra charge. You get four live AI agents: COO (daily business briefings), Finance (overdue invoice monitoring with approval-gated payment reminders), Sales (pipeline analysis with approval-gated lead stage updates), and AI Reports (ask any question in plain English, get a live chart). You bring your own OpenAI or Anthropic API key — Bizosto never marks up your AI usage.",
  },
  {
    question: "What is the Website Embed feature?",
    answer: "Bizosto generates a one-line JavaScript snippet you paste into any website — WordPress, Shopify, Wix, Squarespace, Webflow, or custom HTML. It automatically captures form submissions and routes them into your Bizosto CRM as leads, tagged with the source page. No Zapier required. Available on Pro and Enterprise plans.",
  },
  {
    question: "Is there a free trial for Pro or Enterprise?",
    answer: "Yes. Every new workspace gets a full 14-day trial with every Pro and Enterprise module unlocked — including AI Workforce. No credit card required. You see the real product from day one.",
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
                title="One flat price covers your whole team. Always."
                subtitle="While other platforms charge per user and watch your bill grow as you hire — Bizosto charges one flat monthly fee. Grow your team. The price doesn't move."
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
                title="Everything your service business needs — in every plan."
                subtitle="Every Bizosto plan includes the core platform. Higher tiers unlock more modules, more storage, and dedicated support. No surprises, no add-ons, no gotchas."
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
                subtitle="We believe in transparent pricing. No sales calls needed to find out what it costs. No hidden fees to discover after you sign up."
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
