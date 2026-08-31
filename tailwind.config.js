/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12262A",
        teal: {
          DEFAULT: "#0D5C63",
          dark: "#0A4A50",
          light: "#3D8A8F",
        },
        pulse: {
          DEFAULT: "#E8604C",
          dark: "#C94B39",
        },
        mint: {
          DEFAULT: "#F5F8F6",
          soft: "#E7EFEC",
        },
        sage: "#5B7470",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        "pulse-line":
          "linear-gradient(90deg, transparent 0%, #E8604C 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
