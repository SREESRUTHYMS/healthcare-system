import React from "react";

// Consistent max-width + vertical rhythm wrapper used by every landing
// page section, so spacing never drifts page to page.
export default function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-4 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pulse">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 font-body text-base leading-relaxed text-sage">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
