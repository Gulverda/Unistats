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
        customBlue: '#4079ED',
      },
      fontFamily: {
        tkt: ['tkt'],
        tktMedium: ['tktMedium'],
        PoppinsRegular: ['PoppinsRegular'],
      },
      width: {
        'default': '45rem',   // Custom width of 18rem
        '84': '21rem',   // Custom width of 21rem
      },
      height: {
        '72': '18rem',   // Custom height of 18rem
        '84': '21rem',   // Custom height of 21rem
      }
    },
  },
  plugins: [],
}
