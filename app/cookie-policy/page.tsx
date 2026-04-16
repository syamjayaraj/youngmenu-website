import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Understand how YoungMenu uses cookies and similar tracking technologies.",
};

export default function CookiePolicy() {
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
                Cookie Policy
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
      <Section title="1. What Are Cookies">
        <p>
          Cookies are small text files placed on your device (computer, tablet,
          or mobile) when you visit a website. They are widely used to make
          websites work more efficiently and to provide information to website
          owners. Cookies may be &ldquo;session cookies&rdquo; (deleted when you
          close your browser) or &ldquo;persistent cookies&rdquo; (which remain
          on your device for a set period).
        </p>
      </Section>

      <Section title="2. How We Use Cookies">
        <p>
          YoungMenu, operated by Floyet Labs &amp; Technologies LLP, uses
          cookies and similar technologies (such as local storage and session
          storage) for the following purposes:
        </p>
        <CookieTable
          rows={[
            {
              type: "Strictly necessary",
              purpose:
                "Required for the Service to function. These include authentication tokens, session management, and security cookies. Cannot be disabled.",
              examples: "Session token, CSRF token",
            },
            {
              type: "Functional",
              purpose:
                "Remember your preferences and settings to personalise your experience (e.g., language, selected role, theme).",
              examples: "UI preferences, selected outlet",
            },
            {
              type: "Analytics",
              purpose:
                "Help us understand how users interact with the Service so we can improve it. Data is aggregated and anonymised.",
              examples: "Page views, feature usage, error rates",
            },
            {
              type: "Marketing",
              purpose:
                "Used to deliver relevant information about YoungMenu on third-party platforms. Only set with your consent.",
              examples: "Ad network cookies",
            },
          ]}
        />
      </Section>

      <Section title="3. Third-Party Cookies">
        <p>
          Some cookies on our Service are set by third-party service providers
          we use, including:
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> — to analyse usage patterns and
            improve the product. Google&apos;s privacy policy applies to these
            cookies.
          </li>
          <li>
            <strong>Payment processors</strong> — to facilitate secure payment
            transactions. These providers operate under their own privacy and
            cookie policies.
          </li>
          <li>
            <strong>Customer support tools</strong> — to power our in-app help
            and support features.
          </li>
        </ul>
        <p>
          We do not control third-party cookies and recommend reviewing the
          relevant third-party privacy policies.
        </p>
      </Section>

      <Section title="4. Cookie Consent">
        <p>
          When you first visit youngmenu.com, you will be presented with a
          cookie consent banner. Strictly necessary cookies are always active.
          You may choose to accept or decline functional, analytics, and
          marketing cookies. You can change your preferences at any time through
          the cookie settings link in our footer.
        </p>
      </Section>

      <Section title="5. How to Control Cookies">
        <p>
          In addition to the consent banner, you can control cookies through
          your browser settings. Most browsers allow you to:
        </p>
        <ul>
          <li>View all cookies stored on your device.</li>
          <li>Delete all or selected cookies.</li>
          <li>Block cookies from specific websites or all websites.</li>
          <li>Set preferences for first-party vs. third-party cookies.</li>
        </ul>
        <p>
          Please note that disabling certain cookies may affect the
          functionality of the Service. For guidance on managing cookies in your
          browser, visit:
        </p>
        <ul>
          <li>
            Google Chrome: Settings → Privacy and security → Cookies and other
            site data
          </li>
          <li>Safari: Preferences → Privacy</li>
          <li>Firefox: Settings → Privacy &amp; Security</li>
          <li>Microsoft Edge: Settings → Cookies and site permissions</li>
        </ul>
      </Section>

      <Section title="6. Do Not Track">
        <p>
          Some browsers include a &ldquo;Do Not Track&rdquo; (DNT) feature that
          signals your preference not to be tracked. As there is no consistent
          industry standard for DNT signals, we do not currently respond to DNT
          browser signals.
        </p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in technology, regulation, or our business practices. The &ldquo;Last
          updated&rdquo; date at the top of this page will reflect any changes.
          We encourage you to review this policy periodically.
        </p>
      </Section>

      <Section title="8. Contact Us">
        <p>If you have questions about our use of cookies, please contact:</p>
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
          href="/terms-of-service"
          className="text-sm font-semibold transition-colors hover:text-[#2d1f18]"
          style={{ color: "var(--page-amber-deep)" }}
        >
          Terms of Service →
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

type CookieRow = { type: string; purpose: string; examples: string };

function CookieTable({ rows }: { rows: CookieRow[] }) {
  return (
    <div
      className="mt-4 overflow-x-auto rounded-2xl"
      style={{ border: "1px solid rgba(54,34,22,0.10)" }}
    >
      <table className="w-full text-sm">
        <thead>
          <tr
            style={{
              background: "rgba(54,34,22,0.04)",
              borderBottom: "1px solid rgba(54,34,22,0.10)",
            }}
          >
            <th
              className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#5e4a3c" }}
            >
              Type
            </th>
            <th
              className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#5e4a3c" }}
            >
              Purpose
            </th>
            <th
              className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#5e4a3c" }}
            >
              Examples
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.type}
              style={{
                borderBottom:
                  i < rows.length - 1
                    ? "1px solid rgba(54,34,22,0.07)"
                    : undefined,
              }}
            >
              <td
                className="px-5 py-4 font-semibold align-top"
                style={{ color: "#2d1f18", whiteSpace: "nowrap" }}
              >
                {row.type}
              </td>
              <td
                className="px-5 py-4 leading-7 align-top"
                style={{ color: "var(--page-muted)" }}
              >
                {row.purpose}
              </td>
              <td
                className="px-5 py-4 leading-7 align-top"
                style={{ color: "var(--page-muted)" }}
              >
                {row.examples}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
