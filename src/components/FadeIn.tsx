"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number; // 0-6, maps to fade-in-delay-N
  style?: React.CSSProperties;
  as?: "div" | "section" | "p" | "span";
}

export default function FadeIn({
  children,
  className = "",
  delay,
  style,
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay != null ? ` fade-in-delay-${delay}` : "";

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`fade-in${delayClass} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
