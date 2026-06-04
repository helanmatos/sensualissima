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
        borgonha: {
          50:  "#FAF2F8",
          100: "#F0D9EC",
          200: "#D9A8C9",
          300: "#B86FA0",
          400: "#8E3C71",
          500: "#6B1D50",
          600: "#3D0A30",
          700: "#2E0724",
          800: "#1F0518",
          900: "#10030C",
        },
        ouro: {
          50:  "#FDF9F2",
          100: "#F8EDDA",
          200: "#EDD7AE",
          300: "#DEBB82",
          400: "#C9A96E",
          500: "#B08B4A",
          600: "#8A6D38",
          700: "#664F28",
        },
        rosa: {
          50:  "#FAF5F0",
          100: "#F5EDE6",
          200: "#F0D9D0",
          300: "#E4C0B2",
          400: "#D09A87",
          500: "#B87462",
          600: "#8B5E6D",
          700: "#6B4555",
        },
        carvao: "#1A1A1A",
        grafite: "#4A4A4A",
        prata: "#9E9E9E",
        nevoa: "#E8E0DC",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Times New Roman", "serif"],
        body: ["var(--font-dm-sans)", "Helvetica Neue", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-l":  ["3.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        brand: "0.25em",
        widest: "0.15em",
      },
      animation: {
        "fade-in":     "fadeIn 0.6s ease-out forwards",
        "slide-up":    "slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-right": "slideRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "heart-pop":   "heartPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "toast-in":    "toastIn 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        heartPop: {
          "0%":   { transform: "scale(1)" },
          "50%":  { transform: "scale(1.4) rotate(10deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        toastIn: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "brand-sm": "0 2px 4px rgba(61,10,48,0.08)",
        "brand-md": "0 8px 16px rgba(61,10,48,0.12)",
        "brand-lg": "0 16px 32px rgba(61,10,48,0.14)",
        "glow-gold": "0 0 20px rgba(201,169,110,0.4)",
      },
      transitionTimingFunction: {
        sensual: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        spring:  "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
