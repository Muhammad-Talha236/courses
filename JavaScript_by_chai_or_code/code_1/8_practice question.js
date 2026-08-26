// let price = "500";
// let quantity = "3";

// let totalCost = Number(price) * Number(quantity);
// console.log("Total Cost: " + totalCost); // Output: Total Cost: 1500


// let number = -3;

// if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid number.");
// } 
// else if (number > 0) {
//     console.log("The number is positive.");
// } 
// else if (number < 0) {
//     console.log("The number is negative.");
// } 
// else {
//     console.log("The number is zero.");
// }

// // Q60. Write a program that checks whether a number is even or odd.

// let numbers = 5
// if (numbers % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// // Q62. Create a program that checks username and password.

// let username = "admin";
// let password = "password123";

// let inputUsername = "admin";
// let inputPassword = "password123";

// if(inputUsername === username && inputPassword === password) {
//     console.log("Login successful!");
// }
// else {
//     console.log("Invalid username or password.");
// }

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// for(let i=10;i>0;i--){
//     console.log(i);
// }

// for(let i=0;i<50;i++){
//    if(i%2==0){
//     console.log(`number is even ${i}`);

//    }
//    else{
//     console.log(`number is odd ${i}`);
//    }
// }

// let sum = null;
// for(let i=0;i<100;i++){
//    sum+=i;
// }
// console.log(`sum of first 100 numbers is ${sum}`);

// for(let i=1;i<=10;i++){
//    console.log(`2 * ${i}  is ${2*i}`);
// }

// let fac = 5
// let answer =1;
// while(fac>0){
//   answer = answer * fac;
//   fac--;
// }
// console.log(answer);

// let reverse = 83748;
// let reverse_number = 0;
// let count =0;
// while(reverse!=0){
//      let temp = reverse % 10;
//      reverse_number = (reverse_number * 10) + temp;
//      console.log(reverse_number," ",  temp)
//      reverse = Math.trunc(reverse/ 10);
//      count++;
// } 
// console.log(`this is the reverse number ${reverse_number}`);
// console.log(`exact number of digits ${count}`);


let name = "   muhammad,talha"
console.log(name.length);
console.log(name[0]);
console.log(name[name.length-1]);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.includes("talha"))
console.log(name.includes("v"));
console.log(name.trim());

console.log(name.replace("muhammad","Muhammad"))
console.log(name.split(","))

const password = "JavaScript123";

if(password.includes("JavaScript")){
   if(password.length>=8){
    if(/\d/.test(password)){
    console.log("ok")
}
}
}

const sentence = "  JavaScript is a powerful   programming language";

let arrays = sentence.split(" ");
console.log(arrays.length);

const word = "JavaScript";

let i = 0;

while (i < word.length && word[i] != " ") {
    i++;
}

console.log(i);


let str = "Muhammad Talha";

let newstring = str.split("");
console.log(newstring)
let start = 0;
let end = newstring.length - 1;
console.log(end)
while (start <= end) {
    let temp = newstring[start];

    newstring[start] = newstring[end];
    newstring[end] = temp;

    start++;
    end--;
}

console.log(newstring.join(""));