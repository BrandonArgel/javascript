class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
    /* 
      var nombre = this.nombre
      var apellido = this.apellido
    */
    var {nombre, apellido, altura} = this

    console.log(`Hola, me llamo ${nombre} ${apellido} y mido ${altura} metros`);
    if(fn){
      fn(nombre, apellido)
    }
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar(fn) {
    var nombre = this.nombre
    var apellido = this.apellido
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
    if(fn){
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if(esDev){
    console.log(`Ah no sabía que eras desarrollador`);
  }
}

var brandon = new Desarrollador("Brandon Argel", "Verdeja Domínguez", 1.8);
var sheily = new Persona("Sheily Sashell", "Verdeja Domínguez", 1.7);
var dianna = new Persona("Dianna", "Verdeja Domínguez", 1.64);

brandon.saludar(responderSaludo)
sheily.saludar(responderSaludo)
dianna.saludar(responderSaludo)
