import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '0.5rem'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        serif: ['source-serif-4', ...fontFamily.serif],
        body: ['Inter', ...fontFamily.sans]
      }
    }
  },
  plugins: []
} satisfies Config;
