import React from "react";
import Section from "../components/Section.jsx";
import PulseDivider from "../components/PulseDivider.jsx";
import DiseaseMap from "../components/DiseaseMap.jsx";
import UserGeoMap from "../components/UserGeoMap.jsx";
import {
  HeartbeatMonitor,
  HeartIcon,
  AmbulanceIcon,
  IVDripIcon,
  StethoscopeIcon,
  FirstAidCrossIcon,
} from "../components/icons/MedicalIcons.jsx";

export default function TrackingOverview() {
  return (
    <div className="bg-mint">
      {/* Hero with the animated icon set */}
      <div className="border-b border-teal/10 px-6 pb-12 pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pulse">Tracking overview</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
            Every vital sign, outbreak, and care team — on one live map
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-sage">
            A real-time view of the system: where outbreaks are trending,
            and where your patients, doctors, and staff actually are.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
            <HeartbeatMonitor className="col-span-3 sm:col-span-2" />
            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4">
              <HeartIcon />
              <span className="font-mono text-[10px] uppercase tracking-wide text-sage">Vitals</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4">
              <AmbulanceIcon />
              <span className="font-mono text-[10px] uppercase tracking-wide text-sage">Response</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4">
              <IVDripIcon />
              <span className="font-mono text-[10px] uppercase tracking-wide text-sage">Treatment</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4">
              <StethoscopeIcon />
              <span className="font-mono text-[10px] uppercase tracking-wide text-sage">Diagnosis</span>
            </div>
          </div>
        </div>
      </div>

      <PulseDivider label="Outbreak history" />

      <Section
        id="disease-history"
        eyebrow="Historical data"
        title="Dengue & malaria, by region"
        subtitle="Track reported cases across states over time. Circle size reflects case volume for the selected year."
      >
        <DiseaseMap />
      </Section>

      <PulseDivider label="Geospatial view" />

      <Section
        id="geo-users"
        eyebrow="Population mapping"
        title="Patients, doctors & users on the map"
        subtitle="As new patients register, doctors are verified, or staff are added, they appear here immediately — filter by role to see coverage gaps."
        className="pb-20"
      >
        <UserGeoMap />
      </Section>

      <div className="border-t border-teal/10 bg-white px-6 py-10 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-3">
          <FirstAidCrossIcon />
          <p className="font-body text-sm text-sage">
            This tracking layer is built to sit on top of your real
            appointment, records, and registration data — every map here
            reads from the same models your Admin, Doctor, and Patient
            dashboards already use.
          </p>
        </div>
      </div>
    </div>
  );
}
