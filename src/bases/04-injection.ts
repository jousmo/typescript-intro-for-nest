import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface'
import { PokeApiAdapter } from '../api/pokeApi.adapter'

export class Pokemon {
  constructor(
    private readonly http: PokeApiAdapter
  ) {}

  async getMoves(): Promise<Move[]> {
    const { moves } = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
    console.log("Moves2", moves)
    return moves
  }
}

const pokeApi = new PokeApiAdapter()

export const bulbalsor = new Pokemon(pokeApi)

console.log("Ejale", bulbalsor.getMoves())
