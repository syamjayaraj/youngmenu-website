import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms" },
];

const productLinks = [
  { href: "/youngmenu-manager", label: "YoungMenu Manager" },
  { href: "/youngmenu-manager/pricing", label: "Pricing" },
  { href: null, label: "YoungMenu", note: "Coming soon" },
];

function SocialIcon({ children, href, label }: { children: ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="site-footer__social-link"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__wrap">
        <div className="site-footer__panel">
          <div className="site-footer__grid">
            <div className="site-footer__col site-footer__brand">
              <Link href="/" className="site-footer__brand-link">
                <span className="site-footer__logo-box">
                  <Image
                    src="/assets/logo/logo.png"
                    alt=""
                    width={36}
                    height={36}
                    className="site-footer__logo-img"
                    aria-hidden
                  />
                </span>
                <span className="site-footer__wordmark">YoungMenu</span>
              </Link>
              <p className="site-footer__about">
                The complete food ecosystem — YoungMenu Manager for restaurants,
                cafes, and home bakers and YoungMenu for customers.
              </p>
              <div className="site-footer__social">
                <SocialIcon href="https://www.linkedin.com/company/floyet" label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.facebook.com/youngmenu" label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.01 4.39 11 10.13 11.93v-8.44H7.08V12h3.05V9.41c0-3.01 1.79-4.68 4.53-4.68 1.31 0 2.68.23 2.68.23v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88V12h3.32l-.53 3.49h-2.79v8.44C19.61 23.07 24 18.08 24 12.07z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/youngmenu.app" label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9a3.64 3.64 0 01-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.87.34 4.1.65c-.79.31-1.46.72-2.13 1.39A5.82 5.82 0 00.65 4.1C.34 4.87.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.18.58 2.95.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.77.31 1.68.52 2.95.58 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.18-.27 2.95-.58.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.31-.77.52-1.68.58-2.95.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.18-.58-2.95A5.82 5.82 0 0021.9 4.1c-.67-.67-1.34-1.08-2.13-1.39-.77-.31-1.68-.52-2.95-.58C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>

            <div className="site-footer__col">
              <h2 className="site-footer__heading">Company</h2>
              <ul className="site-footer__links">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__col">
              <h2 className="site-footer__heading">Products</h2>
              <ul className="site-footer__links">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link href={link.href}>{link.label}</Link>
                    ) : (
                      <span className="site-footer__muted">
                        {link.label}
                        {link.note ? (
                          <span className="site-footer__note"> ({link.note})</span>
                        ) : null}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__col">
              <h2 className="site-footer__heading">Contact</h2>
              <ul className="site-footer__contact">
                <li>
                  <span className="site-footer__contact-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2a5 5 0 00-5 5c0 4 5 11 5 11s5-7 5-11a5 5 0 00-5-5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <circle cx="10" cy="7" r="1.8" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </span>
                  <span>
                    Floyet Labs &amp; Technologies LLP
                    <br />
                    Door No: 2211, 2/1149/I 100
                    <br />
                    Hilite Business Park
                    <br />
                    Kozhikode – 673014
                  </span>
                </li>
                <li>
                  <span className="site-footer__contact-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M3 5h14v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3 5l7 7 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <a href="mailto:info@floyet.com">info@floyet.com</a>
                </li>
                <li>
                  <span className="site-footer__contact-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 4h3l1.5 3.5-1.5 2A10 10 0 0013 13l2-1.5L18 13v3a1 1 0 01-1 1C7.5 17 3 10.5 3 5a1 1 0 011-1z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <a href="tel:+919746742650">+91 9746742650</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bar">
          <p className="site-footer__copyright">
            © 2026 YOUNGMENU. All rights reserved.{" "}
            <span className="site-footer__sep" aria-hidden="true">
              |
            </span>{" "}
            Powered by{" "}
            <a href="https://floyet.com" target="_blank" rel="noopener noreferrer">
              FLOYET
            </a>
          </p>
          <nav aria-label="Footer legal" className="site-footer__legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
