import React, { useState } from "react";
import DashboardShell from "../../components/DashboardShell.jsx";

const STATS = [
  { label: "Active patients", value: "1,284" },
  { label: "Doctors on staff", value: "42" },
  { label: "Appointments today", value: "96" },
  { label: "Pending approvals", value: "7" },
];

const PENDING = [
  { name: "Dr. Rahul Verma", type: "Doctor registration", status: "Pending" },
  { name: "Meera Iyer", type: "Patient registration", status: "Pending" },
  { name: "Dr. Aisha Khan", type: "Doctor registration", status: "Pending" },
];

const REPORTS = [
  { label: "Admissions this month", value: "312" },
  { label: "Billing generated", value: "₹18,42,000" },
  { label: "Cancellation rate", value: "4.2%" },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState("Approvals");

  return (
    <DashboardShell
      eyebrow="Admin console"
      title="Welcome back"
      tabs={["Approvals", "Schedules", "Reports"]}
      activeTab={tab}
      onTabChange={setTab}
    >
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border border-teal/10 bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sage">{s.label}</p>
            <p className="mt-2 font-display text-2xl font-semibold text-ink">{s.value}</p>
          </div>
        ))}
      </div>

      {tab === "Approvals" && (
        <div className="overflow-hidden rounded-xl border border-teal/10 bg-white">
          <table className="w-full text-left font-body text-sm">
            <thead className="bg-mint-soft text-ink/60">
              <tr>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {PENDING.map((p) => (
                <tr key={p.name} className="border-t border-teal/10">
                  <td className="px-5 py-3 text-ink">{p.name}</td>
                  <td className="px-5 py-3 text-sage">{p.type}</td>
                  <td className="px-5 py-3">
                    <span className="rounded-full bg-pulse/10 px-3 py-1 text-xs font-medium text-pulse-dark">
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <button className="mr-2 rounded-full bg-teal px-3 py-1 text-xs font-medium text-mint">
                      Approve
                    </button>
                    <button className="rounded-full border border-teal/20 px-3 py-1 text-xs font-medium text-ink/70">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "Schedules" && (
        <div className="rounded-xl border border-teal/10 bg-white p-6 font-body text-sm text-sage">
          Hook this tab up to <code className="rounded bg-mint-soft px-1.5 py-0.5">GET /api/schedules</code>{" "}
          to list and edit hospital/clinic schedules across departments.
        </div>
      )}

      {tab === "Reports" && (
        <div className="grid gap-4 sm:grid-cols-3">
          {REPORTS.map((r) => (
            <div key={r.label} className="rounded-xl border border-teal/10 bg-white p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sage">{r.label}</p>
              <p className="mt-2 font-display text-xl font-semibold text-ink">{r.value}</p>
            </div>
          ))}
        </div>
      )}
    </DashboardShell>
  );
}
