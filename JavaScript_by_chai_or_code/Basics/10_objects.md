# JavaScript Objects

## 1. What is an Object?

An **object** is a data structure in JavaScript used to store related data and functionality together using **key-value pairs**.

### Example

```javascript
let student = {
    name: "Talha",
    age: 20,
    semester: 6,
    isActive: true
};
```

Here:

```text
name      → key/property
"Talha"   → value

age       → key/property
20        → value
```

An object can contain different types of values such as:

* String
* Number
* Boolean
* Array
* Another Object
* Function

---

## 2. Creating an Object

The most common way to create an object is using curly braces `{}`.

```javascript
let person = {
    name: "Ali",
    age: 20,
    city: "Islamabad"
};
```

### General Syntax

```javascript
let objectName = {
    key: value,
    key: value,
    key: value
};
```

---

# 3. Accessing Object Properties

There are two main ways to access properties.

## Dot Notation

```javascript
let person = {
    name: "Ali",
    age: 20
};

console.log(person.name);
console.log(person.age);
```

Output:

```text
Ali
20
```

---

## Bracket Notation

```javascript
console.log(person["name"]);
console.log(person["age"]);
```

Output:

```text
Ali
20
```

### Dot vs Bracket

```javascript
person.name;
```

is equivalent to:

```javascript
person["name"];
```

---

## When to Use Bracket Notation?

Bracket notation is especially useful when the property name is stored in a variable.

```javascript
let property = "name";

console.log(person[property]);
```

Output:

```text
Ali
```

This does **not** work the same way:

```javascript
console.log(person.property);
```

JavaScript will look for a property literally called `property`.

---

# 4. Adding Properties

Objects can be modified after creation.

```javascript
let student = {
    name: "Talha",
    age: 20
};
```

Add a new property:

```javascript
student.semester = 6;
```

Now:

```javascript
console.log(student);
```

Result:

```javascript
{
    name: "Talha",
    age: 20,
    semester: 6
}
```

You can also use bracket notation:

```javascript
student["university"] = "FAST";
```

---

# 5. Updating Properties

Existing properties can be changed.

```javascript
let student = {
    name: "Talha",
    age: 20
};

student.age = 21;

console.log(student.age);
```

Output:

```text
21
```

---

# 6. Deleting Properties

Use the `delete` operator to remove a property.

```javascript
let student = {
    name: "Talha",
    age: 20,
    semester: 6
};

delete student.age;

console.log(student);
```

Result:

```javascript
{
    name: "Talha",
    semester: 6
}
```

---

# 7. Different Data Types Inside Objects

An object can store different types of data.

```javascript
let student = {
    name: "Talha",
    age: 20,
    isStudent: true,

    skills: [
        "JavaScript",
        "React",
        "Node.js"
    ],

    address: {
        city: "Rawalpindi",
        country: "Pakistan"
    }
};
```

Here:

```text
name       → String
age        → Number
isStudent  → Boolean
skills     → Array
address    → Object
```

---

# 8. Nested Objects

An object can contain another object.

```javascript
let student = {
    name: "Talha",

    address: {
        city: "Rawalpindi",
        country: "Pakistan"
    }
};
```

Access nested properties:

```javascript
console.log(student.address.city);
```

Output:

```text
Rawalpindi
```

Using bracket notation:

```javascript
console.log(student["address"]["city"]);
```

---

# 9. Objects Containing Arrays

An object can contain an array as a property.

```javascript
let student = {
    name: "Talha",

    skills: [
        "JavaScript",
        "React",
        "Node.js"
    ]
};
```

Access the array:

```javascript
console.log(student.skills);
```

Access an individual element:

```javascript
console.log(student.skills[0]);
```

Output:

```text
JavaScript
```

---

# 10. Functions Inside Objects

A function stored inside an object is called a **method**.

```javascript
let person = {
    name: "Talha",

    greet: function() {
        console.log("Hello!");
    }
};
```

Call the method:

```javascript
person.greet();
```

Output:

```text
Hello!
```

---

## Modern Method Syntax

Instead of:

```javascript
let person = {
    greet: function() {
        console.log("Hello!");
    }
};
```

You can write:

```javascript
let person = {
    greet() {
        console.log("Hello!");
    }
};
```

Then:

```javascript
person.greet();
```

---

# 11. `this` Keyword in Objects

The `this` keyword can refer to the current object when used inside an object's method.

```javascript
let person = {
    name: "Talha",

    greet() {
        console.log("Hello " + this.name);
    }
};

person.greet();
```

Output:

```text
Hello Talha
```

Here:

```javascript
this.name
```

refers to:

```javascript
person.name
```

---

# 12. Checking if a Property Exists

The `in` operator can be used to check whether a property exists in an object.

```javascript
let student = {
    name: "Talha",
    age: 20
};

console.log("name" in student);
```

Output:

```text
true
```

Example:

```javascript
console.log("salary" in student);
```

Output:

```text
false
```

---

# 13. `Object.keys()`

`Object.keys()` returns an array containing all the object's property names.

```javascript
let student = {
    name: "Talha",
    age: 20,
    semester: 6
};

console.log(Object.keys(student));
```

Output:

```javascript
[
    "name",
    "age",
    "semester"
]
```

---

# 14. `Object.values()`

`Object.values()` returns an array containing all the values.

```javascript
console.log(Object.values(student));
```

Output:

```javascript
[
    "Talha",
    20,
    6
]
```

---

# 15. `Object.entries()`

`Object.entries()` returns an array containing key-value pairs.

```javascript
console.log(Object.entries(student));
```

Output:

```javascript
[
    ["name", "Talha"],
    ["age", 20],
    ["semester", 6]
]
```

Each property becomes its own array:

```text
["name", "Talha"]
["age", 20]
["semester", 6]
```

---

# 16. Looping Through an Object

The `for...in` loop is commonly used to iterate through object properties.

```javascript
let student = {
    name: "Talha",
    age: 20,
    semester: 6
};

for (let key in student) {
    console.log(key);
}
```

Output:

```text
name
age
semester
```

---

## Getting Both Key and Value

```javascript
for (let key in student) {
    console.log(key, student[key]);
}
```

Output:

```text
name Talha
age 20
semester 6
```

### Why `student[key]`?

Because `key` is a variable.

For example, during one iteration:

```javascript
key = "name";
```

Therefore:

```javascript
student[key]
```

becomes:

```javascript
student["name"]
```

---

# 17. Object Destructuring

**Destructuring** allows you to extract properties from an object and store them in variables.

```javascript
let student = {
    name: "Talha",
    age: 20,
    semester: 6
};

let { name, age, semester } = student;

console.log(name);
console.log(age);
console.log(semester);
```

Output:

```text
Talha
20
6
```

Without destructuring:

```javascript
let name = student.name;
let age = student.age;
let semester = student.semester;
```

With destructuring:

```javascript
let { name, age, semester } = student;
```

---

# 18. Shorthand Property Syntax

Suppose you have variables:

```javascript
let name = "Talha";
let age = 20;
```

You could create an object like this:

```javascript
let student = {
    name: name,
    age: age
};
```

JavaScript provides a shorter syntax:

```javascript
let student = {
    name,
    age
};
```

Both produce:

```javascript
{
    name: "Talha",
    age: 20
}
```

---

# 19. Object References

Objects are reference types.

Consider:

```javascript
let person1 = {
    name: "Talha"
};

let person2 = person1;

person2.name = "Ali";

console.log(person1.name);
```

Output:

```text
Ali
```

Why?

Because:

```javascript
let person2 = person1;
```

does not create a completely separate object.

Both variables refer to the same object.

Conceptually:

```text
person1 ──┐
          ↓
       { name: "Ali" }
          ↑
person2 ──┘
```

Therefore, changing the object through `person2` also affects `person1`.

---

# 20. Copying an Object with Spread Operator

The spread operator `...` can be used to create a shallow copy.

```javascript
let person1 = {
    name: "Talha",
    age: 20
};

let person2 = {
    ...person1
};
```

Now:

```javascript
person2.name = "Ali";

console.log(person1.name);
console.log(person2.name);
```

Output:

```text
Talha
Ali
```

`person1` and `person2` now refer to different top-level objects.

---

# 21. Object vs Array

## Array

Arrays are mainly used for **ordered collections**.

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Mango"
];
```

Access using an index:

```javascript
console.log(fruits[0]);
```

Output:

```text
Apple
```

---

## Object

Objects are mainly used to represent an **entity and its properties**.

```javascript
let student = {
    name: "Talha",
    age: 20
};
```

Access using a property:

```javascript
console.log(student.name);
```

Output:

```text
Talha
```

### Simple Difference

```text
Array:

0 → Apple
1 → Banana
2 → Mango


Object:

name → Talha
age  → 20
```

---

# 22. Real-World Example

Objects are very useful for representing real-world entities.

For example, a university system can represent a student like this:

```javascript
let student = {
    id: 101,

    name: "Muhammad Talha",

    age: 20,

    semester: 6,

    skills: [
        "JavaScript",
        "React",
        "Node.js"
    ],

    address: {
        city: "Rawalpindi",
        country: "Pakistan"
    },

    introduce() {
        console.log("My name is " + this.name);
    }
};
```

### Accessing Data

```javascript
console.log(student.name);
```

```javascript
console.log(student.skills[0]);
```

```javascript
console.log(student.address.city);
```

### Calling Method

```javascript
student.introduce();
```

### Updating Data

```javascript
student.semester = 7;
```

---

# 23. Important Object Operations

```javascript
let student = {
    name: "Talha",
    age: 20
};
```

### Read

```javascript
console.log(student.name);
```

### Add

```javascript
student.city = "Rawalpindi";
```

### Update

```javascript
student.age = 21;
```

### Delete

```javascript
delete student.age;
```

### Check Property

```javascript
console.log("name" in student);
```

### Get Keys

```javascript
Object.keys(student);
```

### Get Values

```javascript
Object.values(student);
```

### Get Key-Value Pairs

```javascript
Object.entries(student);
```

---

# 24. Important Object Methods

| Method             | Purpose                                       |
| ------------------ | --------------------------------------------- |
| `Object.keys()`    | Returns all keys                              |
| `Object.values()`  | Returns all values                            |
| `Object.entries()` | Returns key-value pairs                       |
| `Object.assign()`  | Copies/merges properties                      |
| `Object.create()`  | Creates an object with a specified prototype  |
| `Object.freeze()`  | Prevents changes to an object                 |
| `Object.seal()`    | Prevents adding/removing properties           |
| `Object.hasOwn()`  | Checks whether an object has its own property |

---

# 25. `Object.assign()`

Used to copy or merge properties.

```javascript
let obj1 = {
    name: "Talha"
};

let obj2 = {
    age: 20
};

let result = Object.assign({}, obj1, obj2);

console.log(result);
```

Output:

```javascript
{
    name: "Talha",
    age: 20
}
```

---

# 26. `Object.freeze()`

`Object.freeze()` prevents changes to an object.

```javascript
let student = {
    name: "Talha",
    age: 20
};

Object.freeze(student);

student.age = 21;

console.log(student.age);
```

The value remains:

```text
20
```

You cannot:

* Add properties
* Delete properties
* Modify existing properties

---

# 27. `Object.seal()`

`Object.seal()` prevents adding or deleting properties, but existing properties can still be modified.

```javascript
let student = {
    name: "Talha",
    age: 20
};

Object.seal(student);

student.age = 21;
```

This is allowed.

But:

```javascript
student.city = "Rawalpindi";
```

is not allowed.

And:

```javascript
delete student.age;
```

is not allowed.

---

# 28. `Object.hasOwn()`

Checks whether an object directly contains a specific property.

```javascript
let student = {
    name: "Talha",
    age: 20
};

console.log(Object.hasOwn(student, "name"));
```

Output:

```text
true
```

Example:

```javascript
console.log(Object.hasOwn(student, "city"));
```

Output:

```text
false
```

---

# 29. Object Property Names

Property names are normally written as strings without quotes:

```javascript
let student = {
    name: "Talha",
    age: 20
};
```

But they can also be written with quotes:

```javascript
let student = {
    "name": "Talha",
    "age": 20
};
```

Both are valid.

Property names can also contain spaces:

```javascript
let student = {
    "full name": "Muhammad Talha"
};
```

You cannot use normal dot notation:

```javascript
student.full name; // ❌
```

Use bracket notation:

```javascript
console.log(student["full name"]);
```

---

# 30. Computed Property Names

You can use an expression to create a property name.

```javascript
let property = "name";

let student = {
    [property]: "Talha"
};

console.log(student.name);
```

Output:

```text
Talha
```

The brackets tell JavaScript to evaluate the variable.

---

# 31. Object with Dynamic Properties

```javascript
let key = "username";
let value = "talha123";

let user = {
    [key]: value
};

console.log(user);
```

Output:

```javascript
{
    username: "talha123"
}
```

---

# 32. Important Concept: Objects Are Mutable

Objects can generally be changed even when declared using `const`.

```javascript
const student = {
    name: "Talha",
    age: 20
};

student.age = 21;

console.log(student.age);
```

Output:

```text
21
```

But you cannot reassign the entire object:

```javascript
student = {}; // ❌
```

### Why?

`const` prevents reassignment of the variable, not modification of the object's properties.

---

# 33. Object with `const`

This is valid:

```javascript
const user = {
    name: "Talha"
};

user.name = "Ali";

console.log(user.name);
```

Output:

```text
Ali
```

This is not valid:

```javascript
const user = {
    name: "Talha"
};

user = {
    name: "Ali"
};
```

---

# 34. Array of Objects

One of the most important patterns in JavaScript is an **array containing objects**.

```javascript
let students = [
    {
        name: "Talha",
        age: 20
    },

    {
        name: "Ali",
        age: 21
    },

    {
        name: "Ahmed",
        age: 19
    }
];
```

Access the first student:

```javascript
console.log(students[0]);
```

Access the first student's name:

```javascript
console.log(students[0].name);
```

Output:

```text
Talha
```

This pattern is extremely common when working with APIs and databases.

---

# 35. Object of Arrays

You can also have arrays inside an object.

```javascript
let university = {
    name: "FAST",

    departments: [
        "CS",
        "SE",
        "AI"
    ]
};
```

Access:

```javascript
console.log(university.departments[0]);
```

Output:

```text
CS
```

---

# 36. Nested Object + Array Example

```javascript
let university = {
    name: "FAST",

    students: [
        {
            name: "Talha",
            semester: 6
        },

        {
            name: "Ali",
            semester: 5
        }
    ]
};
```

Access Talha's name:

```javascript
console.log(university.students[0].name);
```

Output:

```text
Talha
```

---

# 37. Key Concepts to Remember

### Object

Stores data using **key-value pairs**.

```javascript
let user = {
    name: "Talha",
    age: 20
};
```

### Property

A key-value pair inside an object.

```javascript
name: "Talha"
```

### Method

A function inside an object.

```javascript
greet() {
    console.log("Hello");
}
```

### Dot notation

```javascript
user.name;
```

### Bracket notation

```javascript
user["name"];
```

### Nested object

```javascript
user.address.city;
```

### Destructuring

```javascript
let { name, age } = user;
```

### Object keys

```javascript
Object.keys(user);
```

### Object values

```javascript
Object.values(user);
```

### Object entries

```javascript
Object.entries(user);
```

---

# 38. Quick Revision

```javascript
let student = {
    name: "Talha",
    age: 20,
    skills: ["JavaScript", "React"],

    address: {
        city: "Rawalpindi"
    },

    greet() {
        console.log("Hello " + this.name);
    }
};
```

### Access

```javascript
student.name;
student["name"];
student.skills[0];
student.address.city;
```

### Add

```javascript
student.semester = 6;
```

### Update

```javascript
student.age = 21;
```

### Delete

```javascript
delete student.age;
```

### Method

```javascript
student.greet();
```

### Keys

```javascript
Object.keys(student);
```

### Values

```javascript
Object.values(student);
```

### Entries

```javascript
Object.entries(student);
```

### Destructuring

```javascript
let { name, age } = student;
```

### Loop

```javascript
for (let key in student) {
    console.log(key, student[key]);
}
```

---

# 🧠 Final Mental Model

Think of a JavaScript object like a **real-world entity/card**:

```text
┌─────────────────────────────┐
│          Student            │
├─────────────────────────────┤
│ name     → Talha            │
│ age      → 20               │
│ semester → 6                │
│ skills   → [JS, React]      │
│ address  → {city: RWP}      │
│ greet    → function() {...} │
└─────────────────────────────┘
```

The key idea is:

> **An object groups related data and behavior together using properties and methods.**
