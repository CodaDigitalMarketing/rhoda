"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function PressReleasePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[var(--bg)]">
        {/* Top Section */}
        <section className="text-center px-6 pt-[160px]">
          <FadeIn>
            <p
              className="uppercase mb-4"
              style={{ fontSize: 14, letterSpacing: 2, color: "var(--text-muted)" }}
            >
              PRESS RELEASE &middot; MARCH 10, 2026
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <h1
              className="font-bold max-w-[800px] mx-auto mb-6 text-[var(--text)]"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)" }}
            >
              Rhoda AI Exits Stealth with $450 Million Series A to Bring Robots Out
              of the Lab and Into the Real World
            </h1>
          </FadeIn>

          <FadeIn delay={2}>
            <Link
              href="/news"
              className="inline-block transition-colors text-[var(--text-muted)] hover:text-[var(--text)]"
              style={{ fontSize: 18 }}
            >
              &larr; Back to News
            </Link>
          </FadeIn>
        </section>

        {/* Article */}
        <article className="max-w-[800px] mx-auto w-full px-6 py-16">
          {/* Hero Image */}
          <FadeIn>
            <div className="relative w-full aspect-video rounded-[12px] overflow-hidden mb-12">
            <Image
              src="/assets/images/home/robot-decant.webp"
              alt="Rhoda AI robot performing a task"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Dateline + Opening */}
          <p style={{ fontSize: 18, lineHeight: 1.85, color: "#6B6B74" }}>
            <strong className="text-[var(--text)]">
              PALO ALTO, CA — March 10, 2026 —
            </strong>{" "}
            Rhoda AI today announced its public launch after 18 months in
            stealth, unveiling FutureVision, a fundamentally new approach to
            robotic intelligence based on video-predictive control. Alongside
            the launch, the company announced a $450 million Series A funding
            round that values the company at $1.7 billion, signaling strong
            investor confidence in its vision for general-purpose robotics.
          </p>

          <p
            className="mt-6"
            style={{ fontSize: 18, lineHeight: 1.85, color: "#6B6B74" }}
          >
            At the heart of Rhoda AI&apos;s technology is the Direct Video
            Action (DVA) model, which takes a radically different approach to
            robotic learning. Rather than relying on traditional
            perception-planning-action pipelines, DVA pre-trains on
            internet-scale video data, learning the physics and dynamics of how
            the real world moves. The model is then post-trained on
            robot-specific data, enabling it to translate its broad
            understanding of physical interactions into precise robotic
            actions. This two-stage training paradigm allows Rhoda&apos;s
            robots to generalize across tasks and environments with far less
            robot-specific data than conventional approaches require.
          </p>

          <p
            className="mt-6"
            style={{ fontSize: 18, lineHeight: 1.85, color: "#6B6B74" }}
          >
            The FutureVision system operates in a closed-loop configuration,
            continuously predicting short-horizon video of the future and
            updating the robot&apos;s behavior dynamically in response to
            real-time sensory feedback. This means the robot is not simply
            executing a pre-planned sequence of moves — it is constantly
            re-evaluating and adapting, much like a human would when navigating
            a complex physical task. The result is robotic behavior that is
            remarkably fluid, adaptive, and robust to unexpected changes in the
            environment.
          </p>

          {/* Quote 1 - Jagdeep Singh */}
          <blockquote className="my-10 bg-[var(--surface)] border-l-[3px] border-[#C45230] rounded-[12px] shadow-sm py-8 px-8">
            <p
              className="italic text-[var(--text)]"
              style={{ fontSize: 20, lineHeight: 1.85 }}
            >
              &ldquo;The path to general-purpose robotics requires models that
              understand how the world moves — not just what it looks like.
              FutureVision represents a paradigm shift: instead of teaching
              robots to follow instructions step by step, we teach them to see
              the future and act accordingly. That is what makes our approach
              fundamentally different.&rdquo;
            </p>
            <p
              className="mt-4 not-italic"
              style={{ fontSize: 15, color: "#6B6B74" }}
            >
              — Jagdeep Singh, CEO and Co-founder, Rhoda AI
            </p>
          </blockquote>

          <p style={{ fontSize: 18, lineHeight: 1.85, color: "#6B6B74" }}>
            Rhoda AI has already begun deploying its technology in select
            commercial environments, including logistics, manufacturing, and
            food preparation. Early partners report significant improvements in
            task completion rates and adaptability compared to traditional
            robotic systems, particularly in unstructured environments where
            conditions change frequently.
          </p>

          {/* Quote 2 - Jens Wiese */}
          <blockquote className="my-10 bg-[var(--surface)] border-l-[3px] border-[#C45230] rounded-[12px] shadow-sm py-8 px-8">
            <p
              className="italic text-[var(--text)]"
              style={{ fontSize: 20, lineHeight: 1.85 }}
            >
              &ldquo;Manufacturing environments are inherently variable —
              parts arrive in different orientations, lighting changes,
              workstations shift. Traditional automation breaks down in these
              conditions. What Rhoda has built with FutureVision handles this
              variability natively, which is what makes it so compelling for
              real-world deployment.&rdquo;
            </p>
            <p
              className="mt-4 not-italic"
              style={{ fontSize: 15, color: "#6B6B74" }}
            >
              — Jens Wiese, Co-founder and CTO, Rhoda AI
            </p>
          </blockquote>

          {/* Quote 3 - Sandesh Patnam */}
          <blockquote className="my-10 bg-[var(--surface)] border-l-[3px] border-[#C45230] rounded-[12px] shadow-sm py-8 px-8">
            <p
              className="italic text-[var(--text)]"
              style={{ fontSize: 20, lineHeight: 1.85 }}
            >
              &ldquo;We&apos;ve been looking for a team that can credibly
              tackle the challenge of deploying intelligent robots at scale.
              Rhoda&apos;s approach — grounding robotic control in
              video-predictive models trained on massive datasets — is
              technically differentiated and commercially promising. We&apos;re
              thrilled to back them.&rdquo;
            </p>
            <p
              className="mt-4 not-italic"
              style={{ fontSize: 15, color: "#6B6B74" }}
            >
              — Sandesh Patnam, Partner, Khosla Ventures
            </p>
          </blockquote>

          {/* Investor List */}
          <p style={{ fontSize: 18, lineHeight: 1.85, color: "#6B6B74" }}>
            The $450 million Series A round was led by a world-class syndicate
            of investors including Capricorn Investment Group, Khosla Ventures,
            Leitmotif, Matter Venture Partners, Mayfield, Premji Invest,
            Prelude Ventures, Temasek, Xora, and John Doerr. The funding will
            be used to scale Rhoda AI&apos;s research team, expand its fleet of
            training robots, and accelerate the deployment of
            FutureVision-powered systems into real-world commercial
            applications.
          </p>

          {/* Leadership */}
          <p
            className="mt-6"
            style={{ fontSize: 18, lineHeight: 1.85, color: "#6B6B74" }}
          >
            Rhoda AI was founded by Jagdeep Singh and Jens Wiese. Singh is a
            serial entrepreneur who previously founded Infinera (NASDAQ: INFN)
            and Lightera, both in the optical networking space. Wiese brings
            deep expertise in machine learning and robotic systems. Together,
            they have assembled a team of world-class researchers and engineers
            from leading AI and robotics institutions.
          </p>

          {/* About Rhoda */}
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <h4
              className="font-bold mb-4"
              style={{ fontSize: 20, color: "#1A1A1F" }}
            >
              About Rhoda
            </h4>
            <p style={{ fontSize: 18, lineHeight: 1.85, color: "#6B6B74" }}>
              Rhoda AI is building the next generation of intelligent robotic
              systems powered by FutureVision, a video-predictive control
              framework that enables robots to understand and interact with the
              physical world in fundamentally new ways. Based in Palo Alto,
              California, the company is backed by leading investors and is
              deploying its technology across logistics, manufacturing, and
              beyond. For more information, visit{" "}
              <a
                href="https://rhoda.com"
                className="underline hover:text-[var(--text)] transition-colors"
                style={{ color: "#C45230" }}
              >
                rhoda.com
              </a>
              .
            </p>
          </div>

          {/* Press Contact */}
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p
              className="font-semibold mb-1"
              style={{ fontSize: 16, color: "#6B6B74" }}
            >
              Press Contact
            </p>
            <p style={{ fontSize: 16, color: "#1A1A1F" }}>
              Natalie Bartels, VSC
            </p>
            <p style={{ fontSize: 16 }}>
              <a
                href="mailto:rhoda@vsc.co"
                className="underline hover:text-[var(--text)] transition-colors"
                style={{ color: "#C45230" }}
              >
                rhoda@vsc.co
              </a>
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
