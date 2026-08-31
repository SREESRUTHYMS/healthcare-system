// Historical dengue & malaria snapshot by region.
//
// SOURCE NOTE: figures are an illustrative sample dataset for this demo —
// Delhi's dengue counts below follow the city's actual reported yearly
// totals (MCD data via Deccan Herald, 2022), and the regional hotspot
// pattern (dengue rising fastest in Punjab/West Bengal/central India;
// malaria concentrated in Odisha, Chhattisgarh, Jharkhand, and the
// north-east) reflects NVBDCP/NCVBDC trend reporting. Everything else is
// a representative placeholder. Swap this file for a live feed (NVBDCP,
// WHO, or your own case-reporting API) in production.

export const YEARS = [2018, 2019, 2020, 2021, 2022];

export const REGIONS = [
  {
    id: "delhi",
    name: "Delhi",
    lat: 28.6139,
    lng: 77.209,
    dengue: { 2018: 2798, 2019: 2036, 2020: 1072, 2021: 9613, 2022: 4469 },
    malaria: { 2018: 189, 2019: 164, 2020: 122, 2021: 140, 2022: 263 },
    note: "Cases spike sharply after the monsoon (Aug–Nov) each year.",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    lat: 22.9868,
    lng: 87.855,
    dengue: { 2018: 3120, 2019: 4890, 2020: 2210, 2021: 6540, 2022: 8760 },
    malaria: { 2018: 5100, 2019: 4700, 2020: 3900, 2021: 3600, 2022: 3300 },
    note: "One of the fastest-growing dengue trends nationally over the past decade.",
  },
  {
    id: "punjab",
    name: "Punjab",
    lat: 31.1471,
    lng: 75.3412,
    dengue: { 2018: 640, 2019: 1120, 2020: 480, 2021: 1980, 2022: 3410 },
    malaria: { 2018: 90, 2019: 75, 2020: 60, 2021: 55, 2022: 48 },
    note: "Sharpest year-on-year dengue growth rate of any state.",
  },
  {
    id: "odisha",
    name: "Odisha",
    lat: 20.9517,
    lng: 85.0985,
    dengue: { 2018: 1450, 2019: 1780, 2020: 990, 2021: 2100, 2022: 2560 },
    malaria: { 2018: 41200, 2019: 36800, 2020: 29500, 2021: 24100, 2022: 19800 },
    note: "Historically India's largest malaria burden, now on a sustained decline.",
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    lat: 21.2787,
    lng: 81.8661,
    dengue: { 2018: 980, 2019: 1240, 2020: 710, 2021: 1560, 2022: 1890 },
    malaria: { 2018: 33400, 2019: 28900, 2020: 22100, 2021: 18700, 2022: 15200 },
    note: "Forest and tribal belts remain malaria hotspots despite the downward trend.",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    lat: 19.7515,
    lng: 75.7139,
    dengue: { 2018: 3980, 2019: 4560, 2020: 2340, 2021: 5670, 2022: 7120 },
    malaria: { 2018: 2100, 2019: 1890, 2020: 1420, 2021: 1310, 2022: 1180 },
    note: "Urban clusters (Pune, Mumbai) drive most reported dengue cases.",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    lat: 11.1271,
    lng: 78.6569,
    dengue: { 2018: 2140, 2019: 2680, 2020: 1560, 2021: 3210, 2022: 4050 },
    malaria: { 2018: 320, 2019: 280, 2020: 210, 2021: 190, 2022: 160 },
    note: "Malaria near-eliminated; dengue remains the primary vector-borne concern.",
  },
  {
    id: "assam",
    name: "Assam",
    lat: 26.2006,
    lng: 92.9376,
    dengue: { 2018: 890, 2019: 1120, 2020: 640, 2021: 1340, 2022: 1670 },
    malaria: { 2018: 6800, 2019: 5900, 2020: 4700, 2021: 4100, 2022: 3600 },
    note: "North-eastern states remain a persistent malaria hotspot region.",
  },
];

export function totalsForYear(year) {
  return REGIONS.reduce(
    (acc, r) => {
      acc.dengue += r.dengue[year] || 0;
      acc.malaria += r.malaria[year] || 0;
      return acc;
    },
    { dengue: 0, malaria: 0 }
  );
}
