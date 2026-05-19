"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Table-of-contents data                                            */
/* ------------------------------------------------------------------ */
const tocItems = [
  { id: "the-challenge-of-generalist-robotics", label: "The Challenge of Generalist Robotics" },
  {
    id: "direct-video-action-models",
    label: "Direct Video-Action Models",
    children: [
      { id: "figure-1", label: "Native Causal Video Models" },
      { id: "figure-2", label: "Inverse Dynamics Models" },
      { id: "video-2", label: "Leapfrog Inference" },
    ],
  },
  {
    id: "figure-3",
    label: "Data-Efficient Task Learning",
    children: [
      { id: "decanting", label: "Decanting" },
      { id: "video-3", label: "Container Breakdown" },
    ],
  },
  {
    id: "video-4",
    label: "Long-Context Visual Memory",
    children: [
      { id: "let-s-play-the-shell-game", label: "Shell Game" },
      { id: "video-5", label: "Returns Processing" },
    ],
  },
  { id: "video-6", label: "Demo Following: Sorting" },
  { id: "video-8", label: "Demo Following: Drawing" },
  { id: "video-9", label: "Interpretability" },
  { id: "video-10", label: "What's next?" },
];

/* ------------------------------------------------------------------ */
/*  Vimeo helper                                                      */
/* ------------------------------------------------------------------ */
function LazyVimeo({ id, hash, title, small = false }: { id: string; hash: string; title?: string; small?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`aspect-video w-full ${small ? "rounded-xl" : "rounded-2xl"} overflow-hidden relative`} style={{ backgroundColor: "#F0EFEC" }}>
      {/* Shimmer placeholder */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "linear-gradient(90deg, #F0EFEC 25%, #E8E7E3 50%, #F0EFEC 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.5s ease-in-out infinite" }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
            <polygon points="5,3 19,12 5,21" fill="#6B6B74" />
          </svg>
        </div>
      )}
      {visible && (
        <iframe
          src={`https://player.vimeo.com/video/${id}?h=${hash}&title=0&byline=0&portrait=0&vimeo_logo=0&dnt=1`}
          className="w-full h-full relative"
          style={{ zIndex: 1 }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title || "Video embed"}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}

function VimeoEmbed({ id, hash, title }: { id: string; hash: string; title?: string }) {
  return <LazyVimeo id={id} hash={hash} title={title} />;
}

function SmallVimeoEmbed({ id, hash, title }: { id: string; hash: string; title?: string }) {
  return <LazyVimeo id={id} hash={hash} title={title} small />;
}

/* ------------------------------------------------------------------ */
/*  Figure / Video captions                                           */
/* ------------------------------------------------------------------ */
function FigureCaption({ num, children }: { num: number; children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[13px] text-[#6B6B74] leading-relaxed">
      <span className="text-[#C45230] font-semibold">Figure&nbsp;{num}.</span>{" "}
      {children}
    </p>
  );
}

function VideoCaption({ num, children }: { num: number; children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[13px] text-[#6B6B74] leading-relaxed">
      <span className="text-[#C45230] font-semibold">Video&nbsp;{num}.</span>{" "}
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Definition box                                                    */
/* ------------------------------------------------------------------ */
function Definition({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-[#F7F6F3] font-sans text-[18px] leading-relaxed text-[#2C2C2E] px-6 py-5 shadow-[4px_4px_16px_rgba(0,0,0,0.08)] my-8" style={{ borderLeft: "3px solid #C45230" }}>
      <strong style={{ color: "#C45230" }}>{term}:</strong> {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Table of Contents component                                       */
/* ------------------------------------------------------------------ */
function TableOfContents({ mobile = false }: { mobile?: boolean }) {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    const ids = tocItems.flatMap((item) => [
      item.id,
      ...(item.children?.map((c) => c.id) || []),
    ]);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkList = (
    <nav className="space-y-1">
      {tocItems.map((item) => (
        <div key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={() => setMobileOpen(false)}
            className={`block py-0.5 text-[13px] transition-colors ${
              activeId === item.id
                ? "text-[#C45230] font-medium"
                : "text-[#6B6B74] hover:text-[#2C2C2E]"
            }`}
          >
            {item.label}
          </a>
          {item.children?.map((child) => (
            <a
              key={child.id}
              href={`#${child.id}`}
              onClick={() => setMobileOpen(false)}
              className={`block py-0.5 pl-3 text-[11px] transition-colors ${
                activeId === child.id
                  ? "text-[#C45230] font-medium"
                  : "text-[#6B6B74] hover:text-[#2C2C2E]"
              }`}
            >
              {child.label}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );

  if (mobile) {
    return (
      <div className="min-[1300px]:hidden mb-12 border border-[#E2E2E6] rounded-lg overflow-hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between px-5 py-3 text-[13px] font-medium text-[#2C2C2E] bg-[#F0EFEC]"
        >
          <span>Table of Contents</span>
          <span className="text-[#6B6B74]">{mobileOpen ? "−" : "+"}</span>
        </button>
        {mobileOpen && <div className="px-5 py-4">{linkList}</div>}
      </div>
    );
  }

  return (
    <div className="hidden min-[1300px]:block absolute right-full mr-6 top-0 bottom-0">
      <div className="sticky top-28 w-[180px]">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#C45230] font-semibold mb-3">
          Contents
        </p>
        {linkList}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Edge-case grid                                                    */
/* ------------------------------------------------------------------ */
function EdgeCaseGrid({
  items,
}: {
  items: { label: string; id: string; hash: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {items.map((item) => (
        <div key={item.id}>
          <SmallVimeoEmbed id={item.id} hash={item.hash} title={item.label} />
          <p className="mt-1.5 text-[13px] text-[#6B6B74]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function DirectVideoActionPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="pt-36 pb-10 px-6">
        <div className="max-w-[840px] mx-auto">
          <h1 className="text-3xl md:text-[2.5rem] lg:text-[2.75rem] font-sans font-normal leading-[1.25] tracking-tight text-[#2C2C2E] mb-8">
            Causal Video Models Are Data-Efficient Robot Policy Learners
          </h1>
          <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B74]">
            March 2026{" "}
            <span className="text-[#D0D0D4]">&middot;</span>{" "}
            Rhoda AI Research
          </p>
        </div>
      </header>

      {/* ── Hero Video ─────────────────────────────────────────── */}
      <div className="max-w-[1020px] mx-auto px-6 pb-12">
        <div className="rounded-xl border border-[#E2E2E6] overflow-hidden">
          <div className="aspect-video w-full">
            <iframe
              src="https://player.vimeo.com/video/1176040320?h=6ca3ecdbd9&title=0&byline=0&portrait=0&vimeo_logo=0&dnt=1&background=1"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Hero video"
            />
          </div>
        </div>
      </div>

      {/* ── Intro paragraph ────────────────────────────────────── */}
      <div className="max-w-[840px] mx-auto px-6 pb-10">
        <p className="italic text-lg text-[#6B6B74] leading-relaxed">
          At Rhoda AI, we are building towards generalist robotics. Our Direct
          Video-Action Model (DVA) reformulates robot policies as video
          generation, unlocking data-efficient task learning, scaling,
          long-context memory, and one-shot learning.
        </p>
      </div>

      {/* ── Divider ────────────────────────────────────────────── */}
      <div className="max-w-[840px] mx-auto px-6">
        <div className="border-t border-[#E2E2E6]" />
      </div>
      <div className="pb-16" />

      {/* ── Main article area ──────────────────────────────────── */}
      <div className="max-w-[840px] mx-auto px-6 relative">
        {/* Desktop TOC */}
        <TableOfContents />
        {/* Mobile TOC */}
        <TableOfContents mobile />

        <article className="space-y-20">
          {/* ================================================================
              THE CHALLENGE OF GENERALIST ROBOTICS
              ================================================================ */}
          <section id="the-challenge-of-generalist-robotics">
            <div className="w-10 h-[3px] bg-[#C45230] mb-6 rounded-full" />
            <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-8">
              The Challenge of Generalist Robotics
            </h2>
            <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
              <p>
                For decades, specialized robots have excelled in tightly
                controlled settings: factory arms welding the same joint millions
                of times, warehouse shuttles following painted lines, and surgical
                tools guided by a human hand. The transition to generalist
                robotics means something fundamentally different. It means
                building general-purpose agents that can perceive, reason, and act
                in the full complexity of unpredictable, open-ended environments
                &mdash; kitchens, warehouses, hospitals, homes &mdash; where no
                two situations are exactly alike.
              </p>
              <p>
                The missing ingredient, we believe, is web-scale data. The
                breakthroughs in language and image understanding over the past
                several years were driven not by algorithmic novelty alone, but by
                the sheer volume and diversity of internet text and imagery
                available for pre-training. For robotics, the analogous resource
                is video. Video is the most scalable data source for learning
                about the physical world: it captures the causal structure of
                object interactions, the subtlety of human manipulation, and the
                diversity of real-world environments at a scale that no
                robot-specific dataset can match.
              </p>
              <p>
                Our Direct Video-Action (DVA) models are designed to exploit this
                insight. By building robot policies on top of causal video
                generation, we unlock a set of capabilities that we believe are
                essential for generalist robotics:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#2C2C2E]">Data-efficient task learning</strong>{" "}
                  &mdash; new tasks can be learned with roughly 10 hours of robot
                  data, collected in just a few days.
                </li>
                <li>
                  <strong className="text-[#2C2C2E]">Long-context visual memory</strong>{" "}
                  &mdash; the model conditions on hundreds of frames of
                  noise-free visual history, enabling coherent behavior over
                  extended, multi-step episodes.
                </li>
                <li>
                  <strong className="text-[#2C2C2E]">One-shot learning</strong>{" "}
                  &mdash; given a single human demonstration, the policy can
                  generalize to novel objects, configurations, and environments.
                </li>
                <li>
                  <strong className="text-[#2C2C2E]">Interpretability through video generation</strong>{" "}
                  &mdash; because the model generates explicit visual predictions,
                  we can directly observe what the robot &ldquo;thinks&rdquo; will
                  happen next, providing a transparent window into its
                  decision-making.
                </li>
                <li>
                  <strong className="text-[#2C2C2E]">Clear path for scaling</strong>{" "}
                  &mdash; the architecture naturally benefits from larger video
                  pre-training datasets and increased model capacity, following
                  established scaling laws.
                </li>
              </ul>
            </div>
          </section>

          {/* ================================================================
              DIRECT VIDEO-ACTION MODELS
              ================================================================ */}
          <section id="direct-video-action-models">
            <div className="w-10 h-[3px] bg-[#C45230] mb-6 rounded-full" />
            <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-8">
              Direct Video-Action Models
            </h2>
            <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
              <Definition term="Direct Video-Action Model">
                A robot policy that translates predictions from a pre-trained
                causal video model into actions in a real-time closed loop, with
                the video model directly responsible for decision-making.
              </Definition>

              {/* Figure 1 placeholder */}
              <div className="border border-[#E2E2E6] bg-[#F7F6F3] px-2 py-4 rounded-lg my-8">
                <div className="text-center space-y-3">
                  <p className="text-sm font-semibold tracking-wide text-[#2C2C2E] uppercase">
                    Direct Video-Action Model (DVA)
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[#6B6B74]">
                    <span className="px-2 py-1 rounded bg-[#F0EFEC]">Video Context</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 rounded bg-[#F0EFEC]">Causal Video Model</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 rounded bg-[#F0EFEC]">Generated Video</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 rounded bg-[#F0EFEC]">Inverse Dynamics Model</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 rounded bg-[#F0EFEC]">Generated Actions</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 rounded bg-[#F0EFEC]">Action Rollout</span>
                  </div>
                </div>
              </div>

              <FigureCaption num={1}>
                Simplified diagram of a Direct Video-Action Model. Visual context
                feeds into a causal video model that predicts future frames; an
                inverse dynamics model translates those predictions into motor
                actions executed on the robot in a closed loop.
              </FigureCaption>

              <p>
                The DVA approach leverages the enormous knowledge already encoded
                in video foundation models pre-trained on web-scale data. Rather
                than learning physics, object affordances, and manipulation
                strategies from scratch, we formulate robot control as video
                prediction: given the visual history of a task, the causal video
                model generates frames depicting what should happen next. A
                lightweight inverse dynamics model then translates those generated
                frames into concrete motor actions. The entire system operates as
                a closed loop, running multiple prediction-action cycles per
                second, enabling the robot to react to unexpected perturbations
                and environmental changes in real time.
              </p>

              {/* ── Native Causal Video Models ── */}
              <section id="figure-1" className="pt-12">
                <h3 className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-6">
                  Native Causal Video Models
                </h3>
                <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
                  <p>
                    Effective DVA policies require video models that generate
                    frames causally &mdash; predicting the future conditioned only
                    on the past, never on future observations. Most existing video
                    generation architectures are designed for offline content
                    creation, where bidirectional attention over an entire clip is
                    acceptable. For robot control, this is a non-starter: the
                    model must produce its next prediction before it can observe
                    the outcome of its current action.
                  </p>
                  <p>
                    Our causal video architecture addresses this by training the
                    model to predict future frames from a long, noise-free context
                    of past frames. The model processes the visual history without
                    any diffusion noise, maintaining clean representations of
                    everything that has happened so far, and then generates future
                    frames auto-regressively. This design naturally supports
                    KV-caching, where the computed representations of past frames
                    are cached and reused, dramatically reducing inference cost for
                    each new prediction step.
                  </p>

                  <Definition term="Context Amortization">
                    A training strategy that predicts future video at every point
                    along a long history of noise-free context, in order to
                    efficiently train causal video generation.
                  </Definition>

                  {/* Figure 2 placeholder */}
                  <div className="border border-[#E2E2E6] bg-[#F7F6F3] px-4 py-5 rounded-lg my-8">
                    <div className="text-center space-y-2">
                      <p className="text-xs font-semibold tracking-wide text-[#6B6B74] uppercase mb-3">
                        Context Amortization
                      </p>
                      <div className="flex justify-center gap-1 text-[11px] text-[#6B6B74] font-mono">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                          <span
                            key={i}
                            className="w-8 h-8 flex items-center justify-center rounded bg-[#F0EFEC] border border-[#E2E2E6]"
                          >
                            {i}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] text-[#6B6B74] mt-2">
                        Context positions 0&ndash;7, with predictions generated at each step along the sequence
                      </p>
                    </div>
                  </div>

                  <FigureCaption num={2}>
                    During training, our causal video architecture amortizes the
                    cost of long-context learning by predicting future frames at
                    every position along the noise-free context sequence. This
                    allows the model to efficiently internalize long temporal
                    dependencies while remaining computationally tractable.
                  </FigureCaption>

                  <p>
                    At inference time, the model processes new camera frames as
                    they arrive, appending their KV-cache entries to the existing
                    context. When a prediction is needed, the model generates
                    future frames auto-regressively, conditioned on the full
                    cached history. This means the model can condition on minutes
                    of uninterrupted visual context &mdash; hundreds of frames
                    &mdash; without recomputing representations for frames it has
                    already seen. The result is a causal video generator that
                    combines the temporal understanding of a long-context model
                    with the speed required for real-time robot control.
                  </p>
                </div>
              </section>

              {/* ── Inverse Dynamics Models ── */}
              <section id="figure-2" className="pt-12">
                <h3 className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-6">
                  Translating Video to Action with Inverse Dynamics Models
                </h3>
                <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
                  <p>
                    The bridge between video predictions and physical robot
                    actions is an inverse dynamics model (IDM). Given the current
                    camera observation and the predicted next frames from the
                    causal video model, the IDM infers the actions that would
                    produce the observed visual transition. This decomposition is
                    central to the DVA design: the video model never needs to
                    explicitly represent joint angles, torques, or end-effector
                    poses. It focuses entirely on what should happen visually,
                    while the IDM handles the translation to the motor command
                    space of the specific robot embodiment.
                  </p>

                  <div className="my-8">
                    <VimeoEmbed
                      id="1172144721"
                      hash="4beb3b696d"
                      title="Inverse Dynamics Models"
                    />
                    <VideoCaption num={2}>
                      Non-causal action prediction allows precise video-to-action
                      translation with only a handful of hours of data per robot
                      embodiment type (1x speed).
                    </VideoCaption>
                  </div>

                  <p>
                    A key advantage of this architecture is that the IDM can be
                    solved with a relatively small model trained on a modest
                    amount of embodiment-specific data &mdash; approximately 10
                    hours per robot type. Because the IDM only needs to predict
                    short-horizon actions given a pair of frames (current and
                    predicted), it does not require the vast pre-training data or
                    large parameter count of the video model itself. This makes it
                    straightforward to adapt the DVA system to new robot
                    platforms: swap in a new IDM trained on a small dataset from
                    the target embodiment, and the same pre-trained video model
                    can drive a completely different robot.
                  </p>
                </div>
              </section>

              {/* ── Leapfrog Inference ── */}
              <section id="video-2" className="pt-12">
                <h3 className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-6">
                  Leapfrog Inference
                </h3>
                <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
                  <Definition term="Leapfrog Inference">
                    A strategy for continuous robot control that predicts long
                    enough into the future to cover the next prediction&rsquo;s
                    inference latency.
                  </Definition>

                  <div className="my-8">
                    <div className="border border-[#E2E2E6] rounded-2xl overflow-hidden">
                      <Image
                        src="/assets/images/research/dva_inference_flowchart.webp"
                        alt="Leapfrog Inference flowchart"
                        width={1020}
                        height={574}
                        className="w-full"
                      />
                    </div>
                    <FigureCaption num={3}>
                      Leapfrog inference flowchart. By predicting far enough into
                      the future to cover the latency of the next prediction
                      cycle, the robot always has a buffer of planned actions to
                      execute, enabling smooth, continuous motion.
                    </FigureCaption>
                  </div>

                  <p>
                    Real-time robot control demands that each prediction is ready
                    before the robot needs to act. Video model inference,
                    however, is computationally expensive and introduces latency
                    that would normally force the robot into a stop-and-wait
                    pattern. Leapfrog inference solves this by predicting several
                    frames ahead &mdash; far enough into the future that the
                    predicted action trajectory covers the time it takes to
                    compute the next prediction. While the robot executes the
                    current set of predicted actions, the model is already
                    computing the next set in parallel. This eliminates pauses
                    entirely, enabling smooth, continuous operation even with
                    relatively expensive video model inference.
                  </p>
                </div>
              </section>
            </div>
          </section>

          {/* ================================================================
              DATA-EFFICIENT LONG-HORIZON TASK LEARNING
              ================================================================ */}
          <section id="figure-3">
            <div className="w-10 h-[3px] bg-[#C45230] mb-6 rounded-full" />
            <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-8">
              Data-Efficient Long-Horizon Task Learning
            </h2>
            <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
              <p>
                One of the most striking properties of DVA models is their data
                efficiency. Because the causal video backbone already understands
                physics, object permanence, and manipulation affordances from
                web-scale pre-training, our model can robustly learn real-world,
                long-horizon tasks with just 10&ndash;20 hours of robot data,
                which can be collected within a few days. Below we demonstrate two
                industrial tasks that illustrate this capability.
              </p>

              {/* ── Decanting ── */}
              <section id="decanting" className="pt-12">
                <h3 className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-6">
                  Decanting
                </h3>
                <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
                  <p>
                    In the decanting task, the robot must unpack bearings from
                    shipping containers and sort the packaging materials into
                    separate bins. This is a genuine industrial workflow
                    involving soft and rigid objects, variable packing
                    configurations, and multi-step sequencing. Using just 11
                    hours of teleoperated demonstrations, the DVA policy learned
                    to perform the full sequence reliably, achieving 1.5 hours of
                    continuous autonomous operation without human intervention.
                  </p>

                  <div className="my-8">
                    <VimeoEmbed
                      id="1172139591"
                      hash="ded850978c"
                      title="Decanting task"
                    />
                    <VideoCaption num={3}>
                      Full decanting task: the robot unpacks bearings from
                      shipping containers, removes packaging materials, and sorts
                      items into the correct bins. Trained on 11 hours of robot
                      data, demonstrated during 1.5 hours of continuous autonomous
                      operation.
                    </VideoCaption>
                  </div>

                  <h4 className="text-xl font-sans font-bold text-[#2C2C2E] mt-10 mb-4">
                    Edge Cases
                  </h4>
                  <p>
                    The DVA policy handles a wide variety of edge cases that
                    arise naturally during extended autonomous operation. Below
                    are representative examples of recovery behaviors the model
                    learned from the training data:
                  </p>

                  <EdgeCaseGrid
                    items={[
                      { label: "Lid tearing", id: "1172143025", hash: "04f6c9e0f1" },
                      { label: "Strap snapping", id: "1172143340", hash: "aaee45789c" },
                      { label: "Box tipping", id: "1172143187", hash: "d5beee5163" },
                      { label: "Accidental bearing grab", id: "1172143239", hash: "2391b601f4" },
                      { label: "Bearings trapped in bag", id: "1172142720", hash: "ec4af04ba5" },
                      { label: "Packing paper caught", id: "1172143055", hash: "faea7affe9" },
                      { label: "Unexpected box position", id: "1172142766", hash: "88c6514b16" },
                      { label: "Buried packaging", id: "1172142968", hash: "515399bc4d" },
                      { label: "Bearing stuck on gripper", id: "1172143009", hash: "b95370e676" },
                      { label: "Drifted tote", id: "1172143066", hash: "685e3b0874" },
                    ]}
                  />
                </div>
              </section>

              {/* ── Container Breakdown ── */}
              <section id="video-3" className="pt-12">
                <h3 className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-6">
                  Container Breakdown
                </h3>
                <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
                  <p>
                    In the container breakdown task, the robot must disassemble
                    industrial shipping containers &mdash; a physically demanding
                    workflow that requires forceful manipulation, latch release,
                    panel folding, and long-horizon planning across multiple
                    stages. Trained on 17 hours of robot data, the policy runs
                    for 160 minutes of continuous autonomous operation,
                    demonstrating robust performance on one of the most
                    challenging manipulation tasks we have attempted.
                  </p>

                  <div className="my-8">
                    <VimeoEmbed
                      id="1172143977"
                      hash="32e9043d8e"
                      title="Container Breakdown task"
                    />
                    <VideoCaption num={4}>
                      Full container breakdown task: the robot releases latches,
                      folds panels, and flattens industrial shipping containers.
                      Trained on 17 hours of robot data, demonstrated during 160
                      minutes of continuous autonomous operation.
                    </VideoCaption>
                  </div>

                  <h4 className="text-xl font-sans font-bold text-[#2C2C2E] mt-10 mb-4">
                    Edge Cases
                  </h4>
                  <p>
                    Container breakdown presents particularly challenging edge
                    cases due to the variability in container condition and the
                    physical forces involved:
                  </p>

                  <EdgeCaseGrid
                    items={[
                      { label: "Latch not fully released", id: "1172143579", hash: "b8b056df26" },
                      { label: "Trash out of reach", id: "1172143606", hash: "9a0454fa61" },
                      { label: "Latch already open", id: "1172143557", hash: "899a5d5c05" },
                      { label: "Box drifted too far", id: "1172143599", hash: "2a24c6818f" },
                      { label: "Failed flip attempt", id: "1172143590", hash: "2c7dc03be2" },
                      { label: "Over-rotation correction", id: "1172143569", hash: "ed98c00d5d" },
                    ]}
                  />
                </div>
              </section>
            </div>
          </section>

          {/* ================================================================
              LONG-CONTEXT VISUAL MEMORY
              ================================================================ */}
          <section id="video-4">
            <div className="w-10 h-[3px] bg-[#C45230] mb-6 rounded-full" />
            <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-8">
              Long-Context Visual Memory
            </h2>
            <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
              <p>
                Because our causal video model processes long, noise-free context
                windows, DVA policies can remember and reason over events that
                happened minutes ago. This long-context visual memory is critical
                for multi-step tasks where the robot must track objects across
                occlusions, recall prior states, or maintain coherent behavior
                over extended episodes. Unlike approaches that compress visual
                history into a fixed-size embedding, our architecture preserves
                the full fidelity of the visual record through KV-caching,
                allowing the model to attend to any moment in its history with
                full resolution.
              </p>

              {/* ── Shell Game ── */}
              <section id="let-s-play-the-shell-game" className="pt-12">
                <h3 className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-6">
                  Let&rsquo;s Play the Shell Game
                </h3>
                <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
                  <div className="my-8">
                    <VimeoEmbed
                      id="1172144555"
                      hash="8abb4c7322"
                      title="Shell Game"
                    />
                    <VideoCaption num={5}>
                      The robot tracks an object hidden under one of several
                      shells as they are shuffled, then identifies and lifts the
                      correct shell. This requires the model to attend to
                      specific visual details across a long sequence of frames
                      and maintain an internal representation of object location
                      through occlusion and motion.
                    </VideoCaption>
                  </div>
                </div>
              </section>

              {/* ── Returns Processing ── */}
              <section id="video-5" className="pt-12">
                <h3 className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-6">
                  Resolving Visual Ambiguity in Returns Processing
                </h3>
                <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
                  <div className="my-8">
                    <VimeoEmbed
                      id="1172141182"
                      hash="fa7365dbde"
                      title="Returns Processing"
                    />
                    <VideoCaption num={6}>
                      End-to-end returns processing: the robot picks, inspects,
                      folds, and sorts garments in a complete workflow. The DVA
                      policy leverages its long-context visual memory to resolve
                      visual ambiguity and maintain coherent behavior across
                      multiple sequential processing stages.
                    </VideoCaption>
                  </div>

                  <div className="my-8">
                    <VimeoEmbed
                      id="1172144069"
                      hash="92ce78fe34"
                      title="Long-context vs short-context comparison"
                    />
                    <VideoCaption num={7}>
                      Long-context vs. short-context comparison. When the visual
                      context is truncated, the model loses track of task state
                      and produces inconsistent behavior. With the full context
                      window, the policy maintains coherent sequencing across the
                      entire episode, correctly resolving ambiguities that only
                      become clear from earlier observations.
                    </VideoCaption>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* ================================================================
              ONE-SHOT HUMAN DEMO FOLLOWING: ITEM SORTING
              ================================================================ */}
          <section id="video-6">
            <div className="w-10 h-[3px] bg-[#C45230] mb-6 rounded-full" />
            <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-8">
              One-Shot Human Demo Following: Item Sorting
            </h2>
            <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
              <div className="my-8">
                <VimeoEmbed
                  id="1172145096"
                  hash="962a0c60f7"
                  title="One-shot demo following: Sorting"
                />
                <VideoCaption num={8}>
                  Single-shot generalization: after observing a single human
                  demonstration of a sorting task, the DVA policy reproduces the
                  demonstrated behavior with novel objects, containers, and
                  spatial configurations &mdash; without any additional training
                  or fine-tuning.
                </VideoCaption>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div>
                  <SmallVimeoEmbed
                    id="1172144894"
                    hash="2d241097b9"
                    title="Novel objects/containers"
                  />
                  <p className="mt-1.5 text-[13px] text-[#6B6B74]">
                    Novel objects/containers
                  </p>
                </div>
                <div>
                  <SmallVimeoEmbed
                    id="1172144952"
                    hash="d276dffd5e"
                    title="Food packing"
                  />
                  <p className="mt-1.5 text-[13px] text-[#6B6B74]">
                    Food packing
                  </p>
                </div>
                <div>
                  <SmallVimeoEmbed
                    id="1172145003"
                    hash="241a286553"
                    title="Continuous correction"
                  />
                  <p className="mt-1.5 text-[13px] text-[#6B6B74]">
                    Continuous correction
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              ONE-SHOT HUMAN DEMO FOLLOWING: DRAWING
              ================================================================ */}
          <section id="video-8">
            <div className="w-10 h-[3px] bg-[#C45230] mb-6 rounded-full" />
            <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-8">
              One-Shot Human Demo Following: Drawing
            </h2>
            <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
              <div className="my-8">
                <VimeoEmbed
                  id="1172144824"
                  hash="3b0cf1a5ed"
                  title="One-shot demo following: Drawing"
                />
                <VideoCaption num={9}>
                  The robot observes a human drawing a shape or pattern, then
                  recreates the drawing using its own end-effector. This task
                  highlights the model&rsquo;s ability to extract fine-grained
                  spatial intent from video context and translate it into precise
                  end-effector trajectories, demonstrating one-shot imitation at
                  the level of continuous motor control.
                </VideoCaption>
              </div>
            </div>
          </section>

          {/* ================================================================
              INTERPRETABILITY THROUGH VIDEO GENERATION
              ================================================================ */}
          <section id="video-9">
            <div className="w-10 h-[3px] bg-[#C45230] mb-6 rounded-full" />
            <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-8">
              Interpretability through Video Generation
            </h2>
            <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
              <p>
                A unique advantage of placing a video generation model at the
                core of a robot policy is interpretability. Because the causal
                video model generates explicit visual predictions of future
                states, we can directly observe what the robot &ldquo;thinks&rdquo;
                will happen next. These generated videos serve as a transparent
                window into the policy&rsquo;s decision-making process, making it
                possible to diagnose failures, verify intentions, and build trust
                in autonomous behavior &mdash; capabilities that are largely
                opaque in conventional end-to-end policies that map observations
                directly to actions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                <div>
                  <SmallVimeoEmbed
                    id="1172145095"
                    hash="f96c728dc4"
                    title="Interpretability: Decanting"
                  />
                  <p className="mt-1.5 text-[13px] text-[#6B6B74]">Decanting</p>
                </div>
                <div>
                  <SmallVimeoEmbed
                    id="1172145112"
                    hash="3ca5789fc3"
                    title="Interpretability: Returns"
                  />
                  <p className="mt-1.5 text-[13px] text-[#6B6B74]">Returns</p>
                </div>
                <div>
                  <SmallVimeoEmbed
                    id="1172145131"
                    hash="852196333e"
                    title="Interpretability: Container"
                  />
                  <p className="mt-1.5 text-[13px] text-[#6B6B74]">Container</p>
                </div>
              </div>
              <VideoCaption num={10}>
                Generated video predictions across three tasks. The top row shows
                the model&rsquo;s predicted future frames; the bottom row shows
                what actually happened. The close correspondence between
                prediction and reality demonstrates that the model has learned a
                faithful internal representation of the task dynamics.
              </VideoCaption>

              <div className="my-8">
                <VimeoEmbed
                  id="1172145081"
                  hash="f73f61d55d"
                  title="Model comparison"
                />
                <VideoCaption num={11}>
                  Model comparison from identical initial conditions. Different
                  model checkpoints produce different predicted futures,
                  illustrating how training progression refines the model&rsquo;s
                  understanding of task dynamics. This kind of direct visual
                  comparison is only possible because the policy&rsquo;s
                  reasoning is expressed as video.
                </VideoCaption>
              </div>
            </div>
          </section>

          {/* ================================================================
              WHAT'S NEXT?
              ================================================================ */}
          <section id="video-10">
            <div className="w-10 h-[3px] bg-[#C45230] mb-6 rounded-full" />
            <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-bold leading-tight tracking-tight text-[#2C2C2E] mb-8">
              What&rsquo;s next?
            </h2>
            <div className="space-y-6 text-base leading-[1.85] text-[#6B6B74]">
              <p>
                We believe video-based foundation models represent the most
                promising pathway toward physical AGI &mdash; systems that can
                understand and act in the real world with the generality and
                adaptability of human intelligence. The results presented here
                demonstrate that causal video models, when placed at the core of
                a robot policy, unlock data efficiency, long-context reasoning,
                one-shot generalization, and interpretability in a single unified
                architecture.
              </p>
              <p>
                Significant challenges remain on the road ahead. Robust
                planning and reasoning over truly long horizons, self-improvement
                through autonomous practice, mobile manipulation in unstructured
                environments, and dexterous control of complex end-effectors are
                all active areas of research at Rhoda AI. We are excited about
                the pace of progress and committed to pushing the boundaries of
                what video-based robot policies can achieve.
              </p>
              <p>
                If you are interested in learning more or collaborating with us,
                reach out at{" "}
                <a
                  href="mailto:research@rhoda.ai"
                  className="text-[#C45230] underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  research@rhoda.ai
                </a>
                .
              </p>
            </div>
          </section>

          {/* ================================================================
              CITATION
              ================================================================ */}
          <section className="pt-4">
            <pre className="bg-[#F7F6F3] rounded-lg p-6 text-sm text-[#6B6B74] font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap" style={{ borderLeft: "3px solid #C45230" }}>
{`@article{rhoda2026dva,
    author = {Rhoda AI Team},
    title = {Causal Video Models Are Data-Efficient Robot Policy Learners},
    journal = {Rhoda AI Blog},
    year = {2026},
}`}
            </pre>
          </section>
        </article>
      </div>

      {/* Spacer before footer */}
      <div className="pb-24" />

      <Footer />
    </div>
  );
}
