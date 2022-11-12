const types = {
  normal: {
    label: 'normal',
    immuneTo: ['ghost'],
    resists: [],
    weakTo: ['fighting']
  },
  fire: {
    label: 'fire',
    immuneTo: [],
    resists: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'],
    weakTo: ['water', 'ground', 'rock']
  },
  water: {
    label: 'water',
    immuneTo: [],
    resists: ['fire', 'water', 'ice', 'steel'],
    weakTo: ['electric', 'grass']
  },
  electric: {
    label: 'electric',
    immuneTo: [],
    resists: ['electric', 'flying', 'steel'],
    weakTo: ['ground']
  },
  grass: {
    label: 'grass',
    immuneTo: [],
    resists: ['water', 'electric', 'grass', 'ground'],
    weakTo: ['fire', 'ice', 'poison', 'flying', 'bug']
  },
  ice: {
    label: 'ice',
    immuneTo: [],
    resists: ['ice'],
    weakTo: ['fire', 'fighting', 'rock', 'steel']
  },
  fighting: {
    label: 'fighting',
    immuneTo: [],
    resists: ['bug', 'rock', 'dark'],
    weakTo: ['flying', 'psychic', 'fairy']
  },
  poison: {
    label: 'poison',
    immuneTo: [],
    resists: ['grass', 'fighting', 'poison', 'bug', 'fairy'],
    weakTo: ['ground', 'psychic']
  },
  ground: {
    label: 'ground',
    immuneTo: ['electric'],
    resists: ['poison', 'rock'],
    weakTo: ['water', 'grass', 'ice']
  },
  flying: {
    label: 'flying',
    immuneTo: ['ground'],
    resists: ['grass', 'fighting', 'bug'],
    weakTo: ['electric', 'ice', 'rock']
  },
  psychic: {
    label: 'psychic',
    immuneTo: [],
    resists: ['fighting', 'psychic'],
    weakTo: ['bug', 'ghost', 'dark']
  },
  bug: {
    label: 'bug',
    immuneTo: [],
    resists: ['grass', 'fighting', 'ground'],
    weakTo: ['fire', 'flying', 'rock']
  },
  rock: {
    label: 'rock',
    immuneTo: [],
    resists: ['normal', 'fire', 'poison', 'flying'],
    weakTo: ['water', 'grass', 'fighting', 'ground', 'steel']
  },
  ghost: {
    label: 'ghost',
    immuneTo: ['normal', 'fighting'],
    resists: ['poison', 'bug'],
    weakTo: ['ghost', 'dark']
  },
  dragon: {
    label: 'dragon',
    immuneTo: [],
    resists: ['fire', 'water', 'electric', 'grass'],
    weakTo: ['ice', 'dragon', 'fairy']
  },
  dark: {
    label: 'dark',
    immuneTo: ['psychic'],
    resists: ['ghost', 'dark'],
    weakTo: ['fighting', 'bug', 'fairy']
  },
  steel: {
    label: 'steel',
    immuneTo: ['poison'],
    resists: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'],
    weakTo: ['fire', 'fighting', 'ground']
  },
  fairy: {
    label: 'fairy',
    immuneTo: ['dragon'],
    resists: ['fighting', 'bug', 'dark'],
    weakTo: ['poison', 'steel']
  }
};

export default types;
