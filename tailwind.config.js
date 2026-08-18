/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, natural palette inspired by Sapa rice fields and Hmong textiles
        cream: "#FFF8F0", // page background
        ink: "#2D2D2D", // primary text
        rice: "#6B8E4E", // rice field green (primary brand)
        gold: "#C9A227", // warm golden accent
        whatsapp: "#25D366", // WhatsApp brand green
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(45, 45, 45, 0.15)",
        card: "0 8px 24px -10px rgba(45, 45, 45, 0.12)",
        lift: "0 20px 40px -16px rgba(45, 45, 45, 0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
