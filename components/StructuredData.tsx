import { trialAccessSummary } from "@/lib/launch-stage";

/**
 * S37: JSON-LD structured data for search engines.
 *
 * The site had zero structured data, so Google had no machine-readable description of what
 * Bizosto is, what it costs, or its FAQs — which forfeits rich results (the pricing/offer
 * snippets and expandable FAQ entries that competitors get) and reads as unpolished to a
 * technical reviewer checking the page source.
 *
 * This emits three schemas the site can support truthfully:
 *   - Organization: brand identity (name, URL, logo, social).
 *   - SoftwareApplication + Offers: the three plans and their real prices, so Google can show
 *     pricing rich snippets.
 *   - FAQPage: the top pricing FAQs, eligible for expandable FAQ results.
 *
 * It renders as a single <script type="application/ld+json"> and takes no props, so it can sit
 * once in the root layout and apply site-wide. The content mirrors what is actually published
 * on the pricing and product pages; keep it in sync when those change.
 */

const SITE_URL = "https://www.bizosto.com";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Bizosto",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-32.png`,
  description:
    "Bizosto is the operating system for service businesses, with plan-scoped CRM, sales, projects, finance, production, HR, client portal, and AI Workforce capabilities.",
  sameAs: [] as string[],
};

const softwareApplication = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "Bizosto",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "A plan-based operating platform for service businesses, with CRM, sales, project delivery, finance, production, HR, client portal, and AI Workforce capabilities.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "79",
      priceCurrency: "USD",
      description: "For small teams getting organized. Billed monthly.",
      url: `${SITE_URL}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "149",
      priceCurrency: "USD",
      description:
        "Up to 20 internal users, with Starter modules plus Finance, Production, AI Workforce BYOK, and Website Embed. Billed monthly.",
      url: `${SITE_URL}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "299",
      priceCurrency: "USD",
      description:
        "Everything in Pro plus HR, Stripe Connect client payments, and white-label. Billed monthly.",
      url: `${SITE_URL}/pricing`,
    },
  ],
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: trialAccessSummary,
      },
    },
    {
      "@type": "Question",
      name: "How do Bizosto internal-user limits work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter includes up to 10 internal users, Pro up to 20, and Enterprise unlimited internal users. Each tier has a fixed monthly or annual price.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change plans anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Upgrades activate immediately and are prorated; downgrades take effect at the start of your next billing period.",
      },
    },
    {
      "@type": "Question",
      name: "Does Bizosto include AI features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Workforce is included in Pro and Enterprise plan scope with tenant-controlled BYOK where applicable. Provider usage is separate, availability varies during controlled beta, and dangerous actions require human approval.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a setup fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-service subscriptions use the published plan prices. Optional professional onboarding and custom integration work are separately scoped and quoted before purchase.",
      },
    },
  ],
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organization, softwareApplication, faqPage],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject; there is no user input in this static graph.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
