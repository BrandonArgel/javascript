const API_URL = "https://pokeapi.co/api/v2/";
const PEOPLE_URL = "pokemon/:name";

const opts = { crossDomain: true };

function obtenerPersonaje(name, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":name", name)}`;

  $.get(url, opts, function (pokemon) {
    console.log(`Hola, yo soy el pokemón ${pokemon.name}, yo peso ${pokemon.weight} y mi habilidad principal es ${pokemon.abilities[0].ability.name}`);
    if(callback){
        callback()
    }
  });
}

// CALL BACK HELL 
obtenerPersonaje("pikachu", function () {
  obtenerPersonaje("ditto", function () {
    obtenerPersonaje("gliscor", function () {
      obtenerPersonaje("zoroark", function () {
        obtenerPersonaje("metagross", function () {
          obtenerPersonaje("goodra", function () {
            obtenerPersonaje("snorlax", function () {
              obtenerPersonaje("lucario", function () {
                obtenerPersonaje("mewtwo", function () {
                  obtenerPersonaje("garchomp", function () {
                    obtenerPersonaje("eternatus", function () {
                      obtenerPersonaje("mew", function () {
                        obtenerPersonaje("arceus");
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});