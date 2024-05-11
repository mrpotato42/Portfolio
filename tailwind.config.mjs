/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img": 'linear-gradient(to top, #1A2833 86%, transparent), url("/images/wisky2.webp")',
        "radial-gradient": 'radial-gradient(circle at center, transparent 0%, #166683 100%)',
      },
      fontFamily: {
        titillium: [' "Titillium Web", sans-serif'],
      },
      colors: {
        transparent: "transparent",
        "current": "currentColor",
        "coquimbo": {
          100: "#1D3E58",
          200: "#1D4958",
          300: "#166683",
          400: "#0075AD",
        },
        "palateta": "#1D4958",
      },
    },
  },
  plugins: [],
};
