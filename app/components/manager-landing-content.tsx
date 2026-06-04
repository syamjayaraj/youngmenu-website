import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/site-footer";
import { RevealObserver } from "@/app/components/reveal-observer";
import { SectionHeading } from "@/app/components/section-heading";
import { CheckList } from "@/app/components/check-list";
import { TextLinkArrow } from "@/app/components/text-link-arrow";
import { TestimonialsMarquee } from "@/app/components/testimonials-marquee";
import { ContactForm } from "@/app/components/contact-form";
import { StoreBadges } from "@/app/components/store-badges";
import { PricingPageContent } from "@/app/components/pricing-page-content";
import { deepFeatures, keyFeatures } from "@/app/lib/manager-features";

const stats = [
  { value: "100+", label: "Businesses on the platform" },
  { value: "1M+", label: "Orders organized" },
  { value: "Cloud", label: "Based platform" },
  { value: "99.9%", label: "Uptime reliability" },
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
      "Manager works well on both phone and tablet at the counter. Onboarding felt familiar to our team.",
    author: "Operations lead",
    role: "Counter staff · Kozhikode",
    initials: "O",
  },
  {
    quote:
      "We are looking forward to customers ordering from the phone and keeping digital receipts in one place.",
    author: "Regular diner",
    role: "Customer · YoungMenu early access",
    initials: "C",
  },
  {
    quote:
      "Expense tracking alongside daily sales helps us understand how the cafe is performing month to month.",
    author: "Finance lead",
    role: "Owner · Multi-outlet cafe",
    initials: "F",
  },
  {
    quote:
      "Kitchen display keeps the pass aligned with the counter — fewer missed items during peak lunch hours.",
    author: "Kitchen lead",
    role: "Head chef · City restaurant",
    initials: "K",
  },
  {
    quote:
      "Menu updates sync quickly so the counter always shows what is actually available today.",
    author: "Floor manager",
    role: "Operations · Home bakery",
    initials: "M",
  },
];

export function ManagerLandingContent() {
  return (
    <>
      <RevealObserver />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1">
          <section className="manager-hero hero-section relative isolate overflow-hidden">
            <div className="hero-overlay absolute inset-0" />
            <div className="site-shell relative z-10 py-24 pt-32 text-center sm:pt-36">
              <p className="eyebrow-pill mx-auto mb-6">
                <span className="eyebrow-pill__badge">For Restaurants</span>
                POS, kitchen, menus &amp; reports — in one app
              </p>
              <h1 className="display-title manager-hero__title mx-auto max-w-4xl">
                Manage your food business
                <br />
                like never before.
              </h1>
              <p className="section-heading__desc mx-auto mt-6 max-w-3xl">
                The ultimate restaurant management stack. Counter POS, kitchen display,
                menus, billing, and owner-ready reports — all in one place.
              </p>
              <StoreBadges className="manager-hero__stores" />
            </div>
          </section>

          <section className="manager-device-showcase" aria-label="App preview">
            <div className="site-shell">
              <Image
                src="/assets/youngmenu-ss-phone-tab.png"
                alt="YoungMenu Manager on tablet and mobile — restaurant dashboard"
                width={1400}
                height={900}
                className="manager-device-showcase__image h-auto w-full"
                priority
                sizes="100vw"
              />
            </div>
          </section>

          <section id="about" className="texture-soft section-block">
            <div className="site-shell">
              <div className="manager-about">
                <div>
                  <SectionHeading
                    kicker="About YoungMenu"
                    title="Built for food teams who serve with care."
                    description="We built YoungMenu Manager to simplify restaurant operations — less chaos at the counter, clearer records for owners, and a calm flow staff can learn quickly during busy hours."
                    align="left"
                  />
                  <CheckList
                    items={[
                      "Streamlined counter POS with guided ordering",
                      "Kitchen display with live order queue",
                      "Menus, modifiers, and pricing in one place",
                      "Reports and dashboards owners can trust",
                    ]}
                  />
                </div>
                <div className="manager-about__badge paper-card manager-about__badge--visual">
                  <Image
                    src="/assets/restaurant-customer-connection.png"
                    alt=""
                    fill
                    className="manager-about__badge-image object-cover"
                    sizes="(max-width: 900px) 100vw, 360px"
                    aria-hidden
                  />
                  <div className="manager-about__badge-overlay">
                    <p className="manager-about__badge-label">Cloud-based</p>
                    <p className="display-title manager-about__badge-title">Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="site-shell">
              <div className="manager-stats">
                {stats.map((stat) => (
                  <article key={stat.label} className="manager-stats__item paper-card">
                    <p className="display-title manager-stats__value">{stat.value}</p>
                    <p className="manager-stats__label">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="features" className="wood-surface section-block">
            <div className="site-shell">
              <SectionHeading
                kicker="Key features"
                title="Everything you need to run your business."
                description="Powerful tools built for restaurants, cafes, and home bakers — from the first counter shift to growing customer trust."
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

          <section className="texture-soft section-block">
            <div className="site-shell">
              <div className="manager-featured paper-card">
                <div>
                  <p className="kicker">Featured</p>
                  <h2 className="display-title manager-featured__title mt-3">
                    YoungMenu Manager
                  </h2>
                  <p className="manager-featured__desc">
                    Our flagship app for food business owners. Run the counter, manage
                    the kitchen, track orders, and share reports — everything your team
                    needs in one platform.
                  </p>
                  <TextLinkArrow href="/features">Learn more</TextLinkArrow>
                </div>
                <div className="manager-featured__media">
                  <Image
                    src="/assets/app-ss.png"
                    alt="YoungMenu Manager counter POS"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="texture-alt section-block">
            <div className="site-shell">
              <SectionHeading
                kicker="Powerful features"
                title="Advanced tools to transform your business."
                description="Streamline counter operations, improve kitchen flow, and give owners clarity with a complete suite of management tools."
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

          <section id="pricing" className="wood-surface section-block">
            <div className="site-shell">
              <PricingPageContent variant="section" />
            </div>
          </section>

          <section id="testimonials" className="texture-soft section-block">
            <div className="site-shell">
              <SectionHeading
                kicker="Testimonials"
                title="Trusted by food business teams"
                description="Built for owners, counter staff, and kitchen teams who need calm, reliable operations."
              />
              <div className="mt-12">
                <TestimonialsMarquee items={testimonials} />
              </div>
            </div>
          </section>

          <section id="contact" className="texture-alt section-block">
            <div className="site-shell">
              <div className="contact-split">
                <div>
                  <SectionHeading
                    kicker="Get in touch"
                    title="Bring YoungMenu Manager to your business."
                    description="Tell us about your restaurant, cafe, or bakery. We will help you set up operations, staff roles, and billing."
                    align="left"
                  />
                </div>
                <div className="contact-split__form paper-card">
                  <h3 className="display-title text-3xl text-[#241813]">Request a demo</h3>
                  <p className="mt-2 text-sm leading-7" style={{ color: "var(--page-muted)" }}>
                    Fill in your details and our team will contact you shortly.
                  </p>
                  <ContactForm />
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
