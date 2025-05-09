//Input: n = 124
//Output: 8
//Explanation:
//The digits of n are [1, 2, 4].
//The possible products of any two digits are: 1 * 2 = 2, 1 * 4 =4 , 2 * 4 = 8.
//The maximum product is 8.

const number = 124;

const maxProduct = (number) => {
  let switchedIntegerToArray = number.toString().split("");
  let maxProduct = 0;
  for (let i = 0; i <= switchedIntegerToArray.length; i++) {
    for (let j = i + 1; j <= switchedIntegerToArray.length - 1; j++) {
      let calculateProduct = Number(
        Number(switchedIntegerToArray[i]) * Number(switchedIntegerToArray[j])
      );

      if (calculateProduct > maxProduct) {
        maxProduct = calculateProduct;
      }
    }
  }
  return console.log(maxProduct);
};

maxProduct(number);
