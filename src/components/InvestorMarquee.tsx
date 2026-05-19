"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function InvestorMarquee({ investors }: { investors: string[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const doubled = [...investors, ...investors];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 40,
          animation: "scroll-left 40s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            style={{
              flexShrink: 0,
              opacity: 0.65,
              transition: "opacity 0.2s ease, filter 0.4s ease",
              filter: isDark ? "brightness(0) invert(1)" : "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.65"; }}
          >
            <img
              src={`/assets/images/investors/${name}.png`}
              alt={name}
              data-no-shadow
              style={{
                height: 40,
                width: "auto",
                display: "block",
                boxShadow: "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
