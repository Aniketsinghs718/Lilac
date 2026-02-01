/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#faf8f5',
          100: '#f7f3ee',
          200: '#ede7df',
          300: '#e3dcd1',
        },
        terracotta: {
          DEFAULT: '#d4735e',
          light: '#e08c78',
          dark: '#b85c47',
        },
        sage: {
          DEFAULT: '#7a9e7e',
          light: '#95b599',
          dark: '#5f8263',
        },
        charcoal: {
          DEFAULT: '#2c3333',
          light: '#3f4a4a',
        }
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'serif'],
        'body': ['var(--font-poppins)', 'sans-serif'],
      },
      clipPath: {
        arch: 'ellipse(50% 100% at 50% 0%)',
      }
    },
  },
  plugins: [],
}
