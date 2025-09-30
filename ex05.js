// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = (arr) => {
  let res = 0;
  const vowel = ["a", "i", "u", "e", "o"];
  const target = [...arr.replace(/\s/g, "")];
  target.forEach((element) => {
    if (!vowel.includes(element)) {
      res += 1;
    }
  });

  return res;
};

console.log(countConsonants("hello world")); // Expected output: 7
