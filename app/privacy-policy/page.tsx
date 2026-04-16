import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how YoungMenu collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <SiteHeader />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1 texture-soft">
          {/* Hero */}
          <div
            className="py-28 text-white sm:py-36"
            style={{ background: "#13110f" }}
          >
            <div className="site-shell">
              <p className="kicker" style={{ color: "var(--page-amber)" }}>
                Legal
              </p>
              <h1 className="display-title mt-4 max-w-2xl text-5xl text-white sm:text-6xl">
                Privacy Policy
              </h1>
              <p
                className="mt-4 text-sm"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Last updated: 1 January 2026
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="py-16 sm:py-20">
            <div className="site-shell">
              <div className="mx-auto max-w-3xl">
                <LegalContent />
              </div>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

function LegalContent() {
  return (
    <div className="legal-prose">
      <Section title="1. Introduction">
        <p>
          Floyet Labs &amp; Technologies LLP (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the YoungMenu
          platform, accessible at <strong>youngmenu.com</strong> and via the
          YoungMenu Manager mobile application (collectively, the
          &ldquo;Service&rdquo;). This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our
          Service.
        </p>
        <p>
          By accessing or using YoungMenu, you agree to the collection and use
          of information in accordance with this policy. If you do not agree,
          please discontinue use of our Service.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>
          We collect information you provide directly and information generated
          through your use of the Service.
        </p>
        <SubHeading>2.1 Information you provide</SubHeading>
        <ul>
          <li>
            <strong>Account information:</strong> Name, business name, email
            address, phone number, and password when you register.
          </li>
          <li>
            <strong>Business data:</strong> Menu items, pricing, categories,
            staff details, and operational settings you configure.
          </li>
          <li>
            <strong>Transaction data:</strong> Order details, payment amounts,
            and timestamps processed through the platform.
          </li>
          <li>
            <strong>Communications:</strong> Messages you send us via the
            contact form, email, or support channels.
          </li>
        </ul>
        <SubHeading>2.2 Information collected automatically</SubHeading>
        <ul>
          <li>
            <strong>Usage data:</strong> Pages visited, features used, session
            duration, click patterns, and error logs.
          </li>
          <li>
            <strong>Device data:</strong> Device type, operating system, browser
            type, and IP address.
          </li>
          <li>
            <strong>Cookies and similar technologies:</strong> See our Cookie
            Policy for details.
          </li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and improve the YoungMenu platform.</li>
          <li>Process orders and transactions on your behalf.</li>
          <li>Authenticate users and maintain account security.</li>
          <li>
            Send service-related communications such as confirmations, invoices,
            and alerts.
          </li>
          <li>Respond to support requests and enquiries.</li>
          <li>
            Send product updates, feature announcements, and marketing content
            (you may opt out at any time).
          </li>
          <li>
            Comply with legal obligations and enforce our Terms of Service.
          </li>
          <li>
            Conduct analytics to understand usage patterns and improve the
            product.
          </li>
        </ul>
      </Section>

      <Section title="4. Sharing of Information">
        <p>We do not sell your personal data. We may share information with:</p>
        <ul>
          <li>
            <strong>Service providers:</strong> Third-party vendors who assist
            in delivering the Service (e.g., cloud hosting, payment gateways,
            analytics, email delivery). They are bound by data processing
            agreements.
          </li>
          <li>
            <strong>Business transfers:</strong> In the event of a merger,
            acquisition, or sale of assets, your data may be transferred as part
            of that transaction.
          </li>
          <li>
            <strong>Legal requirements:</strong> When required by law, court
            order, or to protect the rights, property, or safety of YoungMenu,
            our users, or the public.
          </li>
        </ul>
      </Section>

      <Section title="5. Data Retention">
        <p>
          We retain your personal data for as long as your account is active or
          as needed to provide the Service. If you close your account, we will
          delete or anonymise your data within 90 days, except where we are
          required to retain it for legal or regulatory purposes.
        </p>
      </Section>

      <Section title="6. Data Security">
        <p>
          We implement industry-standard technical and organisational measures
          to protect your data against unauthorised access, alteration,
          disclosure, or destruction. These include TLS encryption in transit,
          encrypted storage at rest, and access controls. However, no method of
          transmission over the internet is 100% secure.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p>
          Depending on your location, you may have the following rights with
          respect to your personal data:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the personal data we hold
            about you.
          </li>
          <li>
            <strong>Correction:</strong> Request correction of inaccurate or
            incomplete data.
          </li>
          <li>
            <strong>Deletion:</strong> Request erasure of your personal data.
          </li>
          <li>
            <strong>Portability:</strong> Request transfer of your data in a
            machine-readable format.
          </li>
          <li>
            <strong>Objection:</strong> Object to processing based on legitimate
            interests.
          </li>
          <li>
            <strong>Withdrawal of consent:</strong> Withdraw consent for
            marketing communications at any time.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <strong>info@floyet.com</strong>.
        </p>
      </Section>

      <Section title="8. Children's Privacy">
        <p>
          The Service is not directed to individuals under the age of 18. We do
          not knowingly collect personal data from children. If you believe a
          child has provided us with personal information, please contact us
          immediately.
        </p>
      </Section>

      <Section title="9. Third-Party Links">
        <p>
          Our Service may contain links to third-party websites. We are not
          responsible for the privacy practices of those sites and encourage you
          to read their privacy policies.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of significant changes by updating the &ldquo;Last updated&rdquo;
          date at the top of this page and, where appropriate, by sending an
          email notification. Your continued use of the Service after such
          changes constitutes acceptance of the revised policy.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>
          If you have any questions about this Privacy Policy, please contact:
        </p>
        <address className="not-italic">
          <strong>Floyet Labs &amp; Technologies LLP</strong>
          <br />
          Door No: 2211, 2/1149/I 100
          <br />
          Hilite Business Park
          <br />
          Kozhikode – 673014, Kerala, India
          <br />
          Email: <a href="mailto:info@floyet.com">info@floyet.com</a>
        </address>
      </Section>

      <div
        className="mt-12 flex gap-4 border-t pt-8"
        style={{ borderColor: "rgba(54,34,22,0.10)" }}
      >
        <Link
          href="/terms-of-service"
          className="text-sm font-semibold transition-colors hover:text-[#2d1f18]"
          style={{ color: "var(--page-amber-deep)" }}
        >
          Terms of Service →
        </Link>
        <Link
          href="/cookie-policy"
          className="text-sm font-semibold transition-colors hover:text-[#2d1f18]"
          style={{ color: "var(--page-amber-deep)" }}
        >
          Cookie Policy →
        </Link>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="display-title mb-4 text-2xl text-[#2d1f18]">{title}</h2>
      <div
        className="space-y-3 text-[0.94rem] leading-8"
        style={{ color: "var(--page-muted)" }}
      >
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mt-5 mb-2 text-sm font-semibold uppercase tracking-wider"
      style={{ color: "#5e4a3c" }}
    >
      {children}
    </h3>
  );
}
