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
        'default': '45rem',
        '84': '21rem',
      },
      height: {
        '72': '18rem',
        '348': '21.75rem', 
      },
      fontSize: {
        'customFontSize': '1.5rem',
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
}
