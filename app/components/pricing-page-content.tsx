"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionHeading } from "@/app/components/section-heading";
import {
  lifetimeOffer,
  pricingPlans,
  type BillingPeriod,
} from "@/app/lib/manager-pricing";

type PricingPageContentProps = {
  variant?: "page" | "section";
};

export function PricingPageContent({ variant = "page" }: PricingPageContentProps) {
  const [billing, setBilling] = useState<BillingPeriod>("yearly");
  const isSection = variant === "section";

  return (
    <div className={`pricing-page ${isSection ? "pricing-page--section" : ""}`.trim()}>
      {isSection ? (
        <SectionHeading
          kicker="Pricing"
          title="Choose your power."
          description="Simple, transparent pricing that grows with your business."
          id="pricing-heading"
        />
      ) : (
        <header className="pricing-page__header">
          <p className="kicker pricing-page__kicker">Pricing</p>
          <h1 className="display-title pricing-page__title">Choose your power.</h1>
          <p className="pricing-page__subtitle">
            Simple, transparent pricing that grows with your business.
          </p>
        </header>
      )}

      <div
        className={`pricing-billing-toggle ${isSection ? "pricing-billing-toggle--section" : ""}`.trim()}
        role="group"
        aria-label="Billing period"
      >
        <button
          type="button"
          className={`pricing-billing-toggle__option ${billing === "monthly" ? "is-active" : ""}`}
          aria-pressed={billing === "monthly"}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`pricing-billing-toggle__option ${billing === "yearly" ? "is-active" : ""}`}
          aria-pressed={billing === "yearly"}
          onClick={() => setBilling("yearly")}
        >
          Yearly
          <span className="pricing-billing-toggle__save">Save 17%</span>
        </button>
      </div>

      <article className="pricing-lifetime paper-card">
        <div className="pricing-lifetime__badges">
          <span className="pricing-lifetime__badge">{lifetimeOffer.badge}</span>
          <span className="pricing-lifetime__badge pricing-lifetime__badge--muted">
            {lifetimeOffer.badgeDetail}
          </span>
        </div>
        <div className="pricing-lifetime__body">
          <div className="pricing-lifetime__copy">
            <h2 className="pricing-lifetime__title">{lifetimeOffer.title}</h2>
            <p className="pricing-lifetime__desc">{lifetimeOffer.description}</p>
            <p className="pricing-lifetime__perks">{lifetimeOffer.perks}</p>
          </div>
          <div className="pricing-lifetime__action">
            <div className="pricing-lifetime__prices">
              <span className="pricing-lifetime__price">{lifetimeOffer.price}</span>
              <span className="pricing-lifetime__price-old">{lifetimeOffer.originalPrice}</span>
            </div>
            <Link href={lifetimeOffer.href} className="framed-button" data-tone="amber">
              {lifetimeOffer.cta}
            </Link>
          </div>
        </div>
      </article>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => {
          const rates = billing === "yearly" ? plan.yearly : plan.monthly;

          return (
            <article
              key={plan.id}
              className={`pricing-card paper-card ${plan.featured ? "pricing-card--featured" : ""}`.trim()}
            >
              {plan.tag ? <span className="pricing-card__tag">{plan.tag}</span> : null}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <p className="pricing-card__subtitle">{plan.subtitle}</p>

              {plan.enterprise ? (
                <>
                  <p className="pricing-card__price pricing-card__price--contact">Contact</p>
                  <p className="pricing-card__period">{rates.billingLine}</p>
                </>
              ) : (
                <>
                  <p className="pricing-card__price">
                    {rates.displayPerMonth}
                    <span className="pricing-card__per">/ month</span>
                  </p>
                  <p className="pricing-card__period">{rates.billingLine}</p>
                </>
              )}

              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className="framed-button pricing-card__cta"
                data-tone={plan.featured ? "amber" : "dark"}
              >
                {plan.cta}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
