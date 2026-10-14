import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-lg": "2rem",
        margin: "1.25rem",
        "margin-md": "2.5rem",
        "margin-lg": "4rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // DESIGN.md: Architectural Surfaces
        surface: {
          DEFAULT: '#f9f9ff',
          dim: '#d7dae3',
          bright: '#f9f9ff',
          lowest: '#ffffff',
          low: '#f1f3fd',
          container: '#ebeef7',
          high: '#e5e8f2',
          highest: '#dfe2ec',
          variant: '#dfe2ec',
        },
        "on-surface": {
          DEFAULT: '#181c23',
          variant: '#3f4850',
        },
        "inverse-surface": {
          DEFAULT: '#2d3138',
          on: '#eef0fa',
        },
        outline: {
          DEFAULT: '#707881',
          variant: '#bfc7d2',
        },
        // DESIGN.md: Diamond Blue (Primary Action)
        diamond: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#006194',
          800: '#004b73',
          900: '#001d31',
          DEFAULT: '#0284c7',
        },
        // DESIGN.md: Noble Gold / Bronze (Prestige Accent)
        gold: {
          50: '#fcf9f2',
          100: '#f7f1e1',
          200: '#e5c88b',
          300: '#fed488',
          400: '#c5a059',
          500: '#b38f48',
          600: '#946e29',
          700: '#775a19',
          800: '#5d4201',
          900: '#261900',
          DEFAULT: '#c5a059',
          light: '#e5c88b',
          dark: '#775a19',
        },
        bronze: {
          DEFAULT: '#c5a059',
          deep: '#b38f48',
          light: '#e5c88b',
          bg: '#fcf9f2',
        },
        // DESIGN.md: High-Density Anthracite
        anthracite: {
          DEFAULT: '#181c23',
          900: '#111827',
          800: '#181c23',
          700: '#1e2229',
          600: '#2d3138',
          500: '#3f4850',
          400: '#64748b',
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          dark: "hsl(var(--cream-dark))",
        },
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          light: "hsl(var(--charcoal-light))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          container: '#007bb9',
          'on-container': '#fdfcff',
          fixed: '#cce5ff',
          'fixed-dim': '#93ccff',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          container: '#fed488',
          'on-container': '#785a1a',
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        shimmer: "shimmer 2s infinite linear",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
      boxShadow: {
        // DESIGN.md Elevations
        ambient: "0 1px 3px 0 rgba(30, 34, 41, 0.03), 0 8px 24px -4px rgba(30, 34, 41, 0.04)",
        elevated: "0 4px 6px -1px rgba(30, 34, 41, 0.04), 0 20px 32px -8px rgba(30, 34, 41, 0.07)",
        "glow-blue": "0 8px 20px -4px rgba(2, 132, 199, 0.35)",
        "glow-gold": "0 8px 20px -4px rgba(197, 160, 89, 0.25)",
        soft: "0 4px 20px -4px hsl(43 30% 70% / 0.3)",
        card: "0 8px 30px -8px hsl(43 30% 60% / 0.2)",
        gold: "0 4px 20px -4px hsl(43 74% 49% / 0.3)",
        hover: "0 12px 40px -12px hsl(43 74% 49% / 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
