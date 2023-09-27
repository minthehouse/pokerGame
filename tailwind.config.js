/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: { max: "375px" },
      sm: "376px",
      md: "768px",
    },
    extend: {},
  },
  plugins: [],
};
