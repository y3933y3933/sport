/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1170px",
      xl: "1440px",
    },
    // container: {
    //   center: true,
    //   padding: {
    //     sm: "1rem",
    //   },
    //   screens: {
    //     sm: "320px",
    //     md: "768px",
    //     lg: "1170px",
    //     xl: "1440px",
    //   },
    // },
    extend: {
      colors: {
        "primary-1": "#647693",
        "primary-2": "#63a8e7",
        "secondary-1": "#ecf2f9",
      },
      borderRadius: {
        DEFAULT: "5px",
      },
      boxShadow: {
        dark: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
