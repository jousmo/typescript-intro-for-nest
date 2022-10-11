export const pokemonIds = [1, 20, 30, 40, 50, 60, 70]

interface Pokemon {
  id: number,
  name: string,
  age?: number
}

export const pikachu: Pokemon = {
  id: 1,
  name: 'pepito',
  age: 10
}

export const fire: Pokemon = {
  id: 2,
  name: 'fire',
  age: 20
}

export const pokemons: Pokemon[] = []
pokemons.push(pikachu, fire)
