/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors :{
        primary: {
          DEFAULT: 'rgb(34, 83, 44)',
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require('flowbite/plugin')],
};
