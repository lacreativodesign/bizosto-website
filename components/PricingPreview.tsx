"use client";

import { motion } from "framer-motion";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  who: string;
  cta: { label: string; href: string };
  highlight?: boolean;
  benefits: string[];
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Starting at $99/mo",
    who: "Ideal for lean teams replacing scattered tools.",
    cta: { label: "Get Started", href: "/contact" },
    benefits: [
      "Organized lead capture with fast routing",
      "Standardized client onboarding in one workspace",
      "Project workflows that stay consistent",
      "Visibility across accounts and tasks",
      "Guided setup for quick wins",
    ],
  },
  {
    name: "Growth",
    price: "Starting at $299/mo",
    who: "Built for scaling agencies standardizing delivery.",
    cta: { label: "Book a Demo", href: "/book-demo" },
    highlight: true,
    benefits: [
      "Revenue operations with a connected pipeline",
      "Automation for handoffs and approvals",
      "Utilization and margin clarity per account",
      "Role-based access for growing teams",
      "Launch support for multi-team rollouts",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    who: "For complex orgs needing advanced governance.",
    cta: { label: "Talk to Sales", href: "/book-demo" },
    benefits: [
      "Enterprise-grade controls and permissions",
      "Custom workflows and module orchestration",
      "Dedicated success team and onboarding",
      "Advanced reporting and data oversight",
      "Security alignment for larger orgs",
    ],
  },
];

interface PricingPreviewProps {
  className?: string;
  showNote?: boolean;
}

export default function PricingPreview({ className, showNote = true }: PricingPreviewProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card
              className={
                tier.highlight
                  ? "relative border-primary/60 bg-surface shadow-[var(--shadow-card-hover)]"
                  : "bg-card"
              }
            >
              {tier.highlight ? (
                <Badge className="absolute right-6 top-6 border-primary/40 bg-primary/10 text-primary">
                  Most Popular
                </Badge>
              ) : null}
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">{tier.name}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">{tier.price}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.who}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={tier.cta.href}
                  className="mt-2 w-full"
                  variant={tier.highlight ? "primary" : "secondary"}
                >
                  {tier.cta.label}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      {showNote ? (
        <p className="text-center text-sm text-muted-foreground">
          Final pricing depends on modules and team size.
        </p>
      ) : null}
    </div>
  );
}
