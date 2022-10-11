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
    return console.log(`${this.name.toUpperCase()}!!!!.`)
  }
}

export const charmander = new Pokemon(4, 'pepito charmander')