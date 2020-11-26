const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    plugins: [
        require('@tailwindcss/custom-forms'),
    ],
    theme: {
        extend: {
            colors: {
                primary: '#006487',
                green: '#8CC63F',
                lightBlue: '#CCE0E7',
                lightGreen: '#f2f8e1',
                orange: '#F38E20',
                purple: '#7C75B4',
                lightGrey: '#BDBDBD',
                darkGrey: '#666666',
                black: '#101010',
                background: '#f2f2f2'
            }
        }
    }
}
