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
  applicationName: "YoungMenu",
  category: "Restaurant Management Software",

  title: {
    default: "YoungMenu - Restaurant POS, QR Menu & Kitchen Display Software",
    template: "%s | YoungMenu",
  },
  description:
    "YoungMenu is restaurant management software for restaurants, cafes, and home bakers with counter POS, waiter app, kitchen display system, QR digital menu, order management, and owner analytics.",

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
    title: "YoungMenu - Restaurant POS, QR Menu & Kitchen Display Software",
    description:
      "Run orders, billing, QR menus, waiter apps, kitchen screens, and owner reports from one modern restaurant management platform.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "YoungMenu restaurant management platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YoungMenu - Restaurant POS, QR Menu & Kitchen Display Software",
    description:
      "Counter POS, waiter app, kitchen display, QR digital menu, and owner analytics for restaurants, cafes, and home bakers.",
    creator: "@youngmenu",
    images: ["/opengraph-image"],
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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
