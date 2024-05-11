/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img":
          'linear-gradient(to top, #1A2833 86%, transparent), url("/images/wisky2.webp")',
      },
      fontFamily: {
        titillium: [' "Titillium Web", sans-serif'],
      },
      colors: {
        transparent: "transparent",
        "current": "currentColor",
        "lamurga": "#166683",
        "gareta": "#1D4958",
        "coquimbo": "#007EAD",
        "obesamaleta": "#1D3E58",
        "chu": "#1D4958",
        "palateta": "#1D4958",
      },
    },
  },
  plugins: [],
};
