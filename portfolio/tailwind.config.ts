import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: {
          primary: "#050709",
          secondary: "#0a0d12",
          card: "#0d1117",
          elevated: "#131920",
        },
        accent: {
          cyan: "#00d4ff",
          green: "#00ff9d",
          purple: "#7c3aed",
          gold: "#f5c842",
        },
        border: {
          subtle: "#1a2030",
          active: "#2a3550",
        },
        text: {
          primary: "#e8edf5",
          secondary: "#8899bb",
          muted: "#445566",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        "glow-cyan":
          "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)",
        "glow-green":
          "radial-gradient(ellipse at center, rgba(0,255,157,0.1) 0%, transparent 70%)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.12) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
        "border-spin": "borderSpin 4s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        borderSpin: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.1)",
        "glow-green": "0 0 30px rgba(0,255,157,0.2)",
        "card-hover": "0 8px 40px rgba(0,212,255,0.08), 0 0 0 1px rgba(0,212,255,0.12)",
        "card-base": "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(26,32,48,1)",
      },
    },
  },
  plugins: [],
};
export default config;
