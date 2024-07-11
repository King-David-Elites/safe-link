import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
      
        primary: "#f2be5c",
      },
    },
    screens: {
      lt: { max: "500px" },
      sm: { max: "600px" },
      sm1: { max: "840px" },
      md: { max: "1100px" },
      md1: { max: "850px" },
      lg: { min: "2300px" },
      xl: { max: "1280px" },
      "2xl": { max: "1536px" },
    },
  },
  plugins: [],
};
export default config;


