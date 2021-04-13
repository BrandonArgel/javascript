// Spread Operator
const obj = {
  name: "Brandon",
  age: 18,
  country: "México",
};

let { name, ...all } = obj;
console.log(all);

// Porpagation Properties
const person = {
  name: "Oscar",
  age: 32,
};

const personInformation = {
  ...person,
  country: "MX",
};
console.log(`personInformation: `, personInformation);

// Promise Finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 2000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizó"));

// Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-02-22');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year,month, day);

// Más optimizado
const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
const match = regexData.exec('2018-04-20');
const { year, month, day } = match.groups;

console.log(year, month, day);