/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hashMap[num] >= 0) {
      return [hashMap[num], i];
    }
    hashMap[target - num] = i;
  }
};
