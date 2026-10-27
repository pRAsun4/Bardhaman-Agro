import { tokens } from './src/theme/tokens.js'

// every token becomes a Tailwind colour: bg-hero-bg, text-footer-title, ...
const colors = Object.fromEntries(Object.keys(tokens).map((k) => [k, `var(--c-${k})`]))

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: { soft: '0 4px 14px var(--c-shadow)', lift: '0 14px 36px var(--c-shadow)' },
    },
  },
  plugins: [],
}
