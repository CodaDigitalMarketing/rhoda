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
    <footer style={{ padding: "0 16px 16px" }}>
      <div
        style={{
          borderRadius: 12,
          backgroundColor: "#FDF0EB",
          color: "#1A1A1F",
        }}
      >
        {/* Main footer content */}
        <div
          className="max-w-[1140px] mx-auto px-8 md:px-12"
          style={{ paddingTop: 64, paddingBottom: 48 }}
        >
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left column — brand */}
            <div className="lg:w-5/12">
              <Image
                src="/assets/images/logo/rhoda-logo-light.svg"
                alt="rhoda Ai"
                width={120}
                height={32}
              />
              <p
                className="mt-6"
                style={{ fontSize: 16, lineHeight: 1.7, color: "#1A1A1F" }}
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

            {/* Right columns */}
            <div className="lg:w-7/12 flex flex-col sm:flex-row gap-12 sm:gap-16">
              {/* Navigation */}
              <div className="sm:w-1/2">
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "#6B6B74",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 20,
                    fontFamily:
                      '"Space Grotesk", system-ui, sans-serif',
                  }}
                >
                  Navigation
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          fontSize: 15,
                          color: "#6B6B74",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#C45230")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#6B6B74")
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="sm:w-1/2">
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "#6B6B74",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 20,
                    fontFamily:
                      '"Space Grotesk", system-ui, sans-serif',
                  }}
                >
                  Contact
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <a
                    href="mailto:info@rhoda.ai"
                    style={{
                      fontSize: 15,
                      color: "#6B6B74",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C45230")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#6B6B74")
                    }
                  >
                    info@rhoda.ai
                  </a>
                  <a
                    href="mailto:research@rhoda.ai"
                    style={{
                      fontSize: 15,
                      color: "#6B6B74",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C45230")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#6B6B74")
                    }
                  >
                    research@rhoda.ai
                  </a>
                  <span style={{ fontSize: 15, color: "#6B6B74" }}>
                    Palo Alto, CA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="max-w-[1140px] mx-auto px-8 md:px-12"
          style={{
            borderTop: "1px solid #E2E2E6",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <p style={{ fontSize: 13, color: "#6B6B74" }}>
            &copy; 2026 Rhoda AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
