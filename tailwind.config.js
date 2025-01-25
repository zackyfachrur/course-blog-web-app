/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('public/thumbnail/hero-thumb.jpg')",
        'footer-pattern': "url('public/thumbnail/footer-thumb.jpg')",
      }
    },
  },
  plugins: [],
}

