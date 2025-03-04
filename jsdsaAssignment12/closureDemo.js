function createCounter() {
  let count = 0; // This variable is part of the closure

  // Nested function that accesses and modifies the `count` variable
  function increment() {
    count++; // Access and modify the outer function's variable
    return count;
  }

  return increment; // Return the nested function
}

// Create a counter function
const counter = createCounter();

// Demonstrate closure behavior
console.log(counter()); // Output: 1 (count is incremented to 1)
console.log(counter()); // Output: 2 (count is incremented to 2)
console.log(counter()); // Output: 3 (count is incremented to 3)
