//Two Sum Leetcode Problem
//Example 1:
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2, 7, 11, 15];
target = 26;

const twoSum = (nums, target) => {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return console.log([i, j]);
      }
    }
  }
};

twoSum(nums, target);
