"use client";

export default function InvestorMarquee({ investors }: { investors: string[] }) {
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
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.65"; }}
          >
            <img
              src={`/assets/images/investors/${name}.png`}
              alt={name}
              style={{
                height: 40,
                width: "auto",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
