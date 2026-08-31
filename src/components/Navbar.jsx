import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const NAV_LINKS = [
  { label: "Tracking overview", to: "/tracking" },
  { label: "Modules", to: "/#modules" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Timeline", to: "/#timeline" },
];

const DASHBOARD_PATH = {
  admin: "/admin",
  doctor: "/doctor",
  patient: "/patient",
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-teal/10 bg-mint/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / signature mark: name underlined by a short pulse tick */}
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold text-ink">
            Vitals<span className="text-pulse">.</span>
          </span>
          <svg
            viewBox="0 0 90 10"
            className="mt-1 h-2 w-20"
            fill="none"
          >
            <path
              d="M0 5 H30 L34 5 L37 1 L41 9 L44 5 H90"
              stroke="#0D5C63"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 group-hover:stroke-pulse"
            />
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                className="font-body text-sm font-medium text-ink/80 transition-colors hover:text-pulse"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `font-body text-sm font-medium transition-colors hover:text-pulse ${
                    isActive ? "text-pulse" : "text-ink/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Auth actions */}
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <NavLink
                to={DASHBOARD_PATH[user.role] || "/"}
                className="font-body text-sm font-medium text-ink/80 hover:text-pulse"
              >
                {user.role === "admin"
                  ? "Admin panel"
                  : user.role === "doctor"
                  ? "Doctor console"
                  : "My dashboard"}
              </NavLink>
              <button
                onClick={handleLogout}
                className="rounded-full border border-teal px-4 py-2 font-body text-sm font-medium text-teal transition-colors hover:bg-teal hover:text-mint"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-body text-sm font-medium text-ink/80 hover:text-pulse"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-teal px-4 py-2 font-body text-sm font-medium text-mint transition-colors hover:bg-teal-dark"
              >
                Get started
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-teal/10 bg-mint px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) =>
              link.to.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="font-body text-sm font-medium text-ink/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-body text-sm font-medium text-ink/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <hr className="border-teal/10" />
            {user ? (
              <>
                <Link
                  to={DASHBOARD_PATH[user.role] || "/"}
                  className="font-body text-sm font-medium text-teal"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="text-left font-body text-sm font-medium text-ink/80"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-body text-sm font-medium text-ink/80"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="font-body text-sm font-medium text-teal"
                  onClick={() => setOpen(false)}
                >
                  Get started
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
