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
    "Bizosto is the operating system for service businesses — CRM, sales, projects, finance, HR, and AI agents in one flat-priced platform.",
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
    "An all-in-one ERP for service businesses: CRM, sales, project delivery, finance, HR, and AI Workforce — one flat price, no per-user fees.",
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
        "Full ERP for the whole team, including AI Workforce. Billed monthly, flat — no per-user fees.",
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
        text: "Every new workspace gets a full 14-day free trial on the plan you choose. A card is required, but you are not charged until day 15, and you can cancel any time before then and pay nothing.",
      },
    },
    {
      "@type": "Question",
      name: "Why isn't Bizosto per-user like other tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per-user pricing punishes growth. Bizosto charges a flat monthly fee so you can scale your team without scaling your software costs.",
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
        text: "AI Workforce is built into Pro and Enterprise plans at no extra charge, with COO, Finance, Sales, and Reports agents. You bring your own OpenAI or Anthropic API key and Bizosto never marks up your AI usage.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a setup fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No setup fees. What you see on the pricing page is what you pay — no hidden charges.",
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
