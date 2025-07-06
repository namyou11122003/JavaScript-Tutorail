Absolutely! Here's a clear and complete set of examples for:

* `localStorage`
* `sessionStorage`
* `setTimeout`
* `setInterval`

You can copy & paste this HTML into your browser to test each one.

---

## ✅ Full HTML Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Web Storage & Timing</title>
</head>
<body>
  <h1>localStorage & sessionStorage</h1>

  <!-- Local Storage -->
  <input type="text" id="localInput" placeholder="Enter local name" />
  <button onclick="saveToLocal()">Save to localStorage</button>
  <button onclick="loadFromLocal()">Load from localStorage</button>
  <p id="localOutput"></p>

  <!-- Session Storage -->
  <input type="text" id="sessionInput" placeholder="Enter session name" />
  <button onclick="saveToSession()">Save to sessionStorage</button>
  <button onclick="loadFromSession()">Load from sessionStorage</button>
  <p id="sessionOutput"></p>

  <hr />

  <h2>setTimeout & setInterval</h2>
  <button onclick="delayedMessage()">Run setTimeout</button>
  <p id="timeoutMsg"></p>

  <button onclick="startCounter()">Start Interval</button>
  <button onclick="stopCounter()">Stop Interval</button>
  <p id="intervalMsg"></p>

  <script>
    // === localStorage ===
    function saveToLocal() {
      const name = document.getElementById("localInput").value;
      localStorage.setItem("localName", name);
      alert("Saved to localStorage!");
    }

    function loadFromLocal() {
      const name = localStorage.getItem("localName");
      document.getElementById("localOutput").textContent = "From localStorage: " + name;
    }

    // === sessionStorage ===
    function saveToSession() {
      const name = document.getElementById("sessionInput").value;
      sessionStorage.setItem("sessionName", name);
      alert("Saved to sessionStorage!");
    }

    function loadFromSession() {
      const name = sessionStorage.getItem("sessionName");
      document.getElementById("sessionOutput").textContent = "From sessionStorage: " + name;
    }

    // === setTimeout ===
    function delayedMessage() {
      document.getElementById("timeoutMsg").textContent = "Waiting 2 seconds...";
      setTimeout(() => {
        document.getElementById("timeoutMsg").textContent = "This message appeared after 2 seconds!";
      }, 2000);
    }

    // === setInterval ===
    let counter = 0;
    let intervalId;

    function startCounter() {
      intervalId = setInterval(() => {
        counter++;
        document.getElementById("intervalMsg").textContent = "Counter: " + counter;
      }, 1000);
    }

    function stopCounter() {
      clearInterval(intervalId);
      document.getElementById("intervalMsg").textContent += " (Stopped)";
    }
  </script>
</body>
</html>
```

---

## 🧪 What This Does:

### 🔒 `localStorage`

* Stores data **permanently** (until cleared).
* Persists even after closing the browser.

### 🔐 `sessionStorage`

* Stores data only **while the tab is open**.
* Deleted when the tab/window is closed.

### ⏳ `setTimeout`

* Runs a function **once after a delay** (in milliseconds).

### 🔁 `setInterval`

* Runs a function **repeatedly** at a fixed time interval.
* Use `clearInterval()` to stop it.

---

Let me know if you'd like a version using `JavaScript modules` or `React`.
