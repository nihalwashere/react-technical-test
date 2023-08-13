/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        "black-80": "#111111CC",
      },
      fontFamily: {
        space: ["var(--font-space-grotesk)"],
        "dm-sans": ["var(--font-dm-sans)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
