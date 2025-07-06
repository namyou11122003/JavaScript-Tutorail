Absolutely! Below are **detailed examples** for each of the event types you mentioned, all in **plain JavaScript**:

---

## ✅ 1. `click` – User clicks an element

```html
<button id="clickBtn">Click Me</button>
<p id="clickText"></p>

<script>
  document.getElementById("clickBtn").addEventListener("click", () => {
    document.getElementById("clickText").textContent = "Button was clicked!";
  });
</script>
```

---

## ✅ 2. `change` – Value of input changes (e.g., select, input)

```html
<select id="selectColor">
  <option value="">Choose color</option>
  <option value="Red">Red</option>
  <option value="Green">Green</option>
  <option value="Blue">Blue</option>
</select>
<p id="colorText"></p>

<script>
  document.getElementById("selectColor").addEventListener("change", (e) => {
    document.getElementById("colorText").textContent =
      "You selected: " + e.target.value;
  });
</script>
```

---

## ✅ 3. `keydown` – Key is pressed down

```html
<input type="text" id="keyInput" placeholder="Type something" />
<p id="keyText"></p>

<script>
  document.getElementById("keyInput").addEventListener("keydown", (e) => {
    document.getElementById("keyText").textContent = "You pressed: " + e.key;
  });
</script>
```

---

## ✅ 4. `submit` – Form is submitted

```html
<form id="myForm">
  <input type="text" name="name" placeholder="Enter name" required />
  <button type="submit">Submit</button>
</form>
<p id="formText"></p>

<script>
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    document.getElementById("formText").textContent = "Form submitted!";
  });
</script>
```

---

## ✅ 5. `mouse` – Mouse hovers over an element
   <div id="mouseBox" style="width:300px;height:150px;background:#eee;text-align:center;line-height:150px;">
  Hover or Click Me
</div>
<p id="mouseOutput"></p>

<script>
  const box = document.getElementById("mouseBox");
  const output = document.getElementById("mouseOutput");

  box.addEventListener("click", () => output.textContent = "Mouse Clicked!");
  box.addEventListener("dblclick", () => output.textContent = "Mouse Double Clicked!");
  box.addEventListener("mouseover", () => output.textContent = "Mouse Over the box!");
  box.addEventListener("mouseout", () => output.textContent = "Mouse Left the box!");
  box.addEventListener("mousedown", () => output.textContent = "Mouse Button Down!");
  box.addEventListener("mouseup", () => output.textContent = "Mouse Button Released!");
  box.addEventListener("mousemove", () => output.textContent = "Mouse Moving...");
  box.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // disable right-click menu
    output.textContent = "Right Click!";
  });
</script>

```

---

## ✅ 6. `DOMContentLoaded` – When HTML is fully loaded (before images/stylesheets)

```html
<p id="domText">Loading...</p>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("domText").textContent = "DOM fully loaded!";
  });
</script>
```

---

Would you like me to put all these examples together into a single HTML file for testing?
