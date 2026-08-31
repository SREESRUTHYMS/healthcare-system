import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-teal/10 bg-ink text-mint">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <span className="font-display text-xl font-semibold">
            Vitals<span className="text-pulse">.</span>
          </span>
          <p className="mt-3 max-w-xs font-body text-sm text-mint/60">
            A single record of care — appointments, prescriptions and billing
            in one secure, HIPAA-aware system.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-pulse">
            Modules
          </h4>
          <ul className="mt-4 space-y-2 font-body text-sm text-mint/70">
            <li>Admin console</li>
            <li>Patient portal</li>
            <li>Doctor workspace</li>
            <li>Billing &amp; insurance</li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-pulse">
            Platform
          </h4>
          <ul className="mt-4 space-y-2 font-body text-sm text-mint/70">
            <li>Digital healthcare management</li>
            <li>Category: Patient care & operations</li>
            <li>Status: In active development</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-mint/10 px-6 py-5 text-center font-mono text-[11px] text-mint/40">
        Secure care management, from check-up to checkout
      </div>
    </footer>
  );
}
