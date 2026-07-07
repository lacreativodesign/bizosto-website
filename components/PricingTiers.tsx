"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import { pricingTiers } from "@/components/pricing-data";

export default function PricingTiers() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      {/* Billing toggle */}
      <div className="mb-8 flex flex-col items-center gap-3">
        <div className="inline-flex items-center rounded-full border border-border bg-surface p-1">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              !isAnnual
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              isAnnual
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Annual
          </button>
        </div>
        {isAnnual ? (
          <p className="text-sm font-semibold text-green-600">
            🎉 2 months free — pay for 10, get 12
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Switch to annual and get 2 months free
          </p>
        )}
      </div>

      {/* Pricing cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.name}
            className={
              tier.highlight
                ? "relative border-primary/60 bg-surface shadow-xl shadow-primary/15 ring-1 ring-primary/30 lg:scale-[1.03]"
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
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  {isAnnual ? tier.annualPerMonth : tier.monthlyPrice}
                </h3>
                {isAnnual ? (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {tier.annualPrice} billed annually
                    </span>
                    <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-600">
                      {tier.annualSaving}
                    </span>
                  </div>
                ) : null}
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
                href={isAnnual ? tier.cta.annualHref : tier.cta.monthlyHref}
                className={`mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  tier.highlight
                    ? "btn-sheen bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25"
                    : "border border-border bg-surface-muted text-foreground hover:border-primary/40 hover:text-primary"
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
