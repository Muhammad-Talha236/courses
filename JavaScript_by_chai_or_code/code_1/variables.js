let name = "John"
var age = 30
const isStudent = true

console.log(name)
name = "Jane"
console.log(name) // This will print "Jane" because the variable name was declared with let, which allows reassignment.

console.log(age)
age = 31
console.log(age) // This will print 31 because the variable age was declared with var, which also allows reassignment.

// isStudent = false // This will throw an error because isStudent is a constant
console.log(isStudent)

 // let name = "Alice" // This will throw an error because name has already been declared in the same scope with let.
 // var age = 25 // This will throw an error because age has already been declared in the same scope with var.
// const isStudent = false // This will throw an error because isStudent has already been declared in the same scope with const.