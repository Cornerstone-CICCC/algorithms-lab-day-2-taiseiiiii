// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = (str) => {
  let target = "";
  if (str.includes(" ")) {
    target = str.split(" ");
  } else {
    target = str.split("_");
  }

  return target.reduce((res, e, index) => {
    if (index === 0) {
      res += e;
    } else {
      res += e[0].toUpperCase() + e.slice(1);
    }
    return res;
  }, "");
};

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"
