import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0f',
          light: '#12121a',
          card: 'rgba(255, 255, 255, 0.03)',
        },
        primary: {
          DEFAULT: '#a3e635',
          dark: '#84cc16',
          light: '#bef264',
          glow: 'rgba(163, 230, 53, 0.3)',
        },
        secondary: {
          DEFAULT: '#a855f7',
          dark: '#7c3aed',
          light: '#c084fc',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
        },
        text: {
          primary: '#ffffff',
          secondary: '#9ca3af',
          muted: '#6b7280',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.15)',
        },
        chart: {
          line: '#a3e635',
          area: 'rgba(163, 230, 53, 0.2)',
          grid: 'rgba(255, 255, 255, 0.05)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        h1: ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
        xs: ['0.75rem', { lineHeight: '1.4' }],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
