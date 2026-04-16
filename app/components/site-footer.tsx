import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#solutions", label: "Solutions" },
      { href: "#how-it-works", label: "How it works" },
      { href: "#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "#solutions", label: "Restaurants" },
      { href: "#solutions", label: "Cafes" },
      { href: "#solutions", label: "Home bakers" },
      { href: "#solutions", label: "Cloud kitchens" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "#features", label: "Owner dashboard" },
      { href: "#features", label: "Waiter app" },
      { href: "#features", label: "Kitchen display" },
      { href: "#features", label: "QR menu" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#contact", label: "Contact us" },
      { href: "#contact", label: "Request a demo" },
      { href: "#", label: "Privacy policy" },
      { href: "#", label: "Terms of service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/6 bg-[#f7efe6] py-16 text-[#4e3a2f]">
      <div className="site-shell">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <span className="display-title text-3xl text-[#2d1f18]">YoungMenu</span>
            <p className="mt-3 text-sm leading-7 text-[var(--page-muted)]">
              A complete management solution for restaurants, cafes, and home bakers.
              Streamline operations from counter to kitchen.
            </p>
          </div>
          <Link
            href="#contact"
            className="framed-button shrink-0 text-[#2d1f18]"
            data-tone="dark"
          >
            Request a demo
          </Link>
        </div>

        <div className="grid gap-10 border-t border-black/8 pt-10 md:grid-cols-2 xl:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="font-display text-2xl leading-none tracking-[-0.04em] text-[#2d1f18]">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3 text-[0.95rem] leading-7 text-[#715b4b]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-[#2d1f18]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 border-t border-black/8 pt-8 text-center text-sm text-[#7d6b5d]">
          <span className="ornament-line" aria-hidden="true">
            <span className="text-xs uppercase tracking-[0.35em]">YoungMenu</span>
          </span>
          <p>Copyright © {new Date().getFullYear()} YoungMenu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
