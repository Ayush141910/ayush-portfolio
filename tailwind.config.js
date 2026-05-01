/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        "ink-soft": "#0b1020",
        cyanline: "#6ee7f9",
        plasma: "#a78bfa",
        signal: "#34d399",
      },
      boxShadow: {
        glow: "0 0 45px rgba(103, 232, 249, 0.18)",
        "card-glow": "0 24px 70px rgba(15, 23, 42, 0.38)",
      },
      backgroundImage: {
        "radial-signal":
          "radial-gradient(circle at top left, rgba(103, 232, 249, 0.22), transparent 32%), radial-gradient(circle at bottom right, rgba(167, 139, 250, 0.20), transparent 30%)",
      },
    },
  },
  plugins: [],
};
