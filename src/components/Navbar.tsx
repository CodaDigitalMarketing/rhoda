"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/research/direct-video-action", label: "Research" },
  { href: "/news", label: "News" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) setHidden(false);
      else if (currentY < lastScrollY.current) setHidden(false);
      else if (currentY > lastScrollY.current) {
        setHidden(true);
        setMobileOpen(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: hidden ? "-180px" : "12px",
        left: 0,
        right: 0,
        zIndex: 1030,
        padding: "0 16px",
        transition: "top 0.5s",
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "14px 28px",
          borderRadius: 14,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "0 2px 16px rgba(0, 0, 0, 0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0, lineHeight: 0 }}>
          <Image
            src="/assets/images/logo/rhoda-logo-light.svg"
            alt="rhoda Ai"
            width={130}
            height={34}
            priority
          />
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle navigation"
          style={{
            display: "none",
            background: "none",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: 6,
            padding: "6px 10px",
            cursor: "pointer",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 44,
            height: 38,
            gap: 5,
          }}
          className="navbar-toggler-btn"
        >
          <span style={{ display: "block", width: 22, height: 2, backgroundColor: "#1A1A1F", borderRadius: 1, transition: "transform 0.2s", transform: mobileOpen ? "rotate(45deg) translate(2.5px,2.5px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, backgroundColor: "#1A1A1F", borderRadius: 1, transition: "opacity 0.2s", opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 2, backgroundColor: "#1A1A1F", borderRadius: 1, transition: "transform 0.2s", transform: mobileOpen ? "rotate(-45deg) translate(2.5px,-2.5px)" : "none" }} />
        </button>

        {/* Desktop nav links + CTA */}
        <div className="navbar-desktop-links" style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <ul style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#1A1A1F",
                    textDecoration: "none",
                    padding: "8px 18px",
                    display: "block",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E2652E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1F")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact as orange CTA */}
          <Link
            href="/contact"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              padding: "8px 20px",
              display: "block",
              whiteSpace: "nowrap",
              lineHeight: 1.5,
              backgroundColor: "#E2652E",
              borderRadius: 6,
              marginLeft: 12,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F07A45")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E2652E")}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="navbar-mobile-links" style={{ width: "100%", listStyle: "none", margin: 0, padding: "12px 0 4px", borderTop: "1px solid rgba(0, 0, 0, 0.08)", marginTop: 14 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: 15,
                    color: "#1A1A1F",
                    textDecoration: "none",
                    padding: "10px 0",
                    display: "block",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E2652E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1F")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 20px",
                  display: "inline-block",
                  backgroundColor: "#E2652E",
                  borderRadius: 6,
                  marginTop: 8,
                  marginBottom: 4,
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
