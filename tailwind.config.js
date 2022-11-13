/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    { pattern: /bg-(normal|fighting|flying|poison|ground|rock|bug|ghost|steel|fire|water|grass|electric|psychic|ice|dragon|dark|fairy|fourTimes|twoTimes|halfTimes|quarterTimes|immune)/ }
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora']
      },
      fontSize: {
        tiny: ['10px', '12px']
      },
      colors: {
        background: '#2b2b2b',
        normal: '#a8a878',
        fighting: '#c03028',
        flying: '#a890f0',
        poison: '#a040a0',
        ground: '#e0c068',
        rock: '#b8a038',
        bug: '#a8b820',
        ghost: '#705898',
        steel: '#b8b8d0',
        fire: '#f08030',
        water: '#6890f0',
        grass: '#78c850',
        electric: '#f8d030',
        psychic: '#f85888',
        ice: '#98d8d8',
        dragon: '#7038f8',
        dark: '#705848',
        fairy: '#ee99ac',
        fourTimes: '#73d216',
        twoTimes: '#4e9a06',
        halfTimes: '#a40000',
        quarterTimes: '#7c0000',
        immune: '#2e3436'
      }
    }
  },
  plugins: []
};
