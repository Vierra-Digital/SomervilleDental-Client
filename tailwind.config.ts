import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#1e40af',
          100: '#1e3a8a',
          200: '#172554',
          300: '#0f172a',
          400: '#1e293b',
          500: '#0f172a', // Dark navy blue
          600: '#0c1220', // Darker navy blue
          700: '#020617', // Very dark navy
          800: '#0f172a', // Dark navy for backgrounds
          900: '#0c1220', // Darker navy
          950: '#020617', // Darkest navy
        },
        secondary: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#4b5563',
          600: '#374151',
          700: '#1f2937',
          800: '#111827',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

