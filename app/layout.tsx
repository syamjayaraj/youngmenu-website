import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const displayFont = localFont({
  src: [
    { path: "./fonts/NewYork.ttf",       weight: "400", style: "normal" },
    { path: "./fonts/NewYorkItalic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = localFont({
  src: "./fonts/SFNS.ttf",
  variable: "--font-body",
  display: "swap",
});

const BASE_URL = "https://youngmenu.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "YoungMenu — Restaurant Management Platform",
    template: "%s | YoungMenu",
  },
  description:
    "YoungMenu is a complete management solution for restaurants, cafes, and home bakers. Counter POS, waiter app, kitchen display system, and QR digital menu — all in one platform.",

  keywords: [
    "restaurant management software",
    "digital menu QR code",
    "POS system for restaurants",
    "cafe management app",
    "home baker order management",
    "kitchen display system",
    "waiter app",
    "restaurant billing software India",
    "YoungMenu",
  ],

  authors: [{ name: "YoungMenu", url: BASE_URL }],
  creator: "YoungMenu",
  publisher: "YoungMenu",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "YoungMenu",
    title: "YoungMenu — Restaurant Management Platform",
    description:
      "A complete management platform for restaurants, cafes, and home bakers. Counter POS, waiter app, kitchen display, QR menu — everything in one place.",
  },

  twitter: {
    card: "summary_large_image",
    title: "YoungMenu — Restaurant Management Platform",
    description:
      "Counter POS, waiter app, kitchen display, and QR menu for restaurants, cafes, and home bakers.",
    creator: "@youngmenu",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a className="skip-link" href="#content-root">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
