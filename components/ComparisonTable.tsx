import Card from "@/components/Card";

const rows = [
  {
    feature: "Automated lead capture",
    foundation: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Workflow templates",
    foundation: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Financial operations",
    foundation: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Custom automation",
    foundation: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "Dedicated success manager",
    foundation: false,
    growth: false,
    enterprise: true,
  },
];

function Check({ enabled }: { enabled: boolean }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold ${
        enabled ? "bg-primary/20 text-primary" : "bg-surface-muted text-muted-foreground"
      }`}
    >
      {enabled ? "Yes" : "-"}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid grid-cols-4 border-b border-border bg-surface-muted text-sm font-semibold text-foreground">
        <div className="px-4 py-3">Capability</div>
        <div className="px-4 py-3">Foundation</div>
        <div className="px-4 py-3">Growth</div>
        <div className="px-4 py-3">Enterprise</div>
      </div>
      <div className="divide-y divide-border">
        {rows.map((row) => (
          <div key={row.feature} className="grid grid-cols-4 items-center text-sm text-muted-foreground">
            <div className="px-4 py-3 text-foreground">{row.feature}</div>
            <div className="px-4 py-3">
              <Check enabled={row.foundation} />
            </div>
            <div className="px-4 py-3">
              <Check enabled={row.growth} />
            </div>
            <div className="px-4 py-3">
              <Check enabled={row.enterprise} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
