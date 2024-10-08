/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1360A9",
        secondary: "#91CAFF",
        skeleton: "#F8FAFC",
        bodyColor: "#F1F2F6",
        textPrimary: "#222222",
        yellow: "#DCB529",
        darkBg: "#3A3A3A",
        darKText: "#F2EFEF",
        darkTextSecondary: "#B3B2B2",
      },
      animation: {
        imgFloat: "imgFloat 7s ease-in-out infinite",
      },
      keyframes: {
        imgFloat: {
          "50%": {
            transform: "translateY(10px)",
            borderRadius: "45% 55% 45% 55%",
          },
        },
      },
    },
  },
  plugins: [],
};
