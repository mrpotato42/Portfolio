/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img": 'linear-gradient(to top, #1A2833 75%, transparent), url("/images/background.webp")',
        "profile-img": 'linear-gradient(to top, #1b323f 13%, #ffffff00 50%), url("/images/profile.jpg")',
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
          50: "#1b323f",
        },
        "andagareta": {
          100: "#AD5E00",
          200: "#583E1D",
          300: "#332B22",
          400: "#403e3c",
          
        },
      },
    },
  },
  plugins: [],
};
