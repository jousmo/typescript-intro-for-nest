class NewPokemon {
  scream() {
    console.log(`05 - No quiero !!!.`)
  }

  speak() {
    console.log(`05 - No quiero hablar !.`)
  }
}

export const MyDecorator = () => {
  return (target: Function): any => {
    console.log('05 - Target', target)
    return NewPokemon
  }
}

@MyDecorator()
export class Pokemon {
  constructor (
    private readonly id: number,
    public name: string
  ) {}

  scream() {
    console.log(`05 - ${this.name.toUpperCase()} !!!.`)
  }

  speak() {
    console.log(`05 - ${this.name} ${this.name} ${this.id} !.`)
  }
}


export const charmander = new Pokemon(1, 'charmander')

charmander.scream()
charmander.speak()