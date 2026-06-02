"use client";

import Link from "next/link";
import { BrandBadge } from "@/app/components/brand-badge";
import { AppSwitcher } from "@/app/components/app-switcher";
import { CurrencyProvider, CurrencySelector } from "@/app/components/currency-selector";
import { MobileNav } from "@/app/components/mobile-nav";

const navItems = [
  { href: "/youngmenu-manager#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeaderShell() {
  return (
    <CurrencyProvider>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
        <div className="site-shell">
          <div className="relative overflow-visible rounded-[2rem] border border-[#362216]/10 bg-[#fffaf4f2] px-3 py-3 text-[#2d1f18] shadow-[0_14px_50px_rgba(45,31,24,0.10)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Link href="/" className="shrink-0">
                <BrandBadge tone="dark" />
              </Link>

              <div className="ml-auto flex min-w-0 items-center gap-3 sm:gap-4">
                <nav
                  aria-label="Primary navigation"
                  className="site-header__nav hidden min-w-0 items-center lg:flex"
                >
                  <AppSwitcher variant="header" className="site-header__app-switcher" />
                  <span className="site-header__nav-divider" aria-hidden="true" />
                  <div className="site-header__nav-links">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href} className="site-header__nav-link">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                <CurrencySelector />

                <div className="lg:hidden">
                  <MobileNav items={navItems} showAppSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </CurrencyProvider>
  );
}
