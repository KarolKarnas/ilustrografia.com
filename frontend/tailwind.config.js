/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  fontFamily: {
    "cormorant-infant": ['"Cormorant Infant"', "serif"],
    lato: ["Lato", "sans-serif"],
    fondamento: ["Fondamento", "cursive"],
    montserrat: ["Montserrat", "sans-serif"],
    sans: ["lato", ..._fontFamily.serif],
  },

  extend: {
    backgroundImage: {
      hero: "url('../public/images/neo-slavic-creatures.jpg')",
      'neo-slavic': "url('../public/images/neo-slavic-creatures.jpg')",
    },

    colors: {
      jet: "#343232",
      "black-magic": "#020101",
      "eerie-black": "#1D1C1C",
      "outer-space": "#46494C",
      "angel-space": "#343638",
      "angel-dark": "#424547",
      "moon-dust": "#F0F0F0",
      "fair-space": "#E4E4E4",
      ivory: "#fbfbfb",
      "red-magic": "#EA6052",
      "dark-red": "#714042",
      "cool-red": "#B26E63",
      "cool-pink": "#C29892",
    },
    animation: {
      "spin-slow": "spin 3s linear infinite",
    },
    spacing: {
      128: "32rem",
      192: "48rem",
      256: "64rem",
    },
    boxShadow: {
      hero: ["2px 80px 28px -44px rgba(0,0,0,0.3)"],
      "small-hero": ["2px 60px 60px -44px rgba(0,0,0,0.3)"],
      "small-hero-reverse": ["2px -60px 60px -44px rgba(0,0,0,0.3)"],
    },
    dropShadow: {
      hero: [
        "4px 4px 10px rgba(0, 0, 0, 0.95)",
        "2px 1px 0px rgba(0, 0, 0, 0.55)",
      ],
      product: ["3px 3px 2px rgba(0, 0, 0, 0.65)"],
      aberration: [
        "5px 5px 7px rgba(252, 115, 121, 0.95)",
        "-5px -5px 7px rgba(92, 255, 246, 0.95)",
      ],
      "red-heading": ["1px 1px 0px rgba(204, 178, 175, 0.95)"],
      moon: ["2px 2px 10px rgba(255, 255, 255, 0.95)"],
      sun: ["4px 4px 10px rgba(252, 115, 121, 0.95)"],
    },
    letterSpacing: {
      hero: "0.8em",
    },
    fontSize: {
      "2xs": "0.6rem",
    },
    invert: {
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".90",
    },
  },
};
export const plugins = [];
