# 🚀 Lesson 10 — `while`, `do...while`, `break`, `continue`, and Nested Loops

Congratulations! 🎉

You've already learned the **`for` loop**, which is the most commonly used loop in JavaScript.

In this lesson, you'll learn the remaining loops and understand **when professional developers choose each one**.

By the end of this lesson, you'll know every major looping concept in JavaScript.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand the `while` loop.
- Use the `do...while` loop.
- Know the difference between `while` and `do...while`.
- Stop a loop using `break`.
- Skip an iteration using `continue`.
- Understand nested loops.
- Choose the correct loop for different real-world scenarios.

---

# Before We Start...

Imagine you're creating a login page.

How many times will the user enter the password?

- Maybe once
- Maybe twice
- Maybe ten times
- Maybe until they get it right

Since you don't know the number of attempts beforehand, a `while` loop is often a better choice than a `for` loop.

---

# The `while` Loop

## Definition

A `while` loop repeats a block of code **as long as the condition remains true**.

## Syntax

```javascript
while (condition) {
    // code to repeat
}
```

---

# Flow

```text
Condition

↓

True?

↙      ↘

Yes      No

↓         ↓

Run     Stop

↓

Check Again
```

---

# Example 1

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Output

```text
1
2
3
4
5
```

---

# Step-by-Step Execution

```javascript
let i = 1;
```

JavaScript checks:

```javascript
i <= 5
```

```
1 <= 5
```

True

Prints:

```
1
```

Then

```javascript
i++;
```

becomes

```javascript
i = 2;
```

The loop repeats until:

```javascript
i = 6;
```

Now:

```javascript
6 <= 5
```

False

Loop stops.

---

# Example 2 — Even Numbers

```javascript
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}
```

Output

```text
2
4
6
8
10
```

---

# Example 3 — Countdown

```javascript
let countdown = 5;

while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
```

Output

```text
5
4
3
2
1
```

---

# Real-World Example — Login Attempts

```javascript
let attempts = 1;

while (attempts <= 3) {
    console.log("Login Attempt:", attempts);
    attempts++;
}
```

Output

```text
Login Attempt: 1
Login Attempt: 2
Login Attempt: 3
```

---

# Common Beginner Mistake

Forgetting to update the loop variable.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

Output

```text
1
1
1
1
1
...
```

This creates an **infinite loop** because `i` never changes.

---

# The `do...while` Loop

Unlike the `while` loop, the `do...while` loop executes the code **before** checking the condition.

## Syntax

```javascript
do {

    // code

} while (condition);
```

---

# Difference Between `while` and `do...while`

### `while`

```text
Check Condition

↓

Run Code
```

### `do...while`

```text
Run Code

↓

Check Condition
```

A `do...while` loop always executes **at least once**.

---

# Example 1

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

Output

```text
1
2
3
4
5
```

---

# Example 2

Using `while`

```javascript
let i = 10;

while (i <= 5) {
    console.log(i);
}
```

Output

```text
(No Output)
```

Because

```javascript
10 <= 5
```

is false.

---

Now using `do...while`

```javascript
let i = 10;

do {
    console.log(i);
} while (i <= 5);
```

Output

```text
10
```

The code executes once before checking the condition.

---

# Real-Life Example

An ATM always asks you to enter your PIN at least once.

If the PIN is incorrect, it asks again.

This is exactly how a `do...while` loop behaves.

---

# When Should You Use Each Loop?

### Use `for`

- Known number of iterations
- Printing numbers
- Looping through arrays

### Use `while`

- Unknown number of iterations
- Login attempts
- Waiting for user input
- Reading data

### Use `do...while`

- Menu systems
- ATM PIN entry
- Input validation
- Anything that must execute at least once

---

# The `break` Statement

The `break` statement immediately stops a loop.

## Example

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);

}
```

Output

```text
1
2
3
4
```

When `i` becomes `5`, the loop ends immediately.

---

# Real-Life Example

Imagine searching for your friend's name in a list.

Once you find it, you stop searching.

That's exactly what `break` does.

---

# The `continue` Statement

Unlike `break`, `continue` **doesn't stop the loop**.

It simply skips the current iteration.

## Example

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);

}
```

Output

```text
1
2
4
5
```

The number `3` is skipped.

---

# Real-Life Example

Imagine a teacher taking attendance.

```
Ali

Ahmed

Talha (Absent)

Hamza

Usman
```

The teacher skips Talha and continues with the remaining students.

---

# Nested Loops

A nested loop is simply **a loop inside another loop**.

## Syntax

```javascript
for (...) {

    for (...) {

    }

}
```

---

# Example

```javascript
for (let row = 1; row <= 3; row++) {

    for (let col = 1; col <= 3; col++) {

        console.log(row, col);

    }

}
```

Output

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

---

# Visual Understanding

```text
Outer Loop

↓

Row 1

↓

Inner Loop

Column 1
Column 2
Column 3

↓

Row 2

↓

Column 1
Column 2
Column 3
```

The inner loop finishes completely before the outer loop moves to the next iteration.

---

# Real-Life Example

Cinema Hall

```text
Row 1

Seat 1
Seat 2
Seat 3

↓

Row 2

Seat 1
Seat 2
Seat 3
```

Rows contain seats.

This is exactly how nested loops work.

---

# Multiplication Table

```javascript
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {

        console.log(`${i} × ${j} = ${i * j}`);

    }

}
```

Output starts like:

```text
1 × 1 = 1
1 × 2 = 2
1 × 3 = 3
2 × 1 = 2
2 × 2 = 4
...
```

---

# Choosing the Right Loop

| Situation | Best Choice |
|-----------|-------------|
| Print numbers | `for` |
| Array iteration | `for` |
| Unknown repetitions | `while` |
| Must execute once | `do...while` |
| Stop loop early | `break` |
| Skip an iteration | `continue` |
| Matrix or tables | Nested loops |

---

# Common Beginner Mistakes

- ❌ Forgetting to update the loop variable
- ❌ Creating infinite loops
- ❌ Confusing `break` with `continue`
- ❌ Writing unnecessary nested loops

---

# Best Practices

- ✅ Use `for` when iterations are known.
- ✅ Use `while` when iterations are unknown.
- ✅ Use `do...while` when the code must run at least once.
- ✅ Use `break` to exit early.
- ✅ Use `continue` only when necessary.
- ✅ Keep nested loops simple and readable.

---

# Key Takeaways

- `while` checks the condition before execution.
- `do...while` executes once before checking.
- `break` stops the loop completely.
- `continue` skips only the current iteration.
- Nested loops are loops inside loops.
- Choose the loop based on the problem, not personal preference.

---

# Next Lesson

In the next lesson, you'll learn **Functions in JavaScript**, including:

- Function Declaration
- Function Expression
- Arrow Functions
- Parameters
- Arguments
- Return Values
- Scope
- Callback Functions
- Real-world Examples
- Practice Exercises