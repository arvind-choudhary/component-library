/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "black": "#000000",
      "white": "#ffffff",
      "gray": {
        100: "#0A0A0A",
        90: "#424242",
        80: "#616161",
        70: "#757575",
        60: "#9E9E9E",
        50: "#C2C2C2",
        40: "#E0E0E0",
        30: "#EDEDED",
        20: "#F5F5F5",
        10: "#FFFFFF"
      },
      primary: {
        DEFAULT: '#3B24AD',
        secondary: '#F8F5FF',
        border: '#B6ABED',
        hover: '#3918D9',
        pressed: '#230F80',
        focus: '#E7E3FC'
      },
      danger: {
        DEFAULT: '#921919',
        secondary: '#E9D1D1',
        border: '#DBB2B2',
        hover: '#611111',
        pressed: '#490C0C',
        focus: '#C88C8C'
      },
      warning: {
        DEFAULT: '#EABB42',
        secondary: '#FBF1D9',
        border: '#F8E8C0',
        hover: '#B69237',
        pressed: '#A9945F',
        focus: '#F8E8C0'
      },
      success: {
        DEFAULT: '#35B932',
        secondary: '#D7F1D6',
        border: '#9ADC98',
        hover: '#4AAA48',
        pressed: '#6DA66C',
        focus: '#9ADC98'
      },
      info: {
        DEFAULT: '#194689',
        secondary: '#D1DAE7',
        border: '#B2C1D8',
        hover: '#112F5B',
        pressed: '#0C2344',
        focus: '#B2C1D8'
      }
    },
    fontSize: {

    },
    boxShadow: {
      DEFAULT: '0 4px 8px 0 rgba(248, 245, 255, 1)',
      'sm': '0 2px 4px 0 rgba(248, 245, 255, 1)',
      'md': '0 6px 12px 0 rgba(248, 245, 255, 1)',
      'lg': '0 8px 16px 0 rgba(248, 245, 255, 1)'
    },
    boxShadowColor: {
      DEFAULT: 'rgba(248, 245, 255, 1)'
    },
    extend: {},
  },
  plugins: [],
}

