// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.
const getQueryParams = (url) => {
  const queryString = url.slice(url.indexOf("?") + 1);
  return queryString.split("&").reduce((res, e) => {
    const [key, value] = e.split("=");
    res[key] = value;
    return res;
  }, {});
};

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
