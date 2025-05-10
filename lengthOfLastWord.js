// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
const string = "Hello World   ";

const lengthOfLastWord = (string) => {
  const splitedString = string.trim().split(" ");
  console.log(splitedString);
  const lastWordInTheArray = splitedString[splitedString.length - 1];
  const lengthOfTheLastWord = lastWordInTheArray.length;
  return console.log(lengthOfTheLastWord);
};

lengthOfLastWord(string);
