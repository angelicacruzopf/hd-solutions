/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      openSans: ['Open Sans'],
    },
    extend: {

      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      colors: {
        primary: '#026A00',
        secondary: '#0E452F',
        third: '#F79256',
        fourth: '#00B2CA',
        fifth: '#1D4E89',
  
        darkGray: '#292D32',
        mediumGray: '#666666',
        neutralGray: '#585A71',
        lighterGray: '#797C94'
      },
      height:{
        '100': '26rem',
        '120': '28rem',
        '128': '32rem',
      },
    },

    
  },
  plugins: [],
}

