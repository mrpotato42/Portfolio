/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        "custom-img":
          'linear-gradient(to top, #1A2833 40%, transparent), url("/images/background.webp")',
      },
      fontFamily: {
        titillium: [' "Open Sans", sans-serif'],
      },
      colors: {
        'dark-background': '#151618',
        'dark-foreground': '#21232C',
        'dark-text': '#e6e6e6',
        background: '#F4F6FF',
        foreground: '#ffffff',
        transparent: "transparent",
        current: "currentColor",
        coquimbo: {
          100: "#1D3E58",
          200: "#1D4958",
          300: "#166683",
          400: "#0075AD",
          50: "#1b323f",
        },
        andagareta: {
          100: "#AD5E00",
          200: "#583E1D",
          300: "#332B22",
          400: "#403e3c",
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
