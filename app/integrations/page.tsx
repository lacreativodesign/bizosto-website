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
    category: "Productivity",
    description:
      "Designed for Google Calendar milestones, Gmail sending from supported records, Google Drive file access, and OAuth-based workspace connections.",
    features: ["Calendar sync", "Gmail sending", "Drive file storage", "OAuth 2.0 connection"],
  },
  {
    name: "Microsoft 365",
    category: "Productivity",
    description:
      "Designed for Outlook email and calendar workflows, OneDrive file access, and Microsoft workspace authentication.",
    features: ["Outlook calendar sync", "Outlook email sending", "OneDrive storage", "Microsoft tenant auth"],
  },
  {
    name: "Slack",
    category: "Communication",
    description:
      "Designed for channel and direct-message notifications plus selected command-driven workspace actions.",
    features: ["Channel notifications", "/bizosto slash commands", "DM alerts for task assignments", "Invoice paid alerts"],
  },
  {
    name: "QuickBooks Online",
    category: "Accounting",
    description:
      "Designed for workspace-authorized client, invoice, and payment synchronization with explicit conflict handling.",
    features: ["Client sync", "Invoice sync", "Payment reconciliation", "Conflict resolution mode"],
  },
  {
    name: "Xero",
    category: "Accounting",
    description:
      "Designed for OAuth connection, invoice and client synchronization, status logs, and explicit conflict handling.",
    features: ["Invoice sync", "Client sync", "Sync logs & status", "Conflict resolution"],
  },
  {
    name: "DocuSign",
    category: "Documents",
    description:
      "Designed for workspace-bound envelope sending, status callbacks, and signed-document association with the correct record.",
    features: ["Send envelopes from Bizosto", "Signature status updates", "Verified webhook updates", "Signed document storage"],
  },
  {
    name: "Mailchimp",
    category: "Marketing",
    description:
      "Designed for audience synchronization, tag mapping, segments, and unsubscribe-aware updates.",
    features: ["Audience sync", "Tag mapping", "Segment management", "Unsubscribe-safe automation"],
  },
  {
    name: "Twilio SMS",
    category: "Communication",
    description:
      "Designed for templated SMS, consent and opt-out handling, delivery status, and webhook evidence.",
    features: ["Templated SMS sending", "Delivery tracking", "Opt-out handling", "Webhook delivery logs"],
  },
  {
    name: "Calendly",
    category: "Scheduling",
    description:
      "Designed for lead booking links and workspace-bound event, cancellation, and reschedule updates.",
    features: ["Event sync", "Lead booking links", "Webhook-powered updates", "Cancellation handling"],
  },
  {
    name: "Stripe",
    category: "Payments",
    description:
      "Enterprise scope covers eligible client invoice payments through workspace-bound Stripe Connect accounts, subject to Stripe capability activation.",
    features: ["Client payment collection", "Invoice payment links", "Stripe Connect OAuth", "Automatic reconciliation"],
  },
  {
    name: "Zapier",
    category: "Automation",
    description:
      "Outbound webhooks can support compatible automation platforms; a native Zapier application is not currently advertised.",
    features: ["Outbound webhooks", "Custom event triggers", "Delivery logs & retry", "No-code automation"],
  },
];

const categories = ["All", "Productivity", "Accounting", "Communication", "Documents", "Marketing", "Scheduling", "Payments", "Automation"];

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
                title="An integration catalog built around the tools your team uses."
                subtitle="Controlled beta: connector availability varies by plan, provider configuration, and integration readiness. We’ll review the connections your workspace needs during onboarding."
              />
            </ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
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
                    <div>
                      <p className="text-base font-semibold text-foreground">{integration.name}</p>
                      <span className="mt-1 inline-block rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {integration.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Capabilities
                    </p>
                    <ul className="space-y-1.5">
                      {integration.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">•</span>
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
                title="Need something we don't list? Review the API and webhook fit."
                subtitle="Bizosto includes API and outbound-webhook surfaces for supported workspace events. Event availability varies during controlled beta."
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Outbound webhooks",
                  description: "Designed to deliver supported workspace events to a configured HTTPS endpoint with observable delivery results.",
                },
                {
                  title: "Test & debug",
                  description: "Inspect supported payloads and delivery results before activating a connector for your workspace.",
                },
                {
                  title: "Automation-platform path",
                  description: "Supported webhooks can connect to compatible automation platforms; a native Zapier app is not currently advertised.",
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
                description="Book a walkthrough to review connector fit and configuration for your controlled-beta workspace."
              />
            </ScrollReveal>
          </Container>
        </Section>
      </div>
    </PageShell>
  );
}
