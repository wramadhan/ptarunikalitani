/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0C5A98",
      secondary: "#27AE60",
      bglogo: "#00C974",
      bglogo2: "#6DFFA8",
      white: "#FFFFFF",
      black: "#000000",
    },
    screens: {
      xhp: "320px",
      xhpmax: { max: "320px" },
      hpmax: "500px",
      hpmax: { max: "500px" },
      xs: "640px",
      xsmax: { max: "640px" },
      md: "768px",
      mdmax: { max: "768px" },
      lg: "1204px",
      lgmax: { max: "1204px" },
      xl: "1280px",
      xlmax: { max: "1280px" },
      dxl: "1536px",
      dxlmax: { max: "1536px" },
    },
    extend: {},
  },
  plugins: [],
};
