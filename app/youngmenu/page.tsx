import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

export const metadata: Metadata = {
  title: "YoungMenu — Coming Soon",
  description:
    "The YoungMenu customer app is coming soon. Browse digital menus and order from your favourite restaurants.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://youngmenu.com/youngmenu",
  },
};

export default function YoungMenuComingSoonPage() {
  return (
    <>
      <SiteHeader />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1 texture-soft">
          <section className="site-shell flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
            <Image
              src="/assets/logo/logo.png"
              alt="YoungMenu"
              width={72}
              height={72}
              className="rounded-full"
            />
            <p className="coming-soon-pill mt-8">Coming soon</p>
            <h1 className="display-title mt-6 text-5xl text-[#241813]">YoungMenu</h1>
            <p
              className="mt-5 max-w-lg text-base leading-8"
              style={{ color: "var(--page-muted)" }}
            >
              The customer ordering app is on the way. Meanwhile, explore YoungMenu
              Manager for restaurants, cafes, and home bakers.
            </p>
            <div className="mt-10">
              <Link href="/youngmenu-manager" className="framed-button" data-tone="amber">
                YoungMenu Manager
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
