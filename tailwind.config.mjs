/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main": "url('public/images/wisky2.jpg')",
      },
    },
  },
  plugins: [],
};
