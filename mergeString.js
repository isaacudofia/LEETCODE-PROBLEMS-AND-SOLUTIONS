// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

const word1 = "abcd";
const word2 = "pq";

const mergeAlternately = (word1, word2) => {
  const word1_Array = word1.split("");
  const word2_Array = word2.split("");
  let iteration;
  word1_Array.length > word2_Array.length
    ? (iteration = word1_Array.length)
    : (iteration = word2_Array.length);
  let merged = [];

  for (let i = 0; i < iteration; i++) {
    merged.push(word1_Array[i]);
    merged.push(word2_Array[i]);
  }
  merged = merged.join("");
  return merged;
};

console.log(mergeAlternately(word1, word2));
