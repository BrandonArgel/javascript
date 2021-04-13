// Arrow Functions
const MAYOR_DE_EDAD = 18;

var persona = {
  nombre: "Brandon",
  apellido: "Verdeja",
  edad: 18,
  direccion: "Mi casa",
};

const esMayorDeEdad = ({ edad }) => edad >= MAYOR_DE_EDAD;

const permitirAcceso = ({ edad }) =>
  !esMayorDeEdad({ edad })
    ? console.log("Acceso denegado")
    : console.log("Acceso Concedido");

permitirAcceso(persona);

const numMax = 10;
const numMin = 1;

const numRandom = () => {
  Math.round(Math.random() * (numMax - numMin) + numMin);
  console.log((Math.random() * numMax).toFixed(1));
};
// redondeamos el decimal que nos devuelve envolviendo todo en Math.round

numRandom(); // 8
numRandom(); // 5
numRandom(); // 1
numRandom(); // 10

var brandon = {
  nombre: "Brandon",
  apellido: "Verdeja",
  edad: 18,
  peso: 55,
};

var diasDelAño = 365;
var incrementoPeso = 0.2;
const aumentarDePeso = (persona) => (persona.peso += incrementoPeso);
const bajarDePeso = (persona) => (persona.peso -= incrementoPeso);

function cambioPeso(persona) {
  for (var i = 1; i <= diasDelAño; i++) {
    var ramdom = Math.random();
    if (ramdom <= 0.25) {
      aumentarDePeso(persona);
    } else if (ramdom <= 0.5) {
      bajarDePeso(persona);
    }
  }
}

console.log(`Al inicio del año ${brandon.nombre} pesa ${brandon.peso} kg`);
cambioPeso(brandon);

console.log(
  `Al inicio del año ${brandon.nombre} pesa ${brandon.peso.toFixed(1)} kg`
);

var ver = 0
const llueve = () => Math.random() < 0.25

do {
  ver++
} while(!llueve())

console.log(`Fui a ver si llovia ${ver} ${ver === 1 ? "vez" : "veces"}`)

/* HORÓSCOPOS */

const signo = prompt('¿Cual es tu signo?')

const horoscopos = [
  '21 marzo - 19 abril',
  '20 abril - 20 mayo',
  '21 mayo - 20 junio',
  '21 junio - 22 julio',
  '23 julio - 22 agosto',
  '23 agosto - 22 septiembre',
  '23 septiembre - 22 octubre',
  '23 octubre - 21 noviembre',
  '22 noviembre - 21 diciembre',
  '22 diciember - 19 enero',
  '20 enero - 18 febrero',
  '19 febrero - 20 marzo'
]

const calcularSigno = function (signo) {
  switch (signo.toLowerCase()) {
    case 'aries':
      console.log(horoscopos[0])
      break
    case 'tauro':
      console.log(horoscopos[1])
      break
    case 'géminis':
    case 'geminis':
      console.log(horoscopos[2])
      break
    case 'cáncer':
    case 'cancer':
      console.log(horoscopos[3])
      break
    case 'leo':
      console.log(horoscopos[4])
      break
    case 'virgo':
      console.log(horoscopos[5])
      break
    case 'libra':
      console.log(horoscopos[6])
      break
    case 'escorpión':
    case 'escorpion':
      console.log(horoscopos[7])
      break
    case 'sagitario':
      console.log(horoscopos[8])
      break
    case 'capricornio':
      console.log(horoscopos[9])
      break
    case 'acuario':
      console.log(horoscopos[10])
      break
    case 'piscis':
      console.log(horoscopos[11])
      break
    default:
      console.log('Ese signo no existe')
      break
  }
}

calcularSigno(signo)