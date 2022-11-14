import PokemonType from './PokemonType';
import Stat from './Stat';

interface Pokemon {
  name: string,
  nationalDexNumber: number,
  types: PokemonType[],
  stats?: Stat[]
  alternateForms?: string[],
  scarletExclusive?: boolean,
  violetExclusive?: boolean
}

export default Pokemon;
