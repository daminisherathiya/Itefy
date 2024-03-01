/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#FFFFFF",
    },
    backgroundColor: {
      "slate-gray": "#363e49fa",
      "deep-pink": "#ff1493",
      "charcoal-gray": "#39414C",
      transparent: "transparent",
    },
    borderColor: {
      "white-70": "#ffffff4d",
    },
    fontFamily: {
      quicksand: [
        "Quicksand",
        "Open Sans",
        "Verdana",
        "Helvetica",
        "Arial",
        "Sans-serif",
      ],
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "1200px",
      },
    },
    extend: {},
  },
  plugins: [],
  prefix: "tw-",
};
