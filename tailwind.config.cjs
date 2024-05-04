const { default: daisyui } = require("daisyui");

/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#85B5B2",
                    "secondary": "#E49344",
                    "accent": "#6A9F58",
                    "neutral": "#e5e7eb",
                    "base-100": "#ffffff",
                    "info": "#fef9c3",
                    "success": "#bbf7d0",
                    "warning": "#fecaca",
                    "error": "#f87171",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};

module.exports = config;
