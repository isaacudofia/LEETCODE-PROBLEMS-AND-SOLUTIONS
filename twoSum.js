//Two Sum Leetcode Problem
//Example 1:
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2, 7, 11, 15];
target = 0;

const twoSum = (nums, target) => {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return console.log([i, i + 1]);
    }
  }
};

twoSum(nums, target);
