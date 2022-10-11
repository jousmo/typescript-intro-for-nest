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
}

export const charmander = new Pokemon(4, 'pepito charmander')
