/** @type {import('tailwindcss').Config} */
export const content = ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    gridTemplateColumns: {
      'auto': "repeat(auto-fill, minmax(200px, 1fr))",
    },
  },
};
export const plugins = [];
