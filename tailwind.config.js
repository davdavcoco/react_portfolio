/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#FBF9F5",
          surface: "#F3EFEA",
          border: "#E7E2D8",
          dark: "#0F1113",
          darkSurface: "#16191D",
          darkBorder: "#242930",
          text: "#151719",
          textMuted: "#6B7280",
          forest: "#1B251A",
          moss: "#3F5635",
          sage: "#8A9F82",
          timber: "#9E7854",
          amber: "#D97706",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        serif: ["'Newsreader'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        burtons: ["burtons", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
    },
  },
  plugins: [],
};