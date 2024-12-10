/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      small: "200px",
      med: "768px",
      large: "1000px",
      xl: "1280px",
    },
    extend: {
      colors: {
        sidebarbgcolor: "#f7f7f7",
        dashboardbgcolor: "#f5f5f5",
        primaryfontcolor: "#175739",
        buttonhovercolor: "#f4af1b",
        primarybgcolor: "#ebebef",
        secondarybgcolor: "#FFFFFF",
        primarytextcolor: "#000000",
      },
      backgroundImage: {
        gradientcolor:
          "linear-gradient(301deg, rgba(2,0,36,1) 0%, rgba(23,87,57,1) 0%, rgba(23,87,57,1) 48%, rgba(34,129,31,1) 100%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
