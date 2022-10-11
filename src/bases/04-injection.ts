import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface'
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter'

export class Pokemon {
  constructor(
    private readonly http: HttpAdapter
  ) {}

  async getMoves(): Promise<Move[]> {
    const { moves } = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
    console.log("Moves2", moves)
    return moves
  }
}

const pokeApiFetch = new PokeApiFetchAdapter()
const pokeApiAxios = new PokeApiAdapter()

export const bulbalsor = new Pokemon(pokeApiFetch)

console.log("Ejale", bulbalsor.getMoves())
