/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040711',
          900: '#070D1F',
          850: '#0B132B',
          800: '#111B38',
          700: '#18274E',
        },
        maroon: {
          950: '#220408',
          900: '#380911',
          850: '#4A0E17',
          800: '#5F1420',
          700: '#7B1B2B',
        },
        gold: {
          50: '#FDFCF7',
          100: '#FAF5E4',
          200: '#F4E7BD',
          300: '#ECD58E',
          400: '#E2BF5C',
          500: '#D4AF37', // Royal Gold
          600: '#B89225',
          700: '#947218',
          800: '#715410',
          900: '#4D3809',
        },
        ivory: {
          50: '#FFFEFA',
          100: '#FDFBF7',
          200: '#F7F3E8',
          300: '#EFE7D3',
          400: '#E4D7BA',
        }
      },
      fontFamily: {
        royal: ['"Cinzel Decorative"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        rozha: ['"Rozha One"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #F9F1D0 0%, #D4AF37 35%, #AA7A1E 65%, #F4E4A6 100%)',
        'gold-linear': 'linear-gradient(90deg, #B89225 0%, #F5E5A4 50%, #B89225 100%)',
        'royal-gradient': 'radial-gradient(ellipse at center, #111B38 0%, #070D1F 60%, #040711 100%)',
        'maroon-gradient': 'radial-gradient(ellipse at center, #4A0E17 0%, #220408 70%, #100204 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spinSlow 60s linear infinite',
        shimmer: 'shimmer 4s linear infinite',
      }
    },
  },
  plugins: [],
}

