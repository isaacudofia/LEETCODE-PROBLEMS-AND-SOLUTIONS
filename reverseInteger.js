// Input: x = 120
// Output: 21

const number = 1534236469;

const reverseInteger = (number) => {
  let integerToString = number.toString();

  let checkForOperator = false;

  if (integerToString.startsWith("-")) {
    integerToString = integerToString.substring(1);
    integerToString = integerToString.split("");
    checkForOperator = true;
  }

  let reversedString = "";
  for (let i = integerToString.length - 1; i >= 0; i--) {
    reversedString += integerToString[i];
  }

  let reversedNumber = Number(reversedString);

  if (checkForOperator) {
    reversedNumber = reversedNumber * -1;
  }

  if (reversedNumber < -2147483648 || reversedNumber > 2147483647) {
    return console.log(0);
  }

  return console.log(reversedNumber);
};

reverseInteger(number);
