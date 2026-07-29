# Lesson 7 — Objects in JavaScript (Complete Guide)

Objects are one of the most important concepts in JavaScript.

Almost every JavaScript application uses objects, whether you're building a website, an API, a React application, or a Node.js backend.

Understanding objects deeply will make learning React, APIs, JSON, and advanced JavaScript much easier.

---

# What is an Object?

## Definition

An **object** is a collection of related data stored as **key-value pairs**.

Example:

```javascript
const person = {
    name: "Talha",
    age: 21,
    city: "Faisalabad"
};
```

Here:

```
name → Key

"Talha" → Value

age → Key

21 → Value
```

---

# Real-Life Analogy

Think of a Student ID Card.

It contains:

- Name
- Roll Number
- Department
- Semester
- University

All these pieces of information belong to one student.

Similarly, an object groups related information together.

---

# Creating an Object

```javascript
const student = {
    name: "Talha",
    age: 21,
    university: "FAST",
    semester: 5
};
```

---

# Accessing Object Properties

## Dot Notation

```javascript
console.log(student.name);
```

Output

```
Talha
```

---

```javascript
console.log(student.age);
```

Output

```
21
```

---

## Bracket Notation

```javascript
console.log(student["name"]);
```

Output

```
Talha
```

---

```javascript
console.log(student["age"]);
```

Output

```
21
```

---

# Difference Between Dot and Bracket Notation

Dot notation is simpler.

```javascript
student.name
```

Bracket notation is useful when the property name is stored inside a variable.

Example:

```javascript
const key = "age";

console.log(student[key]);
```

Output

```
21
```

---

# Adding New Properties

You can add properties after creating an object.

```javascript
const person = {
    name: "Talha"
};

person.age = 21;
person.city = "Faisalabad";

console.log(person);
```

Output

```javascript
{
    name: "Talha",
    age: 21,
    city: "Faisalabad"
}
```

---

Using bracket notation

```javascript
person["country"] = "Pakistan";
```

Output

```javascript
{
    name: "Talha",
    age: 21,
    city: "Faisalabad",
    country: "Pakistan"
}
```

---

# Updating Existing Properties

```javascript
person.age = 22;

console.log(person);
```

Output

```javascript
{
    name: "Talha",
    age: 22,
    city: "Faisalabad"
}
```

---

# Deleting Properties

```javascript
delete person.city;

console.log(person);
```

Output

```javascript
{
    name: "Talha",
    age: 22
}
```

---

# Can an Object Have Duplicate Keys?

No.

```javascript
const person = {
    age: 20,
    age: 21,
    age: 22
};

console.log(person);
```

Output

```javascript
{
    age: 22
}
```

The last value replaces the previous ones.

Every object key must be unique.

---

# How to Store Multiple Ages

Incorrect

```javascript
const person = {
    age: 20,
    age: 25
};
```

Correct

```javascript
const person = {
    ages: [20, 25, 30, 35]
};
```

Output

```javascript
{
    ages: [20, 25, 30, 35]
}
```

Access values

```javascript
console.log(person.ages[0]);
```

Output

```
20
```

---

# Objects Inside Objects

```javascript
const student = {
    name: "Talha",

    address: {
        city: "Faisalabad",
        country: "Pakistan"
    }
};
```

Access

```javascript
console.log(student.address.city);
```

Output

```
Faisalabad
```

---

# Arrays Inside Objects

```javascript
const student = {
    name: "Talha",

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ]
};
```

Access

```javascript
console.log(student.skills[1]);
```

Output

```
CSS
```

---

# Why Can We Modify a `const` Object?

Example

```javascript
const person = {
    name: "Talha"
};

person.age = 21;
```

This works.

Why?

Because `const` protects the **reference**, not the object's contents.

Memory

```
person

↓

0x100
```

Heap

```
0x100

{
    name: "Talha"
}
```

After

```javascript
person.age = 21;
```

Memory

```
person

↓

0x100
```

Heap

```
0x100

{
    name: "Talha",
    age: 21
}
```

The address didn't change.

Only the object's contents changed.

---

# What is NOT Allowed?

```javascript
person = {
    name: "Ali"
};
```

Output

```
TypeError
```

Because JavaScript would have to change the reference.

---

# Primitive vs Object

Primitive

```javascript
const age = 23;
```

Memory

```
age

↓

23
```

Objects

```javascript
const person = {
    name: "Talha"
};
```

Memory

```
person

↓

0x001
```

Heap

```
{
    name: "Talha"
}
```

Primitive values are stored directly.

Objects are stored by reference.

---

# Object References

```javascript
const person1 = {
    name: "Talha"
};

const person2 = person1;

person2.name = "Ali";

console.log(person1.name);
```

Output

```
Ali
```

Both variables point to the same object.

Memory

```
person1

↓

0x001

person2

↓

0x001
```

Changing one changes the same object.

---

# Creating a Copy

```javascript
const person1 = {
    name: "Talha"
};

const person2 = {
    ...person1
};

person2.name = "Ali";

console.log(person1.name);
```

Output

```
Talha
```

The spread operator creates a new object.

---

# Real-Life Example

Student Record

```javascript
const student = {
    name: "Talha",
    age: 21,
    university: "FAST",
    semester: 5,
    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ]
};

console.log(student);
```

---

# Best Practices

- Use `const` for objects unless you need to reassign them.
- Use meaningful property names.
- Group related information into one object.
- Use arrays when storing multiple values.
- Avoid duplicate keys.
- Remember that objects are copied by reference.

---

# Common Beginner Mistakes

❌ Thinking `const` objects cannot change.

❌ Forgetting object keys must be unique.

❌ Confusing dot notation with bracket notation.

❌ Forgetting that objects are copied by reference.

---

# Interview Questions

1. What is an object?
2. What is the difference between dot notation and bracket notation?
3. Why can a `const` object be modified?
4. What is a reference?
5. Why can't an object have duplicate keys?
6. How do you add a new property?
7. How do you delete a property?
8. What is the spread operator used for?

---

# Practice Exercises

## Exercise 1

Create an object named `student` with:

- name
- age
- university
- semester
- cgpa

Print each property.

---

## Exercise 2

Add these properties later:

- city
- country
- email

Print the updated object.

---

## Exercise 3

Update:

- age
- semester

Print the object again.

---

## Exercise 4

Delete the `email` property.

Print the result.

---

## Exercise 5

Predict the output before running the code.

```javascript
const obj1 = {
    city: "Lahore"
};

const obj2 = obj1;

obj2.city = "Karachi";

console.log(obj1.city);
```

Explain why the output is produced.

---

# Key Takeaways

- Objects store related data as key-value pairs.
- Properties can be accessed using dot or bracket notation.
- New properties can be added at any time.
- Existing properties can be updated.
- Properties can be deleted using `delete`.
- `const` protects the reference, not the object's contents.
- Objects are stored by reference.
- Multiple values should be stored in arrays.
- Duplicate object keys are not allowed.
- Objects are one of the most important data structures in JavaScript.
```