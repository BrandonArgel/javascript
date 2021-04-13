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

async function obtenerPokemones(){
    var nombres = ["pikachu", "gliscor", "zoroark", "metagross", "goodra", "snorlax", "lucario", "mewtwo", "garchomp", "eternatus", "mew", "arceus"]
    var promesas = nombres.map(nombre => obtenerPokemon(nombre))
    try {
        var pokemones = await Promise.all(promesas)
        
        for(pokemon of pokemones){
            console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`)
        }
    } catch (name) {
        onError(name)
    }
}

obtenerPokemones()