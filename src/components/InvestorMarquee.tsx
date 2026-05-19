"use client";

export default function InvestorMarquee({ investors }: { investors: string[] }) {
  const doubled = [...investors, ...investors];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          animation: "scroll-left 40s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            style={{
              flexShrink: 0,
              borderRadius: 8,
              overflow: "hidden",
              opacity: 0.85,
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.85"; }}
          >
            <img
              src={`/assets/images/investors/${name}.jpg`}
              alt={name}
              style={{
                height: 52,
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
