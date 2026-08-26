# JavaScript Arrays

## 1. What is an Array?

An **array** is a data structure used to store multiple values inside a single variable.

```js
let students = ["Ali", "Ahmed", "Talha"];
```

Instead of:

```js
let student1 = "Ali";
let student2 = "Ahmed";
let student3 = "Talha";
```

We can use:

```js
let students = ["Ali", "Ahmed", "Talha"];
```

### Important

JavaScript arrays use **zero-based indexing**.

```text
Index:    0        1        2
        ┌───────┬───────┬───────┐
Array:  │ "Ali" │"Ahmed" │"Talha"│
        └───────┴───────┴───────┘
```

---

# 2. Creating an Array

### Array literal

```js
let fruits = ["Apple", "Mango", "Banana"];
```

### Empty array

```js
let fruits = [];
```

Values can be added later:

```js
fruits[0] = "Apple";
fruits[1] = "Mango";
fruits[2] = "Banana";
```

---

# 3. Accessing Array Elements

Use the index to access an element.

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Banana
```

### Last element

```js
console.log(fruits[fruits.length - 1]);
```

---

# 4. Changing Array Elements

Arrays are **mutable**, meaning their elements can be changed.

```js
let fruits = ["Apple", "Mango", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
```

Output:

```js
["Apple", "Orange", "Banana"]
```

---

# 5. Array `length`

The `length` property returns the number of elements.

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.length);
```

Output:

```text
3
```

### Important relationship

```text
Array length = 3
Last index = 2
```

In general:

```js
lastIndex = array.length - 1;
```

---

# 6. Arrays Can Contain Different Data Types

JavaScript arrays can contain different types of values.

```js
let data = [
    "Talha",
    20,
    true,
    null
];
```

An array can also contain another array.

```js
let numbers = [
    10,
    20,
    [30, 40]
];
```

Access nested values:

```js
console.log(numbers[2][0]); // 30
console.log(numbers[2][1]); // 40
```

---

# 7. `push()`

`push()` adds one or more elements to the **end** of an array.

```js
let fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);
```

Output:

```js
["Apple", "Mango", "Banana"]
```

Multiple values:

```js
fruits.push("Orange", "Grapes");
```

### Important

`push()` changes the original array.

It also returns the **new length** of the array.

```js
let fruits = ["Apple", "Mango"];

let result = fruits.push("Banana");

console.log(result); // 3
```

---

# 8. `pop()`

`pop()` removes the **last element**.

```js
let fruits = ["Apple", "Mango", "Banana"];

let removed = fruits.pop();

console.log(removed); // Banana
console.log(fruits);  // ["Apple", "Mango"]
```

### Important

`pop()` returns the element that was removed.

---

# 9. `unshift()`

`unshift()` adds one or more elements to the **beginning**.

```js
let fruits = ["Mango", "Banana"];

fruits.unshift("Apple");

console.log(fruits);
```

Output:

```js
["Apple", "Mango", "Banana"]
```

It returns the **new length**.

```js
let result = fruits.unshift("Orange");

console.log(result);
```

---

# 10. `shift()`

`shift()` removes the **first element**.

```js
let fruits = ["Apple", "Mango", "Banana"];

let removed = fruits.shift();

console.log(removed); // Apple
console.log(fruits);  // ["Mango", "Banana"]
```

---

# 11. `indexOf()`

`indexOf()` returns the index of a specified element.

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.indexOf("Mango"));
```

Output:

```text
1
```

If the element doesn't exist:

```js
console.log(fruits.indexOf("Orange"));
```

Output:

```text
-1
```

---

# 12. `includes()`

`includes()` checks whether an array contains a specific value.

It returns either `true` or `false`.

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango"));
```

Output:

```text
true
```

```js
console.log(fruits.includes("Orange"));
```

Output:

```text
false
```

---

# 13. `slice()`

`slice()` extracts a portion of an array.

### Syntax

```js
array.slice(start, end);
```

The `end` index is **not included**.

```js
let fruits = ["Apple", "Mango", "Banana", "Orange"];

let result = fruits.slice(1, 3);

console.log(result);
```

Output:

```js
["Mango", "Banana"]
```

### Important

`slice()` does **not** modify the original array.

```text
Index:     0        1        2        3
          Apple    Mango    Banana   Orange
                    ↑         ↑
                  start      end
```

`slice(1, 3)` means:

```text
Start at index 1
Stop before index 3
```

---

# 14. `splice()`

`splice()` can be used to:

* Remove elements
* Add elements
* Replace elements

### Syntax

```js
array.splice(start, deleteCount);
```

### Removing elements

```js
let fruits = ["Apple", "Mango", "Banana"];

fruits.splice(1, 1);

console.log(fruits);
```

Output:

```js
["Apple", "Banana"]
```

Meaning:

```js
splice(1, 1);
```

```text
Start at index 1
Remove 1 element
```

---

## Adding Elements with `splice()`

```js
let fruits = ["Apple", "Banana"];

fruits.splice(1, 0, "Mango");

console.log(fruits);
```

Output:

```js
["Apple", "Mango", "Banana"]
```

Here:

```js
splice(1, 0, "Mango");
```

means:

```text
Start at index 1
Delete 0 elements
Insert "Mango"
```

---

## Replacing Elements with `splice()`

```js
let fruits = ["Apple", "Mango", "Banana"];

fruits.splice(1, 1, "Orange");

console.log(fruits);
```

Output:

```js
["Apple", "Orange", "Banana"]
```

---

# 15. `join()`

`join()` converts an array into a string.

```js
let fruits = ["Apple", "Mango", "Banana"];

let result = fruits.join(", ");

console.log(result);
```

Output:

```text
Apple, Mango, Banana
```

Using another separator:

```js
console.log(fruits.join("-"));
```

Output:

```text
Apple-Mango-Banana
```

### Relationship

```text
Array → join() → String
```

---

# 16. `split()`

`split()` is a **String method**, but it is commonly used together with arrays.

It converts a string into an array.

```js
let str = "Ali Ahmed Talha";

let names = str.split(" ");

console.log(names);
```

Output:

```js
["Ali", "Ahmed", "Talha"]
```

### Relationship

```text
String → split() → Array
Array  → join()  → String
```

---

# 17. `reverse()`

`reverse()` reverses the order of elements.

```js
let numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers);
```

Output:

```js
[5, 4, 3, 2, 1]
```

### Important

`reverse()` modifies the original array.

---

# 18. `sort()`

`sort()` sorts the elements of an array.

```js
let fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
```

Output:

```js
["Apple", "Banana", "Mango"]
```

---

## Numeric Sorting

JavaScript's default `sort()` converts elements to strings.

Therefore:

```js
let numbers = [10, 2, 30, 5];

numbers.sort();

console.log(numbers);
```

may produce:

```js
[10, 2, 30, 5]
```

For ascending numeric sorting:

```js
numbers.sort((a, b) => a - b);
```

Result:

```js
[2, 5, 10, 30]
```

For descending:

```js
numbers.sort((a, b) => b - a);
```

Result:

```js
[30, 10, 5, 2]
```

---

# 19. Looping Through Arrays

## `for` Loop

```js
let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Output:

```text
Apple
Mango
Banana
```

### Important

```js
i < fruits.length
```

because the last valid index is:

```js
fruits.length - 1
```

---

# 20. `for...of`

`for...of` directly gives you the values.

```js
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Mango
Banana
```

Compare:

```js
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

with:

```js
for (let fruit of fruits) {
    console.log(fruit);
}
```

`for...of` is useful when you don't need the index.

---

# 21. `forEach()`

`forEach()` executes a function for every element.

```js
let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

Using an arrow function:

```js
fruits.forEach((fruit) => {
    console.log(fruit);
});
```

### Getting index and value

```js
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

Output:

```text
0 Apple
1 Mango
2 Banana
```

---

# 22. `map()`

`map()` creates a **new array** by transforming every element.

```js
let numbers = [1, 2, 3, 4];

let doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);
```

Output:

```js
[2, 4, 6, 8]
```

### Example

```js
let numbers = [10, 20, 30];

let result = numbers.map((num) => {
    return num + 5;
});

console.log(result);
```

Output:

```js
[15, 25, 35]
```

### Concept

```text
Original    Transformation    New
   1     →       ×2       →     2
   2     →       ×2       →     4
   3     →       ×2       →     6
```

---

# 23. `filter()`

`filter()` creates a new array containing only the elements that satisfy a condition.

```js
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNumbers);
```

Output:

```js
[2, 4, 6]
```

### Concept

```text
1 → ❌
2 → ✅
3 → ❌
4 → ✅
5 → ❌
6 → ✅
```

---

# 24. `find()`

`find()` returns the **first element** that satisfies a condition.

```js
let numbers = [10, 20, 30, 40];

let result = numbers.find((num) => {
    return num > 25;
});

console.log(result);
```

Output:

```text
30
```

Only the first matching element is returned.

If nothing matches:

```js
let result = numbers.find((num) => {
    return num > 100;
});

console.log(result);
```

Output:

```text
undefined
```

---

# 25. `some()`

`some()` checks whether **at least one** element satisfies a condition.

It returns `true` or `false`.

```js
let numbers = [1, 3, 5, 8];

let result = numbers.some((num) => {
    return num % 2 === 0;
});

console.log(result);
```

Output:

```text
true
```

Because `8` is even.

---

# 26. `every()`

`every()` checks whether **all** elements satisfy a condition.

```js
let numbers = [2, 4, 6, 8];

let result = numbers.every((num) => {
    return num % 2 === 0;
});

console.log(result);
```

Output:

```text
true
```

Example:

```js
let numbers = [2, 4, 5, 8];

let result = numbers.every((num) => {
    return num % 2 === 0;
});

console.log(result);
```

Output:

```text
false
```

Because `5` is not even.

---

# 27. `reduce()`

`reduce()` reduces all elements into **one final value**.

For example, calculate the sum:

```js
let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum);
```

Output:

```text
100
```

### How it works

```text
Initial total = 0

0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100
```

The `0` is the initial value of `total`.

---

# 28. Important Array Methods

| Method       | Purpose                           | Changes Original? |
| ------------ | --------------------------------- | ----------------- |
| `push()`     | Add to end                        | ✅                 |
| `pop()`      | Remove from end                   | ✅                 |
| `unshift()`  | Add to beginning                  | ✅                 |
| `shift()`    | Remove from beginning             | ✅                 |
| `slice()`    | Extract portion                   | ❌                 |
| `splice()`   | Add/remove/replace                | ✅                 |
| `indexOf()`  | Find index                        | ❌                 |
| `includes()` | Check existence                   | ❌                 |
| `join()`     | Array → String                    | ❌                 |
| `reverse()`  | Reverse array                     | ✅                 |
| `sort()`     | Sort array                        | ✅                 |
| `forEach()`  | Execute function for each element | ❌*                |
| `map()`      | Transform elements                | ❌*                |
| `filter()`   | Select elements                   | ❌*                |
| `find()`     | Find first matching element       | ❌                 |
| `some()`     | Check if at least one matches     | ❌                 |
| `every()`    | Check if all match                | ❌                 |
| `reduce()`   | Reduce to one value               | ❌                 |

> `forEach()`, `map()`, and `filter()` don't modify the array themselves, although the callback can still modify objects stored inside the array.

---

# 29. Array Methods by Category

## Adding / Removing

```js
push()
pop()
unshift()
shift()
splice()
```

## Searching

```js
indexOf()
includes()
find()
```

## Checking Conditions

```js
some()
every()
```

## Transforming

```js
map()
filter()
```

## Combining / Converting

```js
join()
reduce()
```

## Ordering

```js
sort()
reverse()
```

## Extracting

```js
slice()
```

---

# 30. Important Difference: `slice()` vs `splice()`

This is a very common interview and practical question.

### `slice()`

```js
let arr = [10, 20, 30, 40];

let result = arr.slice(1, 3);
```

Original:

```js
[10, 20, 30, 40]
```

Result:

```js
[20, 30]
```

Original array remains unchanged.

### `splice()`

```js
let arr = [10, 20, 30, 40];

arr.splice(1, 2);
```

Original becomes:

```js
[10, 40]
```

### Remember

```text
slice  → copy/extract → does NOT modify
splice → modify       → changes original
```

---

# 31. Important Difference: `map()` vs `forEach()`

### `forEach()`

Used when you simply want to perform an action for every element.

```js
let numbers = [1, 2, 3];

numbers.forEach((num) => {
    console.log(num);
});
```

### `map()`

Used when you want to create a **new array**.

```js
let numbers = [1, 2, 3];

let doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);
```

Output:

```js
[2, 4, 6]
```

### Remember

```text
forEach → perform an action
map     → transform and create a new array
```

---

# 32. Important Difference: `find()` vs `filter()`

### `find()`

Returns the **first matching element**.

```js
let numbers = [10, 20, 30, 40];

let result = numbers.find(num => num > 15);

console.log(result);
```

Output:

```text
20
```

### `filter()`

Returns **all matching elements** as an array.

```js
let result = numbers.filter(num => num > 15);

console.log(result);
```

Output:

```js
[20, 30, 40]
```

### Remember

```text
find   → one element
filter → array of elements
```

---

# 33. Important Difference: `some()` vs `every()`

### `some()`

> Is **at least one** element satisfying the condition?

```js
let numbers = [1, 3, 5, 8];

console.log(numbers.some(num => num % 2 === 0));
```

Output:

```text
true
```

### `every()`

> Do **all** elements satisfy the condition?

```js
let numbers = [2, 4, 6, 8];

console.log(numbers.every(num => num % 2 === 0));
```

Output:

```text
true
```

### Remember

```text
some  → at least one
every → all
```

---

# 34. Common Array Pattern

A very common pattern in JavaScript:

```js
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

Understand this pattern well:

```text
i = 0
   ↓
numbers[0]
   ↓
i++
   ↓
numbers[1]
   ↓
i++
   ↓
numbers[2]
   ↓
...
```

---

# 35. Key Points to Remember

1. Arrays store multiple values.
2. Array indexing starts from `0`.
3. `length` gives the number of elements.
4. Last index is `length - 1`.
5. Arrays are mutable.
6. `push()` adds at the end.
7. `pop()` removes from the end.
8. `unshift()` adds at the beginning.
9. `shift()` removes from the beginning.
10. `slice()` does not modify the original array.
11. `splice()` modifies the original array.
12. `map()` creates a transformed array.
13. `filter()` creates an array of matching elements.
14. `find()` returns the first matching element.
15. `some()` checks whether at least one element matches.
16. `every()` checks whether all elements match.
17. `reduce()` combines elements into one value.
18. `sort()` sorts the array.
19. `reverse()` reverses the array.
20. `join()` converts an array into a string.
21. `split()` converts a string into an array.
