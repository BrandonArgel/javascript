// no terminado

const URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'pokemon/:name'

const responseFn = response => {
  response.forEach( respuesta => respuesta.json().then( pokemonFn ) )
}
const pokemonFn = pokemon => {console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)}.${pokemon.weight.toString().charAt(pokemon.weight.toString().length-1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`)}
const errorFn = error => {console.error('Error: ', error)}

const nombres = Array.from(["pikachu", "gliscor", "zoroark", "metagross", "goodra", "snorlax", "lucario", "mewtwo", "garchomp", "eternatus", "mew", "arceus"])

let allPromesas = nombres.map( value => {
  let URL_FULL = `${URL}${PEOPLE_URL.replace(':name', value)}`
  return fetch( URL_FULL )
})

Promise.all(allPromesas)
  .then( responseFn )
  .catch( errorFn )
