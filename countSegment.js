// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
const string = ", , , ,        a, eaefa";

const countSegment = (string) => {
  let trimmedString = string.trim();
  let arrayOfString = trimmedString.split(" ");
  let newArray = arrayOfString.filter((string) => string.length !== 0);
  if (trimmedString.length === 0) return 0;
  return newArray.length;
};

console.log(countSegment(string));
