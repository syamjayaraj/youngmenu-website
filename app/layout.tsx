import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const displayFont = localFont({
  src: [
    {
      path: "./fonts/NewYork.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NewYorkItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = localFont({
  src: "./fonts/SFNS.ttf",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YoungMenu — Restaurant Management Platform",
  description:
    "YoungMenu is a complete management solution for restaurants, cafes, and home bakers. Digital menus, order taking, counter, kitchen display, and more.",
  applicationName: "YoungMenu",
  keywords: ["restaurant management", "digital menu", "QR menu", "cafe management", "home baker", "order management", "kitchen display"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
