import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import { CITY_COORDS, ROLE_COLORS, INITIAL_USERS } from "../data/geoUsersData.js";

const ROLES = ["patient", "doctor", "user"];

export default function UserGeoMap() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [activeRoles, setActiveRoles] = useState(new Set(ROLES));
  const [form, setForm] = useState({ name: "", role: "patient", city: "Chennai" });

  const toggleRole = (role) => {
    setActiveRoles((prev) => {
      const next = new Set(prev);
      next.has(role) ? next.delete(role) : next.add(role);
      return next;
    });
  };

  const visibleUsers = useMemo(
    () => users.filter((u) => activeRoles.has(u.role)),
    [users, activeRoles]
  );

  const counts = useMemo(() => {
    const c = { patient: 0, doctor: 0, user: 0 };
    users.forEach((u) => (c[u.role] += 1));
    return c;
  }, [users]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setUsers((prev) => [
      ...prev,
      { id: `u${prev.length + 1}-${Date.now()}`, name: form.name.trim(), role: form.role, city: form.city },
    ]);
    setForm({ ...form, name: "" });
  };

  return (
    <div className="rounded-2xl border border-teal/10 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {ROLES.map((role) => (
            <button
              key={role}
              onClick={() => toggleRole(role)}
              className={`rounded-full border px-4 py-1.5 font-body text-sm font-medium capitalize transition-colors ${
                activeRoles.has(role) ? "text-mint" : "border-teal/15 text-ink/50"
              }`}
              style={activeRoles.has(role) ? { backgroundColor: ROLE_COLORS[role], borderColor: ROLE_COLORS[role] } : undefined}
            >
              {role === "user" ? "Other users" : `${role}s`} · {counts[role]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl">
        <MapContainer
          center={[21, 79]}
          zoom={4.4}
          scrollWheelZoom={false}
          style={{ height: "380px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {visibleUsers.map((u) => {
            const coord = CITY_COORDS[u.city];
            if (!coord) return null;
            return (
              <CircleMarker
                key={u.id}
                center={[coord.lat, coord.lng]}
                radius={9}
                pathOptions={{
                  color: ROLE_COLORS[u.role],
                  fillColor: ROLE_COLORS[u.role],
                  fillOpacity: 0.6,
                  weight: 1.5,
                }}
              >
                <Tooltip direction="top" offset={[0, -4]}>
                  <div className="font-body text-xs">
                    <strong>{u.name}</strong>
                    <br />
                    <span className="capitalize">{u.role}</span> · {u.city}
                  </div>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>

      {/* Demo: adding a new patient/doctor/user drops a pin immediately */}
      <form onSubmit={handleAdd} className="mt-5 flex flex-wrap items-end gap-3 border-t border-teal/10 pt-5">
        <div className="flex-1 min-w-[160px]">
          <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-sage">Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Dr. Neha Kapoor"
            className="mt-1 w-full rounded-lg border border-teal/20 bg-white px-3 py-2 font-body text-sm text-ink outline-none focus:border-teal"
          />
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-sage">Role</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="mt-1 rounded-lg border border-teal/20 bg-white px-3 py-2 font-body text-sm text-ink outline-none focus:border-teal"
          >
            {ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-sage">City</label>
          <select
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="mt-1 rounded-lg border border-teal/20 bg-white px-3 py-2 font-body text-sm text-ink outline-none focus:border-teal"
          >
            {Object.keys(CITY_COORDS).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded-full bg-teal px-5 py-2 font-body text-sm font-medium text-mint transition-colors hover:bg-teal-dark"
        >
          Add to map
        </button>
      </form>
      <p className="mt-3 font-body text-xs text-sage">
        This demonstrates the pattern: every new registration record carries
        a city/lat-lng and appears on this map immediately — swap{" "}
        <code className="rounded bg-mint-soft px-1.5 py-0.5">INITIAL_USERS</code> for a live{" "}
        <code className="rounded bg-mint-soft px-1.5 py-0.5">GET /api/users</code> call in production.
      </p>
    </div>
  );
}
