import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { PageHero } from "@/app/components/page-hero";
import { SectionHeading } from "@/app/components/section-heading";
import { CheckList } from "@/app/components/check-list";
import { deepFeatures, keyFeatures } from "@/app/lib/manager-features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore YoungMenu Manager features: counter POS, kitchen display, menu management, billing, and owner reports for restaurants, cafes, and home bakers.",
  alternates: {
    canonical: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1">
          <PageHero
            kicker="YoungMenu Manager"
            title="Everything you need to run your business."
            description="Powerful tools built for restaurants, cafes, and home bakers — from the first counter shift to growing customer trust."
          />

          <section className="wood-surface section-block">
            <div className="site-shell">
              <SectionHeading
                kicker="Key features"
                title="Built for how food businesses run."
                description="Counter POS, kitchen flow, menus, and reports — designed to stay calm during busy service."
              />
              <div className="feature-icon-grid mt-12">
                {keyFeatures.map((feature) => (
                  <article key={feature.title} className="feature-icon-card paper-card">
                    <span className="feature-icon-card__icon" aria-hidden="true">
                      {feature.icon}
                    </span>
                    <h3 className="feature-icon-card__title">{feature.title}</h3>
                    <p className="feature-icon-card__desc">{feature.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="texture-alt section-block">
            <div className="site-shell">
              <SectionHeading
                kicker="In depth"
                title="Advanced tools to transform your business."
                description="See how each part of YoungMenu Manager fits together for your team."
              />
              <div className="feature-showcase-list mt-14">
                {deepFeatures.map((feature) => (
                  <article
                    key={feature.kicker}
                    className={`feature-showcase ${feature.reverse ? "feature-showcase--reverse" : ""}`.trim()}
                  >
                    <div className="feature-showcase__copy">
                      <p className="kicker">{feature.kicker}</p>
                      <h3 className="display-title feature-showcase__title mt-3">
                        {feature.title}
                      </h3>
                      <p className="feature-showcase__desc">{feature.description}</p>
                      <CheckList items={feature.points} />
                    </div>
                    <div className="feature-showcase__media paper-card">
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        width={800}
                        height={520}
                        className="h-auto w-full object-contain p-3"
                        sizes="(max-width: 1024px) 100vw, 540px"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="texture-soft section-block">
            <div className="site-shell text-center">
              <h2 className="display-title text-4xl text-[#241813] sm:text-5xl">
                Ready to see it in action?
              </h2>
              <p
                className="mx-auto mt-5 max-w-xl text-base leading-8"
                style={{ color: "var(--page-muted)" }}
              >
                Book a demo and we will walk you through setup for your menu, counter, and
                kitchen workflow.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="framed-button" data-tone="amber">
                  Request a demo
                </Link>
                <Link href="/youngmenu-manager" className="framed-button" data-tone="dark">
                  YoungMenu Manager
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
