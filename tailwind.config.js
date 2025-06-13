
/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}', // if using legacy Pages too
    ],
    theme: {
        extend: {
            fontFamily: {
                epilogue: ['var(--font-epilogue)'],
                helvetica: ['var(--font-helvetica)'],
                clashGreek: ['var(--font-clashGreek)'],
                raleway: ['var(--font-raleway)']
            },
        },
    },
    plugins: [],
}

export default config