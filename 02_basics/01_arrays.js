const numberArray = [0, 1, 2, 3, 4, 5];

const myHero = ["A", "B", "C"];

const myArray = new Array(1, 2, 3, 4, 5, 6);

// console.log(myArray[2]);

// array method

// myArray.push(7);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.shift();
// console.log(myArray.includes(0));
// console.log(myArray.indexOf(4));
// console.log(myArray);

// console.log("A ", myArray);
// const myNewArray1 = myArray.slice(0, 3);
// console.log("B ", myArray);
// console.log(myNewArray1);
// const myNewArray2 = myArray.splice(0, 3);
// console.log(myNewArray2);
// console.log("c ", myArray);

const marvel_heros = ["ironman", "captain", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const newHerosArray = marvel_heros.concat(dc_heros);
console.log(newHerosArray);

const newArray = [...marvel_heros, ...dc_heros];
console.log(newArray);

console.log(Array.isArray("Sanit"));
console.log(Array("Sanit"));
console.log(Array.from("Sanit"));

const complexSituation = [1, 2, 3, ["Sabit", "amir", [1, "Ziyad"]], ["0348"]];

const solved = complexSituation.flat(Infinity);
console.log(solved);
