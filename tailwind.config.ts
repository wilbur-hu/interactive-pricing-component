import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-cyan": "#a5f3eb",
        "strong-cyan": "#10d5c2",
        "light-grayish-red": "#feece7",
        "light-red": "#ff8c66",
        "pale-blue": "#bdccff",

        "very-pale-blue": "#fafbff",
        "light-grayish-blue-empty-slider-bg": "#eaeefb",
        "light-gray-sh-blue-toggle-bg": "#cdd7ee",
        "grayish-blue": "#858fad",
        "dark-desaturated-blue": "#293356",
      },

      fontFamily: {
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
} satisfies Config;
