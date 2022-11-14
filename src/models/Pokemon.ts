import PokemonType from './PokemonType';
import Stats from './Stats';

interface Pokemon {
  name: string,
  nationalDexNumber: number,
  types: PokemonType[],
  stats?: Stats
  alternateForms?: string[],
  scarletExclusive?: boolean,
  violetExclusive?: boolean
}

export default Pokemon;
