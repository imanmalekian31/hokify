module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        primary: {
          100: '#0fb1af',
          200: '#007f7e',
          300: '#006665'
        },
        blue: {
          50: '#2a84e3',
          100: '#116bca'
        }
      },
      boxShadow: {
        form: 'inset 7px 0px 0px 0px #0FB1AF, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);', // form , shadow-lg
        'form-dark':
          'inset 7px 0px 0px 0px #334155, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
