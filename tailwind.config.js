/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        banner: '16 / 5',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
