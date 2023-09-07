import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // add as global variables, the same variables defined in globals.css
      fontFamily: {
        sans: ['var(--font-inter)'],
        ubuntuMono: ['var(--font-ubuntu)'],
      },
      colors: {
        candy: {
          50: '#f0fbfd',
          100: '#d0f3fa',
          200: '#b9eef8',
          300: '#98e6f4',
          400: '#85e1f2',
          500: '#66d9ef',
          600: '#5dc5d9',
          700: '#489aaa',
          800: '#387783',
          900: '#2b5b64',
        },
        lemon: {
          50: '#eaffe6',
          100: '#beffb2',
          200: '#9eff8d',
          300: '#72ff5a',
          400: '#57ff39',
          500: '#2dff08',
          600: '#29e807',
          700: '#20b506',
          800: '#198c04',
          900: '#136b03',
        },
        gum: {
          50: '#fff2f9',
          100: '#fed5ed',
          200: '#fec1e4',
          300: '#fea5d7',
          400: '#fd93d0',
          500: '#fd78c4',
          600: '#e66db2',
          700: '#b4558b',
          800: '#8b426c',
          900: '#6a3252',
        },
        bluebarry: {
          300: '#323842',
          600: '#151a2a',
          900: '#07061d',
        },
        background: '#030712',
        pistachio: '#d3ffcc',
        cream: '#e2dfcd',
        foam: '#d7dae2',
        snow: '#ffffff',
      },
    },
  },
  plugins: [],
}
export default config
