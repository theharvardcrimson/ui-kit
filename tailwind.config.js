/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          'crimson': {
            '50': '#fdf4f3',
            '100': '#fbeae8',
            '200': '#f8d5d3',
            '300': '#f1b4b0',
            '400': '#e98683',
            '500': '#dc5857',
            '600': '#c7373d',
            '700': '#a82931',
            '800': '#8c252e',
            '900': '#78232e',
            '950': '#430e13',
        },
      }
    },
  },
  plugins: [],
};
