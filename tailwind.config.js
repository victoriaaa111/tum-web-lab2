/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'navy-black': '#0C0C1E',
        'vanilla':    '#F8F4EE',
        'taupe':      '#A3968D',
        'dune':       '#E4DDCC',
        'leather':    '#262626',
        'umber':      '#443A35',
        'pearl':      '#FAF8F5',
        'khaki':      '#DFDACF',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'dm':        ['DM Mono', 'monospace'],
      },
      screens: {
        'tablet':  '765px',
        'desktop': '1200px',
      }
    }
  },
  plugins: []
}
