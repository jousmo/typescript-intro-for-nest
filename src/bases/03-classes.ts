import axios from 'axios'
import { PokeAPIResponse, Move } from '../interfaces/pokeapi-response.interface'

export class PokemonOld {
  public id: number
  public name: string

  constructor (id: number, name: string) {
    console.log('Constructor llamado')
    this.id = id
    this.name = name
  }
}

export class Pokemon {
  constructor (
    public readonly id: number,
    public readonly name: string
  ) {
    console.log('Constructor llamado')
  }

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}`
  }

  private speak(): any {
    return console.log(`${this.name} ${this.name}`)
  }

  scream(): any {
    console.log(this.speak())
    return `${this.name.toUpperCase()}!!!!.`
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
    console.log("Moves", data.moves)
    return data.moves
  }
}

export const charmander = new Pokemon(4, 'pepito charmander')

console.log(charmander.getMoves())
