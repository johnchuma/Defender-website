import type { Config } from "tailwindcss";
import TailwindHighlights from "tailwindcss";

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
        primaryCrimsonColor: "#CC0000",
        primaryScarletColor: "#BA110B",
        blushPinkColor: "#FFF0F0",
        secondaryColor: "#292929",
        backgroundColor: "#F2F2F2",
        textColor: "#000000",
        mutedText: "#7A7A7A",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/forms"),
    TailwindHighlights,
    ],
};
export default config;
