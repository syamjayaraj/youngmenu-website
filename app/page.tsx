import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { RevealObserver } from "@/app/components/reveal-observer";
const stats = [
  { value: "100+", label: "Active businesses" },
  { value: "50K+", label: "Users" },
  { value: "2", label: "Apps" },
];

const managerFeatures = [
  "Member management and renewals",
  "POS, billing, and order management",
  "Kitchen display and queue control",
  "Staff roles and access controls",
  "Payment and expense tracking",
  "Analytics and reporting dashboard",
];

const userFeatures = [
  "Digital menu browsing",
  "Live order status tracking",
  "Saved preferences and reorders",
  "Dine-in and takeaway flow",
  "Offer and featured item discovery",
  "Community-friendly ordering experience",
];

const testimonials = [
  {
    quote:
      "YoungMenu transformed how we run peak-hour service. The manager tools and customer ordering experience work perfectly together.",
    author: "Riyas",
    role: "Owner | DineHouse Restaurant",
  },
  {
    quote:
      "Our team now handles orders faster, and customers love scanning and ordering directly from the menu.",
    author: "Harisagar ",
    role: "Owner | Chaya Makkani Cafe",
  },
  {
    quote:
      "From menu updates to billing and reports, YoungMenu gives us one reliable system for the whole business.",
    author: "Thejasa",
    role: "Founder | M Bakes",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <RevealObserver />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1">
          <section className="hero-section relative isolate flex min-h-svh items-center overflow-hidden">
            <div className="hero-overlay absolute inset-0" />
            <div className="site-shell relative z-10 w-full py-24 pt-32 text-center sm:pt-36 lg:pt-36">
              <p className="eyebrow-pill mx-auto mb-6">
                YoungMenu app coming soon
              </p>
              <h1 className="display-title mx-auto max-w-4xl text-5xl text-[#241813] sm:text-[4.6rem]">
                The complete food ecosystem.
              </h1>
              <p
                className="mx-auto mt-6 max-w-3xl text-base leading-8 sm:text-xl"
                style={{ color: "var(--page-muted)" }}
              >
                YoungMenu connects restaurants, cafes, and home bakers with
                their customers through two purpose-built apps - seamlessly
                integrated, beautifully designed.
              </p>

              <div className="hero-app-actions mt-10">
                <Link
                  href="/youngmenu-manager"
                  className="framed-button hero-manager-button"
                  data-tone="amber"
                >
                  <Image
                    src="/assets/logo/logo.png"
                    alt="YoungMenu"
                    width={22}
                    height={22}
                    className="hero-manager-button__logo"
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

              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                {stats.map((item) => (
                  <div key={item.label}>
                    <p className="display-title text-4xl text-[#241813]">
                      {item.value}
                    </p>
                    <p
                      className="mt-1 text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "var(--page-muted)" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="texture-soft py-24 sm:py-28">
            <div className="site-shell">
              <div className="text-center">
                <p className="kicker">Our products</p>
                <h2 className="display-title mt-4 text-5xl text-[#241813] sm:text-[3.9rem]">
                  Two apps. One ecosystem.
                </h2>
                <p
                  className="mx-auto mt-5 max-w-3xl text-base leading-8"
                  style={{ color: "var(--page-muted)" }}
                >
                  YoungMenu connects food businesses and customers through two
                  dedicated apps built to work seamlessly together.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <article className="paper-card rounded-3xl p-8">
                  <div className="mb-6 overflow-hidden rounded-2xl border border-[#362216]/10 bg-[#fffaf4]">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src="/assets/app-ss.png"
                        alt="YoungMenu Manager application screenshot"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 46vw, 100vw"
                      />
                    </div>
                  </div>
                  <p className="kicker">For food business owners</p>
                  <h3 className="display-title mt-4 text-4xl text-[#241813]">
                    YoungMenu Manager
                  </h3>
                  <p className="mt-2 text-lg font-medium text-[#4b382d]">
                    Run your business, your way.
                  </p>
                  <p
                    className="mt-4 text-sm leading-8"
                    style={{ color: "var(--page-muted)" }}
                  >
                    The complete management platform for restaurants, cafes, and
                    home bakers. Handle operations, payments, and reporting from
                    one place.
                  </p>
                  <ul className="mt-7 space-y-2.5">
                    {managerFeatures.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-7"
                        style={{ color: "var(--page-muted)" }}
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="paper-card rounded-3xl p-8">
                  <div className="coming-soon-card-placeholder mb-6 flex aspect-[16/10] w-full items-center justify-center rounded-2xl border border-dashed border-[#362216]/18 bg-[#fffaf4]">
                    <span className="display-title text-3xl text-[#241813] sm:text-4xl">
                      Coming soon
                    </span>
                  </div>
                  <p className="kicker">For customers</p>
                  <h3 className="display-title mt-4 text-4xl text-[#241813]">
                    YoungMenu
                  </h3>
                  <p className="mt-2 text-lg font-medium text-[#4b382d]">
                    Your ordering experience, elevated.
                  </p>
                  <p
                    className="mt-4 text-sm leading-8"
                    style={{ color: "var(--page-muted)" }}
                  >
                    A customer-first digital ordering experience to browse
                    menus, place orders, and stay updated in real time.
                  </p>
                  <ul className="mt-7 space-y-2.5">
                    {userFeatures.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-7"
                        style={{ color: "var(--page-muted)" }}
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="texture-alt py-24 sm:py-28">
            <div className="site-shell text-center">
              <p className="kicker">Connected apps</p>
              <h2 className="display-title mt-4 text-5xl text-[#241813] sm:text-[3.8rem]">
                Your business and customers, always in sync.
              </h2>
              <p
                className="mx-auto mt-6 max-w-3xl text-base leading-8"
                style={{ color: "var(--page-muted)" }}
              >
                When a business uses YoungMenu Manager, customers get live
                menus, accurate availability, and order updates through
                YoungMenu instantly.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/youngmenu-manager"
                  className="framed-button"
                  data-tone="amber"
                >
                  Explore manager
                </Link>
                <span
                  className="framed-button coming-soon-button"
                  data-tone="dark"
                  aria-disabled="true"
                >
                  YoungMenu — Coming soon
                </span>
              </div>
            </div>
          </section>

          <section className="texture-soft py-24 sm:py-28">
            <div className="site-shell">
              <div className="text-center">
                <p className="kicker">Testimonials</p>
                <h2 className="display-title mt-4 text-5xl text-[#241813] sm:text-[3.8rem]">
                  Trusted by food businesses.
                </h2>
              </div>
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {testimonials.map((item) => (
                  <article
                    key={item.author}
                    className="paper-card rounded-3xl p-8"
                  >
                    <blockquote className="display-title text-2xl leading-snug text-[#241813]">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <p className="mt-7 text-sm font-semibold text-[#2d1f18]">
                      {item.author}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--page-muted)" }}
                    >
                      {item.role}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
