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
        primary: "#00dc82",
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
    },
    plugins: ["tailwindcssAnimate"],
  },
} satisfies Config;
