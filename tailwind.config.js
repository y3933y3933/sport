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
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary-1": "#647693",
        "primary-2": "#63a8e7",
        "secondary-1": "#ecf2f9",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
