/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main": "url('src/assets/img/wisky2.jpg')",
      },
    },
  },
  plugins: [],
};
