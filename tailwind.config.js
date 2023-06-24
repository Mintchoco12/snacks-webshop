/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#222831",
        "secondary-color": "#393e46",
        "tertiary-color": "#00adb5",
        "quaternary-color": "#eeeeee",
      },
      height: {
        "9/10": "90%",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
