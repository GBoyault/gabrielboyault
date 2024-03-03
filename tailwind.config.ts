import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic":
          "radial-gradient(#C77FEA, transparent)",
      },
      colors: {
        purple: {
          light: "#C77FEA",
          DEFAULT: "#662A83",
          transparent: "#662A8366",
        },
        white: {
          light: "#EEEEEE",
          DEFAULT: "#FFF",
        },
        background: "#242327",
      },
    },
  },
  plugins: [],
};
export default config;
