/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f6f6f7',
          100: '#e1e1e3',
          200: '#c8c9cc',
          300: '#a6a7ac',
          400: '#85878e',
          500: '#696c75',
          600: '#51545c',
          700: '#3d4047',
          800: '#2b2d32',
          900: '#1a1b1f',
          950: '#121316',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.5s ease-out',
        glow: 'glow 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,69,0,0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(255,69,0,0.4)' }
        }
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(0deg, rgba(139,0,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,0,0,0.05) 1px, transparent 1px)
        `
      },
      backgroundSize: {
        'grid': '20px 20px'
      }
    },
  },
  plugins: [],
}