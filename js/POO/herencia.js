class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }
  decirAltura() {
    console.log(
      `Yo mido ${this.altura} y yo soy ${this.altura >= 1.8 ? "alt@" : "baj@"}`
    );
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
  }
}

var brandon = new Persona("Brandon", "Domínguez", 1.8);
var sheily = new Persona("Sheily", "Domínguez", 1.7);
var dianna = new Persona("Dianna", "Domínguez", 1.64);

var brandon = new Desarrollador("Brandon", "Domínguez", 1.8);
var sheily = new Desarrollador("Sheily", "Domínguez", 1.7);
var dianna = new Desarrollador("Dianna", "Domínguez", 1.64);

brandon.saludar() + brandon.decirAltura();
sheily.saludar() + sheily.decirAltura();
dianna.saludar() + dianna.decirAltura();
