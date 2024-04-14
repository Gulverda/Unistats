// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: '#F5F5F5',
        customPink: '#FFE2E5',
        customOrange: '#FFF4DE',
        customGreen: '#DCFCE7',
        customPurple: '#F3E8FF',
      },
      fontFamily: {
        tkt: ['tkt'],
        tktMedium: ['tktMedium'],
      },
    },
  },
  plugins: [],
}
