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

      <div className="bg-[var(--bg)]">
        <div className="text-center pt-[180px] pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)]">
            Build with us
          </h1>
        </div>

        <section className="px-4 pb-16">
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
      </div>

      <Footer />
    </>
  );
}
