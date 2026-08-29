"use client";

import type { ReactNode } from "react";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";

interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeatureGridProps {
  items: FeatureItem[];
}

export default function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ScrollReveal key={item.title}>
          <Card className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="icon-tile inline-flex h-9 w-9 items-center justify-center rounded-xl border text-primary transition duration-300 group-hover:scale-105 group-hover:border-primary/40">
                {item.icon}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
}
