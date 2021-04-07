// Object entries, devuelve los valores de una matriz
const data = {
    frontend: 'Brandon',
    backend: 'Brand',
    design: 'Brandargel'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values, devuelve los valores de un objeto a un arreglo
const data = {
    frontend: 'Brandon',
    backend: 'Brand',
    design: 'Brandargel'
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding, para agregar contenido antes padStart() o después padEnd() de un String
const string = 'hello';
console.log(string.padStart(8,'hi '));
console.log(string.padEnd(13,' Brandon'));
console.log('food'.padEnd(13,' Brandon'));

/* Trailing coma, para poder agregar después otra instancia de un objeto sin errores 
    se coloca la coma al final*/
const data = {
    frontend: 'Brandon',
    backend: 'Brand',
    design: 'Brandargel',
}

// Async Await
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false)
            ? setTimeout(()=> resolve('Brandon Argel'),2500)
            :reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

// Async ejecutado correctamente
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();