"use client";
import { useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";

const integrations = [
  {
    name: "Google Workspace",
    logoDomain: "workspace.google.com",
    category: "Productivity",
    description:
      "Sync Google Calendar with your project milestones and delivery deadlines. Send emails via Gmail directly from client and lead records. Store and access project files in Google Drive — all from inside Bizosto.",
    features: ["Calendar sync", "Gmail sending", "Drive file storage", "OAuth 2.0 connection"],
  },
  {
    name: "Microsoft 365",
    logoDomain: "microsoft365.com",
    category: "Productivity",
    description:
      "For teams running on Microsoft infrastructure. Outlook email and calendar sync, OneDrive for project file storage. Every email sent, every meeting booked — connected to the right client record in Bizosto.",
    features: ["Outlook calendar sync", "Outlook email sending", "OneDrive storage", "Microsoft tenant auth"],
  },
  {
    name: "Slack",
    logoDomain: "slack.com",
    category: "Communication",
    description:
      "Get instant Slack notifications when invoices are paid, projects hit milestones, or tasks are assigned. Use the /bizosto slash command to check invoice status, create tasks, or request leave — without leaving Slack.",
    features: ["Channel notifications", "/bizosto slash commands", "DM alerts for task assignments", "Invoice paid alerts"],
  },
  {
    name: "QuickBooks Online",
    logoDomain: "quickbooks.intuit.com",
    category: "Accounting",
    description:
      "Two-way sync between Bizosto and QuickBooks. Clients, invoices, and payments stay in sync automatically. Your finance team gets the accounting depth they need. Your operations team doesn't have to think about it.",
    features: ["Client sync", "Invoice sync", "Payment reconciliation", "Conflict resolution mode"],
  },
  {
    name: "Xero",
    logoDomain: "xero.com",
    category: "Accounting",
    description:
      "Full OAuth connection with detailed sync logs and conflict resolution. Accounting entries in Xero are automatically matched to your Bizosto invoices. No manual exports, no duplicate data entry.",
    features: ["Invoice sync", "Client sync", "Sync logs & status", "Conflict resolution"],
  },
  {
    name: "DocuSign",
    logoDomain: "docusign.com",
    category: "Documents",
    description:
      "Send contracts and proposals for e-signature directly from Bizosto. Get real-time status updates as recipients open and sign. Completed documents are stored automatically against the right client record.",
    features: ["Send envelopes from Bizosto", "Real-time signature status", "Webhook-powered updates", "Signed document storage"],
  },
  {
    name: "Mailchimp",
    logoDomain: "mailchimp.com",
    category: "Marketing",
    description:
      "Sync your CRM clients as Mailchimp audiences automatically. Map tags, manage segments, and run unsubscribe-safe email campaigns — without manual list exports. When a client is added in Bizosto, Mailchimp updates.",
    features: ["Audience sync", "Tag mapping", "Segment management", "Unsubscribe-safe automation"],
  },
  {
    name: "Twilio SMS",
    logoDomain: "twilio.com",
    category: "Communication",
    description:
      "Send automated SMS to clients and team members directly from Bizosto. Invoice payment reminders, project update alerts, and appointment confirmations — all templated, trigger-based, and logged.",
    features: ["Templated SMS sending", "Delivery tracking", "Opt-out handling", "Webhook delivery logs"],
  },
  {
    name: "Calendly",
    logoDomain: "calendly.com",
    category: "Scheduling",
    description:
      "Book meetings directly from leads and deals in Bizosto. Calendly events sync automatically so scheduled calls appear against the right record. Cancellations and reschedules update in real time via webhook.",
    features: ["Event sync", "Lead booking links", "Webhook-powered updates", "Cancellation handling"],
  },
  {
    name: "Stripe",
    logoDomain: "stripe.com",
    category: "Payments",
    description:
      "Accept client payments directly through Bizosto using Stripe Connect. Each client pays you through their own dedicated payment link. Payments are recorded against the right invoice automatically — no manual reconciliation.",
    features: ["Client payment collection", "Invoice payment links", "Stripe Connect OAuth", "Automatic reconciliation"],
  },
  {
    name: "Zapier",
    logoDomain: "zapier.com",
    category: "Automation",
    description:
      "Connect Bizosto to 5,000+ apps via outbound webhooks. Build automations without writing code — trigger a Zap when an invoice is created, a project is delivered, or a lead changes status. Your workflow, your rules.",
    features: ["Outbound webhooks", "Custom event triggers", "Delivery logs & retry", "No-code automation"],
  },
];

const categories = ["All", "Productivity", "Accounting", "Communication", "Documents", "Marketing", "Scheduling", "Payments", "Automation"];

function integrationLogoUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? integrations : integrations.filter((i) => i.category === activeCategory);

  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container className="space-y-6">
            <ScrollReveal>
              <SectionHeading
                as="h1"
                eyebrow="Integrations"
                title="Bizosto connects to the tools your team already uses."
                subtitle="You don't have to rip and replace your entire stack. Bizosto integrates deeply with the apps your team lives in — so data flows both ways, automatically, from day one."
              />
            </ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                    activeCategory === cat
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((integration, index) => (
                <ScrollReveal key={integration.name} delay={index * 50}>
                  <Card className="space-y-4 h-full">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-2 shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={integrationLogoUrl(integration.logoDomain)}
                          alt=""
                          width={28}
                          height={28}
                          loading="lazy"
                          decoding="async"
                          className="h-7 w-7 object-contain"
                        />
                      </span>
                      <div>
                        <p className="text-base font-semibold text-foreground">{integration.name}</p>
                        <span className="mt-1 inline-block rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                          {integration.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                    <ul className="space-y-1.5">
                      {integration.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
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
                eyebrow="Webhooks & API"
                title="Need something we don't list? Build it yourself."
                subtitle="Every Bizosto workspace includes outbound webhook subscriptions for every major event — invoice created, project delivered, lead status changed, and more. Connect to any tool, any workflow, any automation."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Outbound webhooks",
                  description: "Subscribe to any event in Bizosto and receive a real-time POST to any URL. Delivery logs and retry logic included.",
                },
                {
                  title: "Test & debug",
                  description: "Send test events, inspect payloads, retry failed deliveries, and monitor webhook health — all from your admin settings.",
                },
                {
                  title: "Zapier-ready",
                  description: "Build no-code automations connecting Bizosto to 5,000+ apps via Zapier. No developer required.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 80}>
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
                title="Your stack, connected. Your team, aligned."
                description="Start your free 14-day trial and connect your first integration in minutes. No developer required."
              />
            </ScrollReveal>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
