import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(76, 29, 149, 0.16), transparent 32%), radial-gradient(circle at right, rgba(59, 130, 246, 0.16), transparent 24%)',
      },
    },
  },
  plugins: [],
}

export default config
