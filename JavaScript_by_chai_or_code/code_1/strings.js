// const name = "John Doe";
// const greeting = `Hello, ${name.toUpperCase()}! Welcome to our website.`;

// console.log(greeting);

// console.log(name.length + " " + greeting); // Concatenation using + operator
// console.log(name[0] + " " + greeting);// Concatenation using + operator

// console.log(`The length of the name is: ${name.length}`); // Using template literals
// console.log(`The first character of the name is: ${name[0]}`); // Using template literals
// console.log(`The last character of the name is: ${name[name.length - 1]}`); // Using template literals
// console.log(`The name in lowercase is: ${name.toLowerCase()}`); // Using template literals
// console.log(`The name in uppercase is: ${name.toUpperCase()}`);
// console.log(`The name with replaced characters is: ${name.replace("John", "Jane")}`); // Using template literals
// console.log(`The name with replaced characters is: ${name.replace("Doe", "Smith")}`); // Using template literals
// console.log(`The name with replaced characters is: ${name.replace("John", "Jane").replace("Doe", "Smith")}`); // Using template literals
// console.log(`The name with replaced characters is: ${name.replace(/o/g, "0")}`); // Using template literals
// console.log(`The name with replaced characters is: ${name.replace(/o/g, "0").replace(/e/g, "3")}`);
// console.log(`The name with replaced characters is: ${name.replace(/o/g, "0").replace(/e/g, "3").replace(/J/g, "j")}`);






// let name = "Muhammad Talha"

// console.log(name);


let name = "Muhammad Talha"

console.log(name.length); // print the length of the string

console.log(name[0]); // print the first character of the string

console.log(name[name.length - 1]); // print the last character of the string

console.log(name.toLowerCase()); // print the string in lowercase

console.log(name.toUpperCase()); // print the string in uppercase

console.log(name.replace("Muhammad", "Talha")); // replace a substring in the string

console.log(name.replace(/a/g,"A")); // replace all occurrences of a character in the string

console.log(name.replace(/a/g,"A").replace(/h/g,"H")); // replace all occurrences of multiple characters in the string  

console.log(`My name is ${name}`); // print the string using template literals

console.log(name.includes("Talha")); // check if the string includes a substring

console.log(name.startsWith("Muhammad")); // check if the string starts with a substring

console.log(name.endsWith("Talha")); // check if the string ends with a substring

console.log(name.indexOf("Talha")); // get the index of a substring in the string

console.log(name.lastIndexOf("a")); // get the last index of a character in the string

console.log(name.split(" ")); // split the string into an array of substrings

console.log(name.trim()); // remove whitespace from both ends of the string

console.log(name.charAt(0)); // get the character at a specific index in the string

console.log(name.slice(0, 8)); // get a substring of the string from index 0 to 8

console.log(name.substring(0, 8)); // get a substring of the string from index 0 to 8

console.log(name.search("Talha")); // search for a substring in the string and return its index

console.log(name.match(/a/g)); // match a regular expression in the string and return an array of matches