import './style.css'
import { templateString } from './bases/01-types'
import { pokemonIds, pikachu, pokemons } from './bases/02-objects'
import { charmander } from './bases/03-classes'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Esto es asombroso</h1>
    <h2>Abre tu devtools</h2>
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
    <p>
      ${JSON.stringify(charmander)}
    </p>
    <p>
      Hey soy un getter:
      ${charmander.imageUrl}
    </p>
    <p>
      Metodos:
      ${charmander.scream()}
    </p>
  </div>
`
