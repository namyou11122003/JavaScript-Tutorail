---

## 🌟 ES6 Features in JavaScript

### 1. `let` and `const` (Block-scoped variables)

```javascript
let name = "John"; // Mutable
const age = 25;    // Immutable
```

---

### 2. Arrow Functions `() => {}`

```javascript
// Traditional
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

---

### 3. Template Literals `` ` ` ``

```javascript
let name = "Alice";
console.log(`Hello, ${name}!`); // Hello, Alice!
```

---

### 4. Destructuring

#### a. Array Destructuring

```javascript
let [a, b] = [1, 2];
console.log(a, b); // 1 2
```

#### b. Object Destructuring

```javascript
const person = { name: "Bob", age: 30 };
const { name, age } = person;
console.log(name); // Bob
```

---

### 5. Default Parameters

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet(); // Hello, Guest
```

---

### 6. Spread Operator `...`

#### a. Arrays

```javascript
let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];
```

#### b. Objects

```javascript
let user = { name: "Tom" };
let newUser = { ...user, age: 25 };
```

---

### 7. Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
```

---

### 8. Object Property Shorthand

```javascript
let name = "Sarah";
let age = 22;

let user = { name, age }; // Same as { name: name, age: age }
```

---

### 9. Object and Array Destructuring in Function Parameters

```javascript
const printUser = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};

printUser({ name: "Sam", age: 27 });
```

---

### 10. Classes

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

let dog = new Animal("Dog");
dog.speak(); // Dog makes a sound
```

---

### 11. Promises

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
};

fetchData().then(data => console.log(data)); // Data loaded
```

---

### 12. Modules (Used with separate files)

```js
// person.js
export const name = "John";

// main.js
import { name } from './person.js';
console.log(name);
```

> 🔔 Note: Modules work in modern browsers or using bundlers like Webpack, Vite, or in Node.js with proper setup.

---
