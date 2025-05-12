// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

const num1 = "456";
const num2 = "77";

const addStrings = (num1, num2) => {
  const result = parseInt(num1) + parseInt(num2);
  return result.toString();
};

console.log(addStrings(num1, num2));
