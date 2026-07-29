# 📘 JavaScript Reference Data Types

Welcome to **Lesson 5** of my JavaScript learning journey.

In this lesson, I learned one of the most important concepts in JavaScript: **Reference Data Types** and how JavaScript stores data in **Stack** and **Heap** memory.

Understanding this topic is essential because it explains why objects and arrays behave differently from primitive values.

---

# 📚 Topics Covered

- What are Reference Data Types?
- Why Reference Types Exist
- Objects
- Arrays
- Functions
- Stack Memory
- Heap Memory
- Copy by Value vs Copy by Reference
- Real-World Examples
- Common Beginner Mistakes
- Best Practices
- Interview Questions
- Practice Exercises

---

# 🎯 Learning Objectives

After completing this lesson, you should be able to:

- Understand what Reference Data Types are.
- Create and use Objects, Arrays, and Functions.
- Explain the difference between Stack and Heap memory.
- Understand why objects and arrays are copied by reference.
- Create real copies using the Spread Operator (`...`).

---

# 📂 JavaScript Data Types

```
Data Types
│
├── Primitive
│   ├── Number
│   ├── String
│   ├── Boolean
│   ├── Undefined
│   ├── Null
│   ├── BigInt
│   └── Symbol
│
└── Reference
    ├── Object
    ├── Array
    └── Function
```

---

# 🏠 What is a Reference Data Type?

A **Reference Data Type** stores the **memory address (reference)** of the actual data instead of storing the data directly.

Examples:

- Object
- Array
- Function

---

# 📦 Objects

Objects store related information together.

Example:

```javascript
const student = {
  name: "Talha",
  age: 22,
  university: "FAST",
  semester: 6
};
```

Access properties:

```javascript
console.log(student.name);
console.log(student.age);
```

Update properties:

```javascript
student.age = 23;
```

---

# 📋 Arrays

Arrays store multiple values in a single variable.

Example:

```javascript
const marks = [90, 85, 78, 92, 88];
```

Access elements:

```javascript
console.log(marks[0]);
console.log(marks[2]);
```

Update values:

```javascript
marks[1] = 95;
```

---

# ⚙ Functions

Functions are reusable blocks of code.

```javascript
function greet() {
    console.log("Hello Talha");
}
```

Functions are also **Reference Types** because JavaScript treats them as objects internally.

---

# 💾 Memory in JavaScript

JavaScript mainly uses two memory areas.

```
Memory
│
├── Stack
└── Heap
```

## Stack Memory

Stores:

- Primitive Values
- References (Addresses)

Example:

```javascript
let age = 22;
```

```
Stack

age
 ↓
22
```

---

## Heap Memory

Stores:

- Objects
- Arrays
- Functions

Example:

```javascript
const student = {
    name: "Talha",
    age: 22
};
```

```
Stack

student
   ↓
 0x001

Heap

0x001
{
  name: "Talha",
  age: 22
}
```

The variable stores only the **address**, while the actual object is stored in Heap Memory.

---

# 🔄 Copy by Value (Primitive)

```javascript
let a = 10;
let b = a;

b = 20;
```

Output:

```
a = 10
b = 20
```

Primitive values are copied independently.

---

# 🔗 Copy by Reference (Objects)

```javascript
const person1 = {
    name: "Talha"
};

const person2 = person1;

person2.name = "Ali";
```

Output:

```
Ali
```

Both variables point to the **same object** in memory.

---

# 📄 Creating a Real Copy

### Copying Arrays

```javascript
const numbers = [1,2,3];

const copy = [...numbers];
```

### Copying Objects

```javascript
const person2 = {
    ...person1
};
```

The Spread Operator creates a **shallow copy**.

---

# 🌍 Real-World Example

Shopping Cart

```javascript
const cart = [];

cart.push("Laptop");
cart.push("Phone");
```

Instead of creating multiple variables, everything is stored inside one array.

---

# ❌ Common Beginner Mistakes

- Thinking objects are copied by value.
- Thinking arrays are primitive data types.
- Believing `const` objects cannot be modified.
- Forgetting that arrays start with index **0**.

---

# ✅ Best Practices

- Use Objects to group related data.
- Use Arrays for collections of items.
- Prefer `const` unless reassignment is needed.
- Use the Spread Operator to create copies.
- Understand reference behavior before working with React or APIs.

---

# 💡 Interview Questions

1. What is a Reference Data Type?
2. Name the three Reference Types.
3. What is the difference between Stack and Heap memory?
4. Why are objects copied by reference?
5. Why can a `const` object be modified?
6. How do you create a copy of an array?
7. What is the difference between copying primitive values and objects?

---

# 📝 Practice Exercises

### Exercise 1

Create a `student` object with:

- name
- age
- university
- semester
- cgpa

Print each property.

---

### Exercise 2

Create an array of your five favorite programming languages and print:

- First language
- Last language
- Total number of languages

---

### Exercise 3

Predict the output:

```javascript
let a = 50;
let b = a;

b = 100;

console.log(a);
console.log(b);
```

Explain why.

---

### Exercise 4

Predict the output:

```javascript
const obj1 = {
    city: "Lahore"
};

const obj2 = obj1;

obj2.city = "Karachi";

console.log(obj1.city);
```

Explain why.

---

# 📌 Key Takeaways

- JavaScript has **Primitive** and **Reference** data types.
- Objects, Arrays, and Functions are Reference Types.
- Objects and Arrays are stored in **Heap Memory**.
- Variables store references (memory addresses) to objects.
- Primitive values are copied by value.
- Objects and Arrays are copied by reference.
- Use the Spread Operator (`...`) when creating a new copy.

---

# 🚀 Next Lesson

In the next lesson, you'll learn **JavaScript Operators**, including:

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Increment & Decrement
- Equality (`==`) vs Strict Equality (`===`)
- Operator Precedence
- Real-world examples and interview questions

Happy Coding! 🚀