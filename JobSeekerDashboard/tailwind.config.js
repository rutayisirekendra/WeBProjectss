export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008080',
        secondary: '#C2B280',
        background: '#FFFFFF',
        card: '#F9FAFB',
        text: '#1F2937',
        border: '#E5E7EB',
        nav: {
          bg: '#1F2937',
          hover: '#374151',
          text: '#F9FAFB',
        },
        status: {
          pending: '#FCD34D',
          interviewed: '#60A5FA',
          rejected: '#EF4444',
          accepted: '#10B981',
        }
      }
    },
  },
  plugins: [],
}