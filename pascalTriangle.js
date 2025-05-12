// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

const numRows = 5;

const pascalTriangle = (numRows) => {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1); // Create a row with all elements initialized to 1
    console.log("i: ", i);
    for (let j = 1; j < i; j++) {
      // Update the inner elements of the row
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
      console.log("i:" + i + " j: " + j);
    }

    result.push(row); // Add the row to the result
  }

  return result;
};

console.log(pascalTriangle(numRows));
