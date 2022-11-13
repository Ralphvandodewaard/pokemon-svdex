import PokemonType from './PokemonType';

interface Pokemon {
  name: string,
  types: PokemonType[],
  nationalDexNumber: number,
  scarletExclusive?: boolean,
  violetExclusive?: boolean
}

export default Pokemon;
