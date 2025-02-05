function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return null; // Handles null and non-number inputs
  }
  return a + b; // Correct addition for numbers only
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo('1', 2)); // Output: null
console.log(foo(1, '2')); // Output: null