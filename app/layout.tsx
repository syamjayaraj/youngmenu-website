import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./store.css";
import "@/css/bootstrap.min.css";
import "@/css/materialdesignicons.min.css";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YoungMenu",
};

export const revalidate = 3600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-LP6BYPMX9G" />
    </html>
  );
}
