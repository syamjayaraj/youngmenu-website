import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { PageHero } from "@/app/components/page-hero";
import { ContactDetails } from "@/app/components/contact-details";
import { ContactForm } from "@/app/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the YoungMenu team for demos, partnerships, and support for restaurants, cafes, and home bakers.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1">
          <PageHero
            kicker="Contact"
            title="Let's talk about your food business."
            description="Request a demo, ask a question, or tell us about your restaurant, cafe, or bakery. Our team will get back to you shortly."
          />

          <section className="texture-soft section-block">
            <div className="site-shell">
              <div className="contact-page">
                <ContactDetails />
                <div className="contact-page__form paper-card">
                  <h2 className="display-title text-3xl text-[#241813]">Send a message</h2>
                  <p className="mt-2 text-sm leading-7" style={{ color: "var(--page-muted)" }}>
                    Fill in the form and we will reach out to schedule a demo or answer
                    your question.
                  </p>
                  <ContactForm />
                </div>
              </div>
              <p className="contact-page__manager-note">
                Looking for product details?{" "}
                <Link href="/features">Explore YoungMenu Manager features</Link> or visit{" "}
                <Link href="/youngmenu-manager">the manager page</Link>.
              </p>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
