import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PricingCards from "@/components/PricingCards";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Pricing",
  description: "Hybrid pricing tiers for Bizosto ERP with scope finalized in your demo.",
};

export default function PricingPage() {
  return (
    <div className="space-y-20 pb-20 pt-12">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Hybrid pricing aligned to your operational maturity"
          subtitle="Choose a starting tier and finalize modules, automation depth, and onboarding in the demo."
        />
        <div className="mt-8">
          <PricingCards />
        </div>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="Comparison"
          title="Compare capabilities across tiers"
          subtitle="Every tier includes ERP-grade workflows with pricing finalized in demo."
        />
        <div className="mt-8">
          <ComparisonTable />
        </div>
      </Container>

      <Container>
        <CTASection
          title="Need a custom rollout?"
          description="Book a demo to review scope, integrations, and operational outcomes."
        />
      </Container>
    </div>
  );
}
