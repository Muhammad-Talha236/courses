let age = 19 //  Number
let name = "John" // String
let isStudent = true // Boolean
let hobbies = ["reading", "traveling", "coding"] // Array
let address = { street: "123 Main St", city: "New York" } // Object
let score = null // Null
let data // Undefined
let bigIntNum = 1234567890123456789012345678901234567890n // BigInt
let symbol = Symbol("unique") // Symbol
let func = function() { return "Hello, World!" } // Function
let regex = /ab+c/ // Regular Expression
let date = new Date() // Date
let map = new Map() // Map
let set = new Set() // Set
let weakMap = new WeakMap() // WeakMap
let weakSet = new WeakSet() // WeakSet
let promise = new Promise((resolve, reject) => { resolve("Success!") }) // Promise
let error = new Error("Something went wrong") // Error
let buffer = new ArrayBuffer(16) // ArrayBuffer
let dataView = new DataView(buffer) // DataView
let int8Array = new Int8Array(buffer) // Typed Array
let uint8Array = new Uint8Array(buffer) // Typed Array
let uint16Array = new Uint16Array(buffer) // Typed Array
let uint32Array = new Uint32Array(buffer) // Typed Array
console.log(age)
console.log(name)
console.log(isStudent)
console.log(hobbies)
console.log(address)
console.log(score)
console.log(data)
console.log(bigIntNum)
console.log(symbol)
console.log(func)
console.log(regex)
console.log(date)
console.log(map)
console.log(set)
console.log(weakMap)
console.log(weakSet)
console.log(promise)
console.log(error)
console.log(buffer)
console.log(dataView)
console.log(int8Array)
console.log(uint8Array)
console.log(uint16Array)
console.log(uint32Array)

// typeof operator
console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(isStudent));
console.log(typeof(hobbies));
console.log(typeof(address));
console.log(typeof(score));
console.log(typeof(data));
console.log(typeof(bigIntNum));
console.log(typeof(symbol));
console.log(typeof(func));
console.log(typeof(regex));
console.log(typeof(date));
console.log(typeof(map));
console.log(typeof(set));
console.log(typeof(weakMap));
console.log(typeof(weakSet));
console.log(typeof(promise));
console.log(typeof(error));
console.log(typeof(buffer));
console.log(typeof(dataView));
console.log(typeof(int8Array));
console.log(typeof(uint8Array));
console.log(typeof(uint16Array));
console.log(typeof(uint32Array));

// primitive data types 
let num = 42;
let str = "Hello, World!";
let bool = true;
let n = null;
let u;

// non-primitive data types
let arr = [1, 2, 3];
let obj = { name: "Alice", age: 25 };

// Big diff
console.log(typeof null); // object
console.log(typeof undefined); // undefined