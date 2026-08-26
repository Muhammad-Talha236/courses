# JavaScript Strings

A **string** in JavaScript is a sequence of characters used to represent text.

```js
const name = "Talha";
const message = "Hello World";
```

Strings can be created using:

```js
const str1 = "Hello";
const str2 = 'Hello';
const str3 = `Hello`;
```

The third form uses **template literals**.

---

## 1. String Properties

### `length`

Returns the number of characters in a string.

```js
const str = "JavaScript";

console.log(str.length);
```

Output:

```text
10
```

> `length` is a **property**, so we don't use `()`.

---

# 2. Accessing Characters

## `[]` — Bracket Notation

Access a character using its index.

```js
const str = "Hello";

console.log(str[0]); // H
console.log(str[1]); // e
console.log(str[4]); // o
```

Indexes start from `0`.

```text
H   e   l   l   o
0   1   2   3   4
```

---

## `at()`

Returns the character at a specific index.

```js
const str = "JavaScript";

console.log(str.at(0));  // J
console.log(str.at(4));  // S
console.log(str.at(-1)); // t
```

The main advantage of `at()` is that it supports negative indexes.

```js
str.at(-1); // Last character
str.at(-2); // Second-last character
```

---

## `charAt()`

Returns the character at a specific index.

```js
const str = "Hello";

console.log(str.charAt(1));
```

Output:

```text
e
```

---

## `charCodeAt()`

Returns the UTF-16 code of the character at a specific index.

```js
const str = "ABC";

console.log(str.charCodeAt(0));
```

Output:

```text
65
```

Because `A` has code `65`.

---

## `codePointAt()`

Returns the Unicode code point of a character.

```js
const str = "A";

console.log(str.codePointAt(0));
```

Output:

```text
65
```

This is particularly useful when dealing with Unicode characters.

---

# 3. Changing Letter Case

## `toUpperCase()`

Converts the string to uppercase.

```js
const str = "hello world";

console.log(str.toUpperCase());
```

Output:

```text
HELLO WORLD
```

---

## `toLowerCase()`

Converts the string to lowercase.

```js
const str = "HELLO WORLD";

console.log(str.toLowerCase());
```

Output:

```text
hello world
```

---

## `toLocaleUpperCase()`

Converts a string to uppercase according to a specific locale.

```js
const str = "hello";

console.log(str.toLocaleUpperCase());
```

---

## `toLocaleLowerCase()`

Converts a string to lowercase according to a specific locale.

```js
const str = "HELLO";

console.log(str.toLocaleLowerCase());
```

---

# 4. Searching Inside Strings

## `includes()`

Checks whether a string contains specific text.

Returns `true` or `false`.

```js
const str = "I am learning JavaScript";

console.log(str.includes("JavaScript"));
```

Output:

```text
true
```

Example:

```js
const email = "talha@gmail.com";

console.log(email.includes("@")); // true
```

---

## `startsWith()`

Checks whether a string starts with specific text.

```js
const url = "https://google.com";

console.log(url.startsWith("https"));
```

Output:

```text
true
```

---

## `endsWith()`

Checks whether a string ends with specific text.

```js
const file = "profile.jpg";

console.log(file.endsWith(".jpg"));
```

Output:

```text
true
```

---

## `indexOf()`

Returns the index of the first occurrence of specified text.

```js
const str = "Hello World";

console.log(str.indexOf("World"));
```

Output:

```text
6
```

If the text isn't found:

```js
console.log(str.indexOf("JavaScript"));
```

Output:

```text
-1
```

---

## `lastIndexOf()`

Returns the index of the **last occurrence**.

```js
const str = "hello hello";

console.log(str.lastIndexOf("hello"));
```

Output:

```text
6
```

---

## `search()`

Searches a string using a regular expression.

```js
const str = "Hello JavaScript";

console.log(str.search(/JavaScript/));
```

Output:

```text
6
```

If nothing is found, it returns `-1`.

---

## `match()`

Finds matches using a regular expression.

```js
const str = "I have 123 apples";

console.log(str.match(/\d+/));
```

The important matched value is:

```text
123
```

Example with multiple matches:

```js
const str = "I have 10 apples and 20 oranges";

console.log(str.match(/\d+/g));
```

Output:

```text
["10", "20"]
```

---

## `matchAll()`

Returns an iterator containing all matches of a regular expression.

```js
const str = "cat bat cat";

const matches = str.matchAll(/cat/g);

for (const match of matches) {
    console.log(match[0]);
}
```

Output:

```text
cat
cat
```

---

# 5. Extracting Parts of a String

## `slice()`

Extracts a portion of a string.

```js
const str = "JavaScript";

console.log(str.slice(0, 4));
```

Output:

```text
Java
```

Syntax:

```js
string.slice(start, end);
```

The `end` index is **not included**.

```text
J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9
```

```js
str.slice(0, 4);
```

Gets indexes:

```text
0 1 2 3
```

---

### Negative `slice()`

```js
const str = "JavaScript";

console.log(str.slice(-6));
```

Output:

```text
Script
```

---

## `substring()`

Extracts part of a string.

```js
const str = "JavaScript";

console.log(str.substring(0, 4));
```

Output:

```text
Java
```

### `slice()` vs `substring()`

```js
str.slice(-5);
```

supports negative indexes.

```js
str.substring(-5);
```

treats the negative value differently.

For most modern JavaScript code, `slice()` is generally more convenient.

---

## `substr()` ⚠️ Deprecated

`substr()` was historically used to extract part of a string.

```js
str.substr(0, 4);
```

Avoid using it in new code. Prefer:

```js
str.slice(0, 4);
```

---

# 6. Replacing Text

## `replace()`

Replaces the first matching occurrence.

```js
const str = "I like Java. Java is powerful.";

console.log(str.replace("Java", "JavaScript"));
```

Result:

```text
I like JavaScript. Java is powerful.
```

Only the first `"Java"` was replaced.

---

## `replaceAll()`

Replaces all matching occurrences.

```js
const str = "Java Java Java";

console.log(str.replaceAll("Java", "JavaScript"));
```

Result:

```text
JavaScript JavaScript JavaScript
```

---

# 7. Removing Spaces

## `trim()`

Removes whitespace from both the beginning and end.

```js
const str = "   Hello World   ";

console.log(str.trim());
```

Output:

```text
Hello World
```

This is extremely useful for processing form input.

---

## `trimStart()`

Removes whitespace from the beginning.

```js
const str = "   Hello";

console.log(str.trimStart());
```

Output:

```text
Hello
```

---

## `trimEnd()`

Removes whitespace from the end.

```js
const str = "Hello   ";

console.log(str.trimEnd());
```

Output:

```text
Hello
```

---

# 8. Splitting Strings

## `split()`

Converts a string into an array.

```js
const str = "apple,banana,mango";

const fruits = str.split(",");

console.log(fruits);
```

Output:

```js
["apple", "banana", "mango"]
```

### Splitting by space

```js
const name = "Muhammad Talha";

console.log(name.split(" "));
```

Output:

```js
["Muhammad", "Talha"]
```

### Splitting every character

```js
const str = "Hello";

console.log(str.split(""));
```

Output:

```js
["H", "e", "l", "l", "o"]
```

---

# 9. Combining Strings

## `concat()`

Combines strings.

```js
const firstName = "Muhammad";
const lastName = "Talha";

const fullName = firstName.concat(" ", lastName);

console.log(fullName);
```

Output:

```text
Muhammad Talha
```

However, template literals are usually easier:

```js
const fullName = `${firstName} ${lastName}`;
```

---

# 10. Repeating Strings

## `repeat()`

Repeats a string a specified number of times.

```js
const str = "Hi ";

console.log(str.repeat(3));
```

Output:

```text
Hi Hi Hi
```

---

# 11. Padding Strings

## `padStart()`

Adds characters to the beginning until the string reaches a specified length.

```js
const number = "5";

console.log(number.padStart(3, "0"));
```

Output:

```text
005
```

Another example:

```js
const hour = "7";

console.log(hour.padStart(2, "0"));
```

Output:

```text
07
```

---

## `padEnd()`

Adds characters to the end until the string reaches a specified length.

```js
const str = "Hello";

console.log(str.padEnd(10, "."));
```

Output:

```text
Hello.....
```

---

# 12. Comparing Strings

## `localeCompare()`

Compares two strings according to language/locale sorting rules.

```js
console.log("apple".localeCompare("banana"));
```

Typically returns:

```text
-1
```

Meaning `"apple"` comes before `"banana"`.

Example:

```js
console.log("banana".localeCompare("apple"));
```

Typically:

```text
1
```

If they are equivalent:

```js
console.log("apple".localeCompare("apple"));
```

Typically:

```text
0
```

---

# 13. Converting Values to Strings

## `String()`

Converts a value into a string.

```js
const age = 20;

const result = String(age);

console.log(result);
console.log(typeof result);
```

Output:

```text
20
string
```

Examples:

```js
String(100);       // "100"
String(true);      // "true"
String(false);     // "false"
String(null);      // "null"
```

---

## `toString()`

Converts a value into a string.

```js
const number = 123;

console.log(number.toString());
```

Output:

```text
"123"
```

You can also convert numbers to different bases:

```js
const number = 10;

console.log(number.toString(2));
```

Output:

```text
1010
```

Because `10` in decimal is `1010` in binary.

---

# 14. Template Literals

Template literals use backticks:

```js
const name = "Talha";

console.log(`Hello ${name}`);
```

Output:

```text
Hello Talha
```

You can put expressions inside `${}`:

```js
const a = 10;
const b = 20;

console.log(`The result is ${a + b}`);
```

Output:

```text
The result is 30
```

---

# 15. `String.raw()`

`String.raw()` returns a string without interpreting escape sequences in the usual way.

```js
const path = String.raw`C:\Users\Talha\Desktop`;

console.log(path);
```

Useful when working with paths and strings containing backslashes.

---

# 16. Escape Characters

JavaScript strings support escape characters.

| Escape  | Meaning        |
| ------- | -------------- |
| `\n`    | New line       |
| `\t`    | Tab            |
| `\\`    | Backslash      |
| `\'`    | Single quote   |
| `\"`    | Double quote   |
| ``\` `` | Backtick       |
| `\0`    | Null character |

Example:

```js
const message = "Hello\nWorld";

console.log(message);
```

Output:

```text
Hello
World
```

Another example:

```js
const message = "Hello\tWorld";

console.log(message);
```

---

# 17. Strings Are Immutable

Strings in JavaScript are **immutable**.

This means you cannot directly modify an existing character.

```js
let name = "Talha";

name[0] = "M";

console.log(name);
```

The result remains:

```text
Talha
```

Instead, you create a new string:

```js
let name = "Talha";

name = "Malha";

console.log(name);
```

---

# 18. String Primitive vs String Object

Normally use:

```js
const name = "Talha";
```

This creates a **string primitive**.

Avoid unnecessarily doing:

```js
const name = new String("Talha");
```

This creates a **String object**.

For normal JavaScript development, use string primitives.

---

# 19. Complete String Method Cheat Sheet

| Method / Property     | Purpose                          |
| --------------------- | -------------------------------- |
| `length`              | Get string length                |
| `at()`                | Get character by index           |
| `charAt()`            | Get character by index           |
| `charCodeAt()`        | Get UTF-16 code                  |
| `codePointAt()`       | Get Unicode code point           |
| `toUpperCase()`       | Convert to uppercase             |
| `toLowerCase()`       | Convert to lowercase             |
| `toLocaleUpperCase()` | Locale-aware uppercase           |
| `toLocaleLowerCase()` | Locale-aware lowercase           |
| `includes()`          | Check whether text exists        |
| `startsWith()`        | Check beginning                  |
| `endsWith()`          | Check ending                     |
| `indexOf()`           | Find first occurrence            |
| `lastIndexOf()`       | Find last occurrence             |
| `search()`            | Search using regex               |
| `match()`             | Find regex matches               |
| `matchAll()`          | Find all regex matches           |
| `slice()`             | Extract part of string           |
| `substring()`         | Extract part of string           |
| `substr()`            | Old/deprecated extraction method |
| `replace()`           | Replace first match              |
| `replaceAll()`        | Replace all matches              |
| `trim()`              | Remove whitespace from both ends |
| `trimStart()`         | Remove whitespace from beginning |
| `trimEnd()`           | Remove whitespace from end       |
| `split()`             | Convert string to array          |
| `concat()`            | Combine strings                  |
| `repeat()`            | Repeat string                    |
| `padStart()`          | Add characters at beginning      |
| `padEnd()`            | Add characters at end            |
| `localeCompare()`     | Compare strings                  |
| `String()`            | Convert value to string          |
| `toString()`          | Convert value to string          |
| `String.raw()`        | Handle raw template strings      |

---

# 20. Most Important Methods to Learn First

You **don't need to memorize all of these immediately**.

Start with:

```text
length
at()
toUpperCase()
toLowerCase()
trim()
includes()
startsWith()
endsWith()
indexOf()
slice()
replace()
replaceAll()
split()
concat()
repeat()
padStart()
padEnd()
```

Once these are comfortable, learn:

```text
match()
matchAll()
search()
localeCompare()
charCodeAt()
codePointAt()
String.raw()
```

These cover most everyday string operations you'll encounter in JavaScript.
