/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: [`"Poppins"`, `"sans-serif"`],
        manroppe: [`"Manrope"`, `sans-serif`],
        mooli: [`"Mooli"`, `sans-serif`]
      }
    },
  },
  plugins: [],
}