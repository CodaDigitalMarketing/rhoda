"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RhodaLogo from "@/components/RhodaLogo";

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
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide/show on scroll direction
      if (currentY < 10) setHidden(false);
      else if (currentY < lastScrollY.current) setHidden(false);
      else if (currentY > lastScrollY.current) {
        setHidden(true);
        setMobileOpen(false);
      }
      lastScrollY.current = currentY;

      // Switch style once past the hero (roughly viewport height)
      setScrolled(currentY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Only the homepage has the dark video hero
  const hasDarkHero = pathname === "/";
  const isOverHero = hasDarkHero && !scrolled;

  // Colors based on whether we're over the hero or not
  const textColor = isOverHero ? "var(--nav-hero-text)" : "var(--nav-text)";
  const mutedColor = isOverHero ? "rgba(255,255,255,0.15)" : "var(--nav-border)";
  const hamburgerColor = isOverHero ? "var(--nav-hero-text)" : "var(--nav-text)";
  const hoverColor = "var(--accent)";

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
          backgroundColor: isOverHero ? "var(--nav-hero-bg)" : "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: isOverHero ? `1px solid var(--nav-hero-border)` : `1px solid var(--nav-border)`,
          boxShadow: isOverHero ? "none" : "var(--nav-shadow)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          transition: "background-color 0.4s ease, border 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0, lineHeight: 0 }}>
          <RhodaLogo textColor={isOverHero ? "#FFFFFF" : "var(--text)"} />
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle navigation"
          style={{
            display: "none",
            background: "none",
            border: `1px solid ${mutedColor}`,
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
          <span style={{ display: "block", width: 22, height: 2, backgroundColor: hamburgerColor, borderRadius: 1, transition: "transform 0.2s, background-color 0.4s", transform: mobileOpen ? "rotate(45deg) translate(2.5px,2.5px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, backgroundColor: hamburgerColor, borderRadius: 1, transition: "opacity 0.2s, background-color 0.4s", opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 2, backgroundColor: hamburgerColor, borderRadius: 1, transition: "transform 0.2s, background-color 0.4s", transform: mobileOpen ? "rotate(-45deg) translate(2.5px,-2.5px)" : "none" }} />
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
                    color: textColor,
                    textDecoration: "none",
                    padding: "8px 18px",
                    display: "block",
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
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
          <ul className="navbar-mobile-links" style={{ width: "100%", listStyle: "none", margin: 0, padding: "12px 0 4px", borderTop: `1px solid ${mutedColor}`, marginTop: 14 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: 15,
                    color: textColor,
                    textDecoration: "none",
                    padding: "10px 0",
                    display: "block",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
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
