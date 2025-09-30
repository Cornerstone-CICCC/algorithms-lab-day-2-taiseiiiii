// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = (str) =>
  str
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
