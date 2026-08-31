import React, { useState } from "react";
import DashboardShell from "../../components/DashboardShell.jsx";

const APPOINTMENTS = [
  { doctor: "Dr. Rahul Verma", specialty: "Cardiology", date: "Feb 19, 10:30 AM", status: "Confirmed" },
  { doctor: "Dr. Aisha Khan", specialty: "Dermatology", date: "Mar 02, 2:00 PM", status: "Pending" },
];

const RECORDS = [
  { title: "Blood test — CBC panel", date: "Jan 28, 2025", doctor: "Dr. Rahul Verma" },
  { title: "Prescription — Amoxicillin", date: "Jan 20, 2025", doctor: "Dr. Aisha Khan" },
  { title: "Consultation notes", date: "Jan 20, 2025", doctor: "Dr. Aisha Khan" },
];

const BILLS = [
  { desc: "Cardiology consultation", amount: "₹1,200", status: "Paid" },
  { desc: "Lab tests — CBC panel", amount: "₹850", status: "Due" },
];

export default function PatientDashboard() {
  const [tab, setTab] = useState("Appointments");

  return (
    <DashboardShell
      eyebrow="Patient portal"
      title="Hi"
      tabs={["Appointments", "Medical records", "Billing"]}
      activeTab={tab}
      onTabChange={setTab}
    >
      {tab === "Appointments" && (
        <div className="space-y-4">
          <button className="rounded-full bg-teal px-5 py-2.5 font-body text-sm font-medium text-mint">
            + Book new appointment
          </button>
          {APPOINTMENTS.map((a) => (
            <div
              key={a.doctor + a.date}
              className="flex flex-wrap items-center justify-between rounded-xl border border-teal/10 bg-white p-5"
            >
              <div>
                <p className="font-display text-base font-semibold text-ink">{a.doctor}</p>
                <p className="font-body text-sm text-sage">{a.specialty} · {a.date}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wide ${
                  a.status === "Confirmed" ? "bg-teal/10 text-teal" : "bg-pulse/10 text-pulse-dark"
                }`}
              >
                {a.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {tab === "Medical records" && (
        <div className="grid gap-4 sm:grid-cols-2">
          {RECORDS.map((r) => (
            <div key={r.title} className="rounded-xl border border-teal/10 bg-white p-5">
              <p className="font-display text-base font-semibold text-ink">{r.title}</p>
              <p className="mt-1 font-body text-sm text-sage">{r.doctor} · {r.date}</p>
              <button className="mt-3 font-body text-sm font-medium text-teal">Download PDF</button>
            </div>
          ))}
        </div>
      )}

      {tab === "Billing" && (
        <div className="overflow-hidden rounded-xl border border-teal/10 bg-white">
          <table className="w-full text-left font-body text-sm">
            <thead className="bg-mint-soft text-ink/60">
              <tr>
                <th className="px-5 py-3 font-medium">Description</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {BILLS.map((b) => (
                <tr key={b.desc} className="border-t border-teal/10">
                  <td className="px-5 py-3 text-ink">{b.desc}</td>
                  <td className="px-5 py-3 text-ink">{b.amount}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        b.status === "Paid" ? "bg-teal/10 text-teal" : "bg-pulse/10 text-pulse-dark"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    {b.status === "Due" && (
                      <button className="rounded-full bg-teal px-3 py-1 text-xs font-medium text-mint">
                        Pay now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardShell>
  );
}
