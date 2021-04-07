// Flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(0));

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

// FlatMap
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));

// Trim
let hello = "                      hello world";
console.log(hello);
console.log(hello.trimStart());

let hello2 = "hello world                  ";
console.log(hello2);
console.log(hello2.trimEnd());

// Optional catch biding
try {

} catch {
  error;
}

// From Entries
let entries = [['name', 'Brandon'],['age', 18 ]];
console.log(Object.fromEntries(entries));

// Symbol Object
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);