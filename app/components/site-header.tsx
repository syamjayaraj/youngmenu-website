import Link from "next/link";
import { BrandBadge } from "@/app/components/brand-badge";
import { MobileNav } from "@/app/components/mobile-nav";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="site-shell">
        <div className="relative flex items-center gap-3 rounded-[2rem] border border-[#362216]/10 bg-[#fffaf4f2] px-3 py-3 text-[#2d1f18] shadow-[0_14px_50px_rgba(45,31,24,0.10)] backdrop-blur-xl">
          <Link href="/" className="shrink-0">
            <BrandBadge tone="dark" />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden min-w-0 flex-1 md:flex"
          >
            <div className="flex min-w-0 flex-1 items-center gap-1 px-1 text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-[#5f4a3d]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-[#2d1f18]/6 hover:text-[#2d1f18]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link
              href="#contact"
              className="framed-button"
              data-tone="dark"
            >
              Get started
            </Link>
          </div>

          {/* Mobile nav */}
          <div className="ml-auto md:hidden">
            <MobileNav items={[...navItems, { href: "#contact", label: "Get started" }]} />
          </div>
        </div>
      </div>
    </header>
  );
}
