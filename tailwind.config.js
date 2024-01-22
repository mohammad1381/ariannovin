/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    screens: {
      sm: "360px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Peyda: ["Peyda"],
      },
      backgroundColor: {
        white: "#ffffff",
        dark: "#141E2E",
        secondary: "#37404D",
        red: "#E50045",
        darkLight: "#1B273A",
        darkLighter: "#243042",
        green: "#70A75C",
        blue: "#1171FF",
        primary: "#1171FF",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#B8BBC0",
        dark: "#141E2E",
        red: "#E50045",
        green: "#70A75C",
        blue: "#1171FF",
        primary: "#1171FF",
      },
      backgroundImage: {
        "body-bg": "url('/files/default/bg-pattern.png')",
        "price-box-bg": "url('/files/default/price_box_bg.png')",
        "wave-bg": "url('/files/default/wave.png')",
      },
    },
  },

  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            primary: "#ffffff",
            secondary: "#B8BBC0",
            dark: "#141E2E",
            red: "#E50045",
            green: "#70A75C",
            primary: "#1171FF",
          },
          backgroundColor: {
            white: "#ffffff",
            dark: "#141E2E",
            secondary: "#37404D",
            red: "#E50045",
            darkLight: "#1B273A",
            darkLighter: "#243042",
            green: "#70A75C",
            primary: "#1171FF",
          },
        },
        dark: {
          layout: {},
          colors: {
            primary: "#ffffff",
            secondary: "#B8BBC0",
            dark: "#141E2E",
            red: "#E50045",
            green: "#70A75C",
            primary: "#1171FF",
          },
          backgroundColor: {
            white: "#ffffff",
            dark: "#141E2E",
            secondary: "#37404D",
            red: "#E50045",
            darkLight: "#1B273A",
            darkLighter: "#243042",
            green: "#70A75C",
            primary: "#1171FF",
          },
        },
      },
    }),
  ],
  plugins: [nextui()],
  darkMode: "class",
};
