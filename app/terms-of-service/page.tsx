import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of the YoungMenu platform.",
};

export default function TermsOfService() {
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
                Terms of Service
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
      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using the YoungMenu platform (&ldquo;Service&rdquo;),
          operated by Floyet Labs &amp; Technologies LLP (&ldquo;Company&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you agree
          to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do
          not agree to all of these Terms, do not use the Service.
        </p>
        <p>
          These Terms apply to all users of the Service, including restaurant
          owners, staff members, and any other individuals accessing the
          platform.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p>
          YoungMenu is a restaurant and food business management platform that
          provides:
        </p>
        <ul>
          <li>Counter point-of-sale (POS) system</li>
          <li>Owner analytics dashboard</li>
          <li>Waiter mobile application</li>
          <li>Kitchen display system</li>
          <li>Digital QR menu generation</li>
          <li>Order management and tracking</li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of
          the Service at any time with reasonable notice.
        </p>
      </Section>

      <Section title="3. Account Registration">
        <p>
          To use the Service, you must register for an account. You agree to:
        </p>
        <ul>
          <li>
            Provide accurate, current, and complete information during
            registration.
          </li>
          <li>
            Maintain the security of your password and accept responsibility for
            all activity under your account.
          </li>
          <li>
            Notify us immediately of any unauthorised use of your account.
          </li>
          <li>
            Not share account credentials with individuals outside your
            authorised team.
          </li>
        </ul>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these Terms or engage in fraudulent, abusive, or unlawful activity.
        </p>
      </Section>

      <Section title="4. Permitted Use">
        <p>
          You may use the Service only for lawful purposes and in accordance
          with these Terms. You agree not to:
        </p>
        <ul>
          <li>
            Reproduce, distribute, or resell the Service without our prior
            written consent.
          </li>
          <li>
            Attempt to reverse engineer, decompile, or extract source code from
            the platform.
          </li>
          <li>
            Use the Service to process fraudulent transactions or engage in any
            illegal activity.
          </li>
          <li>Upload or transmit malicious code, viruses, or harmful data.</li>
          <li>
            Interfere with or disrupt the integrity or performance of the
            Service.
          </li>
          <li>
            Use automated tools to scrape, crawl, or extract data from the
            platform.
          </li>
        </ul>
      </Section>

      <Section title="5. Fees and Payment">
        <p>
          Certain features of the Service require a paid subscription. By
          selecting a paid plan, you agree to pay all applicable fees as
          described on our pricing page. Fees are billed in advance on a monthly
          or annual basis and are non-refundable except where required by law.
        </p>
        <p>
          We reserve the right to change our pricing with 30 days&apos; notice.
          Continued use after a price change constitutes acceptance of the new
          pricing.
        </p>
      </Section>

      <Section title="6. Intellectual Property">
        <p>
          The Service, including its original content, features, design, and
          functionality, is and will remain the exclusive property of Floyet
          Labs &amp; Technologies LLP. Our trademarks and trade dress may not be
          used in connection with any product or service without our prior
          written consent.
        </p>
        <p>
          You retain ownership of all data, content, and materials you upload to
          the platform (&ldquo;Your Content&rdquo;). By uploading Your Content,
          you grant us a limited, non-exclusive licence to use, process, and
          display it solely for the purpose of providing the Service.
        </p>
      </Section>

      <Section title="7. Data and Privacy">
        <p>
          Your use of the Service is also governed by our{" "}
          <Link
            href="/privacy-policy"
            style={{ color: "var(--page-amber-deep)" }}
          >
            Privacy Policy
          </Link>
          , which is incorporated into these Terms by reference. You are
          responsible for ensuring that your use of the Service complies with
          applicable data protection laws, including obtaining necessary
          consents from your customers.
        </p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, Floyet Labs &amp;
          Technologies LLP shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, including loss of
          profits, data, or goodwill, arising from your use of or inability to
          use the Service.
        </p>
        <p>
          In no event shall our total liability to you for all claims exceed the
          amount you paid us for the Service in the 12 months preceding the
          claim.
        </p>
      </Section>

      <Section title="9. Disclaimer of Warranties">
        <p>
          The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis without warranties of any kind, either express
          or implied. We do not warrant that the Service will be uninterrupted,
          error-free, or free of harmful components.
        </p>
      </Section>

      <Section title="10. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Floyet Labs &amp;
          Technologies LLP and its officers, directors, employees, and agents
          from and against any claims, damages, obligations, losses,
          liabilities, costs, or expenses arising from your use of the Service
          or your violation of these Terms.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India. Any disputes arising under these Terms shall be subject
          to the exclusive jurisdiction of the courts located in Kozhikode,
          Kerala, India.
        </p>
      </Section>

      <Section title="12. Termination">
        <p>
          We may terminate or suspend your account immediately, without prior
          notice, if you breach these Terms. Upon termination, your right to use
          the Service ceases immediately. Provisions of these Terms that by
          their nature should survive termination shall survive, including
          ownership provisions, disclaimers, and limitations of liability.
        </p>
      </Section>

      <Section title="13. Changes to Terms">
        <p>
          We reserve the right to modify these Terms at any time. We will
          provide notice of material changes by updating the &ldquo;Last
          updated&rdquo; date and, where appropriate, by notifying you via
          email. Your continued use of the Service after any changes constitutes
          your acceptance of the new Terms.
        </p>
      </Section>

      <Section title="14. Contact Us">
        <p>For questions about these Terms, please contact:</p>
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
          href="/privacy-policy"
          className="text-sm font-semibold transition-colors hover:text-[#2d1f18]"
          style={{ color: "var(--page-amber-deep)" }}
        >
          Privacy Policy →
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
