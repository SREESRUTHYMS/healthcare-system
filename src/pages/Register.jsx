import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const DASHBOARD_PATH = { admin: "/admin", doctor: "/doctor", patient: "/patient" };

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "patient" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with POST /api/auth/register against your Express API
    const user = register(form);
    navigate(DASHBOARD_PATH[user.role]);
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pulse">Get started</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">Create your account</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="font-body text-sm font-medium text-ink/80">Full name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-teal/20 bg-white px-4 py-2.5 font-body text-sm text-ink outline-none focus:border-teal"
            placeholder="Ananya Sharma"
          />
        </div>

        <div>
          <label className="font-body text-sm font-medium text-ink/80">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-teal/20 bg-white px-4 py-2.5 font-body text-sm text-ink outline-none focus:border-teal"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="font-body text-sm font-medium text-ink/80">Password</label>
          <input
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-teal/20 bg-white px-4 py-2.5 font-body text-sm text-ink outline-none focus:border-teal"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="font-body text-sm font-medium text-ink/80">Register as</label>
          <div className="mt-1.5 grid grid-cols-3 gap-2">
            {["patient", "doctor", "admin"].map((r) => (
              <button
                type="button"
                key={r}
                onClick={() => setForm({ ...form, role: r })}
                className={`rounded-lg border px-3 py-2 font-body text-sm capitalize transition-colors ${
                  form.role === r
                    ? "border-teal bg-teal text-mint"
                    : "border-teal/20 bg-white text-ink/70"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-teal py-3 font-body text-sm font-semibold text-mint transition-colors hover:bg-teal-dark"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 text-center font-body text-sm text-sage">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-teal">
          Log in
        </Link>
      </p>
    </div>
  );
}
