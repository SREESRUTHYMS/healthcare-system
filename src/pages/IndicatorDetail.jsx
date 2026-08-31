import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { CATEGORIES, findIndicator } from "../data/dashboardData.js";

export default function IndicatorDetail() {
  const { categorySlug, indicatorSlug } = useParams();
  const found = findIndicator(categorySlug, indicatorSlug);

  if (!found) return <Navigate to="/dashboard" replace />;
  const { category, indicator } = found;

  // Suggest the next/related indicator in the same category, the way the
  // source site keeps you moving through a topic instead of dead-ending.
  const siblings = category.indicators.filter((i) => i.slug !== indicator.slug);

  return (
    <div className="bg-mint">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <nav className="font-body text-sm text-sage">
          <Link to="/dashboard" className="hover:text-teal">Dashboard</Link>
          <span className="mx-2">/</span>
          <Link to={`/dashboard#${category.slug}`} className="hover:text-teal">{category.label}</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{indicator.title}</span>
        </nav>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-pulse">
          {category.label} · {indicator.card}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {indicator.title}
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-sage">
          {indicator.description}
        </p>

        <div className="mt-8 inline-flex flex-col rounded-xl border border-teal/10 bg-white px-6 py-5">
          <span className="font-display text-3xl font-semibold text-teal">{indicator.stat}</span>
          <span className="mt-1 font-body text-sm text-sage">{indicator.statLabel}</span>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">How it works</h2>
          <ul className="mt-4 space-y-3">
            {indicator.details.map((d) => (
              <li key={d} className="flex gap-3 rounded-xl bg-white p-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse" />
                <p className="font-body text-sm leading-relaxed text-ink/80">{d}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 border-t border-teal/10 pt-8">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-sage">
            More in {category.label}
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                to={`/dashboard/${category.slug}/${s.slug}`}
                className="rounded-xl border border-teal/10 bg-white p-4 font-body text-sm font-medium text-ink/80 transition-colors hover:border-teal hover:text-teal"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/dashboard"
          className="mt-10 inline-block font-body text-sm font-medium text-teal"
        >
          ← Back to dashboard
        </Link>
      </div>
    </div>
  );
}
