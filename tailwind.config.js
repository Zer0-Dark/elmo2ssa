/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainTheme': "#735325",
        'mainBg': "#EBE9E3",
        "secondryColor": "#B98885",
        "secondryBg": "#D3C7B6"
      },
      fontFamily: {
        "mainFont": [" Lalezar, system-ui"],
        "secondryFont": ["Noto Sans Arabic, sans-serif"]
      }
    },
  },
  plugins: [],
}

