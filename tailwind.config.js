/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter","sans-serif"],
        montserrat:["Montserrat","sans-serif"],
        opensans:["Open Sans","sans-serif"],
        poppins:["Poppins","sans-serif"]
      },
      backgroundImage:{
        'custom-gradient':'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F9F9F9 100%)',
        'footer-gradient': 'linear-gradient(261.57deg, rgba(0, 111, 237, 0.12) 18.01%, rgba(179, 214, 255, 0.12) 90.03%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      rotate:{
        '-140.53': '-140.53deg',
      },
      boxShadow: {
        'custom': '0px 20px 40px rgba(0, 0, 0, 0.08)',
        'card': '-3px 4px 16px rgba(0, 0, 0, 0.04)',
        'nav': '-2px 4px 32px rgba(235, 235, 235, 0.6)',
        'faq': '0px 10px 15px rgba(0, 120, 255, 0.35)',
      },
    },
  },
  plugins: [],
}