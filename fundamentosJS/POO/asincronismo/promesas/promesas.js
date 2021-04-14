const API_URL = "https://pokeapi.co/api/v2/";
const PEOPLE_URL = "pokemon/:name";

const opts = { crossDomain: true };

function obtenerPokemon(name) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":name", name)}`;
    $.get(url, opts, function (data){
        resolve(data)
    })
    .fail(() => reject(name))
  })
}

function onError(name){
    console.log(`Sucedió un error al obtener el pokemón ${name}` )
}

obtenerPokemon("pikachu")
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("ditto")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("gliscor")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("zoroark")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("metagross")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("goodra")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("snorlax")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("lucario")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("mewtwo")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("garchomp")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("eternatus")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("mew")
    })
    .then(pokemon => {
        console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight.toString().slice(0, -1)} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
        return obtenerPokemon("arceus")
    })
    .catch(onError)

    console.log("Hola soy brandon <3");
