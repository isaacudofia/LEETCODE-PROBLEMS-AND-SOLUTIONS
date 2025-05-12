// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

const num = 15;

const fizzBuzz = (num) => {
  let index = 0;
  let array = [];
  while (index < num) {
    let enteredData = index + 1;
    enteredData = enteredData.toString();
    if (Number(enteredData) % 3 === 0 && Number(enteredData) % 5 === 0) {
      enteredData = "FizzBuzz";
    } else if (Number(enteredData) % 5 === 0) {
      enteredData = "Buzz";
    } else if (Number(enteredData) % 3 === 0) {
      enteredData = "Fizz";
    }
    array.push(enteredData);
    index++;
  }
  return array;
};

console.log(fuzzBuzz(num));
