/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headingColor: '#000000',
        subHeaderColor:'#000000',
        paragraphColor: '#5B5B5B',
        titleColor: '#2AB04A',
        dashboardTextColor: '#878787'
      },
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1400px",
    },
  },
  plugins: [],
}

