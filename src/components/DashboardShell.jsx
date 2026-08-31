import React from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function DashboardShell({ eyebrow, title, tabs, activeTab, onTabChange, children }) {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pulse">{eyebrow}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            {title}, {user?.name || "there"}
          </h1>
        </div>
        <span className="rounded-full bg-teal/10 px-4 py-1.5 font-mono text-xs text-teal">
          {user?.email}
        </span>
      </div>

      {tabs && (
        <div className="mt-8 flex flex-wrap gap-2 border-b border-teal/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-teal text-mint"
                  : "bg-white text-ink/70 border border-teal/15 hover:text-teal"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className="mt-8">{children}</div>
    </div>
  );
}
