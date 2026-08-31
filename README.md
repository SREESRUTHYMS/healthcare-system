# Vitals — Health Care System (Frontend)

A React frontend for the Health Care System described in your SRS: patient
management, appointments, medical records, and billing, with separate
workspaces for **Admin**, **Doctor**, and **Patient** roles.

Stack: **React 18 + Vite + React Router + Tailwind CSS** (frontend only —
wire it up to your MERN backend as described below).

---

## 1. Project structure

```
healthcare-system/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx                 # app entry, wraps App in Router + AuthProvider
    ├── App.jsx                  # route table
    ├── index.css                # Tailwind + global styles
    ├── context/
    │   └── AuthContext.jsx      # mock auth (swap for real API calls)
    ├── routes/
    │   └── ProtectedRoute.jsx   # role-based route guard
    ├── components/
    │   ├── Navbar.jsx           # role-aware navbar
    │   ├── Footer.jsx
    │   ├── Section.jsx          # landing-page section wrapper
    │   ├── PulseDivider.jsx     # animated EKG-line section divider
    │   └── DashboardShell.jsx   # shared header + tabs for dashboards
    ├── data/
    │   ├── dashboardData.js     # categories + indicator cards shown on /dashboard
    │   ├── diseaseData.js       # historical dengue/malaria dataset by region
    │   └── geoUsersData.js      # mock patient/doctor/user locations
    └── pages/
        ├── Home.jsx             # landing page: Hero, Overview, Modules, Timeline, CTA
        ├── TrackingOverview.jsx # animated icons + disease map + geospatial user map
        ├── Dashboard.jsx        # indicator-style hub (see "Dashboard UI/UX" below)
        ├── IndicatorDetail.jsx  # detail page each dashboard card routes to
        ├── Login.jsx
        ├── Register.jsx
        └── dashboards/
            ├── AdminDashboard.jsx
            ├── DoctorDashboard.jsx
            └── PatientDashboard.jsx
```

Also new: `components/icons/MedicalIcons.jsx` (animated heartbeat monitor,
heart, ambulance, IV drip, stethoscope, first-aid cross — all original SVG,
no stock imagery) and `components/DiseaseMap.jsx` / `UserGeoMap.jsx`
(Leaflet-based maps).

## Tracking Overview (`/tracking`)

The four top-level sections you asked for — **Tracking Overview, Modules,
Dashboard, Timeline** — are now all reachable from the navbar. Tracking
Overview is the newest:

- **Animated icons** — a heartbeat monitor line that draws itself, a
  pulsing heart, a bobbing ambulance with a flashing beacon, a dripping IV
  line, and a "listening" stethoscope. All hand-built SVG + CSS, so there's
  no licensing concern and no image files to manage. Respects
  `prefers-reduced-motion`.
- **Historical dengue/malaria map** (`DiseaseMap.jsx`) — an interactive
  Leaflet map of India with a dengue/malaria toggle and a year selector
  (2018–2022). Regional patterns (dengue rising fastest in Punjab/West
  Bengal, malaria concentrated in Odisha/Chhattisgarh/the north-east) are
  grounded in real NVBDCP/NCVBDC trend reporting; exact per-year numbers are
  an **illustrative sample dataset** — see the source note at the top of
  `src/data/diseaseData.js` for what's real vs. representative, and swap it
  for a live feed in production.
- **Geospatial user map** (`UserGeoMap.jsx`) — plots patients, doctors, and
  other users by city, with role filters and a small form that adds a new
  pin live, demonstrating how real registrations would appear the moment
  they're created. Swap `INITIAL_USERS` in `geoUsersData.js` for a
  `GET /api/users` call.

Both maps use `react-leaflet` with free OpenStreetMap tiles (no API key
needed) — already added to `package.json`, so `npm install` picks it up.

## Dashboard UI/UX (`/dashboard`)

This page's information architecture is modeled on the
[Peterson-KFF Health System Tracker dashboard](https://www.healthsystemtracker.org/dashboard/):

- A **sticky pill nav** under the header jumps to each category section.
- Each category (**Patient Care, Doctor & Staff, Medical Records, Billing &
  Admin** — standing in for their Spending/Access/Quality/Wellbeing) renders
  as its own section with a short blurb and a **grid of indicator cards**,
  each showing a headline stat and a label.
- Every card is a router link to `/dashboard/:category/:indicator`, a detail
  page (`IndicatorDetail.jsx`) with a full description, a "How it works"
  list, and links to sibling indicators in the same category — mirroring
  how their individual indicator pages work.
- A **"View/Hide all indicators"** toggle at the bottom expands into
  icon-tab category switcher + flat link list, matching the source site's
  expandable full index.

All card content lives in `src/data/dashboardData.js` — edit that file to
change stats, descriptions, or add new indicators without touching any
component code.

## 2. Run it

```bash
cd healthcare-system
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`). The whole
frontend is clickable with no backend: register with any email/role and
you'll land on the matching dashboard.

## 3. How routing & roles work

- `AuthContext.jsx` stores a mock user in `localStorage` (`vitals_user`) and
  exposes `login`, `register`, `logout`, and `user`.
- `ProtectedRoute` redirects to `/login` if there's no user, or to `/` if the
  user's role doesn't match the route's required `role`.
- Routes: `/` (public), `/login`, `/register`, `/admin`, `/doctor`, `/patient`.

## 4. Connecting to your MERN backend

Replace the mock functions in `src/context/AuthContext.jsx`:

```js
const login = async ({ email, password }) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json(); // { user, token }
  localStorage.setItem("vitals_token", data.token);
  setUser(data.user);
  return data.user;
};
```

Suggested Express routes to build next, matching each SRS module:

| Module | Example endpoints |
|---|---|
| Auth | `POST /api/auth/register`, `POST /api/auth/login` |
| Admin | `GET /api/admin/pending-approvals`, `PATCH /api/admin/users/:id` |
| Appointments | `GET /api/appointments`, `POST /api/appointments`, `PATCH /api/appointments/:id` |
| Medical records | `GET /api/patients/:id/records`, `POST /api/records` |
| Billing | `GET /api/patients/:id/bills`, `POST /api/bills/:id/pay` |

Each dashboard tab (e.g. `AdminDashboard.jsx` → "Schedules" tab) has a
`TODO` comment marking exactly where to swap mock arrays for a `fetch`/
`useEffect` call.

## 5. Design system (already wired into `tailwind.config.js`)

| Token | Value | Use |
|---|---|---|
| `teal` | `#0D5C63` | Primary brand color, buttons, links |
| `pulse` | `#E8604C` | Accent — the "vitals" motif (EKG lines, status dots) |
| `mint` | `#F5F8F6` | Page background |
| `ink` | `#12262A` | Primary text |
| `sage` | `#5B7470` | Secondary text |
| `font-display` | Fraunces | Headings |
| `font-body` | IBM Plex Sans | Body copy |
| `font-mono` | IBM Plex Mono | Labels, stats, data |

The signature visual motif is the animated EKG "pulse line" (see
`PulseDivider.jsx`) used between landing-page sections and in the hero card
— it ties the UI back to the product's subject (patient vitals monitoring).

## 6. Next steps to match the full SRS

- **Appointment booking flow**: build a multi-step form (specialization →
  doctor → timeslot) and a calendar view.
- **Messaging/video**: integrate a service like Twilio/Agora for
  doctor–patient video consultations.
- **File uploads**: for medical reports/lab results (e.g. via `multer` +
  S3-compatible storage on the backend).
- **Payments**: integrate Stripe/Razorpay for the billing tab's "Pay now"
  action.
- **Notifications**: add a toast/notification center wired to appointment
  and billing events.
- **Backend**: Node.js + Express + MongoDB (Mongoose), matching the tech
  stack in your SRS.
