/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        360: "1440px",
      },
      boxShadow: {
        "dark-card":
          "0px 4px 6px -2px rgba(0, 0, 0, 0.2), 0px 12px 16px -4px rgba(0, 0, 0, 0.15);",
      },
    },
  },
  plugins: [],
};
