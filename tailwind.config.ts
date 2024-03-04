import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '100ms',
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
