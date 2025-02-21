/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: {'max': '570px'},
        sm: {'max': '670px'},
        lg: {'max': '880px'},
        lp: {'max': '1050px'}
      },
      colors: {
        milk: '#F5F5F5',
        gren: '#4ce0d7'
      },
      width: {
        hero: '480px'
      },
      height: {
        hero: '480px',
        topics: '280px',
        single: '300px',
        trend: '250px',
        other: '340px',
        others: '370px'
      },
      fontFamily: {
        quick: "'Quicksand', serif"
      },
    }
  },
  plugins: [],
};
