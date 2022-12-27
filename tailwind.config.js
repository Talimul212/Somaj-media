/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#7dd3fc',
          secondary: '#fda4af',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
  extend: { },
},
plugins: [require("daisyui")],
}
