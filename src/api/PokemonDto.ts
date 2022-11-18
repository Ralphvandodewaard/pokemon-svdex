/* eslint-disable camelcase */
interface PokemonDto {
  id: number,
  name: string,
  stats: {
    base_stat: number,
    stat: {
      name: string,
      url: string
    }
  }[]
}

export default PokemonDto;
