
// block scope
// if(true){
//     let age = 21; // not accessible outside the block
// }
// console.log(age); // output: not defined


if(true){
    var name = "string"; // accessible outside the function
}
console.log(name) // output: string

// Redeclaration

var name = "Ali";
var name = "Ahmed";

console.log(name); // no error

//let name = "Ali";
let names = "Ahmed";

console.log(name); // error

//Reassignment

// both allow

var age = 20;

age = 25;

console.log(age);

let ages = 20;

ages = 25;

console.log(age);

//hoisting

console.log(name);

var name = "Talha";
// JavaScript internally sees:
// var name;

// console.log(name);

// name = "Talha";
// output undefined

console.log(name);

let name = "Talha";

//output noreference
//temperal dead zone 

