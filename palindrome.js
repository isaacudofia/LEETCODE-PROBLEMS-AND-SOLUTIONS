// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left

let number = -121;

const palindrome = (number) => {
  const reverseString = number.toString().split("").reverse().join("");
  number === Number(reverseString) ? console.log(true) : console.log(false);
};

palindrome(number);
