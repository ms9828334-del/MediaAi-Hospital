/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medBlue: '#1E40AF',
        medLightBlue: '#EFF6FF',
        medSuccess: '#059669',
        medWarning: '#D97706',
        medDanger: '#DC2626',
        medDark: '#0F172A',
        medWhite: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
