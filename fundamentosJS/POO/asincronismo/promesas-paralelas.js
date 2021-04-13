const API_URL = "https://pokeapi.co/api/v2/";
const POKEMON_URL = "pokemon/:name";

const opts = { crossDomain: true };

function obtenerPokemon(name) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${POKEMON_URL.replace(":name", name)}`;
    $.get(url, opts, function (data){
        resolve(data)
    })
    .fail(() => reject(name))
  })
}

function onError(name){
    console.log(`Sucedió un error al obtener el pokemón ${name}` )
}

var pokemones = ["pikachu", "gliscor", "zoroark", "metagross", "goodra", "snorlax", "lucario", "mewtwo", "garchomp", "eternatus", "mew", "arceus"]
var promesas = pokemones.map(nombre => obtenerPokemon(nombre))

Promise.all(promesas).then(pokemones => {
    for(pokemon of pokemones){
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`)
    }
}).catch(onError)