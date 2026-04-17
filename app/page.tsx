import type { CSSProperties } from "react";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { RevealObserver } from "@/app/components/reveal-observer";
import { ContactForm } from "@/app/components/contact-form";

function rs(delay: string): CSSProperties {
  return { "--reveal-delay": delay } as CSSProperties;
}

// ─── Static data ─────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="22"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 21v2M19 21v2M6 24h16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 11h4M7 14.5h6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <rect
          x="16"
          y="9.5"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
    title: "Counter",
    description:
      "A fast, touch-friendly POS interface for front-desk staff. Take orders, manage tables, and process payments in seconds.",
    color: "#c9a05d",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="20"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 10h5M8 14h7M8 18h4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M18 13l2 2-2 2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Owner Dashboard",
    description:
      "Real-time insights on sales, orders, staff, and inventory. Everything you need to run a smarter business, from anywhere.",
    color: "#8d6135",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="3"
          width="12"
          height="22"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 7h4M12 11h4M12 15h2"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="14" cy="20.5" r="1.2" fill="currentColor" />
      </svg>
    ),
    title: "Waiter App",
    description:
      "Mobile app for floor staff to take table orders, send them instantly to the kitchen, and stay in sync with the team.",
    color: "#c9a05d",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="6"
          width="22"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 12h8M7 16h5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle
          cx="21"
          cy="19"
          r="4.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M19.2 19l1.3 1.3 2.3-2.3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Kitchen Display",
    description:
      "Replace paper tickets with a live kitchen screen. Orders appear instantly with priority queuing and one-tap confirmation.",
    color: "#8d6135",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="6"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="9"
          y="9"
          width="4"
          height="4"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="15"
          y="9"
          width="4"
          height="4"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="9"
          y="15"
          width="4"
          height="4"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="15"
          y="15"
          width="4"
          height="4"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    ),
    title: "QR Menu",
    description:
      "Give every table a beautiful digital menu via QR code. Customers browse, customise, and order - no app needed.",
    color: "#c9a05d",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 14h8M14 10v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="7" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="21" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="21" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="7" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "Order Management",
    description:
      "A unified view of all orders across dine-in, takeaway, and delivery, with live status tracking from kitchen to table.",
    color: "#8d6135",
  },
];

const solutions = [
  {
    label: "Restaurants",
    headline: "Full-service dining, fully under control.",
    body: "From the moment guests are seated to the final payment, YoungMenu connects your counter, kitchen, and floor staff in one seamless flow. Handle busy services with confidence.",
    tags: [
      "Counter POS",
      "Waiter App",
      "Kitchen Display",
      "Table Management",
      "QR Menu",
    ],
  },
  {
    label: "Cafes",
    headline: "Faster queues, happier regulars.",
    body: "Designed for the pace of cafe service. Quick order intake, modifier support, and a clean owner dashboard to track your busiest hours.",
    tags: [
      "Quick POS",
      "Modifiers",
      "Owner Reports",
      "Digital Menu",
      "Takeaway",
    ],
  },
  {
    label: "Home Bakers",
    headline: "Take orders like a pro business.",
    body: "YoungMenu gives home bakers a polished digital presence and a simple system to manage pre-orders, custom requests, and delivery schedules.",
    tags: [
      "Pre-orders",
      "Custom Requests",
      "Menu Listing",
      "Order Tracking",
      "Delivery Slots",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Set up your menu",
    body: "Add items, categories, prices, and modifiers in minutes. Build from scratch or import from a spreadsheet.",
  },
  {
    number: "02",
    title: "Connect your team",
    body: "Assign roles to owners, waiters, and kitchen staff. Each person gets the right view on the right device.",
  },
  {
    number: "03",
    title: "Start taking orders",
    body: "Go live instantly. Orders flow from QR menu or waiter app straight to the kitchen display. No paper, no miscommunication.",
  },
];

const testimonials = [
  {
    quote:
      "YoungMenu made our cafe operations so smooth. The QR menu and order management are exactly what we needed to serve our customers faster.",
    author: "Harisagar Chaya Makkani",
    role: "Owner, Pavayil Cafe",
  },
  {
    quote:
      "The kitchen display and waiter app have completely removed confusion during peak hours. Our team now works like a well-oiled machine.",
    author: "Riyas",
    role: "Owner, DineHouse Restaurant, Ramanattukara",
  },
  {
    quote:
      "Setting up YoungMenu was quick and simple. The counter POS and live order tracking have made managing the restaurant effortless.",
    author: "Riyas",
    role: "Owner, Grill House Restaurant, Atholi",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description:
      "Perfect for home bakers and solo operators just getting started.",
    features: [
      "Digital menu (up to 30 items)",
      "QR code generation",
      "Basic order management",
      "1 staff account",
      "Email support",
    ],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹1,499",
    period: "/ month",
    description: "For growing cafes and small restaurants ready to scale.",
    features: [
      "Unlimited menu items",
      "Counter POS",
      "Waiter app (up to 5 staff)",
      "Kitchen display system",
      "Owner analytics dashboard",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For multi-outlet restaurants and cloud kitchens with advanced needs.",
    features: [
      "Everything in Growth",
      "Unlimited staff accounts",
      "Multi-outlet management",
      "Custom integrations",
      "Dedicated onboarding",
      "24/7 phone support",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

const stats = [
  { value: "2", label: "Businesses powered" },
  { value: "1,000+", label: "Orders processed" },
  { value: "4.9★", label: "Average rating" },
  { value: "30 min", label: "Average setup time" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <SiteHeader />
      <RevealObserver />

      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1">
          {/* ── Hero ──────────────────────────────────────────────────────────── */}
          <section
            aria-label="Hero"
            className="relative isolate flex min-h-svh items-center overflow-hidden"
          >
            {/* Background video */}
            <div className="absolute inset-0 bg-[#13110f]">
              <video
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                className="hero-fade absolute inset-0 h-full w-full object-cover"
              >
                <source src="/assets/videos/hero.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="hero-overlay absolute inset-0" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 28%, rgba(5,3,2,0.40) 100%)",
              }}
            />

            <div className="site-shell relative z-10 w-full py-36 pb-20 pt-40 text-white sm:pt-44">
              {/* Main headline */}
              <div className="hero-rise max-w-4xl">
                <p className="eyebrow-pill mb-7">
                  Complete restaurant management
                </p>

                <h1 className="display-title text-6xl text-white sm:text-7xl lg:text-[6.2rem]">
                  Run your restaurant,{" "}
                  <span style={{ color: "var(--page-amber)" }}>smarter.</span>
                </h1>

                <p
                  className="mt-6 max-w-2xl text-lg leading-8"
                  style={{ color: "rgba(255,255,255,0.74)" }}
                >
                  YoungMenu is a complete management platform for restaurants,
                  cafes, and home bakers. Counter POS, waiter app, kitchen
                  display, QR menu - everything in one place.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="#contact"
                    className="framed-button"
                    data-tone="amber"
                  >
                    Request a demo
                  </Link>
                  <Link
                    href="#features"
                    className="framed-button"
                    style={{
                      borderColor: "rgba(255,255,255,0.20)",
                      background: "rgba(0,0,0,0.22)",
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    Explore features
                  </Link>
                </div>
              </div>

              {/* Stats strip */}
              <div className="hero-stats-rise mt-16 grid grid-cols-2 gap-3 sm:mt-20 md:grid-cols-4">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-3xl p-5"
                    style={{
                      border: "1px solid rgba(255,255,255,0.10)",
                      background: "rgba(255,255,255,0.07)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <p className="display-title text-4xl text-white">{value}</p>
                    <p
                      className="mt-1.5 text-xs uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.50)" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Features ──────────────────────────────────────────────────────── */}
          <section
            id="features"
            aria-labelledby="features-heading"
            className="texture-soft py-24 sm:py-32"
          >
            <div className="site-shell">
              <div data-reveal className="reveal">
                <p className="kicker">The YoungMenu platform</p>
                <h2
                  id="features-heading"
                  className="display-title mt-4 max-w-2xl text-5xl text-[#241813] sm:text-[3.5rem]"
                >
                  Every tool your team needs, built to work together.
                </h2>
                <p
                  className="mt-5 max-w-2xl text-base leading-8"
                  style={{ color: "var(--page-muted)" }}
                >
                  From the first order of the day to closing time, YoungMenu
                  keeps your counter, floor, and kitchen in perfect sync.
                </p>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f, i) => (
                  <article
                    key={f.title}
                    data-reveal
                    className="feature-card paper-card reveal rounded-3xl p-7"
                    style={rs(`${i * 0.06}s`)}
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        color: f.color,
                        background: `color-mix(in srgb, ${f.color} 14%, transparent)`,
                        border: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      {f.icon}
                    </div>
                    <h3 className="display-title mt-5 text-[1.75rem] text-[#241813]">
                      {f.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-7"
                      style={{ color: "var(--page-muted)" }}
                    >
                      {f.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── App Showcase ──────────────────────────────────────────────────── */}
          <section
            aria-label="Platform overview"
            className="wood-surface py-24 text-white sm:py-32"
          >
            <div className="site-shell">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div data-reveal className="reveal" style={rs("0s")}>
                  <p className="kicker" style={{ color: "var(--page-amber)" }}>
                    See it in action
                  </p>
                  <h2 className="display-title mt-4 text-5xl text-white sm:text-[3.5rem]">
                    One platform. Every role. Total clarity.
                  </h2>
                  <div className="ornament-line mt-5" data-light="true">
                    <span className="text-xs uppercase tracking-widest">
                      Live product
                    </span>
                  </div>
                  <p
                    className="mt-7 text-base leading-8"
                    style={{ color: "rgba(255,255,255,0.70)" }}
                  >
                    YoungMenu Manager runs on any device. The owner sees the
                    full picture, the waiter has a fast order tool, and the
                    kitchen never misses a ticket. All connected. All real-time.
                  </p>
                  <ul className="mt-7 space-y-3">
                    {[
                      "Orders sync instantly across all devices",
                      "Works on phone, tablet, and kitchen screen",
                      "Offline mode keeps service running without internet",
                      "Set up in under 3 minutes",
                    ].map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-sm leading-7"
                        style={{ color: "rgba(255,255,255,0.72)" }}
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--page-amber)" }}
                          aria-hidden="true"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9">
                    <Link href="#contact" className="framed-button">
                      Book a live demo
                    </Link>
                  </div>
                </div>

                {/* Screenshot / video placeholder - independent reveal */}
                <div data-reveal className="reveal" style={rs("0.14s")}>
                  <div
                    className="overflow-hidden rounded-[2rem]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.10)",
                      background: "rgba(255,255,255,0.04)",
                      boxShadow: "0 28px 90px rgba(0,0,0,0.32)",
                    }}
                  >
                    {/* 16:10 aspect ratio - swap for a real screenshot/video later */}
                    <div style={{ aspectRatio: "16/10", position: "relative" }}>
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        style={{ color: "rgba(255,255,255,0.22)" }}
                      >
                        {/* Mock app chrome */}
                        <div
                          className="w-full px-6"
                          style={{ maxWidth: "22rem" }}
                        >
                          <div
                            className="mb-3 flex items-center gap-2 rounded-xl px-4 py-3"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          >
                            <div
                              className="h-2 w-2 rounded-full"
                              style={{
                                background: "var(--page-amber)",
                                opacity: 0.7,
                              }}
                            />
                            <div
                              className="h-1.5 flex-1 rounded-full"
                              style={{ background: "rgba(255,255,255,0.12)" }}
                            />
                          </div>
                          <div className="space-y-2.5">
                            {[1, 0.7, 0.85, 0.6, 0.75].map((w, i) => (
                              <div
                                key={i}
                                className="h-9 rounded-xl"
                                style={{
                                  width: `${w * 100}%`,
                                  background:
                                    i === 0
                                      ? "rgba(201,160,93,0.18)"
                                      : "rgba(255,255,255,0.06)",
                                  border: "1px solid rgba(255,255,255,0.07)",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-4 text-xs uppercase tracking-widest">
                          App screenshot
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Solutions ─────────────────────────────────────────────────────── */}
          <section
            id="solutions"
            aria-labelledby="solutions-heading"
            className="texture-alt py-24 sm:py-32"
          >
            <div className="site-shell">
              <div data-reveal className="reveal">
                <p className="kicker">Built for every type</p>
                <h2
                  id="solutions-heading"
                  className="display-title mt-4 max-w-2xl text-5xl text-[#241813] sm:text-[3.5rem]"
                >
                  Whatever you cook, we have you covered.
                </h2>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {solutions.map((s, i) => (
                  <article
                    key={s.label}
                    data-reveal
                    className="paper-card reveal rounded-3xl p-8"
                    style={rs(`${i * 0.09}s`)}
                  >
                    {/* Image placeholder */}
                    <div
                      className="mb-7 flex h-44 items-center justify-center overflow-hidden rounded-2xl"
                      style={{
                        border: "1px solid rgba(54,34,22,0.07)",
                        background: "linear-gradient(135deg, #f0e8de, #e8ddd2)",
                      }}
                    >
                      <div
                        className="flex flex-col items-center gap-2"
                        style={{ color: "#c4aa94" }}
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          aria-hidden="true"
                        >
                          <rect
                            x="3"
                            y="6"
                            width="26"
                            height="20"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                          <circle
                            cx="10"
                            cy="14"
                            r="3"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                          <path
                            d="M3 20l7-5 7 5 6-4 6 5"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-xs uppercase tracking-wider">
                          Image placeholder
                        </span>
                      </div>
                    </div>

                    <p className="kicker">{s.label}</p>
                    <h3 className="display-title mt-3 text-[1.85rem] text-[#241813]">
                      {s.headline}
                    </h3>
                    <p
                      className="mt-4 text-sm leading-7"
                      style={{ color: "var(--page-muted)" }}
                    >
                      {s.body}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
                          style={{
                            border: "1px solid rgba(54,34,22,0.10)",
                            background: "rgba(0,0,0,0.03)",
                            color: "#5e4a3c",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── How It Works ──────────────────────────────────────────────────── */}
          <section
            id="how-it-works"
            aria-labelledby="how-heading"
            className="relative overflow-hidden py-24 text-white sm:py-32"
            style={{ background: "#13110f" }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 20% 50%, rgba(201,160,93,0.10), transparent 38%)",
              }}
              aria-hidden="true"
            />
            <div className="site-shell relative">
              <div data-reveal className="reveal">
                <p className="kicker" style={{ color: "var(--page-amber)" }}>
                  Simple by design
                </p>
                <h2
                  id="how-heading"
                  className="display-title mt-4 max-w-2xl text-5xl text-white sm:text-[3.5rem]"
                >
                  Up and running in three steps.
                </h2>
                <p
                  className="mt-5 max-w-2xl text-base leading-8"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  No lengthy onboarding. No technical expertise required.
                  YoungMenu is designed to go live the same day you sign up.
                </p>
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {steps.map((step, i) => (
                  <article
                    key={step.number}
                    data-reveal
                    className="reveal rounded-3xl p-8"
                    style={{
                      ...rs(`${i * 0.1}s`),
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <p
                      className="display-title text-6xl"
                      style={{ color: "var(--page-amber)", opacity: 0.4 }}
                    >
                      {step.number}
                    </p>
                    <h3 className="display-title mt-6 text-3xl text-white">
                      {step.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-7"
                      style={{ color: "rgba(255,255,255,0.60)" }}
                    >
                      {step.body}
                    </p>
                  </article>
                ))}
              </div>

              <div data-reveal className="reveal mt-12" style={rs("0.32s")}>
                <Link href="#contact" className="framed-button">
                  Get started today
                </Link>
              </div>
            </div>
          </section>

          {/* ── Testimonials ──────────────────────────────────────────────────── */}
          <section
            aria-labelledby="testimonials-heading"
            className="texture-soft py-24 sm:py-32"
          >
            <div className="site-shell">
              <div data-reveal className="reveal">
                <p className="kicker">What our customers say</p>
                <h2
                  id="testimonials-heading"
                  className="display-title mt-4 max-w-2xl text-5xl text-[#241813] sm:text-[3.5rem]"
                >
                  Loved by teams that serve with care.
                </h2>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {testimonials.map((t, i) => (
                  <article
                    key={t.author}
                    data-reveal
                    className="paper-card reveal rounded-3xl p-8"
                    style={rs(`${i * 0.09}s`)}
                  >
                    <div className="flex gap-0.5" aria-label="5 stars">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <svg
                          key={si}
                          width="15"
                          height="15"
                          viewBox="0 0 16 16"
                          fill="var(--page-amber)"
                          aria-hidden="true"
                        >
                          <path d="M8 1l1.8 3.6 4.2.6-3 2.9.7 4.1L8 10.4l-3.7 1.8.7-4.1-3-2.9 4.2-.6z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="display-title mt-6 text-2xl leading-snug text-[#241813]">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-7 flex items-center gap-4">
                      <div
                        className="h-10 w-10 shrink-0 rounded-full"
                        style={{
                          border: "1px solid rgba(54,34,22,0.10)",
                          background:
                            "linear-gradient(135deg, #ede5da, #ddd0c0)",
                        }}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#2d1f18]">
                          {t.author}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--page-muted)" }}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── Pricing ───────────────────────────────────────────────────────── */}
          <section
            id="pricing"
            aria-labelledby="pricing-heading"
            className="wood-surface py-24 text-white sm:py-32"
          >
            <div className="site-shell">
              <div data-reveal className="reveal">
                <p className="kicker" style={{ color: "var(--page-amber)" }}>
                  Transparent pricing
                </p>
                <h2
                  id="pricing-heading"
                  className="display-title mt-4 max-w-2xl text-5xl text-white sm:text-[3.5rem]"
                >
                  Simple plans that grow with you.
                </h2>
                <p
                  className="mt-5 max-w-xl text-base leading-8"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  Start free and upgrade when you are ready. No hidden fees, no
                  long-term contracts.
                </p>
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {plans.map((plan, i) => (
                  <article
                    key={plan.name}
                    data-reveal
                    className="reveal rounded-3xl p-8"
                    style={{
                      ...rs(`${i * 0.09}s`),
                      ...(plan.highlight
                        ? {
                            border: "1px solid rgba(201,160,93,0.42)",
                            background: "rgba(201,160,93,0.07)",
                            boxShadow: "0 28px 80px rgba(0,0,0,0.22)",
                          }
                        : {
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "rgba(255,255,255,0.04)",
                            backdropFilter: "blur(8px)",
                          }),
                    }}
                  >
                    {plan.highlight && (
                      <span
                        className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                        style={{
                          background: "var(--page-amber)",
                          color: "#2d1f18",
                        }}
                      >
                        Most popular
                      </span>
                    )}
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.50)" }}
                    >
                      {plan.name}
                    </p>
                    <div className="mt-3 flex items-end gap-1.5">
                      <span className="display-title text-5xl text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span
                          className="mb-1 text-sm"
                          style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p
                      className="mt-4 text-sm leading-7"
                      style={{ color: "rgba(255,255,255,0.58)" }}
                    >
                      {plan.description}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {plan.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-3 text-sm leading-7"
                          style={{ color: "rgba(255,255,255,0.72)" }}
                        >
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 18 18"
                            fill="none"
                            className="mt-0.5 shrink-0"
                            aria-hidden="true"
                          >
                            <circle
                              cx="9"
                              cy="9"
                              r="7.5"
                              stroke="rgba(201,160,93,0.45)"
                              strokeWidth="1.2"
                            />
                            <path
                              d="M5.5 9l2.5 2.5 4.5-4.5"
                              stroke="var(--page-amber)"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Link
                        href="#contact"
                        className="framed-button w-full"
                        data-tone={plan.highlight ? "amber" : undefined}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA Banner ────────────────────────────────────────────────────── */}
          <section
            aria-label="Call to action"
            className="texture-soft py-24 sm:py-28"
          >
            <div className="site-shell">
              <div
                data-reveal
                className="paper-card reveal overflow-hidden rounded-[2rem] px-10 py-14 text-center sm:px-16 sm:py-20"
              >
                {/* Decorative gradients - contained by overflow:hidden + position:relative on paper-card */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(201,160,93,0.22), transparent 70%)",
                    transform: "translate(30%, -30%)",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(201,160,93,0.14), transparent 70%)",
                    transform: "translate(-20%, 20%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative">
                  <p className="kicker">Ready to get started?</p>
                  <h2 className="display-title mx-auto mt-4 max-w-2xl text-5xl text-[#241813] sm:text-[3.5rem]">
                    Join the restaurants running on YoungMenu.
                  </h2>
                  <p
                    className="mx-auto mt-5 max-w-xl text-base leading-8"
                    style={{ color: "var(--page-muted)" }}
                  >
                    Set up in minutes. No credit card required to start. See why
                    hundreds of food businesses trust YoungMenu every day.
                  </p>
                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                      href="#contact"
                      className="framed-button"
                      data-tone="amber"
                    >
                      Request a free demo
                    </Link>
                    <Link
                      href="#pricing"
                      className="framed-button"
                      data-tone="dark"
                    >
                      View pricing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Contact ───────────────────────────────────────────────────────── */}
          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative overflow-hidden py-24 text-white sm:py-32"
            style={{ background: "#13110f" }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 80% 40%, rgba(201,160,93,0.10), transparent 38%)",
              }}
              aria-hidden="true"
            />

            <div className="site-shell relative grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
              {/* Left - info */}
              <div data-reveal className="reveal" style={rs("0s")}>
                <p className="kicker" style={{ color: "var(--page-amber)" }}>
                  Get in touch
                </p>
                <h2
                  id="contact-heading"
                  className="display-title mt-4 text-5xl text-white sm:text-[3.25rem]"
                >
                  Let&apos;s talk about your restaurant.
                </h2>
                <p
                  className="mt-5 max-w-md text-base leading-8"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  Whether you want a live demo, have a question about the
                  platform, or are ready to get started - our team is here to
                  help.
                </p>

                <div className="mt-10 space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        background: "rgba(255,255,255,0.06)",
                        color: "var(--page-amber)",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 2a5 5 0 00-5 5c0 4 5 11 5 11s5-7 5-11a5 5 0 00-5-5z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="10"
                          cy="7"
                          r="1.8"
                          stroke="currentColor"
                          strokeWidth="1.3"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "rgba(255,255,255,0.36)" }}
                      >
                        Address
                      </p>
                      <p
                        className="mt-0.5 text-sm leading-6"
                        style={{ color: "rgba(255,255,255,0.74)" }}
                      >
                        Floyet Labs &amp; Technologies LLP
                        <br />
                        Door No: 2211, 2/1149/I 100
                        <br />
                        Hilite Business Park
                        <br />
                        Kozhikode – 673014
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        background: "rgba(255,255,255,0.06)",
                        color: "var(--page-amber)",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 5h14v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                        <path
                          d="M3 5l7 7 7-7"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "rgba(255,255,255,0.36)" }}
                      >
                        Email
                      </p>
                      <p
                        className="mt-0.5 text-sm leading-6"
                        style={{ color: "rgba(255,255,255,0.74)" }}
                      >
                        info@floyet.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        background: "rgba(255,255,255,0.06)",
                        color: "var(--page-amber)",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 4h3l1.5 3.5-1.5 2A10 10 0 0013 13l2-1.5L18 13v3a1 1 0 01-1 1C7.5 17 3 10.5 3 5a1 1 0 011-1z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "rgba(255,255,255,0.36)" }}
                      >
                        Phone
                      </p>
                      <p
                        className="mt-0.5 text-sm leading-6"
                        style={{ color: "rgba(255,255,255,0.74)" }}
                      >
                        +91 9746742650
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - form */}
              <div data-reveal className="reveal" style={rs("0.14s")}>
                <div
                  className="rounded-3xl p-8 sm:p-10"
                  style={{
                    border: "1px solid rgba(255,255,255,0.09)",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <h3 className="display-title text-3xl text-white">
                    Request a demo
                  </h3>
                  <p
                    className="mt-2 text-sm leading-7"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    Fill in your details and we&apos;ll set up a personalised
                    walkthrough.
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
