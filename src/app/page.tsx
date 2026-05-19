"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InvestorMarquee from "@/components/InvestorMarquee";
import FadeIn from "@/components/FadeIn";
import ImageShowcase from "@/components/ImageShowcase";

const INVESTORS = [
  "B37", "Capricorn", "GIGA", "Hyperlink", "JohnDoerr", "Khosla",
  "Knollwood", "Leitmotif", "Matter", "Mayfield", "MVP", "NVentures",
  "Prelude", "PREMJI", "ROC", "Samsung-NEXT", "Stepstone", "Strike",
  "TEMASEK", "XORA",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero with video background ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/video/rhoda-hero-poster.jpg"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src="/assets/video/rhoda-hero.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for text readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.9) 100%)",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div
            className="rhoda-container text-center"
            style={{ position: "relative", zIndex: 2, paddingTop: 180, paddingBottom: 120 }}
          >
            <FadeIn>
              <p style={{ color: "#F07A45", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32 }}>
                RHODA AI
              </p>
            </FadeIn>

            <FadeIn delay={1}>
              <h1 style={{ color: "#FFFFFF", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 20 }}>
                Redefining Robotic Intelligence
              </h1>
            </FadeIn>

            <FadeIn delay={2}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, marginBottom: 32 }}>
                Designing intelligence for the real world
              </p>
            </FadeIn>

            <FadeIn delay={3}>
              <p className="mx-auto" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 600, lineHeight: 1.7, fontSize: 16, marginBottom: 48 }}>
                Our team focuses on deploying robotic systems into the real
                world. We build general purpose foundation models that can
                adapt to the variability of commercial and industrial
                environments.
              </p>
            </FadeIn>

            <FadeIn delay={4}>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/research/direct-video-action" className="btn-primary">
                  View Research <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1.5px solid rgba(255,255,255,0.3)",
                    padding: "14px 36px",
                    color: "white",
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    borderRadius: 6,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    background: "rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                >
                  Schedule Consultation
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
              animation: "bounce 2s ease infinite",
              opacity: 0.6,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="rhoda-container">
            <FadeIn className="text-center" style={{ marginBottom: 64 }}>
              <p style={{ color: "#E2652E", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
                WHAT WE BUILD
              </p>
              <h2 style={{ color: "#1A1A1F" }}>Intelligence in action</h2>
            </FadeIn>

            {/* Three images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: "/assets/images/home/robot-folding-clothes.jpg", alt: "robot folding clothes" },
                { src: "/assets/images/home/robot-decant.webp", alt: "robot decanting" },
                { src: "/assets/images/home/robot-pushing-down-rollers.jpg", alt: "robot pushing box on rollers" },
              ].map((img, i) => (
                <FadeIn key={img.src} delay={i + 1}>
                  <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 20px rgba(226, 101, 46, 0.12)" }}>
                    <Image src={img.src} alt={img.alt} width={800} height={600} className="w-full h-auto" style={{ display: "block" }} />
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 64, marginBottom: 48 }}>
              <div style={{ flex: 1, height: 1, backgroundColor: "#E2E2E6" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E2652E" }} />
              <div style={{ flex: 1, height: 1, backgroundColor: "#E2E2E6" }} />
            </div>

            {/* YouTube embed */}
            <FadeIn>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  style={{ borderRadius: 12 }}
                  src="https://www.youtube.com/embed/tQRQ0NaJ6ZQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── FutureVision / DVA ── */}
        <section style={{ paddingTop: 48, paddingBottom: 96 }}>
          <div className="rhoda-container">

            {/* Section label */}
            <FadeIn className="text-center" style={{ marginBottom: 48 }}>
              <p style={{ color: "#E2652E", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
                OUR APPROACH
              </p>
              <h2 style={{ color: "#1A1A1F" }}>A path to physical AGI</h2>
            </FadeIn>

            {/* Video — full width, elevated with shadow */}
            <FadeIn>
              <div
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 12px 48px rgba(226, 101, 46, 0.15), 0 4px 16px rgba(0,0,0,0.06)",
                  position: "relative",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/1171533206?h=f243fe4206&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&muted=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Description — below the video, with accent line */}
            <FadeIn>
              <div
                style={{
                  maxWidth: 720,
                  margin: "40px auto 0",
                  display: "flex",
                  gap: 24,
                  alignItems: "stretch",
                }}
              >
                <div style={{ width: 3, flexShrink: 0, borderRadius: 2, background: "linear-gradient(180deg, #E2652E 0%, #F07A45 100%)" }} />
                <p style={{ lineHeight: 1.8, color: "#6B6B74", fontSize: 17 }}>
                  <strong style={{ color: "#1A1A1F" }}>FutureVision</strong>{" "}
                  brings the capability to handle real world industrial tasks
                  autonomously. This unlocks generalization that conventional
                  VLA pipelines struggle to achieve. We call this the Direct
                  Video Action model. And it&apos;s why Rhoda works not just in
                  labs but in factories, warehouses, and real production
                  environments.
                </p>
              </div>
            </FadeIn>

            {/* Stats — two cards side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ marginTop: 48 }}>
              <FadeIn delay={1}>
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 12,
                    padding: "40px 36px",
                    border: "1px solid #E2E2E6",
                    borderTop: "3px solid #E2652E",
                    boxShadow: "0 4px 20px rgba(226, 101, 46, 0.08)",
                  }}
                >
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E2652E", marginBottom: 16 }}>
                    PRE-TRAINING
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span style={{ color: "#f26522", fontSize: 90, fontWeight: 600, lineHeight: 1 }}>300+</span>
                    <span style={{ fontSize: 24, color: "#1A1A1F", marginLeft: 12 }}>Years</span>
                  </div>
                  <p style={{ fontSize: 15, color: "#6B6B74", marginTop: 12, lineHeight: 1.6 }}>of web-scale video data</p>
                </div>
              </FadeIn>

              <FadeIn delay={2}>
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 12,
                    padding: "40px 36px",
                    border: "1px solid #E2E2E6",
                    borderTop: "3px solid #E2652E",
                    boxShadow: "0 4px 20px rgba(226, 101, 46, 0.08)",
                  }}
                >
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E2652E", marginBottom: 16 }}>
                    POST-TRAINING
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span style={{ color: "#f26522", fontSize: 90, fontWeight: 600, lineHeight: 1 }}>10-20</span>
                    <span style={{ fontSize: 24, color: "#1A1A1F", marginLeft: 12 }}>Hours</span>
                  </div>
                  <p style={{ fontSize: 15, color: "#6B6B74", marginTop: 12, lineHeight: 1.6 }}>trajectory data</p>
                </div>
              </FadeIn>
            </div>

            {/* Bottom paragraph */}
            <FadeIn>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 48, marginBottom: 32 }}>
                <div style={{ flex: 1, height: 1, backgroundColor: "#E2E2E6" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E2652E" }} />
                <div style={{ flex: 1, height: 1, backgroundColor: "#E2E2E6" }} />
              </div>
              <p className="mx-auto" style={{ lineHeight: 1.8, color: "#6B6B74", maxWidth: 700, textAlign: "center", fontSize: 17 }}>
                We first pre-train our model with over a million videos,
                giving it a strong prior on motion, physics, and dynamics. We
                then post-train on action data collected on the robot to
                teach the model to learn specific tasks. This combination of
                pre- and post-training creates generalist robot policies that
                can work and adapt in dynamic environments.
              </p>
            </FadeIn>

          </div>
        </section>

        {/* ── Research Demos ── */}
        <section style={{ background: "#FAFAFA", borderRadius: 12, margin: "0 8px", paddingTop: 96, paddingBottom: 96 }}>
          <div className="rhoda-container">
            <FadeIn className="text-center">
              <h2 style={{ color: "#1A1A1F" }}>We make robots smarter</h2>
              <p className="mx-auto mt-8" style={{ maxWidth: 700, lineHeight: 1.7, color: "#6B6B74" }}>
                We explore a new paradigm for scaling robot intelligence with
                web-scale video pre-training. We&apos;ve published an
                in-depth research blog to discuss the novel architectural
                designs and the benefits of such an approach.
              </p>
              <p className="mt-10">
                <Link href="/research/direct-video-action" className="btn-outline">
                  View Research Blog
                </Link>
              </p>
            </FadeIn>

            {/* Demo 1: Returns processing */}
            <FadeIn className="flex flex-col lg:flex-row gap-8 mt-24">
              <div className="lg:w-1/2">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe className="absolute inset-0 w-full h-full" style={{ borderRadius: 12 }} src="https://player.vimeo.com/video/1171605121?h=3173b3d8a7&dnt=1&app_id=122963&controls=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                </div>
              </div>
              <div className="lg:w-1/2 flex items-center">
                <div style={{ borderLeft: "2px solid #C45230", paddingLeft: 28 }}>
                  <h5 style={{ color: "#1A1A1F", marginBottom: 16 }}>Returns processing</h5>
                  <p style={{ color: "#6B6B74", lineHeight: 1.7 }}>
                    This is an end-to-end returns processing task for a customer in the logistics industry. The task contains ambiguity—visually similar states can correspond to very different points in the pipeline. Rather than relying on the current frame alone the model maintains memory, in the form of a long history of frames.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Demo 2: Bearing decanting */}
            <FadeIn className="flex flex-col lg:flex-row-reverse gap-8 mt-20">
              <div className="lg:w-1/2">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe className="absolute inset-0 w-full h-full" style={{ borderRadius: 12 }} src="https://player.vimeo.com/video/1172019482?h=81530374c2&dnt=1&app_id=122963&controls=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                </div>
              </div>
              <div className="lg:w-1/2 flex items-center">
                <div style={{ borderLeft: "2px solid #C45230", paddingLeft: 28 }}>
                  <h5 style={{ color: "#1A1A1F", marginBottom: 16 }}>Bearing decanting</h5>
                  <p style={{ color: "#6B6B74", lineHeight: 1.7 }}>
                    This task comes from an automotive assembly line. The customer initially believed it could not be automated because of several challenges: each box weighs 10 kg, the lifting strap can easily tear, removing the tab requires precise control, and the transparent plastic bag is difficult for a robot to grasp.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Demo 3: Contico breakdown */}
            <FadeIn className="flex flex-col lg:flex-row gap-8 mt-20">
              <div className="lg:w-1/2">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe className="absolute inset-0 w-full h-full" style={{ borderRadius: 12 }} src="https://player.vimeo.com/video/1171930498?h=e5bb03172a&dnt=1&app_id=122963&controls=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                </div>
              </div>
              <div className="lg:w-1/2 flex items-center">
                <div style={{ borderLeft: "2px solid #C45230", paddingLeft: 28 }}>
                  <h5 style={{ color: "#1A1A1F", marginBottom: 16 }}>Contico breakdown</h5>
                  <p style={{ color: "#6B6B74", lineHeight: 1.7 }}>
                    Contico are 50-pound, heavy-duty boxes that are ubiquitous in manufacturing for transporting materials between facilities. After use, they must be manually cleared of debris of random sizes and type, unlatched, and collapsed for return or storage. This task is difficult to automate due to the large box size and variability in debris.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Demo 4: Human demo following */}
            <FadeIn className="flex flex-col lg:flex-row-reverse gap-8 mt-20">
              <div className="lg:w-1/2">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe className="absolute inset-0 w-full h-full" style={{ borderRadius: 12 }} src="https://player.vimeo.com/video/1172031020?h=9c490aa966&dnt=1&app_id=122963&controls=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                </div>
              </div>
              <div className="lg:w-1/2 flex items-center">
                <div style={{ borderLeft: "2px solid #C45230", paddingLeft: 28 }}>
                  <h5 style={{ color: "#1A1A1F", marginBottom: 16 }}>Human demo following</h5>
                  <p style={{ color: "#6B6B74", lineHeight: 1.7 }}>
                    Long-context enables in-context learning, allowing us to inject human demonstrations into our robot&apos;s context window. This enables our robot to perform tasks single-shot, without retraining. Here we demonstrate single-shot pick and place and single-shot drawing from human demonstrations.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Commercial Applications ── */}
        <section style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="rhoda-container">
            <FadeIn className="text-center">
              <h2 style={{ color: "#1A1A1F" }}>Commercial Applications</h2>
              <p className="mx-auto mt-6" style={{ maxWidth: 620, lineHeight: 1.7, color: "#6B6B74" }}>
                We work with a variety of customers across verticals in
                automotive, manufacturing, logistics, and ecommerce. If
                you&apos;re interested in working with us at your facility,
                reach out here.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 32, maxWidth: 400, marginLeft: "auto", marginRight: "auto" }}>
                <div style={{ flex: 1, height: 1, backgroundColor: "#E2E2E6" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E2652E" }} />
                <div style={{ flex: 1, height: 1, backgroundColor: "#E2E2E6" }} />
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16">
              {[
                { src: "/assets/images/services/Automotive.jpg", alt: "car manufacturing plant line", label: "Automotive" },
                { src: "/assets/images/services/Manufacturing.jpg", alt: "manufacturing robots", label: "Manufacturing" },
                { src: "/assets/images/services/Logistics.jpg", alt: "logistics shipping and receiving dock with trucks", label: "Logistics" },
                { src: "/assets/images/services/Ecommerce.jpg", alt: "warehouse with red rafters", label: "Ecommerce" },
              ].map((item, i) => (
                <FadeIn key={item.src} delay={i + 1}>
                  {/* Image */}
                  <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 20px rgba(226, 101, 46, 0.1)" }}>
                    <Image src={item.src} alt={item.alt} width={600} height={400} className="w-full h-auto" style={{ display: "block" }} />
                  </div>
                  {/* Label — separate, below */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14 }}>
                    <div style={{ width: 20, height: 2, backgroundColor: "#E2652E", borderRadius: 1 }} />
                    <p style={{ fontSize: 14, fontWeight: 500, letterSpacing: "0.06em", color: "#1A1A1F", textTransform: "uppercase" }}>
                      {item.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="text-center mt-14">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ── Robot Platform ── */}
        <FadeIn style={{ overflow: "hidden" }}>
          <div
            style={{
              height: "80vh",
              backgroundImage: "url('/assets/images/home/rhoda-humanoid-robot.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div className="rhoda-container h-full flex items-start pt-16">
              <div className="sm:w-7/12 lg:w-6/12">
                <div className="pb-10">
                  <h2 style={{ color: "#FFFFFF" }}>
                    Our Robot Platform<br />is Designed for
                  </h2>
                </div>
                <div>
                  <p className="text-white/50 mb-3" style={{ fontSize: 21, lineHeight: 1.6 }}>
                    <strong className="text-white">Strength:</strong> Custom actuators enable 25kg rated, 40kg peak
                  </p>
                  <p className="text-white/50 mb-3" style={{ fontSize: 21, lineHeight: 1.6 }}>
                    <strong className="text-white">Safety:</strong> Wheel-base, brakes in every actuator, safety-rated vision
                  </p>
                  <p className="text-white/50 mb-3" style={{ fontSize: 21, lineHeight: 1.6 }}>
                    <strong className="text-white">Reliability:</strong> 3 years of continuous operation at rated payload
                  </p>
                  <p className="text-white/50 mb-0" style={{ fontSize: 21, lineHeight: 1.6 }}>
                    <strong className="text-white">AI Control:</strong> High component stiffness, linear response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Investors ── */}
      </main>

      {/* ── Investors ── */}
      <section style={{ paddingTop: 80, paddingBottom: 64, marginTop: 48 }}>
        <FadeIn className="text-center">
          <h3 style={{ color: "#1A1A1F" }}>Our Investors</h3>
        </FadeIn>
        <div className="mt-12 overflow-hidden">
          <InvestorMarquee investors={INVESTORS} />
        </div>
      </section>

      <Footer />
    </>
  );
}
