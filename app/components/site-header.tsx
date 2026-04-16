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
        <div className="relative flex items-center gap-3 rounded-[2rem] border border-white/12 bg-[#120d0af2] px-3 py-3 text-white shadow-[0_14px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <Link href="/" className="shrink-0">
            <BrandBadge />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden min-w-0 flex-1 md:flex"
          >
            <div className="flex min-w-0 flex-1 items-center gap-1 px-1 text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-white/80">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link
              href="#contact"
              className="framed-button bg-white/10 text-white"
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
