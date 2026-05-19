"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/research/direct-video-action", label: "Research" },
  { href: "/news", label: "News" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer>
      <div
        style={{
          backgroundColor: "var(--footer-bg)",
          color: "var(--footer-text)",
        }}
      >
        <div
          className="max-w-[1140px] mx-auto px-8 md:px-12"
          style={{ paddingTop: 64, paddingBottom: 48 }}
        >
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-5/12">
              <Image
                src="/assets/images/logo/rhoda-logo-light.svg"
                alt="rhoda Ai"
                width={120}
                height={32}
                style={{ filter: "var(--logo-filter)" }}
              />
              <p
                className="mt-6"
                style={{ fontSize: 16, lineHeight: 1.7, color: "var(--footer-muted)" }}
              >
                Rhoda develops cutting edge robotic intelligence to bring
                generalist robots to the real world.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-outline">
                  Schedule Consultation
                </Link>
              </div>
            </div>

            <div className="lg:w-7/12 flex flex-col sm:flex-row gap-12 sm:gap-16">
              <div className="sm:w-1/2">
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "var(--footer-muted)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 20,
                    fontFamily: '"Space Grotesk", system-ui, sans-serif',
                  }}
                >
                  Navigation
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{ fontSize: 15, color: "var(--footer-muted)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--footer-muted)")}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:w-1/2">
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "var(--footer-muted)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 20,
                    fontFamily: '"Space Grotesk", system-ui, sans-serif',
                  }}
                >
                  Contact
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <a
                    href="mailto:info@rhoda.ai"
                    style={{ fontSize: 15, color: "var(--footer-muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--footer-muted)")}
                  >
                    info@rhoda.ai
                  </a>
                  <a
                    href="mailto:research@rhoda.ai"
                    style={{ fontSize: 15, color: "var(--footer-muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--footer-muted)")}
                  >
                    research@rhoda.ai
                  </a>
                  <span style={{ fontSize: 15, color: "var(--footer-muted)" }}>
                    Palo Alto, CA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-[1140px] mx-auto px-8 md:px-12"
          style={{ borderTop: "1px solid var(--footer-border)", paddingTop: 20, paddingBottom: 20 }}
        >
          <p style={{ fontSize: 13, color: "var(--footer-muted)" }}>
            &copy; 2026 Rhoda AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
