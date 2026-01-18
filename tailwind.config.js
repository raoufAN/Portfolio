// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        wave: "wave 10s ease-in-out infinite",
        "wave-slow": "wave 14s ease-in-out infinite",
        "wave-fast": "wave 7s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1s ease-out",
      },
      animationDelay: {
        300: "300ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};
