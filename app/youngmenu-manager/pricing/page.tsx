import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { PricingPageContent } from "@/app/components/pricing-page-content";

export const metadata: Metadata = {
  title: "Pricing — YoungMenu Manager",
  description:
    "Affordable YoungMenu Manager plans for restaurants, cafes, and home bakers. Smart, Automated, and Enterprise pricing with yearly savings and lifetime access.",
  alternates: {
    canonical: "/youngmenu-manager/pricing",
  },
};

export default function ManagerPricingPage() {
  return (
    <>
      <SiteHeader />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1">
          <section className="pricing-page-section wood-surface section-block">
            <div className="site-shell">
              <PricingPageContent />
              <p className="pricing-page__note">
                Need help choosing a plan?{" "}
                <Link href="/contact">Contact our team</Link> for a demo or enterprise
                rollout.
              </p>
            </div>
          </section>

          <section className="texture-soft section-block">
            <div className="site-shell text-center">
              <h2 className="display-title text-4xl text-[#241813] sm:text-5xl">
                Not sure which plan fits?
              </h2>
              <p
                className="mx-auto mt-5 max-w-xl text-base leading-8"
                style={{ color: "var(--page-muted)" }}
              >
                Tell us about your menu size, outlets, and team. We will recommend
                the right setup and walk you through onboarding.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="framed-button" data-tone="amber">
                  Request a demo
                </Link>
                <Link href="/features" className="framed-button" data-tone="dark">
                  See features
                </Link>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
