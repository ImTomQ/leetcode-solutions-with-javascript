/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count=0;
  
  while(count < nums.length) {
      if (nums[count] === nums[count+1]) {
          nums.splice(count+1, 1);
      } else {
          count++
      }
  }
  return nums.length
};