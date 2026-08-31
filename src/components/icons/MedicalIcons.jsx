import React from "react";

// A small set of original, hand-built SVG icons animated with CSS — used as
// the "life-saving imagery" motif across the Tracking Overview page. No
// stock photography or third-party artwork, so it's safe to ship as-is.

export function HeartbeatMonitor({ className = "" }) {
  return (
    <div className={`flex items-center justify-center rounded-2xl bg-white p-6 ${className}`}>
      <svg viewBox="0 0 220 90" className="h-20 w-full" fill="none">
        <path
          d="M0 45 H60 L75 45 L88 15 L104 75 L118 45 L134 45 L146 25 L160 65 L174 45 H220"
          stroke="#E8604C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            animation: "ekg-draw 2.4s ease-in-out infinite alternate",
          }}
        />
      </svg>
    </div>
  );
}

export function HeartIcon({ className = "" }) {
  return (
    <div className={`animate-heartbeat ${className}`}>
      <svg viewBox="0 0 48 44" className="h-12 w-12" fill="none">
        <path
          d="M24 40 C10 30 2 21 2 12.5 C2 5.5 7.5 0 14.5 0 C19 0 22.5 2.3 24 5.6 C25.5 2.3 29 0 33.5 0 C40.5 0 46 5.5 46 12.5 C46 21 38 30 24 40 Z"
          fill="#E8604C"
        />
      </svg>
    </div>
  );
}

export function AmbulanceIcon({ className = "" }) {
  return (
    <div className={`animate-ambulance ${className}`}>
      <svg viewBox="0 0 64 40" className="h-12 w-16" fill="none">
        <rect x="2" y="10" width="34" height="18" rx="2" fill="#F5F8F6" stroke="#0D5C63" strokeWidth="2" />
        <path d="M36 16 H50 L58 24 V28 H36 Z" fill="#F5F8F6" stroke="#0D5C63" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="14" cy="30" r="4.5" fill="#12262A" />
        <circle cx="46" cy="30" r="4.5" fill="#12262A" />
        <path d="M14 15 V23 M10 19 H18" stroke="#E8604C" strokeWidth="2" strokeLinecap="round" />
        <rect x="40" y="9" width="6" height="4" rx="1" fill="#E8604C" className="animate-beacon" />
      </svg>
    </div>
  );
}

export function IVDripIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 40 70" className="h-16 w-10" fill="none">
        <path d="M4 4 H36" stroke="#0D5C63" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 4 V14" stroke="#0D5C63" strokeWidth="2" />
        <path
          d="M12 14 H28 L26 34 C26 40 14 40 14 34 Z"
          fill="#F5F8F6"
          stroke="#0D5C63"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line x1="20" y1="40" x2="20" y2="62" stroke="#0D5C63" strokeWidth="1.5" />
      </svg>
      <div className="animate-drip absolute left-1/2 top-[40px] -translate-x-1/2">
        <span className="block h-2 w-1.5 rounded-full bg-pulse" />
      </div>
    </div>
  );
}

export function StethoscopeIcon({ className = "" }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 60 60" className="h-14 w-14" fill="none">
        <path
          d="M14 4 V22 C14 30 20 35 28 35 C36 35 42 30 42 22 V4"
          stroke="#0D5C63"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="14" cy="4" r="3" fill="#0D5C63" />
        <circle cx="42" cy="4" r="3" fill="#0D5C63" />
        <path d="M28 35 V44" stroke="#0D5C63" strokeWidth="3" strokeLinecap="round" />
        <circle cx="28" cy="52" r="7" fill="#F5F8F6" stroke="#E8604C" strokeWidth="2.5" className="animate-heartbeat" style={{ transformOrigin: "28px 52px" }} />
      </svg>
    </div>
  );
}

export function FirstAidCrossIcon({ className = "" }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect x="1" y="1" width="46" height="46" rx="10" fill="#0D5C63" />
        <path d="M20 10 H28 V20 H38 V28 H28 V38 H20 V28 H10 V20 H20 Z" fill="#F5F8F6" />
      </svg>
    </div>
  );
}
