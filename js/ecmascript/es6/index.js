// Default Params y Concatenación
// Parámetros por defecto
// Antes de EC6
function newFunction(name, age, country) {
  var name = name || "Oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// Después de ES6
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

/* Se pueden llamar de dos formas, dejándolas vacías para que deje el nombre por defecto,
 o asignándole lo valores que queramos. */

newFunction2();
newFunction2("Brandon", 18, "MX");

// Concatenación antes de EC6
let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
// Templates Literales
// Comillas francesas ``
// Se ponen con Atl Gr + }
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// LET y CONST, Multilínea, Spread Operator y Desestructuración
// Antes de EC6
let lorem = "Nunca \n" + "pares de \n" + "aprender.";
// Después de EC6
let lorem2 = `Otra frase épica que necesitamos
ahora es otra frase épica
`;
console.log(lorem, lorem2);

// Desestructuración de un objeto de JavaScript
let person = {
  name: "Brandon",
  age: 18,
  country: "MX",
};

// Antes de EC6
console.log(person.name, person.age, person.country);

// Después de EC6
let { name, age, country } = person;
console.log(name, age, country);

// Spread Operator
let team1 = ["Brandon", "Juan", "Karen", "Angel"];
let team2 = ["Omar", "Jose", "Viviana", "Goretti"];

let education = ["David", ...team1, ...team2];

console.log(education);
/* Var es global y let solo vive dentro del bloque en el que fue declarado y entra en la llamada 
(TDZ) Temporal Dead Zone, osea que no se ejecutará hasta que entre a ese bloque de código */
{
  var global = "Global var";
}
{
  let globallet = "Global let";
  console.log(globallet);
}
console.log(global);

// Una constante no puede cambiar de valor, marcaría un error
const a = "b";
a = "a";
console.log(a);

// Arrow Functions, Promesas y Parámetros en objetos
let name = "Brandon";
let age = 18;
// Antes de EC6
obj = { name: name, age: age };
// Después de EC6
obj2 = { name, age };
console.log(obj, obj2);

// Arrow Functions
const name = [
  { name: "Brandon", age: 18 },
  { name: "MIT", age: 20 },
];
// Antes EC6
let listOfNames = name.map(function (item) {
  console.log(item.name);
});
// Después EC6
let listOfNames2 = name.map((item) => console.log(item.name));
// Otra forma delistar los nombres
const listOfNames3 = (name, age) => {};
// Otra forma
const listOfNames4 = (name) => {};
// Sólo para un elemento del item
const square = (num) => num * num;

//Combinación de arrow function con desestructuración por parámetro
const persona = {
  nombre: "Brandon",
  apellido: "Argel",
  edad: 18,
};

function saludar({ nombre, apellido, edad }) {
  const saludo = `Hola!, mi nombre es ${nombre} ${apellido} y tengo ${edad} años, ¡Saludos desde México!`;

  console.log(saludo);
}
saludar(persona);

// Asincronismo: JavaScript no corre sincronizado
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Woops!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Clases, Módulos y Generadores
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// Import
const hello = require("./module");
console.log(hello());

// Generators
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
