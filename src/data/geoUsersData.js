// Mock patient / doctor / user locations for the geospatial tracking map.
// In production, swap `INITIAL_USERS` for a call to your API — every
// registration (patient, doctor, staff) would carry a city/lat/lng and
// land on this same map automatically.

export const CITY_COORDS = {
  Chennai: { lat: 13.0827, lng: 80.2707 },
  Mumbai: { lat: 19.076, lng: 72.8777 },
  Delhi: { lat: 28.6139, lng: 77.209 },
  Bengaluru: { lat: 12.9716, lng: 77.5946 },
  Kolkata: { lat: 22.5726, lng: 88.3639 },
  Hyderabad: { lat: 17.385, lng: 78.4867 },
  Pune: { lat: 18.5204, lng: 73.8567 },
  Ahmedabad: { lat: 23.0225, lng: 72.5714 },
};

export const ROLE_COLORS = {
  patient: "#0D5C63",
  doctor: "#E8604C",
  user: "#5B7470",
};

export const INITIAL_USERS = [
  { id: "u1", name: "Ananya Sharma", role: "patient", city: "Chennai" },
  { id: "u2", name: "Vikram Rao", role: "patient", city: "Mumbai" },
  { id: "u3", name: "Priya Nair", role: "patient", city: "Bengaluru" },
  { id: "u4", name: "Karthik Iyer", role: "patient", city: "Chennai" },
  { id: "u5", name: "Sana Fatima", role: "patient", city: "Hyderabad" },
  { id: "u6", name: "Dr. Rahul Verma", role: "doctor", city: "Delhi" },
  { id: "u7", name: "Dr. Aisha Khan", role: "doctor", city: "Mumbai" },
  { id: "u8", name: "Dr. Meera Iyer", role: "doctor", city: "Chennai" },
  { id: "u9", name: "Dr. Arjun Nair", role: "doctor", city: "Kolkata" },
  { id: "u10", name: "Front-desk Staff", role: "user", city: "Pune" },
  { id: "u11", name: "Billing Admin", role: "user", city: "Ahmedabad" },
];
