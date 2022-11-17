/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    { pattern: /bg-types-(normal|fighting|flying|poison|ground|rock|bug|ghost|steel|fire|water|grass|electric|psychic|ice|dragon|dark|fairy)/ },
    { pattern: /bg-multipliers-(0|0.25|0.5|2|4)/ },
    { pattern: /bg-stats-(low|average|high|very-high|ultra-high)/ }
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
        neutral: {
          850: '#2B2B2B'
        },
        types: {
          normal: '#A8a878',
          fire: '#F08030',
          water: '#6890F0',
          electric: '#F8D030',
          grass: '#78C850',
          ice: '#98D8D8',
          fighting: '#C03028',
          poison: '#A040A0',
          ground: '#E0C068',
          flying: '#A890F0',
          psychic: '#F85888',
          bug: '#A8B820',
          rock: '#B8A038',
          ghost: '#705898',
          dragon: '#7038F8',
          dark: '#705848',
          steel: '#B8B8D0',
          fairy: '#EE99AC'
        },
        multipliers: {
          0: '#2E3436',
          0.25: '#7C0000',
          0.5: '#A40000',
          2: '#4E9A06',
          4: '#73D216'
        },
        stats: {
          low: '#FF7F0F',
          average: '#FFDD57',
          high: '#A0E515',
          'very-high': '#23CD5E',
          'ultra-high': '#00C2B8'
        }
      }
    }
  },
  plugins: []
};
