/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#131313',
                secondary: '#333333',
                ter: '#D54C44',
                qua: '#F9F9F9',
                gray: '#9E9E9E',
                gray2: '#6C6C6C',
            },
            padding: {
                base: '3rem',
                'mobile-base': '1rem',
            },
            boxShadow: {
                'card-shadow': '0px 4.29px 42.95px 0px #0000000F',
                'sidebar-shadow': '4px 0px 60px 0px #00000005',
                'dashboard-nav-shadow': '0px 4px 40px 0px #0000000F',
                "card-shadow2":"0px 4.64px 46.41px 0px #0000000F"
            },
            backgroundImage: {
                'linear-gradient':
                    'linear-gradient(83.44deg, #131313 30.79%, #383838 75.55%)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
