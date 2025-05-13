// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const nums = [1, 2, 3, 1];

const containsDuplicate = (nums) => {
  const seen = new Set(); // Create a Set to store unique elements

  for (const num of nums) {
    if (seen.has(num)) {
      return true; // Return true if a duplicate is found
    }
    seen.add(num); // Add the current number to the Set
  }

  return false; // Return false if no duplicates are found
};

console.log(containsDuplicate(nums));
