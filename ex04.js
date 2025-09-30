// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = (arr) => {
  const refTable = new Array(26).fill(0);

  arr.split("").forEach((e) => {
    refTable[e.charCodeAt(0) - "a".charCodeAt(0)]++;
  });

  const maxCount = Math.max(...refTable);
  const maxIndex = refTable.indexOf(maxCount);

  return String.fromCharCode(maxIndex + "a".charCodeAt(0));
};

console.log(mostFrequentChar("javascript")); // Expected output: "a"
