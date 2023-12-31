/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './Pages/**/*.{html,js}',
    './Components/**/*.{html,js}',
  ],
  theme: {
    animation: {
      'logo-bounce': 'logo-bounce 5s linear infinite',
      'icon-bounce-1': 'icon-bounce 5s ease-in-out infinite',
      'icon-bounce-2': 'icon-bounce-1 6s ease-in-out infinite',
      'icon-bounce-3': 'icon-bounce 4s ease-in-out infinite',
      'load-name': 'load-name 5s linear 1'
    },
    fontSize: {
      sm: '0.8vw',
      base: '1vw',
      xl: '1.25vw',
      '2xl': '1.563vw',
      '3xl': '1.953vw',
      '4xl': '2.441vw',
      '5xl': '3.052vw',
      '8xl': '5vw'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white':"#ffffff",
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'red':'#bf4623',
      'darkGreen': '#323232'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      boxShadow: {
        '3xl': '10px 10px 25px -15px #323232',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes:{
        'logo-bounce':{
          '0%, 100%':{
            transform: 'translateY(0px)'
          },
          '50%':{
            transform: "translateY(20px)"
          }
        },
        'icon-bounce':{
          '0%, 100%':{
            transform: 'translateY(0px)'
          },
          '50%':{
            transform: "translateY(10px)"
          }
        },
        'icon-bounce-1':{
          '0%, 100%':{
            transform: 'translateY(0px)'
          },
          '50%':{
            transform: "translateY(7px)"
          }
        },
        'load-name':{
          '0%':{
            'letter-spacing':'7px',
          },
          '100%':{
            'letter-spacing':'0px'
          }
        }
      },
      margin:{
        'nav':'4.5rem'
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}
