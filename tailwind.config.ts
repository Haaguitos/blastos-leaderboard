import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ff01",
        secondary: "#FF0080",
        tertiary: "#2E64FF",
      },
      boxShadow: {
        neon: "0px 0px 25px 5px #00ff01",
      },
      fontFamily: {
        heading: "var(--font-symtext)",
      },
    },
  },
  plugins: [],
};
export default config;
