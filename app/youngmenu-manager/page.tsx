import type { Metadata } from "next";
import { HomeContent } from "@/app/components/home-content";
import { SiteHeader } from "@/app/components/site-header";

export const metadata: Metadata = {
  title: "YoungMenu Manager — Restaurant, Cafe & Home Baker Management",
  description:
    "YoungMenu Manager is the management app for restaurants, cafes, and home bakers. Run POS, kitchen display, billing, menus, and team operations in one place.",
  alternates: {
    canonical: "https://youngmenu.com/youngmenu-manager",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://youngmenu.com/#manager",
      name: "YoungMenu Manager",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android, iOS",
      url: "https://youngmenu.com/youngmenu-manager",
      description:
        "YoungMenu Manager is restaurant management software with POS, menu setup, billing, kitchen display, and owner analytics.",
    },
  ],
};

export default function YoungMenuManagerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <HomeContent mode="manager" />
    </>
  );
}
