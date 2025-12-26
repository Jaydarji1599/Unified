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
        navy: '#0A1A2F',
        teal: '#39D0C8',
        charcoal: '#0F0F10',
        cloudGrey: '#E4E7EB',
        slateGrey: '#64748B',
        softRed: '#FF6A6A',
        luxeGold: '#F4C75B',
      },
      boxShadow: {
        'soft-3d': '0 22px 45px rgba(0,0,0,0.45)',
        'card-soft': '0 18px 40px rgba(15,23,42,0.5)',
      },
    },
  },
  plugins: [],
}
