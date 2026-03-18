// tailwind.config.js (or tailwind.config.ts)
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          // Reference the CSS variables using the 'var()' function
          'primary': 'var(--color-primary)',
          'secondary': 'var(--color-secondary)',
        },
        fontFamily: {
          // Reference the CSS variable for fonts
        //   'main': 'var(--font-main)',
        },
      },
    },
    plugins: [],
  }
  