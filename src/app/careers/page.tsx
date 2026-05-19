"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";

export default function CareersPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <Navbar />

      {/* Hero - Dark Section */}
      <div className="bg-[#0C0C0F]">
        <div className="text-center pt-[180px] pb-[80px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "#E2652E" }}>
            Build with us
          </h1>
        </div>
      </div>

      {/* Iframe on light bg */}
      <section className="bg-[var(--bg)] px-4 py-12">
        <div className="max-w-[1140px] mx-auto">
          <iframe
            src="https://jobs.ashbyhq.com/rhoda-ai"
            title="Rhoda AI Careers"
            className="w-full border-0"
            style={{
              minHeight: 1000,
              borderRadius: 12,
              filter: isDark ? "invert(1) hue-rotate(180deg)" : "none",
              transition: "filter 0.4s ease",
            }}
            allowFullScreen
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
