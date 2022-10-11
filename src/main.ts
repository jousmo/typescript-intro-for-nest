import './style.css'
import { templateString } from './bases/01-types'
import { pokemonIds, pikachu, pokemons } from './bases/02-objects'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Esto es asombroso</h1>
    <p class="read-the-docs">
      ${templateString}
    </p>
    <p>
      ${pokemonIds.join(',')}
    </p>
    <p>
      ${JSON.stringify(pikachu)}
    </p>
    <p>
      ${JSON.stringify(pokemons)}
    </p>
  </div>
`