import typeLabels from './typeLabels';

const types = {
  normal: {
    label: typeLabels.normal,
    immuneTo: [typeLabels.ghost],
    resists: [],
    weakTo: [typeLabels.fighting]
  },
  fire: {
    label: typeLabels.fire,
    immuneTo: [],
    resists: [typeLabels.fire, typeLabels.grass, typeLabels.ice, typeLabels.bug, typeLabels.steel, typeLabels.fairy],
    weakTo: [typeLabels.water, typeLabels.ground, typeLabels.rock]
  },
  water: {
    label: typeLabels.water,
    immuneTo: [],
    resists: [typeLabels.fire, typeLabels.water, typeLabels.ice, typeLabels.steel],
    weakTo: [typeLabels.electric, typeLabels.grass]
  },
  electric: {
    label: typeLabels.electric,
    immuneTo: [],
    resists: [typeLabels.electric, typeLabels.flying, typeLabels.steel],
    weakTo: [typeLabels.ground]
  },
  grass: {
    label: typeLabels.grass,
    immuneTo: [],
    resists: [typeLabels.water, typeLabels.electric, typeLabels.grass, typeLabels.ground],
    weakTo: [typeLabels.fire, typeLabels.ice, typeLabels.poison, typeLabels.flying, typeLabels.bug]
  },
  ice: {
    label: typeLabels.ice,
    immuneTo: [],
    resists: [typeLabels.ice],
    weakTo: [typeLabels.fire, typeLabels.fighting, typeLabels.rock, typeLabels.steel]
  },
  fighting: {
    label: typeLabels.fighting,
    immuneTo: [],
    resists: [typeLabels.bug, typeLabels.rock, typeLabels.dark],
    weakTo: [typeLabels.flying, typeLabels.psychic, typeLabels.fairy]
  },
  poison: {
    label: typeLabels.poison,
    immuneTo: [],
    resists: [typeLabels.grass, typeLabels.fighting, typeLabels.poison, typeLabels.bug, typeLabels.fairy],
    weakTo: [typeLabels.ground, typeLabels.psychic]
  },
  ground: {
    label: typeLabels.ground,
    immuneTo: [typeLabels.electric],
    resists: [typeLabels.poison, typeLabels.rock],
    weakTo: [typeLabels.water, typeLabels.grass, typeLabels.ice]
  },
  flying: {
    label: typeLabels.flying,
    immuneTo: [typeLabels.ground],
    resists: [typeLabels.grass, typeLabels.fighting, typeLabels.bug],
    weakTo: [typeLabels.electric, typeLabels.ice, typeLabels.rock]
  },
  psychic: {
    label: typeLabels.psychic,
    immuneTo: [],
    resists: [typeLabels.fighting, typeLabels.psychic],
    weakTo: [typeLabels.bug, typeLabels.ghost, typeLabels.dark]
  },
  bug: {
    label: typeLabels.bug,
    immuneTo: [],
    resists: [typeLabels.grass, typeLabels.fighting, typeLabels.ground],
    weakTo: [typeLabels.fire, typeLabels.flying, typeLabels.rock]
  },
  rock: {
    label: typeLabels.rock,
    immuneTo: [],
    resists: [typeLabels.normal, typeLabels.fire, typeLabels.poison, typeLabels.flying],
    weakTo: [typeLabels.water, typeLabels.grass, typeLabels.fighting, typeLabels.ground, typeLabels.steel]
  },
  ghost: {
    label: typeLabels.ghost,
    immuneTo: [typeLabels.normal, typeLabels.fighting],
    resists: [typeLabels.poison, typeLabels.bug],
    weakTo: [typeLabels.ghost, typeLabels.dark]
  },
  dragon: {
    label: typeLabels.dragon,
    immuneTo: [],
    resists: [typeLabels.fire, typeLabels.water, typeLabels.electric, typeLabels.grass],
    weakTo: [typeLabels.ice, typeLabels.dragon, typeLabels.fairy]
  },
  dark: {
    label: typeLabels.dark,
    immuneTo: [typeLabels.psychic],
    resists: [typeLabels.ghost, typeLabels.dark],
    weakTo: [typeLabels.fighting, typeLabels.bug, typeLabels.fairy]
  },
  steel: {
    label: typeLabels.steel,
    immuneTo: [typeLabels.poison],
    resists: [typeLabels.normal, typeLabels.grass, typeLabels.ice, typeLabels.flying, typeLabels.psychic, typeLabels.bug, typeLabels.rock, typeLabels.dragon, typeLabels.steel, typeLabels.fairy],
    weakTo: [typeLabels.fire, typeLabels.fighting, typeLabels.ground]
  },
  fairy: {
    label: typeLabels.fairy,
    immuneTo: [typeLabels.dragon],
    resists: [typeLabels.fighting, typeLabels.bug, typeLabels.dark],
    weakTo: [typeLabels.poison, typeLabels.steel]
  }
};

export default types;
