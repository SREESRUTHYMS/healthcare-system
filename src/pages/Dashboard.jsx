import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/dashboardData.js";

export default function Dashboard() {
  const [showAll, setShowAll] = useState(false);
  const [activeIcon, setActiveIcon] = useState(CATEGORIES[0].slug);

  return (
    <div className="bg-mint">
      {/* Hero */}
      <div className="border-b border-teal/10 px-6 pb-10 pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pulse">Dashboard</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Health System Dashboard
          </h1>
          <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-sage">
            How well is your care operation performing? Explore indicators of
            patient care, doctor &amp; staff workflow, medical records, and
            billing — drawn straight from the platform's core modules.
          </p>
        </div>
      </div>

      {/* Sticky category nav — same role as the source site's pill row */}
      <div className="sticky top-[73px] z-40 border-b border-teal/10 bg-mint/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-3">
          {CATEGORIES.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full border border-teal/15 bg-white px-4 py-1.5 font-body text-sm font-medium text-ink/70 transition-colors hover:border-teal hover:text-teal"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      {/* Category sections */}
      <div className="mx-auto max-w-6xl px-6">
        {CATEGORIES.map((category, idx) => (
          <section
            key={category.slug}
            id={category.slug}
            className={`scroll-mt-32 py-12 ${idx !== 0 ? "border-t border-teal/10" : ""}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="font-display text-2xl font-semibold text-ink">{category.label}</h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-sage">{category.blurb}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {category.indicators.map((indicator) => (
                <Link
                  key={indicator.slug}
                  to={`/dashboard/${category.slug}/${indicator.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-teal/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_12px_30px_-15px_rgba(13,92,99,0.4)]"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-pulse">
                      {indicator.card}
                    </p>
                    <p className="mt-2 font-display text-base font-semibold text-ink">
                      {indicator.title}
                    </p>
                    <p className="mt-3 font-display text-2xl font-semibold text-teal">
                      {indicator.stat}
                    </p>
                    <p className="mt-1 font-body text-xs leading-snug text-sage">
                      {indicator.statLabel}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-body text-xs font-medium text-teal opacity-0 transition-opacity group-hover:opacity-100">
                    View more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Expandable full index, mirroring the source site's
          "View/Hide All Indicators" + icon-tab list */}
      <div className="border-t border-teal/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="mx-auto flex items-center gap-2 rounded-full border border-teal/20 px-5 py-2.5 font-body text-sm font-medium text-teal transition-colors hover:bg-teal hover:text-mint"
          >
            {showAll ? "Hide" : "View"} all indicators
            <span className={`transition-transform ${showAll ? "rotate-180" : ""}`} aria-hidden="true">
              ⌄
            </span>
          </button>

          {showAll && (
            <div className="mt-8">
              {/* Icon tabs */}
              <div className="flex flex-wrap justify-center gap-2 border-b border-teal/10 pb-6">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => setActiveIcon(c.slug)}
                    className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                      activeIcon === c.slug
                        ? "bg-teal text-mint"
                        : "border border-teal/15 text-ink/70 hover:text-teal"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Flat list for the active category */}
              <ul className="mx-auto mt-6 grid max-w-3xl gap-1">
                {CATEGORIES.find((c) => c.slug === activeIcon).indicators.map((indicator) => (
                  <li key={indicator.slug}>
                    <Link
                      to={`/dashboard/${activeIcon}/${indicator.slug}`}
                      className="flex items-center justify-between rounded-lg px-4 py-3 font-body text-sm text-ink/80 transition-colors hover:bg-mint-soft hover:text-teal"
                    >
                      <span>{indicator.title}</span>
                      <span aria-hidden="true" className="text-sage">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
