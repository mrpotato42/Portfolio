/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img":
          'linear-gradient(to top, #6366f1 90%, transparent), url("/images/wisky2.webp")',
      },
    },
  },
  plugins: [],
};
