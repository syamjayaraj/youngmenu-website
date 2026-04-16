import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/#features",    label: "Features" },
      { href: "/#solutions",   label: "Solutions" },
      { href: "/#how-it-works",label: "How it works" },
      { href: "/#pricing",     label: "Pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/#solutions", label: "Restaurants" },
      { href: "/#solutions", label: "Cafes" },
      { href: "/#solutions", label: "Home bakers" },
      { href: "/#solutions", label: "Cloud kitchens" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/#features", label: "Owner dashboard" },
      { href: "/#features", label: "Waiter app" },
      { href: "/#features", label: "Kitchen display" },
      { href: "/#features", label: "QR menu" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#contact",         label: "Contact us" },
      { href: "/#contact",         label: "Request a demo" },
      { href: "/privacy-policy",   label: "Privacy policy" },
      { href: "/terms-of-service", label: "Terms of service" },
      { href: "/cookie-policy",    label: "Cookie policy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      className="border-t py-16"
      style={{
        borderColor: "rgba(54,34,22,0.08)",
        background: "linear-gradient(180deg, #f7efe6, #f2e8dc)",
        color: "#4e3a2f",
      }}
    >
      <div className="site-shell">
        {/* Top row */}
        <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <span className="display-title text-3xl" style={{ color: "#2d1f18" }}>
              YoungMenu
            </span>
            <p className="mt-3 text-sm leading-7" style={{ color: "var(--page-muted)" }}>
              A complete management solution for restaurants, cafes, and home bakers.
              Streamline operations from counter to kitchen.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/youngmenu.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YoungMenu on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl transition hover:opacity-70"
                style={{
                  border: "1px solid rgba(54,34,22,0.12)",
                  background: "rgba(54,34,22,0.04)",
                  color: "var(--page-amber-deep)",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.7"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/youngmenu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YoungMenu on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl transition hover:opacity-70"
                style={{
                  border: "1px solid rgba(54,34,22,0.12)",
                  background: "rgba(54,34,22,0.04)",
                  color: "var(--page-amber-deep)",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <Link
            href="/#contact"
            className="framed-button shrink-0"
            data-tone="dark"
          >
            Request a demo
          </Link>
        </div>

        {/* Nav columns */}
        <div
          className="grid gap-10 border-t pt-10 md:grid-cols-2 xl:grid-cols-4"
          style={{ borderColor: "rgba(54,34,22,0.08)" }}
        >
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2
                className="display-title text-2xl"
                style={{ color: "#2d1f18" }}
              >
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3 text-[0.92rem] leading-7" style={{ color: "#715b4b" }}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[#2d1f18]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-center gap-4 border-t pt-8 text-center text-xs"
          style={{ borderColor: "rgba(54,34,22,0.08)", color: "#9a7e6e" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy"   className="transition-colors hover:text-[#2d1f18]">Privacy Policy</Link>
            <span aria-hidden="true" style={{ color: "rgba(54,34,22,0.25)" }}>|</span>
            <Link href="/terms-of-service" className="transition-colors hover:text-[#2d1f18]">Terms of Service</Link>
            <span aria-hidden="true" style={{ color: "rgba(54,34,22,0.25)" }}>|</span>
            <Link href="/cookie-policy"    className="transition-colors hover:text-[#2d1f18]">Cookie Policy</Link>
          </div>
          <p style={{ color: "#9a7e6e" }}>
            © 2026 YOUNGMENU. All rights reserved.{" "}
            <span aria-hidden="true" style={{ color: "rgba(54,34,22,0.25)" }}>|</span>{" "}
            Powered by{" "}
            <a
              href="https://floyet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:text-[#2d1f18]"
              style={{ color: "var(--page-amber-deep)" }}
            >
              FLOYET
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
