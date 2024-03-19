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
        home_banner: "url('/banner.svg')",
      },
      colors: {
        bikeBlack: "var(--bike-black)",
        bikeRed: "var(--bike-red)",
        bikeRedText: "var(--bike-red-text)",
      },
    },
  },
  plugins: [],
};
export default config;
