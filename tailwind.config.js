/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1E212D',
        'brown': '#B68973',
        'lightbrown': '#EABF9F',
        'warm': '#FAF3E0',
       
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
    
      fontFamily: {
        abc:["Anuphan","sans-serif"],
        serif: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
}
