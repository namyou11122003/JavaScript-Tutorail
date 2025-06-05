# JavaScript Tutorial: Zero to Hero

## Table of Contents

1. Introduction to JavaScript
2. JavaScript Basics
3. Control Structures
4. Functions
5. Objects and Arrays
6. DOM Manipulation
7. Events
8. ES6 Features
9. Error Handling
10. Asynchronous JavaScript
11. JavaScript in the Browser
12. JavaScript and APIs (AJAX/Fetch)
13. JavaScript Modules
14. Debugging and Best Practices
15. Mini Projects for Practice

---

## 1. Introduction to JavaScript

JavaScript is a programming language used to make web pages interactive. It runs in the browser and allows you to implement dynamic features such as updating content, animations, handling user input, etc.

## 2. JavaScript Basics

* **Variables**: `var`, `let`, `const`
* **Data Types**: Number, String, Boolean, Object, Array, Null, Undefined
* **Operators**: Arithmetic, Assignment, Comparison, Logical

```js
let name = "John";
const age = 25;
let isStudent = true;
```

## 3. Control Structures

* **If-Else**:

```js
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

* **Switch**:

```js
switch(day) {
  case 'Monday': console.log("Start of week"); break;
  default: console.log("Another day");
}
```

* **Loops**: `for`, `while`, `do...while`

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## 4. Functions

```js
function greet(name) {
  return "Hello, " + name;
}
```

Arrow functions:

```js
const greet = (name) => `Hello, ${name}`;
```

## 5. Objects and Arrays

* **Objects**:

```js
let person = {
  name: "Alice",
  age: 30
};
```

* **Arrays**:

```js
let colors = ["red", "green", "blue"];
```

## 6. DOM Manipulation

```js
document.getElementById("myId").innerText = "Hello World";
document.querySelector(".myClass").style.color = "blue";
```

## 7. Events

```js
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
```

## 8. ES6 Features

* Template Literals: `` `Hello ${name}` ``
* Destructuring:

```js
const { name, age } = person;
```

* Spread and Rest:

```js
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
```

## 9. Error Handling

```js
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.error(error.message);
}
```

## 10. Asynchronous JavaScript

* **setTimeout / setInterval**
* **Promises**:

```js
fetch("https://api.example.com")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

* **Async/Await**:

```js
async function fetchData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

## 11. JavaScript in the Browser

* Interacting with forms, elements, and styles
* Local Storage & Session Storage:

```js
localStorage.setItem("username", "john");
const user = localStorage.getItem("username");
```

## 12. JavaScript and APIs (AJAX/Fetch)

* `XMLHttpRequest` (Old way)
* `fetch()` (Modern way)

## 13. JavaScript Modules

```js
// export.js
export const greet = (name) => `Hello, ${name}`;

// import.js
import { greet } from './export.js';
```

## 14. Debugging and Best Practices

* Use browser DevTools
* `console.log()`, `console.error()`
* Keep code DRY (Don't Repeat Yourself)
* Use meaningful variable names
* Avoid global variables

## 15. Mini Projects for Practice

1. Calculator
2. Todo List
3. Quiz App
4. Weather App using API
5. Image Slider
6. Digital Clock

---

**Keep practicing and building real projects to become a JavaScript Hero!**
