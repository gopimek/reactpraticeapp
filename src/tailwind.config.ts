import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensures all your components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [(await import('tailwind-scrollbar-hide')).default],
}

export default config
