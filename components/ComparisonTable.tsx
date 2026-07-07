const rows = [
  { feature: "Users", starter: "10", pro: "20", enterprise: "Unlimited" },
  { feature: "Storage", starter: "20GB", pro: "75GB", enterprise: "250GB" },
  { feature: "CRM & Sales pipeline", starter: true, pro: true, enterprise: true },
  { feature: "Project management", starter: true, pro: true, enterprise: true },
  { feature: "Notifications", starter: true, pro: true, enterprise: true },
  { feature: "Basic Reports", starter: true, pro: true, enterprise: true },
  { feature: "Finance & Invoicing", starter: false, pro: true, enterprise: true },
  { feature: "Production management", starter: false, pro: true, enterprise: true },
  { feature: "Approvals workflow", starter: false, pro: true, enterprise: true },
  { feature: "Full Reports & Analytics", starter: false, pro: true, enterprise: true },
  { feature: "AI Workforce agents", starter: false, pro: true, enterprise: true },
  { feature: "Natural language AI reports", starter: false, pro: true, enterprise: true },
  { feature: "Website embed integration", starter: false, pro: true, enterprise: true },
  { feature: "HR & Payroll", starter: false, pro: false, enterprise: true },
  { feature: "Client Stripe Connect", starter: false, pro: false, enterprise: true },
  { feature: "White-label options", starter: false, pro: false, enterprise: true },
  { feature: "Client portal seats", starter: "10", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Support", starter: "Email 48h", pro: "Priority + Chat", enterprise: "Dedicated same-day" },
];

type Row = {
  feature: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
};

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return (
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
          value
            ? "bg-primary/15 text-primary"
            : "bg-surface-muted text-muted-foreground"
        }`}
      >
        {value ? "✓" : "—"}
      </span>
    );
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[540px] text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-muted">
            <th className="sticky left-0 z-10 bg-surface-muted px-5 py-4 text-left font-semibold text-foreground">Feature</th>
            <th className="px-5 py-4 text-center font-semibold text-foreground">Starter</th>
            <th className="bg-primary/[0.04] px-5 py-4 text-center font-semibold text-primary">Pro ★</th>
            <th className="px-5 py-4 text-center font-semibold text-foreground">Enterprise</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row: Row) => (
            <tr key={row.feature} className="bg-surface transition-colors duration-150 hover:bg-surface-muted">
              <td className="sticky left-0 z-10 bg-inherit px-5 py-3 font-medium text-foreground">{row.feature}</td>
              <td className="px-5 py-3 text-center text-muted-foreground">
                <Cell value={row.starter} />
              </td>
              <td className="bg-primary/[0.04] px-5 py-3 text-center text-muted-foreground">
                <Cell value={row.pro} />
              </td>
              <td className="px-5 py-3 text-center text-muted-foreground">
                <Cell value={row.enterprise} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
