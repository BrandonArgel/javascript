const API_URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'pokemon/:name'

const opts = {crossDomain: true}

const onPeopleResponse = function(pokemon){
console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight} y mi habilidad principal es ${pokemon.abilities[0].ability.name}`)
}

function obtenerPersonaje (name){
const url = `${API_URL}${PEOPLE_URL.replace(':name', name)}`

$.get(url, opts, onPeopleResponse) 
}

obtenerPersonaje('pikachu')
obtenerPersonaje('ditto')
obtenerPersonaje('gliscor')
obtenerPersonaje('zoroark')
obtenerPersonaje('metagross')
obtenerPersonaje('goodra')
obtenerPersonaje('snorlax')
obtenerPersonaje('lucario')
obtenerPersonaje('mewtwo')
obtenerPersonaje('garchomp')
obtenerPersonaje('eternatus')
obtenerPersonaje('mew')
obtenerPersonaje('arceus')