import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0a0906",
          50: "#57503f",
          100: "#4a4434",
          200: "#3a3527",
          300: "#2b271c",
          400: "#1d1a12",
          500: "#0a0906",
          600: "#070604",
        },
        charcoal: "#151209",
        gold: {
          50: "#faf5e8",
          100: "#f0e3bf",
          200: "#e3ce93",
          300: "#d4b76a",
          400: "#c9a24c",
          500: "#b98d34",
          600: "#a9812e",
          700: "#8a6a26",
          800: "#6b511d",
          900: "#4a3814",
        },
        ivory: "#f4efe3",
        bone: "#c9c2b1",
        muted: "#8c8371",
      },
      fontFamily: {
        display: ["var(--font-serif-fa)", "serif"],
        body: ["var(--font-sans-fa)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #f0e3bf 0%, #c9a24c 35%, #8a6a26 70%, #c9a24c 100%)",
        "gold-line": "linear-gradient(90deg, transparent, #c9a24c, transparent)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(201,162,76,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        gold: "0 0 40px -10px rgba(201,162,76,0.35)",
        "gold-lg": "0 20px 60px -15px rgba(201,162,76,0.25)",
        soft: "0 10px 40px -12px rgba(0,0,0,0.6)",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
