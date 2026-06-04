import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/site-footer";
import { RevealObserver } from "@/app/components/reveal-observer";
import { SectionHeading } from "@/app/components/section-heading";
import { CheckList } from "@/app/components/check-list";
import { TextLinkArrow } from "@/app/components/text-link-arrow";
import { TestimonialsMarquee } from "@/app/components/testimonials-marquee";

const stats = [
  { value: "100+", label: "Active businesses" },
  { value: "50K+", label: "Users" },
  { value: "2", label: "Apps" },
];

const managerPoints = [
  "Counter POS and billing workflow",
  "Kitchen display and order queue",
  "Staff role management and permissions",
  "Business analytics and sales reports",
  "Menu and modifier management",
  "Multi-outlet ready architecture",
];

const customerPoints = [
  "Book orders from your phone",
  "Live order status and updates",
  "Digital receipts and order history",
  "Stay connected with your favourite places",
];

const testimonials = [
  {
    quote:
      "YoungMenu gives our counter team a cleaner way to handle orders, receipts, and menu updates during busy hours.",
    author: "Riyas",
    role: "Owner · DineHouse Restaurant",
    initials: "R",
  },
  {
    quote:
      "The POS flow is simple — search the menu, add to cart, and send orders to the kitchen without slowing the queue.",
    author: "Harisagar",
    role: "Owner · Chaya Makkani Cafe",
    initials: "H",
  },
  {
    quote:
      "Orders, payments, and reports in one app. We finally have clarity without spreadsheets.",
    author: "Thejasa",
    role: "Founder · M Bakes",
    initials: "T",
  },
  {
    quote:
      "Manager works well on both phone and tablet at the counter. Onboarding felt familiar to our existing process.",
    author: "Office team",
    role: "Operations · Regional cafe",
    initials: "O",
  },
];

export function EcosystemHomeContent() {
  return (
    <>
      <RevealObserver />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1">
          <section className="hero-section relative isolate flex min-h-svh items-center overflow-hidden">
            <div className="hero-overlay absolute inset-0" />
            <div className="site-shell relative z-10 w-full py-24 pt-32 text-center sm:pt-36">
              <p className="eyebrow-pill mx-auto mb-6">
                <span className="eyebrow-pill__badge">New</span>
                YoungMenu customer app coming soon
              </p>
              <h1 className="display-title mx-auto max-w-4xl text-5xl text-[#241813] sm:text-[4.4rem]">
                The complete
                <br />
                food ecosystem.
              </h1>
              <p className="section-heading__desc mx-auto mt-6 max-w-3xl text-base sm:text-lg">
                YoungMenu connects restaurants, cafes, and home bakers with their
                customers through two purpose-built apps — seamlessly integrated,
                beautifully designed.
              </p>
              <div className="hero-app-actions mt-10">
                <Link
                  href="/youngmenu-manager"
                  className="framed-button hero-manager-button"
                  data-tone="amber"
                >
                  <Image
                    src="/assets/logo/logo.png"
                    alt=""
                    width={22}
                    height={22}
                    className="hero-manager-button__logo"
                    aria-hidden
                  />
                  <span>YoungMenu Manager</span>
                </Link>
                <span
                  className="framed-button coming-soon-button"
                  data-tone="dark"
                  aria-disabled="true"
                >
                  YoungMenu
                  <span className="coming-soon-button__badge">Coming soon</span>
                </span>
              </div>
              <div className="hero-stats mt-12">
                {stats.map((item) => (
                  <div key={item.label} className="hero-stats__item">
                    <p className="display-title hero-stats__value">{item.value}</p>
                    <p className="hero-stats__label">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="wood-surface section-block">
            <div className="site-shell">
              <SectionHeading
                kicker="Our products"
                title="Two apps. One ecosystem."
                description="YoungMenu connects food businesses and customers through two dedicated apps built to work seamlessly together."
              />
              <div className="ecosystem-products mt-12">
                <article className="ecosystem-product-card paper-card">
                  <div className="ecosystem-product-card__media">
                    <Image
                      src="/assets/app-ss.png"
                      alt="YoungMenu Manager preview"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 46vw, 100vw"
                    />
                  </div>
                  <div className="ecosystem-product-card__body">
                    <p className="kicker">For food business owners</p>
                    <h3 className="display-title ecosystem-product-card__title mt-3">
                      YoungMenu Manager
                    </h3>
                    <p className="ecosystem-product-card__subtitle">
                      Run your business, your way.
                    </p>
                    <p className="ecosystem-product-card__desc">
                      The complete operations platform for restaurants, cafes, and
                      home bakers. Handle counter POS, menus, kitchen flow, billing,
                      and reporting from one place.
                    </p>
                    <CheckList items={managerPoints} />
                    <TextLinkArrow href="/youngmenu-manager">
                      Explore YoungMenu Manager
                    </TextLinkArrow>
                  </div>
                </article>

                <article className="ecosystem-product-card paper-card">
                  <div className="ecosystem-product-card__media ecosystem-product-card__media--soon">
                    <span className="ecosystem-product-card__soon-label">Coming soon</span>
                  </div>
                  <div className="ecosystem-product-card__body">
                    <p className="kicker">For customers</p>
                    <h3 className="display-title ecosystem-product-card__title mt-3">
                      YoungMenu
                    </h3>
                    <p className="ecosystem-product-card__subtitle">
                      Your ordering experience, elevated.
                    </p>
                    <p className="ecosystem-product-card__desc">
                      A personal companion for diners. Browse menus, place orders,
                      and track status — launching soon for customers.
                    </p>
                    <CheckList items={customerPoints} />
                    <TextLinkArrow href="/youngmenu">Learn more</TextLinkArrow>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="texture-alt section-block">
            <div className="site-shell">
              <div className="ecosystem-sync">
                <div className="ecosystem-sync__visual paper-card">
                  <Image
                    src="/assets/restaurant-customer-connection.png"
                    alt="Waiter serving happy customers at a restaurant table"
                    width={1200}
                    height={750}
                    className="ecosystem-sync__image"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
                <div className="ecosystem-sync__content">
                  <div className="ecosystem-sync__apps">
                    <Link href="/youngmenu-manager" className="ecosystem-sync__app-pill">
                      YoungMenu Manager ↗
                    </Link>
                    <span className="ecosystem-sync__app-pill ecosystem-sync__app-pill--muted">
                      YoungMenu
                    </span>
                  </div>
                  <h2 className="display-title ecosystem-sync__title mt-6">
                    Your business and customers, always in sync.
                  </h2>
                  <p className="ecosystem-sync__desc">
                    When a business uses YoungMenu Manager, customers get live menus,
                    accurate availability, and order updates through YoungMenu — one
                    calm flow from counter to customer phone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="texture-soft section-block">
            <div className="site-shell">
              <SectionHeading
                kicker="Testimonials"
                title="Trusted by food businesses"
                description="Built for owners, counter staff, and kitchen teams who need calm, reliable operations."
              />
              <div className="mt-12">
                <TestimonialsMarquee items={testimonials} />
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
