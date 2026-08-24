import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Bizosto Integrations — Connect Your Existing Tools",
  description:
    "Explore Bizosto's controlled-beta connector catalog and review availability for your workspace during onboarding.",
  alternates: { canonical: "https://www.bizosto.com/integrations" },
};

export default function IntegrationsLayout({ children }: { children: ReactNode }) {
  return children;
}
