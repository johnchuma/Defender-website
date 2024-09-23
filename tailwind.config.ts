import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#F50000",
        secondaryColor: "#292929",
        backgroundColor: "#F2F2F2",
        textColor: "#000000",
        mutedText: "#7A7A7A",
      },
    },
  },
  plugins: [],
};
export default config;
