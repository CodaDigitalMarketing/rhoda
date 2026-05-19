"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-[160px] pb-20 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto w-full px-6">
          <FadeIn>
            <h1
              className="text-center font-bold text-[var(--text)] mb-12"
              style={{ fontSize: 48 }}
            >
              News
            </h1>
          </FadeIn>

          <div className="flex flex-col gap-8">
            {/* Card 1 - Bloomberg */}
            <FadeIn delay={1}>
              <Link
                href="https://www.bloomberg.com/news/articles/2026-03-10/ai-robotics-startup-rhoda-valued-at-1-7-billion-in-new-funding"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[var(--surface)] rounded-[12px] border border-[var(--border)] hover:border-[#C45230]/40 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="flex">
                  <div className="w-[3px] bg-[#C45230] flex-shrink-0" />
                  <div className="px-10 py-10">
                    <span
                      className="inline-block font-semibold uppercase rounded-[6px] mb-4"
                      style={{
                        fontSize: 13,
                        padding: "4px 12px",
                        backgroundColor: "var(--bg)",
                        color: "var(--text-muted)",
                      }}
                    >
                      Bloomberg
                    </span>

                    <h3
                      className="font-bold mb-3 text-[var(--text)]"
                      style={{ fontSize: 24, lineHeight: 1.4 }}
                    >
                      AI Robotics Startup Rhoda Valued at $1.7 Billion in New
                      Funding{" "}
                      <span className="text-[var(--text-muted)]">&#8599;</span>
                    </h3>

                    <p style={{ fontSize: 15, color: "var(--text-muted)" }}>
                      March 10, 2026
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Card 2 - Press Release */}
            <FadeIn delay={2}>
              <Link
                href="/news/press-release"
                className="block bg-[var(--surface)] rounded-[12px] border border-[var(--border)] hover:border-[#C45230]/40 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="flex">
                  <div className="w-[3px] bg-[#C45230] flex-shrink-0" />
                  <div className="px-10 py-10">
                    <span
                      className="inline-block font-semibold uppercase rounded-[6px] mb-4"
                      style={{
                        fontSize: 13,
                        padding: "4px 12px",
                        backgroundColor: "var(--bg)",
                        color: "var(--text-muted)",
                      }}
                    >
                      Press Release
                    </span>

                    <h3
                      className="font-bold mb-3 text-[var(--text)]"
                      style={{ fontSize: 24, lineHeight: 1.4 }}
                    >
                      Rhoda AI Exits Stealth with $450 Million Series A to Bring
                      Robots Out of the Lab and Into the Real World
                    </h3>

                    <p className="mb-3" style={{ fontSize: 15, color: "var(--text-muted)" }}>
                      March 10, 2026
                    </p>

                    <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-muted)" }}>
                      Rhoda AI today announced its public launch after 18 months in
                      stealth, unveiling FutureVision, a new approach to robotic
                      intelligence based on video-predictive control.
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
