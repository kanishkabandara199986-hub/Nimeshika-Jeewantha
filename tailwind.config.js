/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '390px',
      md: '430px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        pink: {
          50: '#ffe5ec',
          100: '#ffe5ec',
          200: '#ffc2d1',
          300: '#ffb3c6',
          400: '#ff8fab',
          500: '#fb6f92',
          600: '#d64972',
          700: '#9e2a4b',
          800: '#7a1c36',
          900: '#5c0f24',
        },
        ivory: {
          DEFAULT: '#ffe5ec',
          dark: '#ffc2d1',
          paper: '#ffe5ec',
        },
        sage: {
          light: '#ffc2d1',
          DEFAULT: '#ff8fab',
          dark: '#fb6f92',
        },
        olive: {
          light: '#ffb3c6',
          DEFAULT: '#ff8fab',
          dark: '#d64972',
        },
        gold: {
          light: '#ffb3c6',
          DEFAULT: '#ff8fab',
          dark: '#fb6f92',
        },
        charcoal: {
          DEFAULT: '#5c0f24',
          light: '#7a1c36',
          muted: '#9e2a4b',
        },
        cream: '#ffe5ec',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Lora"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(107, 124, 92, 0.3)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 0 8px rgba(107, 124, 92, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grain-texture':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        'card': '0 4px 32px rgba(44, 44, 44, 0.08)',
        'card-hover': '0 8px 48px rgba(44, 44, 44, 0.14)',
        'gold': '0 2px 20px rgba(201, 169, 110, 0.25)',
      },
    },
  },
  plugins: [],
}
