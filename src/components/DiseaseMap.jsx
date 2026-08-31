import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import { REGIONS, YEARS, totalsForYear } from "../data/diseaseData.js";

const DISEASE_COLOR = { dengue: "#E8604C", malaria: "#0D5C63" };

function radiusFor(value, max) {
  // sqrt scale so area (not radius) is proportional to case count
  const min = 8;
  const scale = 26;
  return min + Math.sqrt(value / max) * scale;
}

export default function DiseaseMap() {
  const [disease, setDisease] = useState("dengue");
  const [year, setYear] = useState(YEARS[YEARS.length - 1]);

  const max = useMemo(
    () => Math.max(...REGIONS.map((r) => r[disease][year] || 1)),
    [disease, year]
  );
  const totals = useMemo(() => totalsForYear(year), [year]);

  return (
    <div className="rounded-2xl border border-teal/10 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {["dengue", "malaria"].map((d) => (
            <button
              key={d}
              onClick={() => setDisease(d)}
              className={`rounded-full px-4 py-1.5 font-body text-sm font-medium capitalize transition-colors ${
                disease === d ? "text-mint" : "border border-teal/15 text-ink/70 hover:text-teal"
              }`}
              style={disease === d ? { backgroundColor: DISEASE_COLOR[d] } : undefined}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-sage">Year</span>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="rounded-lg border border-teal/20 bg-white px-3 py-1.5 font-body text-sm text-ink outline-none focus:border-teal"
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-3 font-body text-sm text-sage">
        {year} total ({disease}):{" "}
        <span className="font-semibold text-ink">
          {totals[disease].toLocaleString("en-IN")} reported cases
        </span>{" "}
        across {REGIONS.length} tracked regions.
      </p>

      <div className="mt-4 overflow-hidden rounded-xl">
        <MapContainer
          center={[22.5, 80]}
          zoom={4.4}
          scrollWheelZoom={false}
          style={{ height: "420px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {REGIONS.map((r) => {
            const value = r[disease][year] || 0;
            return (
              <CircleMarker
                key={r.id}
                center={[r.lat, r.lng]}
                radius={radiusFor(value, max)}
                pathOptions={{
                  color: DISEASE_COLOR[disease],
                  fillColor: DISEASE_COLOR[disease],
                  fillOpacity: 0.45,
                  weight: 1.5,
                }}
              >
                <Tooltip direction="top" offset={[0, -4]}>
                  <div className="font-body text-xs">
                    <strong>{r.name}</strong>
                    <br />
                    {value.toLocaleString("en-IN")} {disease} cases ({year})
                    <br />
                    <span className="text-sage">{r.note}</span>
                  </div>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>

      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-sage">
        Sample dataset for demo purposes — connect to a live NVBDCP/WHO feed for production
      </p>
    </div>
  );
}
