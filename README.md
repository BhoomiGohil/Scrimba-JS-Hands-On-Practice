# Scrimba JS Hands-On Practice

This repository contains practical JavaScript exercises to strengthen your understanding of key concepts through hands-on experience. Each example focuses on a specific aspect of JavaScript, ranging from basic operations to advanced array manipulation.

## Table of Contents

- [Overview](#overview)
- [Examples](#examples)
  - [1. Array Mapping](#1-array-mapping)
  - [2. DOM Manipulation](#2-dom-manipulation)
  - [3. Event Handling](#3-event-handling)
  - [4. Fetch API](#4-fetch-api)
  - [5. Local Storage](#5-local-storage)
- [Explanation](#explanation)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository offers multiple JavaScript exercises to provide practical understanding and usage of common JS patterns, methods, and real-world functionalities. Each section contains code examples to guide you through essential concepts.

## Examples

### 1. Array Mapping

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

**Explanation**: This example demonstrates how the `map()` method can be used to transform an array by doubling each number.

### 2. DOM Manipulation

```javascript
const button = document.getElementById("myButton");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  output.textContent = "Button was clicked!";
});
```

**Explanation**: This code shows how to manipulate the DOM by changing the content of an element when a button is clicked.

### 3. Event Handling

```javascript
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("Enter key was pressed!");
  }
});
```

**Explanation**: Here, an event listener is attached to the entire document that logs a message to the console when the Enter key is pressed.

### 4. Fetch API

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

**Explanation**: This example uses the `fetch()` API to get data from a remote source and log it to the console.

### 5. Local Storage

```javascript
localStorage.setItem("username", "JohnDoe");
const user = localStorage.getItem("username");
console.log(user); // Output: JohnDoe
```

**Explanation**: This code stores a value in the browser’s local storage and retrieves it later for use.

## Explanation

Each of the examples above highlights a key JavaScript concept:

- **Array Mapping**: Efficiently transforms an array without altering the original.
- **DOM Manipulation**: Dynamically updates the webpage based on user interaction.
- **Event Handling**: Listens for and responds to specific user actions.
- **Fetch API**: Fetches remote data and handles it asynchronously.
- **Local Storage**: Stores data locally, allowing it to persist across page reloads.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/BhoomiGohil/Scrimba-JS-Hands-On-Practice.git
   ```
2. Open the relevant file in a code editor or browser.
3. Run each example using a browser console or Node.js to observe the behavior.
