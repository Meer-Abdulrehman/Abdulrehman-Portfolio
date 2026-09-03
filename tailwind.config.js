/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        surface2: 'rgb(var(--surface2) / <alpha-value>)',
        ink: {
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
          400: 'rgb(var(--ink-400) / <alpha-value>)',
          300: 'rgb(var(--ink-300) / <alpha-value>)',
        },
        line: 'rgb(var(--line) / <alpha-value>)',
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },

        volt: {
          50: '#EEF1FF',
          400: '#7B7FF5',
          500: '#5B5FEF',
          600: '#4548C9',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, #EEF0F4 1px, transparent 1px), linear-gradient(to bottom, #EEF0F4 1px, transparent 1px)',
        'glow-indigo':
          'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.12), transparent 70%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 20, 32, 0.04), 0 8px 24px -8px rgba(15, 20, 32, 0.08)',
        card: '0 1px 1px rgba(15,20,32,0.03), 0 12px 32px -12px rgba(15,20,32,0.12)',
        lift: '0 20px 48px -16px rgba(99,102,241,0.25)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(12px,-10px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
        pulseSoft: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0.45 },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        drift: 'drift 10s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
