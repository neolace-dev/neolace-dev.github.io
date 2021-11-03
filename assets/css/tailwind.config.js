const themeDir = __dirname + '/../../';

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: [
            "./layouts/**/*.html", 
            "./content/**/*.md", 
            "./content/**/*.html",
        ],
    },
    // Use just-in-time compilation + features
    // Currently not working - https://www.brycewray.com/posts/2021/11/making-tailwind-jit-work-hugo/
    //mode: 'jit',
    theme: {
        fontFamily: {
            sans: [
                "Inter var",
                ...defaultTheme.fontFamily.sans,
            ],
            serif: defaultTheme.fontFamily.serif,
            mono: [
                'Roboto Mono',
                ...defaultTheme.fontFamily.mono,
            ]
        },
        extend: {
            colors: {
                "tn-blue": {
                    DEFAULT: "#5ecbf5",
                    dark: "#085e7f",
                },
            }
        }
    },
    variants: {},
    plugins: [
        // e.g. require('@tailwindcss/ui'),
    ],
}
