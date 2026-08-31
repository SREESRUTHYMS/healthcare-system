import React, { useEffect, useRef, useState } from "react";

// The signature element of the site: an EKG trace that draws itself in
// as it scrolls into view. Used between every major section to tie the
// visual language back to "vitals" / patient monitoring.
export default function PulseDivider({ label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center py-10 sm:py-14"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 60"
        className="w-full max-w-3xl h-10 sm:h-12"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 H180 L205 30 L220 8 L240 52 L258 30 L275 30 L290 14 L305 46 L320 30 H600"
          stroke="#E8604C"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1.4s ease-out",
          }}
        />
      </svg>
      {label ? (
        <span className="absolute bg-mint px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-sage">
          {label}
        </span>
      ) : null}
    </div>
  );
}
