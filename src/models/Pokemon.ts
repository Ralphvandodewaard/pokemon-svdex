import PokemonType from './PokemonType';

interface Pokemon {
  name: string,
  types: PokemonType[],
  nationalDexNumber: number,
}

export default Pokemon;
