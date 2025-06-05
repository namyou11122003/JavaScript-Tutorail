
## 🚀 JavaScript Tutorial for Beginners

### 📌 Prerequisites:

- Basic knowledge of HTML and CSS is helpful but not required.
- A browser (like Chrome) and a text editor (like VS Code).

---

## 🧩 Table of Contents

1. [What is JavaScript?](#1)
2. [How to Add JavaScript to HTML](#2)
3. [Variables and Data Types](#3)
4. [Operators](#4)
5. [Functions](#5)
6. [Control Flow (if, else, switch)](#6)
7. [Loops](#7)
8. [Arrays and Objects](#8)
9. [DOM Manipulation](#9)
10. [Events](#10)
11. [Practice Projects](#11)

---

<a id="1"></a>

### 1. What is JavaScript?

JavaScript is a scripting language that lets you create dynamically updating content, control multimedia, animate images, and much more.

---

<a id="2"></a>

### 2. How to Add JavaScript to HTML

```html
<!-- Inline JavaScript -->
<button onclick="alert('Hello!')">Click Me</button>

<!-- Internal JavaScript -->
<script>
  console.log("Hello from JS");
</script>

<!-- External JavaScript -->
<script src="script.js"></script>
```

---

<a id="3"></a>

### 3. Variables and Data Types

```javascript
let name = "John"; // String
const age = 25; // Number
var isStudent = true; // Boolean
let colors = ["red", "blue"]; // Array
let person = { name: "Alice", age: 30 }; // Object
```

---

<a id="4"></a>

### 4. Operators

```javascript
// Arithmetic
let sum = 10 + 5;

// Comparison
console.log(10 > 5); // true

// Logical
console.log(true && false); // false
```

---

<a id="5"></a>

### 5. Functions

```javascript
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Sam"));
```

---

<a id="6"></a>

### 6. Control Flow

```javascript
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

---

<a id="7"></a>

### 7. Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

<a id="8"></a>

### 8. Arrays and Objects

```javascript
// Arrays
let fruits = ["apple", "banana"];
console.log(fruits[0]); // apple

// Objects
let user = {
  name: "Lily",
  age: 28,
};
console.log(user.name); // Lily
```

---

<a id="9"></a>

### 9. DOM Manipulation

```html
<p id="demo">Hello</p>
<script>
  document.getElementById("demo").innerHTML = "Changed!";
</script>
```

---

<a id="10"></a>

### 10. Events

```html
<button onclick="showMessage()">Click me</button>

<script>
  function showMessage() {
    alert("Button clicked!");
  }
</script>
```

---

