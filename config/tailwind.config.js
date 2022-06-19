const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      borderRadius: {
        'sm': '.5rem'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      }
    },
    colors: {
      'dark-blue': '#1F2937',
      'white': '#F9FAF8',
      'off-white': '#E5E7EB',
      'light-blue': '#3882F6'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
