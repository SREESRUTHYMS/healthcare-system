import React, { useState } from "react";
import DashboardShell from "../../components/DashboardShell.jsx";

const SCHEDULE = [
  { time: "9:00 AM", patient: "Ananya Sharma", reason: "Follow-up" },
  { time: "10:30 AM", patient: "Vikram Rao", reason: "Chest pain — new patient" },
  { time: "2:00 PM", patient: "Priya Nair", reason: "Prescription renewal" },
];

const PATIENTS = [
  { name: "Ananya Sharma", lastVisit: "Jan 20, 2025", note: "Stable, continue current medication." },
  { name: "Vikram Rao", lastVisit: "New patient", note: "Awaiting first consultation notes." },
];

export default function DoctorDashboard() {
  const [tab, setTab] = useState("Today");

  return (
    <DashboardShell
      eyebrow="Doctor workspace"
      title="Good to see you"
      tabs={["Today", "Patients", "Prescriptions"]}
      activeTab={tab}
      onTabChange={setTab}
    >
      {tab === "Today" && (
        <div className="space-y-4">
          {SCHEDULE.map((s) => (
            <div
              key={s.time}
              className="flex flex-wrap items-center justify-between rounded-xl border border-teal/10 bg-white p-5"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-medium text-teal">{s.time}</span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">{s.patient}</p>
                  <p className="font-body text-sm text-sage">{s.reason}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full bg-teal px-3 py-1.5 text-xs font-medium text-mint">
                  Start consult
                </button>
                <button className="rounded-full border border-teal/20 px-3 py-1.5 text-xs font-medium text-ink/70">
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "Patients" && (
        <div className="grid gap-4 sm:grid-cols-2">
          {PATIENTS.map((p) => (
            <div key={p.name} className="rounded-xl border border-teal/10 bg-white p-5">
              <p className="font-display text-base font-semibold text-ink">{p.name}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-sage">
                Last visit · {p.lastVisit}
              </p>
              <p className="mt-3 font-body text-sm text-ink/70">{p.note}</p>
              <button className="mt-3 font-body text-sm font-medium text-teal">View full record</button>
            </div>
          ))}
        </div>
      )}

      {tab === "Prescriptions" && (
        <div className="rounded-xl border border-teal/10 bg-white p-6 font-body text-sm text-sage">
          Hook this tab up to <code className="rounded bg-mint-soft px-1.5 py-0.5">POST /api/prescriptions</code>{" "}
          so doctors can issue prescriptions and medical certificates directly to a patient's record.
        </div>
      )}
    </DashboardShell>
  );
}
