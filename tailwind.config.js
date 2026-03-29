/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B1114',
        'bg-secondary': '#151F24',
        'accent-cyan': '#53E8D4',
        'accent-amber': '#E28D38',
        'text-main': '#E2E8F0',
        'text-muted': '#94A3B8',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        subheading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 5px rgba(83, 232, 212, 0.5), 0 0 15px rgba(83, 232, 212, 0.3)',
        'neon-cyan-lg': '0 0 8px rgba(83, 232, 212, 0.6), 0 0 25px rgba(83, 232, 212, 0.4)',
        'neon-text': '0 0 8px rgba(83, 232, 212, 0.8)',
      },
    },
  },
  plugins: [],
};
