import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import PulseDivider from "../components/PulseDivider.jsx";
import { HeartIcon } from "../components/icons/MedicalIcons.jsx";

const OBJECTIVES = [
  "Centralize patient information — history, diagnoses, prescriptions, and treatment plans.",
  "Let doctors manage appointments, schedules, and patient data in one place.",
  "Enable patients to book appointments online and message their care team.",
  "Keep every medical record secure, encrypted, and confidential.",
  "Streamline billing and insurance so payments aren't a second job.",
  "Send real-time reminders for appointments, tests, and follow-ups.",
];

const MODULES = {
  Admin: [
    "Manage patient, doctor, and staff accounts",
    "Generate and manage hospital/clinic schedules",
    "Approve or reject new registrations",
    "Monitor appointment bookings and cancellations",
    "Generate reports on admissions, appointments, and billing",
    "Ensure compliance with healthcare regulations (e.g. HIPAA)",
  ],
  Patient: [
    "Register a profile with personal and medical details",
    "Book appointments by specialization and availability",
    "View medical history, lab results, and prescriptions",
    "Message doctors or start a video consultation",
    "Pay medical bills for consultations, tests, and treatments",
    "Get reminders for appointments, medication, and follow-ups",
  ],
  Doctor: [
    "Submit documentation for verification",
    "Manage daily schedules and available timeslots",
    "Review patient history before consultations",
    "Update records with diagnoses and treatment plans",
    "Generate medical certificates and prescriptions",
    "Get notified of new bookings, cancellations, and follow-ups",
  ],
};

const TIMELINE = [
  { n: "01", label: "Register & build a profile", detail: "Patients sign up with personal details, medical history, and insurance information." },
  { n: "02", label: "Find & book a doctor", detail: "Search by specialization, location, and availability, then confirm a slot instantly." },
  { n: "03", label: "Consult & get diagnosed", detail: "The doctor reviews history, examines the patient, and records diagnosis and treatment notes." },
  { n: "04", label: "Prescriptions & lab work", detail: "Prescriptions and lab orders post straight to the patient's record, ready to download." },
  { n: "05", label: "Billing & payment", detail: "An itemized invoice is generated; pay online or route the claim through insurance." },
  { n: "06", label: "Follow-up & recovery", detail: "Automated reminders keep follow-ups, refills, and repeat tests on schedule." },
];

export default function Home() {
  const [activeModule, setActiveModule] = useState("Admin");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mint">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-20 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pulse">
              Digital healthcare platform
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              One record of care,
              <br />
              from check-up to checkout.
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-sage">
              Vitals centralizes patient records, appointments, prescriptions
              and billing into a single secure platform for hospitals,
              clinics, patients and doctors.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/register"
                className="rounded-full bg-teal px-6 py-3 font-body text-sm font-semibold text-mint transition-colors hover:bg-teal-dark"
              >
                Create an account
              </Link>
              <a
                href="#overview"
                className="rounded-full border border-teal/30 px-6 py-3 font-body text-sm font-semibold text-teal transition-colors hover:border-teal"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Live vitals card — the hero's thesis image, standing in for
              a monitored patient record rather than a generic screenshot */}
          <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-teal/15 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(13,92,99,0.35)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm font-semibold text-ink">A. Sharma</p>
                <p className="font-mono text-[11px] text-sage">Patient ID · VT-2291</p>
              </div>
              <span className="rounded-full bg-teal/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-teal">
                Stable
              </span>
            </div>
            <svg viewBox="0 0 260 60" className="mt-6 h-14 w-full" fill="none">
              <path
                d="M0 30 H70 L88 30 L98 8 L112 52 L124 30 L145 30 L158 16 L170 44 L182 30 H260"
                stroke="#E8604C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-teal/10 pt-4">
              <div>
                <p className="font-mono text-lg font-medium text-ink">72</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-sage">bpm</p>
              </div>
              <div>
                <p className="font-mono text-lg font-medium text-ink">120/80</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-sage">bp</p>
              </div>
              <div>
                <p className="font-mono text-lg font-medium text-ink">Feb 19</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-sage">next visit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PulseDivider label="Overview" />

      {/* Overview */}
      <Section
        id="overview"
        eyebrow="Project overview"
        title="What Vitals does"
        subtitle="A comprehensive platform to manage medical records, patient information, appointments, and healthcare services — streamlining patient management with easy access to histories, prescriptions, and real-time appointments."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Focus", value: "Patient care" },
            { label: "Coverage", value: "Multi-city" },
            { label: "Category", value: "Digital Healthcare" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-teal/10 bg-white p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sage">{item.label}</p>
              <p className="mt-2 font-display text-xl font-semibold text-ink">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {OBJECTIVES.map((obj) => (
            <div key={obj} className="flex gap-3 rounded-xl bg-mint-soft/60 p-4">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse" />
              <p className="font-body text-sm leading-relaxed text-ink/80">{obj}</p>
            </div>
          ))}
        </div>
      </Section>

      <PulseDivider label="Modules" />

      {/* Core features / modules */}
      <Section
        id="modules"
        eyebrow="Core features"
        title="Three roles, one system"
        subtitle="Admins run the clinic, doctors run their practice, and patients run their own care — each with a workspace built for what they actually need to do."
      >
        <div className="flex flex-wrap gap-2">
          {Object.keys(MODULES).map((m) => (
            <button
              key={m}
              onClick={() => setActiveModule(m)}
              className={`rounded-full px-5 py-2 font-body text-sm font-medium transition-colors ${
                activeModule === m
                  ? "bg-teal text-mint"
                  : "bg-white text-ink/70 hover:text-teal border border-teal/15"
              }`}
            >
              {m} module
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {MODULES[activeModule].map((feature) => (
            <li
              key={feature}
              className="rounded-xl border border-teal/10 bg-white p-4 font-body text-sm text-ink/80"
            >
              {feature}
            </li>
          ))}
        </ul>
      </Section>

      <PulseDivider label="Timeline" />

      {/* Timeline */}
      <Section
        id="timeline"
        eyebrow="Patient journey"
        title="From first visit to full recovery"
        subtitle="Every patient moves through the same six steps — Vitals keeps each one connected instead of scattered across paper and phone calls."
      >
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TIMELINE.map((step) => (
            <li key={step.n} className="rounded-xl border border-teal/10 bg-white p-5">
              <p className="font-mono text-2xl font-medium text-pulse">{step.n}</p>
              <p className="mt-2 font-display text-base font-semibold text-ink">{step.label}</p>
              <p className="mt-1 font-body text-sm text-sage">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

            <Section className="pb-24 pt-16">
        <div className="rounded-2xl bg-teal px-8 py-14 text-center">
          <HeartIcon className="mx-auto mb-4 flex justify-center [&_svg]:h-10 [&_svg]:w-10" />
          <h2 className="font-display text-3xl font-semibold text-mint sm:text-4xl">
            WE'RE HERE TO TAKE CARE OF YOU
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-mint/80">
            Register as a patient, doctor, or care team member — book
            appointments, manage records, and stay on top of your health in
            minutes.
          </p>
          <Link
            to="/register"
            className="mt-6 inline-block rounded-full bg-mint px-6 py-3 font-body text-sm font-semibold text-teal transition-colors hover:bg-white"
          >
            Create your account
          </Link>
        </div>
      </Section>
    </div>
  );
}
