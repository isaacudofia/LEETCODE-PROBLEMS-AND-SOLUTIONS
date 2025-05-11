// Input: x = 120
// Output: 21

const number = 120333;

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
    return console.log(reversedString);
  } else {
    reversedString = Number(reversedString);
    return console.log(reversedString);
  }
};

reverseInteger(number);
