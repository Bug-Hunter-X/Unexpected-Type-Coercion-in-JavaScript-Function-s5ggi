function foo(a, b) {
  if (a === null || b === null) {
    return null; // This handles null values correctly
  }
  return a + b; // This is the potential source of error
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo('1', 2)); // Output: 12 (Unexpected type coercion)