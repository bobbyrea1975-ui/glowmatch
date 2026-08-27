import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Glowmatch design tokens — clinical-botanical, not the cream/terracotta default
        paper: '#FAF9F6',     // warm-white background, not cream
        ink: '#232620',       // near-black charcoal with a green undertone
        sage: '#7C9082',      // muted sage — the "treatment" color
        sageDeep: '#4E5F52',  // deep sage for text-on-light accents
        coral: '#E8735C',     // warm coral-pink — the single CTA accent
        mist: '#E4E7DF',      // pale sage-grey for dividers/cards
        gold: '#C9A15E'       // premium-tier accent, used sparingly
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        layer: '2px'
      }
    }
  },
  plugins: []
};

export default config;
