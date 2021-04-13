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
        console.log(`Yo mido ${this.altura} y yo soy ${this.altura >= 1.8 ? "alt@" : "baj@"}`);
    }
}



var brandon = new Persona('Brandon', 'Domínguez', 1.80) //Ojalá jajaja
var sheily = new Persona('Sheily', 'Domínguez', 1.70)
var dianna = new Persona('Dianna', 'Domínguez', 1.64)

brandon.saludar() + brandon.decirAltura()
sheily.saludar() + sheily.decirAltura()
dianna.saludar() + dianna.decirAltura()