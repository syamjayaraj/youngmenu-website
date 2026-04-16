import type { CSSProperties } from "react";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { RevealObserver } from "@/app/components/reveal-observer";
import { ContactForm } from "@/app/components/contact-form";

function revealStyle(delay: string): CSSProperties {
  return { "--reveal-delay": delay } as CSSProperties;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9 21v2M19 21v2M6 24h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M8 11h3M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="16" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Counter",
    description:
      "A fast, touch-friendly point-of-sale interface for front-desk staff. Take orders, manage tables, and process payments in seconds.",
    accent: "var(--page-amber)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "Owner Dashboard",
    description:
      "Real-time insights on sales, orders, staff performance, and inventory. Everything you need to run a smarter business, from anywhere.",
    accent: "#8d6135",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="8" y="3" width="12" height="22" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 7h4M12 11h4M12 15h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="21" r="1.2" fill="currentColor"/>
      </svg>
    ),
    title: "Waiter App",
    description:
      "Empower your floor staff with a mobile app to take table orders, send them to the kitchen instantly, and stay in sync with the team.",
    accent: "var(--page-amber)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 8h18M5 14h10M5 20h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="20" cy="19" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 19l1.5 1.5L22 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Kitchen Display",
    description:
      "Replace paper tickets with a live kitchen screen. Orders appear instantly, with priority queuing, timers, and one-tap confirmation.",
    accent: "#8d6135",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M10 10h2v2h-2zM16 10h2v2h-2zM10 16h2v2h-2zM14 14h4v4h-4z" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    title: "QR Menu",
    description:
      "Give every table a beautiful digital menu via QR code. Customers browse, customise, and order — no app download required.",
    accent: "var(--page-amber)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.94 5.5L14 16.5l-4.94 2.7.94-5.5-4-3.9 5.5-.8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M8 22h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Order Management",
    description:
      "A unified view of all orders across channels — dine-in, takeaway, and delivery — with status tracking from kitchen to table.",
    accent: "#8d6135",
  },
];

const solutions = [
  {
    label: "Restaurants",
    headline: "Full-service dining, fully under control.",
    body: "From the moment guests are seated to the final payment, YoungMenu connects your counter, kitchen, and floor staff in one seamless flow. Handle busy services with confidence.",
    tags: ["Counter POS", "Waiter App", "Kitchen Display", "Table Management", "QR Menu"],
  },
  {
    label: "Cafes",
    headline: "Faster queues, happier regulars.",
    body: "Designed for the pace of cafe service. Quick order intake, modifier support, loyalty-friendly workflows, and a clean owner dashboard to track your busiest hours.",
    tags: ["Quick POS", "Modifiers", "Owner Reports", "Digital Menu", "Takeaway"],
  },
  {
    label: "Home Bakers",
    headline: "Take orders like a pro business.",
    body: "YoungMenu gives home bakers a polished digital presence and a simple system to manage pre-orders, custom requests, and delivery schedules — no technical setup needed.",
    tags: ["Pre-orders", "Custom Requests", "Menu Listing", "Order Tracking", "Delivery Slots"],
  },
];

const steps = [
  {
    number: "01",
    title: "Set up your menu",
    body: "Add your items, categories, prices, and modifiers in minutes. Import from a spreadsheet or build from scratch with our guided editor.",
  },
  {
    number: "02",
    title: "Connect your team",
    body: "Assign roles to owners, waiters, and kitchen staff. Each person gets the right view on the right device — phone, tablet, or display screen.",
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
      "YoungMenu transformed how our floor team communicates with the kitchen. We cut order errors by half in the first week.",
    author: "Ravi Menon",
    role: "Owner, The Spice Garden Restaurant",
  },
  {
    quote:
      "The QR menu is loved by our customers and the owner dashboard gives me everything I need to manage the cafe from home.",
    author: "Priya Nair",
    role: "Founder, Blossom Cafe",
  },
  {
    quote:
      "As a home baker, I finally have a professional way to take pre-orders and manage my schedule. It feels like a real business now.",
    author: "Aisha Khalid",
    role: "Home Baker, Aisha's Artisan Bakes",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for home bakers and solo operators just getting started.",
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
    description: "For growing cafes and small restaurants ready to scale operations.",
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
    description: "For multi-outlet restaurants and cloud kitchens with advanced needs.",
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
  { value: "500+", label: "Businesses powered" },
  { value: "2M+", label: "Orders processed" },
  { value: "4.9★", label: "Average rating" },
  { value: "3 min", label: "Average setup time" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <SiteHeader />
      <RevealObserver />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1 overflow-hidden">

          {/* ── Hero ──────────────────────────────────────────────────────────── */}
          <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
            {/* Image placeholder */}
            <div className="absolute inset-0 bg-[#13110f]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-white/20">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <rect x="4" y="10" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="16" cy="22" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M4 30l10-8 8 6 8-5 14 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm tracking-widest uppercase">Hero image / video</span>
                </div>
              </div>
            </div>

            <div className="hero-overlay absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(5,3,2,0.42)_100%)]" />

            <div className="site-shell relative z-10 flex min-h-[100svh] flex-col justify-center pb-20 pt-36 text-white sm:pt-44">
              <div className="hero-rise max-w-4xl">
                <div className="eyebrow-dash inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-5 py-2 text-[0.72rem] uppercase tracking-[0.34em] text-white/80 backdrop-blur-md">
                  Complete restaurant management
                </div>
                <h1 className="display-title mt-7 max-w-4xl text-6xl leading-[0.95] sm:text-7xl lg:text-[6.6rem]">
                  Run your restaurant,{" "}
                  <em className="not-italic" style={{ color: "var(--page-amber)" }}>smarter.</em>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  YoungMenu is a complete management platform for restaurants, cafes, and home bakers.
                  Counter POS, waiter app, kitchen display, QR menu — everything in one place.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="#contact" className="framed-button" data-tone="amber">
                    Request a demo
                  </Link>
                  <Link
                    href="#features"
                    className="framed-button border-white/18 bg-black/18 text-white/92"
                  >
                    Explore features
                  </Link>
                </div>
              </div>

              {/* Stats strip */}
              <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-[1.65rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md"
                  >
                    <p className="display-title text-3xl text-white sm:text-4xl">{value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Features ──────────────────────────────────────────────────────── */}
          <section id="features" className="texture-soft py-24 sm:py-28">
            <div className="site-shell">
              <div
                data-reveal
                className="reveal text-center"
              >
                <span className="kicker">The YoungMenu platform</span>
                <h2 className="display-title mx-auto mt-5 max-w-3xl text-5xl leading-none text-[#241813] sm:text-6xl">
                  Every tool your team needs, built to work together.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--page-muted)]">
                  From the first order of the day to closing time, YoungMenu keeps
                  your counter, floor, and kitchen in perfect sync.
                </p>
              </div>

              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <article
                    key={feature.title}
                    data-reveal
                    className="feature-card paper-card reveal rounded-[2rem] p-7"
                    style={revealStyle(`${index * 0.07}s`)}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-black/8"
                      style={{ color: feature.accent, background: `${feature.accent}18` }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="display-title mt-5 text-3xl leading-none text-[#241813]">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--page-muted)]">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── App Showcase (video/screenshot placeholder) ───────────────────── */}
          <section className="wood-surface py-24 text-white sm:py-28">
            <div className="site-shell">
              <div
                data-reveal
                className="reveal grid items-center gap-12 lg:grid-cols-[1fr_1fr]"
              >
                <div className="max-w-xl">
                  <span className="kicker" style={{ color: "var(--page-amber)" }}>See it in action</span>
                  <h2 className="display-title mt-5 text-5xl leading-none text-white sm:text-6xl">
                    One platform. Every role. Total clarity.
                  </h2>
                  <div className="ornament-line mt-5" data-light="true">
                    <span className="text-xs uppercase tracking-[0.36em]">Live product</span>
                  </div>
                  <p className="mt-8 text-base leading-8 text-white/72">
                    YoungMenu Manager runs on any device. The owner sees the full picture,
                    the waiter has a fast order tool, and the kitchen never misses a ticket.
                    All connected. All real-time.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Orders sync instantly across all devices",
                      "Works on phone, tablet, and kitchen screen",
                      "No internet? Offline mode keeps service running",
                      "Set up in under 3 minutes",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-7 text-white/75">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--page-amber)" }}
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link href="#contact" className="framed-button bg-white/10 text-white">
                      Book a live demo
                    </Link>
                  </div>
                </div>

                <div
                  data-reveal
                  className="reveal"
                  style={revealStyle("0.14s")}
                >
                  {/* App screenshot / video placeholder */}
                  <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.05] shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
                    <div className="relative flex min-h-[28rem] items-center justify-center sm:min-h-[36rem]">
                      <div className="flex flex-col items-center gap-3 text-white/25">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                          <circle cx="26" cy="26" r="22" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M20 18l16 8-16 8V18z" fill="currentColor" opacity="0.6"/>
                        </svg>
                        <span className="text-sm tracking-widest uppercase">App screenshot / video</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Solutions ─────────────────────────────────────────────────────── */}
          <section id="solutions" className="texture-soft py-24 sm:py-28">
            <div className="site-shell">
              <div
                data-reveal
                className="reveal text-center"
              >
                <span className="kicker">Built for every type</span>
                <h2 className="display-title mx-auto mt-5 max-w-3xl text-5xl leading-none text-[#241813] sm:text-6xl">
                  Whatever you cook, we have you covered.
                </h2>
              </div>

              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {solutions.map((solution, index) => (
                  <article
                    key={solution.label}
                    data-reveal
                    className="paper-card reveal rounded-[2rem] p-8"
                    style={revealStyle(`${index * 0.09}s`)}
                  >
                    {/* Image placeholder */}
                    <div className="relative mb-7 flex h-44 items-center justify-center overflow-hidden rounded-[1.5rem] border border-black/6 bg-[#f0e8de]">
                      <div className="flex flex-col items-center gap-2 text-[#b8a090]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                          <rect x="3" y="6" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                          <circle cx="10" cy="14" r="3" stroke="currentColor" strokeWidth="1.3"/>
                          <path d="M3 20l7-5 7 5 6-4 6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-xs tracking-wider uppercase">Image placeholder</span>
                      </div>
                    </div>

                    <span className="kicker">{solution.label}</span>
                    <h3 className="display-title mt-3 text-3xl leading-none text-[#241813]">
                      {solution.headline}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--page-muted)]">
                      {solution.body}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/8 bg-black/[0.025] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#5e4a3c]"
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
          <section id="how-it-works" className="relative overflow-hidden bg-[#13110f] py-24 text-white sm:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(201,160,93,0.1),transparent_36%)]" />
            <div className="site-shell relative">
              <div
                data-reveal
                className="reveal text-center"
              >
                <span className="kicker" style={{ color: "var(--page-amber)" }}>Simple by design</span>
                <h2 className="display-title mx-auto mt-5 max-w-3xl text-5xl leading-none text-white sm:text-6xl">
                  Up and running in three steps.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
                  No lengthy onboarding. No technical expertise required.
                  YoungMenu is designed to go live the same day you sign up.
                </p>
              </div>

              <div className="mt-16 grid gap-6 lg:grid-cols-3">
                {steps.map((step, index) => (
                  <article
                    key={step.number}
                    data-reveal
                    className="reveal rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm"
                    style={revealStyle(`${index * 0.1}s`)}
                  >
                    <p
                      className="display-title text-6xl leading-none"
                      style={{ color: "var(--page-amber)", opacity: 0.45 }}
                    >
                      {step.number}
                    </p>
                    <h3 className="display-title mt-6 text-3xl leading-none text-white">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/65">
                      {step.body}
                    </p>
                  </article>
                ))}
              </div>

              <div
                data-reveal
                className="reveal mt-12 text-center"
                style={revealStyle("0.3s")}
              >
                <Link href="#contact" className="framed-button bg-white/10 text-white">
                  Get started today
                </Link>
              </div>
            </div>
          </section>

          {/* ── Testimonials ──────────────────────────────────────────────────── */}
          <section className="texture-soft py-24 sm:py-28">
            <div className="site-shell">
              <div
                data-reveal
                className="reveal text-center"
              >
                <span className="kicker">What our customers say</span>
                <h2 className="display-title mx-auto mt-5 max-w-2xl text-5xl leading-none text-[#241813] sm:text-6xl">
                  Loved by teams that serve with care.
                </h2>
              </div>

              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <article
                    key={testimonial.author}
                    data-reveal
                    className="paper-card reveal rounded-[2rem] p-8"
                    style={revealStyle(`${index * 0.09}s`)}
                  >
                    <div className="flex gap-1" aria-label="5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="var(--page-amber)" aria-hidden="true">
                          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="display-title mt-6 text-[1.55rem] leading-[1.25] text-[#241813]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                      {/* Avatar placeholder */}
                      <div className="h-10 w-10 shrink-0 rounded-full border border-black/8 bg-[#ede5da]" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-[#2d1f18]">{testimonial.author}</p>
                        <p className="text-xs text-[var(--page-muted)]">{testimonial.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── Pricing ───────────────────────────────────────────────────────── */}
          <section id="pricing" className="wood-surface py-24 text-white sm:py-28">
            <div className="site-shell">
              <div
                data-reveal
                className="reveal text-center"
              >
                <span className="kicker" style={{ color: "var(--page-amber)" }}>Transparent pricing</span>
                <h2 className="display-title mx-auto mt-5 max-w-2xl text-5xl leading-none text-white sm:text-6xl">
                  Simple plans that grow with you.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/65">
                  Start free and upgrade when you are ready. No hidden fees, no long-term contracts.
                </p>
              </div>

              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {plans.map((plan, index) => (
                  <article
                    key={plan.name}
                    data-reveal
                    className={`reveal rounded-[2rem] p-8 ${
                      plan.highlight
                        ? "border border-[rgba(201,160,93,0.4)] bg-[rgba(201,160,93,0.08)] shadow-[0_28px_80px_rgba(0,0,0,0.24)]"
                        : "border border-white/8 bg-white/[0.04] backdrop-blur-sm"
                    }`}
                    style={revealStyle(`${index * 0.09}s`)}
                  >
                    {plan.highlight && (
                      <span
                        className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em]"
                        style={{ background: "var(--page-amber)", color: "#2d1f18" }}
                      >
                        Most popular
                      </span>
                    )}
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
                      {plan.name}
                    </p>
                    <div className="mt-3 flex items-end gap-1">
                      <span className="display-title text-5xl leading-none text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="mb-1 text-sm text-white/50">{plan.period}</span>
                      )}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/60">{plan.description}</p>
                    <ul className="mt-7 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-white/75">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-1 shrink-0" aria-hidden="true">
                            <circle cx="9" cy="9" r="8" stroke="rgba(201,160,93,0.5)" strokeWidth="1.2"/>
                            <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="var(--page-amber)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href="#contact"
                        className={`framed-button w-full justify-center ${plan.highlight ? "" : "border-white/14 bg-white/[0.07] text-white/88"}`}
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
          <section className="texture-soft py-24 sm:py-28">
            <div className="site-shell">
              <div
                data-reveal
                className="paper-card reveal overflow-hidden rounded-[2.4rem] p-10 text-center sm:p-14"
              >
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(201,160,93,0.22),transparent_70%)]" aria-hidden="true" />
                <span className="kicker">Ready to get started?</span>
                <h2 className="display-title mx-auto mt-5 max-w-2xl text-5xl leading-none text-[#241813] sm:text-6xl">
                  Join the restaurants running on YoungMenu.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--page-muted)]">
                  Set up in minutes. No credit card required to start. See why hundreds of food businesses trust YoungMenu every day.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="#contact" className="framed-button" data-tone="amber">
                    Request a free demo
                  </Link>
                  <Link href="#pricing" className="framed-button text-[#2d1f18]" data-tone="dark">
                    View pricing
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── Contact ───────────────────────────────────────────────────────── */}
          <section id="contact" className="relative overflow-hidden bg-[#13110f] py-24 text-white sm:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(201,160,93,0.1),transparent_36%)]" />
            <div className="site-shell relative grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div
                data-reveal
                className="reveal"
              >
                <span className="kicker" style={{ color: "var(--page-amber)" }}>Get in touch</span>
                <h2 className="display-title mt-5 text-5xl leading-none text-white sm:text-6xl">
                  Let&apos;s talk about your restaurant.
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-white/68">
                  Whether you want a live demo, have questions about the platform, or
                  are ready to get started — our team is here to help.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M3 5h14v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="1.4"/>
                          <path d="M3 5l7 7 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                      ),
                      label: "Email",
                      value: "hello@youngmenu.com",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M4 4h3l1.5 3.5-1.5 2A10 10 0 0013 13l2-1.5L18 13v3a1 1 0 01-1 1C7.5 17 3 10.5 3 5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                        </svg>
                      ),
                      label: "Phone",
                      value: "+91 98765 43210",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.4"/>
                          <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                      ),
                      label: "Response time",
                      value: "Usually within a few hours",
                    },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.85rem] border border-white/10 bg-white/[0.06]"
                        style={{ color: "var(--page-amber)" }}
                      >
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/40">{label}</p>
                        <p className="text-sm leading-7 text-white/78">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                data-reveal
                className="reveal"
                style={revealStyle("0.12s")}
              >
                <div className="rounded-[2rem] border border-white/8 bg-white/[0.05] p-8 backdrop-blur-sm sm:p-10">
                  <h3 className="display-title text-3xl leading-none text-white">
                    Request a demo
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Fill in your details and we&apos;ll set up a personalised walkthrough for you.
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

