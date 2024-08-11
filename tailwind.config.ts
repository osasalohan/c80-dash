import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coal: "#21222D",
        black: "#171821",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        small: ["10px", "12.1px"],
        medium: ["11px", "13.31px"],
        input: ["12px", "14.52px"],
        table: ["13px", "15.73px"],
        header: [
          "15px",
          {
            lineHeight: "18.15px",
            fontWeight: "600",
          },
        ],
        large: [
          "20px",
          {
            lineHeight: "24.2px",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
