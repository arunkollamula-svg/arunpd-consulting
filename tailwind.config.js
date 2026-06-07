/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#050816',
          50: '#f1f5f9',
          900: '#0F172A',
          950: '#050816',
        },
        'deep-navy': '#050816',
        surface: '#080d1c',
        'surface-2': '#0c1428',
        brand: {
          DEFAULT: '#2563EB',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563EB',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          400: '#22d3ee',
          500: '#06B6D4',
          600: '#0891b2',
        },
        violet: {
          400: '#a78bfa',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(60% 60% at 50% 0%, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)',
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
        'aurora-1': 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(120,119,198,0.18), transparent)',
        'aurora-2': 'radial-gradient(ellipse 80% 80% at 100% 100%, rgba(6,182,212,0.14), transparent)',
        'aurora-3': 'radial-gradient(ellipse 70% 70% at 50% 100%, rgba(37,99,235,0.20), transparent)',
        'hero-grid': `linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)`,
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(37,99,235,0.15), 0 20px 60px -20px rgba(37,99,235,0.45)',
        'glow-cyan': '0 0 40px -10px rgba(6,182,212,0.55)',
        card: '0 1px 2px rgba(15,23,42,0.06), 0 12px 32px -12px rgba(15,23,42,0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        'border-beam': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)', opacity: '0.55' },
          '33%': { transform: 'translate(45px, 35px) scale(1.10)', opacity: '0.75' },
          '66%': { transform: 'translate(-30px, -45px) scale(0.93)', opacity: '0.45' },
        },
        'aurora-2': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)', opacity: '0.45' },
          '33%': { transform: 'translate(-55px, 25px) scale(1.08)', opacity: '0.70' },
          '66%': { transform: 'translate(35px, -50px) scale(0.95)', opacity: '0.38' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulse-ring 3s ease-out infinite',
        marquee: 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'marquee-slow': 'marquee 48s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'border-beam': 'border-beam 4s ease infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        aurora: 'aurora 14s ease-in-out infinite',
        'aurora-slow': 'aurora-2 18s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-reverse': 'spin-slow 25s linear infinite reverse',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
