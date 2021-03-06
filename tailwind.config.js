module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['IRANSans'],
                aviny: ['Aviny'],
            },
            borderRadius: {
                'theme': '8px',
            },
            width: {
                '60px': '60px',
                '15': '3.75rem',
                'fit': 'fit-content',
            },
            inset: {
                '-15': '-15px',
                '-20': '-20px',
            },
        },
        screens: {
            'xs': '250px',
            // => @media (min-width: 640px) { ... }

            'sm': '576px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1400px',
            // => @media (min-width: 1536px) { ... }
        },
        // container: {
        //     center: true,
        // }
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        container: false,
    },
    plugins: [require('@tailwindcss/line-clamp'),],
}
