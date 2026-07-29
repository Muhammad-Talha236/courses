# 📘 JavaScript Data Types

Welcome to **Lesson 4** of my JavaScript learning journey.

This lesson covers one of the most fundamental concepts in JavaScript: **Data Types**. Every value stored in a variable has a specific data type, and understanding them is essential for writing correct and efficient JavaScript code.

---

## 📚 Topics Covered

- What is a Data Type?
- Why Data Types are Important
- Categories of Data Types
- Primitive Data Types
- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol
- The `typeof` Operator
- Primitive vs Reference Types (Introduction)
- Real-World Examples
- Common Beginner Mistakes
- Best Practices
- Interview Questions
- Practice Exercises

---

# 🧠 What is a Data Type?

A **Data Type** tells JavaScript what kind of value is stored inside a variable.

Example:

```javascript
let age = 22;          // Number
let name = "Talha";    // String
let isLoggedIn = true; // Boolean
```

---

# 🎯 Why Do Data Types Matter?

JavaScript needs to know what kind of value it is working with.

For example:

```javascript
5 + 10
```

Output:

```
15
```

But:

```javascript
"5" + "10"
```

Output:

```
510
```

Because both values are **Strings**, JavaScript performs string concatenation instead of addition.

---

# 📂 Categories of Data Types

JavaScript data types are divided into two categories.

```
Data Types
│
├── Primitive
└── Reference
```

---

# 🔹 Primitive Data Types

JavaScript has **7 Primitive Data Types**.

| Data Type | Description | Example |
|-----------|-------------|---------|
| Number | Stores numeric values | `100`, `3.14` |
| String | Stores text | `"Hello"` |
| Boolean | Stores true or false | `true` |
| Undefined | Variable declared but not assigned | `let x;` |
| Null | Intentionally empty value | `null` |
| BigInt | Stores very large integers | `123456789n` |
| Symbol | Creates unique identifiers | `Symbol()` |

---

## 1️⃣ Number

Stores integers and decimal numbers.

```javascript
let age = 22;
let price = 99.99;
let temperature = -5;
```

---

## 2️⃣ String

Stores textual data.

```javascript
let name = "Talha";
let city = "Faisalabad";
```

Strings can use either:

```javascript
"Hello"
'Hello'
```

---

## 3️⃣ Boolean

Represents only two values.

```javascript
true
false
```

Example:

```javascript
let isLoggedIn = true;
let hasPermission = false;
```

---

## 4️⃣ Undefined

A variable that has been declared but not assigned a value.

```javascript
let username;

console.log(username);
```

Output:

```
undefined
```

---

## 5️⃣ Null

Represents an intentional absence of a value.

```javascript
let selectedUser = null;
```

Difference:

- **Undefined** → No value assigned yet.
- **Null** → Intentionally no value.

---

## 6️⃣ BigInt

Used for very large integers beyond JavaScript's safe number limit.

```javascript
let population = 123456789012345678901234567890n;
```

---

## 7️⃣ Symbol

Creates unique identifiers.

```javascript
const id = Symbol();
const anotherId = Symbol();

console.log(id === anotherId);
```

Output:

```
false
```

---

# 🔍 The `typeof` Operator

The `typeof` operator is used to check the data type of a value.

Example:

```javascript
console.log(typeof 100);
```

Output:

```
number
```

More examples:

```javascript
typeof "Hello"      // string
typeof true         // boolean
typeof undefined    // undefined
typeof null         // object (JavaScript historical bug)
```

---

# ⚠ Primitive vs Reference Types

### Primitive Types

- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol

### Reference Types

- Object
- Array
- Function

Reference types will be covered in the next lesson.

---

# 🌍 Real-World Example

```javascript
const university = "FAST";
let age = 21;
let isEnrolled = true;
let graduationYear;
let advisor = null;
```

---

# ❌ Common Beginner Mistakes

### Mistake 1

```javascript
"100"
```

This is **String**, not Number.

---

### Mistake 2

Confusing `null` with `undefined`.

- `undefined` → No value assigned.
- `null` → Intentionally empty.

---

### Mistake 3

Forgetting quotation marks.

❌

```javascript
let city = Lahore;
```

✅

```javascript
let city = "Lahore";
```

---

### Mistake 4

Expecting:

```javascript
typeof null
```

to return:

```
null
```

Actually returns:

```
object
```

because of a historical JavaScript bug.

---

# ✅ Best Practices

- Use meaningful variable names.
- Prefer `const` unless the value changes.
- Use `let` for mutable values.
- Use `typeof` while debugging.
- Avoid mixing strings and numbers unintentionally.

---

# 💡 Interview Questions

1. What is a Data Type?
2. Why are Data Types important?
3. What are the two categories of Data Types?
4. Name all seven Primitive Data Types.
5. What is the difference between `null` and `undefined`?
6. What does the `typeof` operator do?
7. Why does `typeof null` return `"object"`?
8. What is the difference between `"10"` and `10`?

---

# 📝 Practice Exercises

### Exercise 1

Identify the data type of each value.

```javascript
100
"FAST"
false
undefined
null
```

---

### Exercise 2

Predict the output.

```javascript
console.log(typeof 50);
console.log(typeof "50");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
```

---

### Exercise 3

Create variables for:

- Your full name
- Your age
- Your CGPA (or Percentage)
- Whether you are a university student
- Your favorite programming language
- Your future job (`undefined`)
- Your mentor (`null`)

---

# 📌 Key Takeaways

- Every value in JavaScript has a data type.
- JavaScript has **7 Primitive Data Types**.
- Primitive values are immutable.
- `typeof` helps identify data types.
- `null` and `undefined` are different concepts.
- Understanding data types is essential before learning Objects, Arrays, and Functions.

---

# 🚀 Next Lesson

In the next lesson, you'll learn **Reference Data Types**, including:

- Objects
- Arrays
- Functions
- Stack vs Heap Memory
- Copy by Value vs Copy by Reference
- Common Bugs and Real-World Examples

Happy Coding! 🚀