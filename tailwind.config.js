/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // nav: 'url("/assets/desktop/image-header.jpg")',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        barlow: ['Barlow', 'serif'],
      },
    },
  },
  plugins: [],
};
