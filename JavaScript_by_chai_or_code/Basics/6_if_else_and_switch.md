# 🚀 Lesson 8 — Decision Making in JavaScript (`if`, `else`, `else if`, `switch`, Ternary Operator)

Congratulations! 🎉

You've learned:

- ✅ Variables
- ✅ Data Types
- ✅ Reference Types
- ✅ Operators
- ✅ Type Conversion

Now it's time to make your programs **smart**.

Until now, every JavaScript program executed code from top to bottom. But real applications make decisions based on conditions.

Examples:

- Login systems
- ATM machines
- Student grading systems
- Online shopping discounts
- Games

These all use **decision making**.

---

# What is Decision Making?

Decision making allows a program to execute different blocks of code depending on whether a condition is **true** or **false**.

Think of it like this:

```text
Condition

↓

True?

↙       ↘

Yes      No

↓         ↓

Task A   Task B
```

---

# Real-Life Example

Imagine a traffic signal.

```text
Green  → Go

Yellow → Slow Down

Red    → Stop
```

JavaScript makes decisions the same way.

---

# The `if` Statement

The `if` statement executes a block of code **only if the condition is true**.

## Syntax

```javascript
if (condition) {
    // code
}
```

---

## Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("You can vote.");
}
```

Output

```text
You can vote.
```

---

### Example 2

```javascript
let age = 15;

if (age >= 18) {
    console.log("You can vote.");
}
```

Output

```text
(No Output)
```

Because:

```javascript
15 >= 18
```

is `false`, so JavaScript skips the block.

---

# Flowchart

```text
Start

↓

Check Condition

↓

True?

↙        ↘

Yes       No

↓          ↓

Run      Skip
Code
```

---

# The `if...else` Statement

When you want one action for **true** and another for **false**, use `if...else`.

## Syntax

```javascript
if (condition) {

} else {

}
```

---

## Example

```javascript
let age = 17;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}
```

Output

```text
Not eligible
```

---

## Login Example

```javascript
let password = "12345";

if (password === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Wrong Password");
}
```

Output

```text
Wrong Password
```

---

## ATM Example

```javascript
let balance = 5000;
let withdraw = 3000;

if (balance >= withdraw) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}
```

Output

```text
Transaction Successful
```

---

# The `else if` Statement

Use `else if` when there are **multiple possible conditions**.

## Syntax

```javascript
if (condition1) {

}
else if (condition2) {

}
else {

}
```

---

## Student Grade Example

```javascript
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else if (marks >= 60) {
    console.log("Grade D");
}
else {
    console.log("Fail");
}
```

Output

```text
Grade B
```

JavaScript checks conditions from top to bottom and stops after the **first true condition**.

---

# Order Matters

❌ Wrong

```javascript
let marks = 95;

if (marks >= 60) {
    console.log("Grade D");
}
else if (marks >= 90) {
    console.log("Grade A");
}
```

Output

```text
Grade D
```

Because the first condition is already true.

✅ Correct

```javascript
if (marks >= 90) {

}
else if (marks >= 80) {

}
else if (marks >= 70) {

}
```

Always write higher-priority conditions first.

---

# Nested `if`

A nested `if` means placing one `if` inside another.

```javascript
let age = 22;
let hasID = true;

if (age >= 18) {

    if (hasID) {
        console.log("Entry Allowed");
    } else {
        console.log("Bring your ID");
    }

} else {
    console.log("Too Young");
}
```

Output

```text
Entry Allowed
```

---

# The `switch` Statement

Use `switch` when comparing **one variable against multiple exact values**.

## Syntax

```javascript
switch (expression) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
```

---

## Example

```javascript
let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");

}
```

Output

```text
Wednesday
```

---

# Why `break`?

Without `break`, JavaScript continues executing the next cases.

```javascript
let day = 2;

switch (day) {

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

    default:
        console.log("Invalid");

}
```

Output

```text
Tuesday
Wednesday
Invalid
```

This is called **fall-through**.

---

# Real-Life Example

```javascript
let choice = "Pizza";

switch (choice) {

    case "Burger":
        console.log("Rs.500");
        break;

    case "Pizza":
        console.log("Rs.1200");
        break;

    case "Fries":
        console.log("Rs.300");
        break;

    default:
        console.log("Not Available");

}
```

Output

```text
Rs.1200
```

---

# Ternary Operator (`? :`)

The ternary operator is a short version of `if...else`.

## Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

---

## Example

Instead of

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

You can write

```javascript
let age = 20;

console.log(age >= 18 ? "Adult" : "Minor");
```

Output

```text
Adult
```

Use ternary only for short conditions.

---

# `if` vs `switch`

| `if` | `switch` |
|------|----------|
| Best for ranges | Best for exact values |
| Supports complex conditions | Cleaner for menus |
| Uses logical operators | Compares one variable |

Example:

```javascript
if (marks >= 80)
```

Use `if`.

```javascript
switch(day)
```

Use `switch`.

---

# Common Beginner Mistakes

❌ Using assignment instead of comparison

Wrong

```javascript
if (age = 18)
```

Correct

```javascript
if (age === 18)
```

---

❌ Forgetting `break`

---

❌ Wrong order of conditions

---

❌ Using `switch` for ranges

Wrong

```javascript
switch(marks){

case marks >= 80:
```

Use `if...else if` instead.

---

# Best Practices

- ✅ Use `===` instead of `==`
- ✅ Use `if` for ranges
- ✅ Use `switch` for exact values
- ✅ Keep conditions simple
- ✅ Avoid deeply nested `if` statements

---

# Key Takeaways

- `if` executes code when a condition is true.
- `if...else` handles two outcomes.
- `else if` handles multiple conditions.
- JavaScript stops after the first true `else if`.
- `switch` is best for exact values.
- `break` prevents fall-through.
- The ternary operator is a shorter version of `if...else`.

---

# Next Lesson

In **Lesson 9**, you'll learn:

- `for` loop
- `while` loop
- `do...while`
- Nested loops
- `break`
- `continue`
- Infinite loops
- Real-world examples
- Interview questions
- Practice exercises