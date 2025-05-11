// Input: x = 120
// Output: 21

const number = 1534236469;

const reverseInteger = (number) => {
  let integerToString = number.toString();

  let checkForOperator = null;

  if (integerToString.startsWith("-")) {
    integerToString = integerToString.substring(1);
    integerToString = integerToString.split("");
    checkForOperator = true;
  } else {
    checkForOperator = false;
  }

  let reversedString = "";
  for (let i = integerToString.length - 1; i >= 0; i--) {
    reversedString += integerToString[i];
  }
  reversedString = reversedString;

  if (checkForOperator === true) {
    reversedString = Number(reversedString);
    reversedString = reversedString * -1;
  } else {
    reversedString = Number(reversedString);
  }

  if (reversedString < -2147483648 || reversedString > 2147483647) {
    return console.log(0);
  }

  return console.log(reversedString);
};

reverseInteger(number);
