const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        "screen-minus-navbar": "calc(100vh - 120px)",
      },
      colors: {
        "custom-dark": "#1a202c;",
      },
      backgroundImage: {
        "custom-bg": "url('/bg.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
