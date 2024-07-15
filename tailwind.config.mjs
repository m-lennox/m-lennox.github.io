/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#111111",
      charcoal: "#73787c",
      gray: "#c5c6c7",
      "pale-blue": "#d7e5f0",
      beige: "#c9ad93",
      taupe: "#554940",
      "soft-green": "#879a77",
    },
    fontFamily: {
      sans: ["Inter SemiBold", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["monospace"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
