/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        banner: '16 / 5',
      },
      colors: {
        transparent: 'rgba(0, 0, 0, 0.9)',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
