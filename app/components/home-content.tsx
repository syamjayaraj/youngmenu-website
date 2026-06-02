import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/site-footer";
import { RevealObserver } from "@/app/components/reveal-observer";
import { ContactForm } from "@/app/components/contact-form";
import type { AppMode } from "@/app/lib/app-mode";

function rs(delay: string): CSSProperties {
  return { "--reveal-delay": delay } as CSSProperties;
}

const heroByMode = {
  manager: {
    eyebrow: "For restaurants, cafes, and home bakers",
    title: "Run your food business, your way.",
    description:
      "YoungMenu Manager is the operations app for food businesses. Manage menus, orders, billing, kitchen flow, and team roles from one place.",
    ctaPrimary: "Request a demo",
    ctaSecondary: "See features",
    ctaSecondaryHref: "#features",
  },
  users: {
    eyebrow: "For diners and takeaway customers",
    title: "Order from your favourite places.",
    description:
      "YoungMenu helps customers browse digital menus, place orders, and track status in real time.",
    ctaPrimary: "Request a demo",
    ctaSecondary: "Explore features",
    ctaSecondaryHref: "#products",
  },
} as const;

const productsSectionByMode = {
  manager: {
    kicker: "The management app",
    title: "Built for how food businesses run.",
    description:
      "From counter POS to kitchen display and owner reports, YoungMenu Manager keeps your team aligned during every service.",
  },
  users: {
    kicker: "Our products",
    title: "Two apps. One complete workflow.",
    description:
      "Switch between YoungMenu Manager and YoungMenu to explore how each app fits your team and your customers.",
  },
} as const;

const integrationSectionByMode = {
  manager: {
    kicker: "Operations in sync",
    title: "Counter, floor, and kitchen on one screen.",
    description:
      "Orders move from POS to kitchen display instantly. Owners track live status, billing, and service flow without switching tools.",
    points: [
      "Counter POS and table order management",
      "Kitchen display with live order queue",
      "Menu, modifiers, and pricing in one place",
      "Staff roles with the right view per device",
    ],
  },
  users: {
    kicker: "Connected experience",
    title: "Your business and customers, always in sync.",
    description:
      "When businesses run operations in YoungMenu Manager, customers get live menus and order updates through YoungMenu.",
    points: [
      "Menu updates sync from Manager to customer app",
      "Orders flow from QR scan to kitchen in seconds",
      "Owners see live status across dine-in and takeaway",
      "Customers get accurate pricing and availability",
    ],
  },
} as const;

const statsByMode = {
  manager: [
    { label: "Active businesses", value: "100+" },
    { label: "Orders processed", value: "1M+" },
    { label: "Team devices", value: "500+" },
  ],
  users: [
    { label: "Partner restaurants", value: "100+" },
    { label: "Happy customers", value: "50K+" },
    { label: "QR menus scanned", value: "250K+" },
  ],
} as const;

const products = [
  {
    id: "manager" as const,
    audience: "For Restaurants, Cafes, and Home Bakers",
    title: "YoungMenu Manager",
    subtitle: "Run your food business with total control.",
    description:
      "A complete restaurant operations platform with counter POS, menu setup, table order flow, kitchen display, billing, and owner analytics.",
    points: [
      "Counter POS and billing workflow",
      "Kitchen display and order queue",
      "Staff role management and permissions",
      "Business analytics and sales reports",
      "Menu and modifier management",
      "Multi-outlet ready architecture",
    ],
  },
  {
    id: "users" as const,
    audience: "For Your Customers",
    title: "YoungMenu",
    subtitle: "A faster ordering experience for customers.",
    description:
      "Customers scan, browse, and place orders from a mobile-friendly digital menu. They can track order status and reorder quickly from their table or home.",
    points: [
      "QR menu with rich item previews",
      "Live order status for customers",
      "Saved preferences and quick reorders",
      "Smooth dine-in and takeaway ordering",
      "Offer banners and featured items",
      "Loyalty-friendly customer journey",
    ],
  },
];

const testimonials = [
  {
    quote:
      "YoungMenu helped us reduce ordering confusion during busy hours. The manager app and customer ordering flow work perfectly together.",
    author: "Riyas",
    role: "Owner | DineHouse Restaurant",
  },
  {
    quote:
      "Our cafe team now takes and serves orders faster. Customers love the simple QR ordering experience and we love the real-time control.",
    author: "Harisagar Chaya Makkani",
    role: "Owner | Pavayil Cafe",
  },
  {
    quote:
      "From menu setup to billing and reports, everything is in one place. It feels built for how food businesses actually run.",
    author: "Nithin",
    role: "Founder | Urban Bake Studio",
  },
];

function productIndex(mode: AppMode) {
  return mode === "manager" ? 0 : 1;
}

export function HomeContent({ mode }: { mode: AppMode }) {
  const hero = heroByMode[mode];
  const stats = statsByMode[mode];
  const activeIndex = productIndex(mode);

  return (
    <>
      <RevealObserver />

      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1">
          <section
            aria-label="Hero"
            id={`app-panel-${mode}`}
            role="tabpanel"
            className="hero-section relative isolate flex min-h-svh items-center overflow-hidden"
          >
            <div className="hero-overlay absolute inset-0" />
            <div className="site-shell relative z-10 w-full py-24 pt-32 sm:pt-36 lg:pt-36">
              <div className="mx-auto max-w-4xl text-center">
                <p className="eyebrow-pill mx-auto mb-6">{hero.eyebrow}</p>

                <h1 className="display-title text-5xl text-[#241813] sm:text-[4.2rem]">
                  {hero.title}
                </h1>
                <p
                  className="mx-auto mt-6 max-w-3xl text-base leading-8 sm:text-lg"
                  style={{ color: "var(--page-muted)" }}
                >
                  {hero.description}
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link href="#contact" className="framed-button" data-tone="amber">
                    {hero.ctaPrimary}
                  </Link>
                  <Link
                    href={hero.ctaSecondaryHref}
                    className="framed-button hero-secondary"
                    data-tone="dark"
                  >
                    {hero.ctaSecondary}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="texture-soft py-16 sm:py-20">
            <div className="site-shell">
              <div className="grid gap-5 sm:grid-cols-3">
                {stats.map((stat, i) => (
                  <article
                    key={stat.label}
                    data-reveal
                    className="paper-card reveal rounded-3xl p-7 text-center"
                    style={rs(`${i * 0.08}s`)}
                  >
                    <p className="display-title text-5xl text-[#241813]">
                      {stat.value}
                    </p>
                    <p
                      className="mt-3 text-xs font-semibold uppercase tracking-[0.24em]"
                      style={{ color: "var(--page-muted)" }}
                    >
                      {stat.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="products"
            aria-labelledby="products-heading"
            className="wood-surface py-24 sm:py-28"
          >
            <div className="site-shell">
              <div data-reveal className="reveal text-center">
                <p className="kicker">{productsSectionByMode[mode].kicker}</p>
                <h2
                  id="products-heading"
                  className="display-title mt-4 text-5xl text-[#241813] sm:text-[3.7rem]"
                >
                  {productsSectionByMode[mode].title}
                </h2>
                <p
                  className="mx-auto mt-5 max-w-2xl text-base leading-8"
                  style={{ color: "var(--page-muted)" }}
                >
                  {productsSectionByMode[mode].description}
                </p>
              </div>

              {mode === "manager" ? (
                <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
                  <article
                    data-reveal
                    className="paper-card reveal rounded-3xl p-8"
                    style={rs("0s")}
                  >
                    <p className="kicker">{products[0].audience}</p>
                    <h3 className="display-title mt-4 text-4xl text-[#241813]">
                      {products[0].title}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-[#4b382d]">
                      {products[0].subtitle}
                    </p>
                    <p
                      className="mt-5 text-sm leading-8"
                      style={{ color: "var(--page-muted)" }}
                    >
                      {products[0].description}
                    </p>
                    <ul className="mt-7 space-y-3">
                      {products[0].points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-7"
                          style={{ color: "var(--page-muted)" }}
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "var(--page-amber)" }}
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                  <div data-reveal className="reveal" style={rs("0.12s")}>
                    <div className="overflow-hidden rounded-3xl border border-[#362216]/10 bg-[#fffaf4]">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src="/assets/app-ss.png"
                          alt="YoungMenu Manager POS, tables, and orders screens"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 46vw, 100vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                  {products.map((product, i) => {
                    const active = i === activeIndex;
                    return (
                      <article
                        key={product.title}
                        id={`product-${product.id}`}
                        data-reveal
                        className={`paper-card reveal rounded-3xl p-8 transition-shadow duration-300 ${
                          active ? "product-card--active" : "product-card--inactive"
                        }`}
                        style={rs(`${i * 0.12}s`)}
                      >
                        <p className="kicker">{product.audience}</p>
                        <h3 className="display-title mt-4 text-4xl text-[#241813]">
                          {product.title}
                        </h3>
                        <p className="mt-2 text-lg font-medium text-[#4b382d]">
                          {product.subtitle}
                        </p>
                        <p
                          className="mt-5 text-sm leading-8"
                          style={{ color: "var(--page-muted)" }}
                        >
                          {product.description}
                        </p>
                        <ul className="mt-7 space-y-3">
                          {product.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm leading-7"
                              style={{ color: "var(--page-muted)" }}
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: "var(--page-amber)" }}
                                aria-hidden="true"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </section>

          <section
            id="integration"
            className="texture-alt py-24 sm:py-28"
            aria-label="Product integration"
          >
            <div className="site-shell">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div data-reveal className="reveal" style={rs("0s")}>
                  <p className="kicker">{integrationSectionByMode[mode].kicker}</p>
                  <h2 className="display-title mt-4 text-5xl text-[#241813] sm:text-[3.4rem]">
                    {integrationSectionByMode[mode].title}
                  </h2>
                  <p
                    className="mt-6 text-base leading-8"
                    style={{ color: "var(--page-muted)" }}
                  >
                    {integrationSectionByMode[mode].description}
                  </p>
                  <div className="mt-9">
                    <Link href="#contact" className="framed-button" data-tone="dark">
                      Get started
                    </Link>
                  </div>
                </div>

                <div data-reveal className="reveal" style={rs("0.12s")}>
                  <div className="paper-card rounded-3xl p-8">
                    <h3 className="display-title text-3xl text-[#241813]">
                      {mode === "manager"
                        ? "Everything your team needs"
                        : "One ecosystem, two experiences"}
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {integrationSectionByMode[mode].points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-7"
                          style={{ color: "var(--page-muted)" }}
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "var(--page-amber)" }}
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="testimonials"
            aria-labelledby="testimonials-heading"
            className="texture-soft py-24 sm:py-28"
          >
            <div className="site-shell">
              <div data-reveal className="reveal text-center">
                <p className="kicker">Testimonials</p>
                <h2
                  id="testimonials-heading"
                  className="display-title mt-4 text-5xl text-[#241813] sm:text-[3.5rem]"
                >
                  {mode === "manager"
                    ? "Trusted by restaurants, cafes, and home bakers."
                    : "Trusted by food business owners."}
                </h2>
              </div>
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {testimonials.map((t, i) => (
                  <article
                    key={`${t.author}-${t.role}`}
                    data-reveal
                    className="paper-card reveal rounded-3xl p-8"
                    style={rs(`${i * 0.09}s`)}
                  >
                    <blockquote className="display-title text-2xl leading-snug text-[#241813]">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-7">
                      <p className="text-sm font-semibold text-[#2d1f18]">
                        {t.author}
                      </p>
                      <p className="text-xs" style={{ color: "var(--page-muted)" }}>
                        {t.role}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="texture-alt py-24 sm:py-32"
          >
            <div className="site-shell">
              <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
                <div data-reveal className="reveal" style={rs("0s")}>
                  <p className="kicker">Get in touch</p>
                  <h2
                    id="contact-heading"
                    className="display-title mt-4 text-5xl text-[#241813] sm:text-[3.25rem]"
                  >
                    {mode === "manager"
                      ? "Bring YoungMenu Manager to your business."
                      : "Partner with YoungMenu for your customers."}
                  </h2>
                  <p
                    className="mt-5 max-w-md text-base leading-8"
                    style={{ color: "var(--page-muted)" }}
                  >
                    {mode === "manager"
                      ? "Tell us about your restaurant, cafe, or bakery. We will help you set up operations, staff roles, and billing."
                      : "Want your customers to order through YoungMenu? Talk to us about onboarding your menu and QR flow."}
                  </p>
                </div>

                <div data-reveal className="reveal" style={rs("0.14s")}>
                  <div
                    className="rounded-3xl p-8 sm:p-10"
                    style={{
                      border: "1px solid rgba(54,34,22,0.08)",
                      background: "rgba(255,255,255,0.74)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <h3 className="display-title text-3xl text-[#241813]">
                      Request a demo
                    </h3>
                    <p
                      className="mt-2 text-sm leading-7"
                      style={{ color: "var(--page-muted)" }}
                    >
                      Fill in your details and our team will contact you shortly.
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
