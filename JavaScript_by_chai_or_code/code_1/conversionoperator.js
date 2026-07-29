let age = 31

console.log( typeof age) // number

let height = String(age)

console.log(typeof height) // string

let isStudent = true

console.log(typeof isStudent) // boolean

// String conversion
let score = 45
let scoreAsString = String(score)
console.log(scoreAsString, typeof scoreAsString) // "45" string

// Number conversion
let level = "12"
let levelAsNumber = Number(level)
console.log(levelAsNumber, typeof levelAsNumber) // 12 number

// Boolean conversion
let hasAccess = 0
let hasAccessAsBoolean = Boolean(hasAccess)
console.log(hasAccessAsBoolean, typeof hasAccessAsBoolean) // false boolean

// Implicit conversions
console.log("5" + 2) // "52"
console.log("5" - 2) // 3
console.log(1 + true) // 2

// ---------------------------operations -----------------------------------------

let value = 23
let negativeValue = -value
console.log(negativeValue) // -23

console.log(2^4)// 6
console.log(2**4) // 16
console.log(10%3) // 1
console.log(10/3) // 3.3333333333333335
console.log(10*3) // 30
console.log(10-3) // 7
console.log(10+3) // 13

