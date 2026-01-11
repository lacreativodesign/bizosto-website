\"use client\";

import Card from "@/components/Card";
import Reveal from "@/components/Reveal";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
}

export default function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05}>
          <Card className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
