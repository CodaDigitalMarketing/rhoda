"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const LEADERSHIP_ROW_1 = [
  {
    name: "Jagdeep Singh",
    role: ["CEO /", "Co-founder"],
    photo: "/assets/images/team/jagdeep-singh.webp",
    linkedin: "https://www.linkedin.com/in/jagdeep-singh-3b2a9222/",
    twitter: "https://x.com/startupjag",
  },
  {
    name: "Eric Chan",
    role: ["Chief Scientist /", "Co-founder"],
    photo: "/assets/images/team/eric.webp",
    linkedin: "https://www.linkedin.com/in/eric-chan-28353322a/",
    twitter: "https://x.com/ericryanchan",
  },
  {
    name: "Gordon Wetzstein",
    role: ["Scientific Advisor /", "Co-founder"],
    photo: "/assets/images/team/gordon-wetztein.webp",
    linkedin: "https://www.linkedin.com/in/gordon-wetzstein-2406723/",
    twitter: "https://x.com/GordonWetzstein",
  },
  {
    name: "Andrew Wooten",
    role: ["Chief Product Officer /", "Co-founder"],
    photo: "/assets/images/team/andrew-wooten.webp",
    linkedin: "https://www.linkedin.com/in/andrewcwooten/",
    twitter: "https://x.com/andrewwooten96",
  },
];

const LEADERSHIP_ROW_2 = [
  {
    name: "Changan Chen",
    role: ["Chief Research Officer /", "Co-founder"],
    photo: "/assets/images/team/changan-chen.webp",
    linkedin: "https://www.linkedin.com/in/changanvr/",
    twitter: "https://x.com/changanvr",
  },
  {
    name: "Steve Tirado",
    role: ["Chief Strategy Officer"],
    photo: "/assets/images/team/steve-tirado.webp",
    linkedin: "https://www.linkedin.com/in/steve-tirado-a52715106/",
    twitter: "https://x.com/robotdata1",
  },
  {
    name: "Alex Bergman",
    role: ["Chief Data Officer /", "VP Software Eng."],
    photo: "/assets/images/team/alex-bergman.webp",
    linkedin: "https://www.linkedin.com/in/alexander-bergman/",
    twitter: "https://x.com/alexwbergman",
  },
];

const TEAM_NAMES =
  "Adam Patni | Alan Baade | Alex Sterdjevich | Alexander Bergman | Ali Ahmad | Andrei Netchitaliouk | Andrew Miller | Andrew Wooten | Andric Tang | Anthony Josh Legrama | Avery Walston | Basil Dunford | Bingyin Ma | Changan Chen | Christian De Buys | Codey Sun | David Lindell | Dennis Parker | Diego Silva | Eric Chan | George Hito | Gordon Wetzstein | Ivan Leniski | Ivan Skorokhodov | Jagdeep Singh | Jason Larson | Joanne Truong | Kayla Matheus | Kevin Luu | Kyle Lam | Kyle Smith | Leo Dong | Louis Richardson | Luke Weaver | Manuel Guzman | Marco Ximenes Rego Monteiro | Marko Tintor | Mathieu Geisert | Matt Day | Matthew Hoey | Michael Shinagawa | Miguel Comonfort | Namita Anil Kumar | Nick Ostrom | Qi Fan Wang | Qianqian Wang | Rohit Bandaru | Ruizhi Shao | Russell Baxt | Ryan Vo | Sam Turner | Sean Rowan | Seth Vigil | Siddhartha Srinivasa | Steve Tirado | Tongzhou Mu | Travis Armstrong | Trevor Chan | Weiyu Liu | Will Peterson | Yilun Du | Yuanfeng Peng";

function LeadershipCard({
  person,
}: {
  person: {
    name: string;
    role: string[];
    photo: string;
    linkedin: string;
    twitter: string;
  };
}) {
  return (
    <div
      className="flex flex-col items-center bg-[#FFFFFF] rounded-[12px] p-6 transition-all duration-300 hover:shadow-lg"
      style={{ border: "1px solid #E2E2E6", borderTop: "3px solid #E2652E" }}
    >
      <div className="rounded-full overflow-hidden mb-4 bg-[#FAFAFA]">
        <Image
          src={person.photo}
          alt={person.name}
          width={200}
          height={200}
          className="rounded-full object-cover"
        />
      </div>
      <h3
        className="font-bold text-center text-[#1A1A1F]"
        style={{ fontSize: 22 }}
      >
        {person.name}
      </h3>
      <p
        className="text-center text-[#6B6B74] mt-1"
        style={{ fontSize: 16, lineHeight: "22px" }}
      >
        {person.role.map((line, i) => (
          <span key={i}>
            {line}
            {i < person.role.length - 1 && <br />}
          </span>
        ))}
      </p>
      <div className="w-full mt-4 pt-3 border-t border-[#E2652E]/50 flex justify-center gap-4">
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} LinkedIn`}
          className="text-[#6B6B74] hover:text-[#C45230] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href={person.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} Twitter`}
          className="text-[#6B6B74] hover:text-[#C45230] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />

      {/* Hero - Light Orange Tint Section */}
      <div className="mx-2 bg-[#FDF0EB] rounded-[12px]">
        <div className="text-center pt-[180px] pb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1F]">
            Engineering Intelligence
          </h1>
          <p
            className="mt-4 max-w-[600px] mx-auto text-[#6B6B74]"
            style={{ fontSize: 18, lineHeight: "28px" }}
          >
            A world-class team of researchers and engineers building the future of
            robotic intelligence.
          </p>
        </div>

        {/* Team Photo - inside hero section */}
        <div className="rhoda-container px-6 pb-12">
          <div className="relative w-full aspect-[21/9] rounded-[12px] overflow-hidden">
            <Image
              src="/assets/images/team/rhoda-ai-team.webp"
              alt="Rhoda AI team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Leadership - Light bg */}
      <div className="bg-[#FAFAFA]">
        <div className="rhoda-container px-6 py-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1F] mb-12">
              Our Leadership Team
            </h2>
          </FadeIn>

          {/* First row - 4 people */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {LEADERSHIP_ROW_1.map((person, i) => (
              <FadeIn key={person.name} delay={i + 1}>
                <LeadershipCard person={person} />
              </FadeIn>
            ))}
          </div>

          {/* Second row - 3 people, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[75%] mx-auto">
            {LEADERSHIP_ROW_2.map((person, i) => (
              <FadeIn key={person.name} delay={i + 1}>
                <LeadershipCard person={person} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="rhoda-container px-6 pt-8 pb-24">
          <div className="border-t border-[#E2E2E6] pt-12">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1F] mb-8">
              Our Team
            </h3>
            <p
              className="text-center text-[#6B6B74]"
              style={{ fontSize: 18, lineHeight: "28px" }}
            >
              {TEAM_NAMES}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
