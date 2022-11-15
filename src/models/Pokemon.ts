import PokemonType from './PokemonType';
import Stats from './Stats';
import AlternateForm from './AlternateForm';

interface Pokemon {
  name: string,
  nationalDexNumber: number,
  types: PokemonType[],
  stats?: Stats
  alternateForms?: AlternateForm[],
  scarletExclusive?: boolean,
  violetExclusive?: boolean
}

export default Pokemon;
