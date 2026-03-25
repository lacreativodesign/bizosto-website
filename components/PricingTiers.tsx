import Badge from "@/components/Badge";
import Card from "@/components/Card";
import { pricingTiers } from "@/components/pricing-data";

export default function PricingTiers() {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.name}
            className={
              tier.highlight
                ? "relative border-primary/60 bg-surface shadow-lg shadow-primary/10"
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
                    <span
                      className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary"
                      aria-hidden="true"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 12.5l3.2 3.2L17 8.9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.cta.href}
                className={`mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-surface-muted text-foreground hover:bg-surface"
                }`}
              >
                {tier.cta.label}
              </a>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                14-day free trial • Cancel anytime
              </p>
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        All prices subject to applicable local tax based on billing location. A 0.5% platform
        handling fee applies to payments processed through Bizosto.
      </p>
    </>
  );
}
