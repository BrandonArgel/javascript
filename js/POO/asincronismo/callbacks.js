const API_URL = "https://pokeapi.co/api/v2/";
const PEOPLE_URL = "pokemon/:name";

const opts = { crossDomain: true };

function obtenerPersonaje(name, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":name", name)}`;

  $.get(url, opts, callback).fail(() => {
      console.log(`Sucedió un error. No se pudieron obtener los datos del pokemón ${name}`)
  })
}

obtenerPersonaje("pikachu", function (pokemon) {
  var weightInitial = pokemon.weight;
  var weight = weightInitial.toString().slice(0, -1);
  console.log(
    `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
  );

  obtenerPersonaje("ditto", function (pokemon) {
    var weightInitial = pokemon.weight;
    var weight = weightInitial.toString().slice(0, -1);
    console.log(
      `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
    );

    obtenerPersonaje("gliscor", function (pokemon) {
      var weightInitial = pokemon.weight;
      var weight = weightInitial.toString().slice(0, -1);
      console.log(
        `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
      );

      obtenerPersonaje("zoroark", function (pokemon) {
        var weightInitial = pokemon.weight;
        var weight = weightInitial.toString().slice(0, -1);
        console.log(
          `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
        );

        obtenerPersonaje("metagross", function (pokemon) {
          var weightInitial = pokemon.weight;
          var weight = weightInitial.toString().slice(0, -1);
          console.log(
            `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
          );

          obtenerPersonaje("goodra", function (pokemon) {
            var weightInitial = pokemon.weight;
            var weight = weightInitial.toString().slice(0, -1);
            console.log(
              `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
            );

            obtenerPersonaje("snorlax", function (pokemon) {
              var weightInitial = pokemon.weight;
              var weight = weightInitial.toString().slice(0, -1);
              console.log(
                `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
              );

              obtenerPersonaje("lucario", function (pokemon) {
                var weightInitial = pokemon.weight;
                var weight = weightInitial.toString().slice(0, -1);
                console.log(
                  `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
                );

                obtenerPersonaje("mewtwo", function (pokemon) {
                  var weightInitial = pokemon.weight;
                  var weight = weightInitial.toString().slice(0, -1);
                  console.log(
                    `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
                  );

                  obtenerPersonaje("garchomp", function (pokemon) {
                    var weightInitial = pokemon.weight;
                    var weight = weightInitial.toString().slice(0, -1);
                    console.log(
                      `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
                    );

                    obtenerPersonaje("eternatus", function (pokemon) {
                      var weightInitial = pokemon.weight;
                      var weight = weightInitial.toString().slice(0, -1);
                      console.log(
                        `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
                      );

                      obtenerPersonaje("mew", function (pokemon) {
                        var weightInitial = pokemon.weight;
                        var weight = weightInitial.toString().slice(0, -1);
                        console.log(
                          `Hola, yo soy el pokemón ${pokemon.name}, yo peso ${weight} kilogramos y mi habilidad principal es ${pokemon.abilities[0].ability.name}`
                        );

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
