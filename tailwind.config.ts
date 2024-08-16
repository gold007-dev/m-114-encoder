import themes from './utils/themes';

/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui'),],
    daisyui: {
        themes: themes,
    },
}

