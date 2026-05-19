"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/assets/images/home/robot-folding-clothes.jpg", alt: "robot folding clothes", label: "Dexterous Manipulation" },
  { src: "/assets/images/home/robot-decant.webp", alt: "robot decanting", label: "Industrial Decanting" },
  { src: "/assets/images/home/robot-pushing-down-rollers.jpg", alt: "robot pushing box on rollers", label: "Logistics Handling" },
];

export default function ImageShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          borderRadius: 12,
        }}
      >
        {IMAGES.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            style={{
              opacity: active === i ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
            priority={i === 0}
          />
        ))}
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 0,
          marginTop: 16,
          borderRadius: 10,
          overflow: "hidden",
          border: "1px solid #E2E2E6",
        }}
      >
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            style={{
              flex: 1,
              padding: "14px 16px",
              fontSize: 14,
              fontWeight: active === i ? 500 : 400,
              fontFamily: '"Space Grotesk", system-ui, sans-serif',
              color: active === i ? "#FFFFFF" : "#6B6B74",
              backgroundColor: active === i ? "#E2652E" : "#FFFFFF",
              border: "none",
              borderRight: i < IMAGES.length - 1 ? "1px solid #E2E2E6" : "none",
              cursor: "pointer",
              transition: "all 0.25s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {img.label}
          </button>
        ))}
      </div>
    </div>
  );
}
