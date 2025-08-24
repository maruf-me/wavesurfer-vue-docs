import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo-500 - matches the blue-purple theme
        "primary-light": "#818cf8", // Indigo-400
        "primary-dark": "#4f46e5", // Indigo-600
        "primary-50": "#eef2ff",
        "primary-100": "#e0e7ff",
        "primary-200": "#c7d2fe",
        "primary-300": "#a5b4fc",
        "primary-400": "#818cf8",
        "primary-500": "#6366f1",
        "primary-600": "#4f46e5",
        "primary-700": "#4338ca",
        "primary-800": "#3730a3",
        "primary-900": "#312e81",
        secondary: "#020420",
        white: "#ffffff",
        black: "#111827",
        neutral: "#404040",
      },
      spacing: {
        space5: "5px",
        space8: "8px",
        space12: "12px",
        space16: "16px",
        space20: "20px",
        space24: "24px",
        space28: "28px",
        space30: "30px",
        space32: "32px",
        space34: "34px",
        space40: "40px",
      },
      fontSize: {
        normal: "16px",
      },
      fontWeight: {
        normal: "400",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      boxShadow: {
        "100":
          "0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)",
        "200":
          "0px 8px 8px -4px rgba(24, 39, 75, 0.08), 0px 4px 6px -4px rgba(24, 39, 75, 0.12)",
        "300":
          "0px 8px 16px -6px rgba(24, 39, 75, 0.08), 0px 6px 8px -6px rgba(24, 39, 75, 0.12)",
        "400":
          "0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.12)",
        "500":
          "0px 10px 32px -4px rgba(24, 39, 75, 0.10), 0px 6px 14px -6px rgba(24, 39, 75, 0.12)",
        "700":
          "0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)",
        "800":
          "0px 18px 88px -4px rgba(24, 39, 75, 0.14), 0px 8px 28px -6px rgba(24, 39, 75, 0.12)",
        DEFAULT: "0px 1.5px 2px 0.3px #00000059",
      },
      letterSpacing: {
        "2": "-0.2px",
        "5": "-0.5px",
        "12": "-0.12px",
        "14": "-0.14px",
        "22": "-0.22px",
        "24": "-0.24px",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom right, #f8fafc, #dbeafe, #e0e7ff)",
        "gradient-hero-dark": "linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)",
        "gradient-features": "linear-gradient(to bottom, #f8fafc, #ffffff)",
        "gradient-features-dark": "linear-gradient(to bottom, #0f172a, #1e293b)",
        "gradient-section": "linear-gradient(to bottom, #f1f5f9, #ffffff)",
        "gradient-section-dark": "linear-gradient(to bottom, #1e293b, #0f172a)",
        "gradient-card": "linear-gradient(to bottom right, #ffffff, #f8fafc)",
        "gradient-card-dark": "linear-gradient(to bottom right, #1e293b, #0f172a)",
      },
    },
    plugins: ["tailwindcssAnimate"],
  },
} satisfies Config;
