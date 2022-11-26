const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        colors:{
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
            'creamypeach' : '#f3a683',
            'summertime' : '#f5cd79',
            'pencillead' : '#596275',
            'corallite' : '#574b90'
        }
    },

    plugins: [require('@tailwindcss/forms')],
};
