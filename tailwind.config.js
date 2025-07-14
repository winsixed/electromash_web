/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'src/pages/**/*.{js,jsx}',
    'src/components/**/*.{js,jsx}',
    'src/hooks/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#1F2937',
          secondary: '#374151',
          accent: '#10B981',
          neutral: '#111827',
          'base-100': '#1F2937',
          'base-200': '#111827',
          'base-content': '#F3F4F6'
        }
      }
    ]
  }
};
