import PricingTiers from "@/components/PricingTiers";

/**
 * Compatibility wrapper for older imports. PricingTiers and pricing-data are the only
 * authoritative marketing plan source; keeping a second price table caused published drift.
 */
export default function PricingCards() {
  return <PricingTiers />;
}
