/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#120909",
        cocoa: "#3b221e",
        nude: "#cda38a",
        champagne: "#f9e5d8",
        blush: "#e9b2a5",
        emerald: "#18b37f"
      },
      boxShadow: {
        cinematic: "0 30px 80px rgba(0,0,0,0.75)",
        card: "0 22px 55px rgba(0,0,0,0.55)"
      },
      borderRadius: {
        "4xl": "2.1rem"
      },
      fontFamily: {
        display: ["'Playfair Display'", "ui-serif", "Georgia", "serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "SF Pro Text", "Segoe UI", "sans-serif"]
      },
      keyframes: {
        "light-flow": {
          "0%": { opacity: "0", transform: "translate3d(-10%, -10%, 0) scale(0.9)" },
          "50%": { opacity: "0.8", transform: "translate3d(10%, 10%, 0) scale(1.1)" },
          "100%": { opacity: "0", transform: "translate3d(20%, 20%, 0) scale(1.2)" }
        },
        "grain": {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "25%": { transform: "translate3d(-1%,1%,0)" },
          "50%": { transform: "translate3d(1%,-1%,0)" },
          "75%": { transform: "translate3d(-1%,-1%,0)" }
        }
      },
      animation: {
        "light-flow": "light-flow 16s ease-in-out infinite",
        grain: "grain 8s steps(2,end) infinite"
      }
    }
  },
  plugins: []
};

export default config;