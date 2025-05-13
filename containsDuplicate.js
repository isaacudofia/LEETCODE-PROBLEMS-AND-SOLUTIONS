// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

const nums = [1, 2, 3, 1];

const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(`i: ${nums[i]} and j: ${nums[j]}`);
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsDuplicate(nums));
