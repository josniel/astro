import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'chakra-petch': ['Chakra Petch', 'sans-serif'],
    },
    transitionDuration: {
      DEFAULT: '100ms',
      '300': '300ms', // Agregar la duración deseada
    },
    transitionTimingFunction: {
      DEFAULT: 'linear',
    },
    extend: {
      keyframes: {
        'toast-in': {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0%)',
          },
        },
        progress: {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'toast-in': 'toast-in 250ms linear',
        progress: 'progress 3s linear',
      },
      lineHeight: {
        normal: 'normal',
      },
      colors: {
        shark: {
          '100': '#53606A',
          '200': '#474C51',
          '300': '#393E44',
          '400': '#292D32', // main
          '500': '#16181a',
          '600': '#0A0A0A',
          '700': '#000000',
          '800': '#000000',
          '900': '#111315',
          '950': '#262C33',
        },
        'yellow-doge': {
          '100': '#f5ffc2',
          '200': '#efff87',
          '300': '#edff43',
          '400': '#f5ff10',
          '500': '#fcfc03', //main
          '600': '#cfbe00',
          '700': '#a58a03',
          '800': '#886b0b',
          '900': '#735710',
          '950': '#432f05',
        },
        'yellow-main-op': {
          '100': 'rgba(252, 252, 3, 0.1)',
          '200': 'rgba(252, 252, 3, 0.2)',
          '300': 'rgba(252, 252, 3, 0.3)',
          '400': 'rgba(252, 252, 3, 0.4)',
          '500': 'rgba(252, 252, 3, 0.5)',
          '600': 'rgba(252, 252, 3, 0.6)',
          '700': 'rgba(252, 252, 3, 0.7)',
          '800': 'rgba(252, 252, 3, 0.8)',
          '900': 'rgba(252, 252, 3, 0.9)',
          '950': 'rgba(252, 252, 3, 0.95)',
        },
        'green-doge': '#9BA885',
        'green-doge2': '#51544D',
        'green-doge3': '#3D4432',
        'green-doge4': '#404833',
        'black-box': 'rgba(10, 11, 11, 0.80)',
        'black-box2': 'rgba(41, 41, 41, 0.66)',
        // 'black-box2': '#333',
        'main': '#0A0B0B',
        'bg2': '#11140C'
      },
      screens: {
        'xs': '530px',
        'xl1': '1400px',
        'xl2': '1580px',
      },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1740px',
      },
    },
  },
  plugins: [],
}
// eslint-disable-next-line import/no-default-export
export default config
