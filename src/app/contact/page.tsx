"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";

export default function ContactPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <Navbar />

      <div className="bg-[var(--bg)]">
        <div className="text-center pt-[180px] pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)]">
            Let&apos;s build together
          </h1>
        </div>

        <section className="px-4 pb-16">
          <div className="max-w-[1140px] mx-auto">
            <iframe
              src="https://form.jotform.com/260671522082149"
              title="Contact Form"
              className="w-full border-0"
              style={{
                minHeight: 800,
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
