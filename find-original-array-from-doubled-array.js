/**
 * @param {number[]} changed
 * @return {number[]}
 */

// https://leetcode.com/problems/find-original-array-from-doubled-array/

var findOriginalArray = function (changed) {
  if (changed.length % 2 !== 0) return [];
  let result = [];
  let count = 0;

  changed.sort((a, b) => a - b);

  while (count < changed.length) {
    if (changed[count] > -1) {
      const firstEl = changed[count];
      let iMatch = changed.indexOf(firstEl * 2, count + 1);
      if (iMatch > 0) {
        result.push(firstEl);
        changed[count] = -1;
        changed[iMatch] = -1;
      } else {
        return [];
      }
    }
    count++;
  }

  return result;
};

// findOriginalArray([0, 3, 2, 4, 6, 0]);
// findOriginalArray([1]);
// console.log(findOriginalArray([6, 3, 0, 0, 4, 5]));
// console.log(findOriginalArray([1, 2, 2, 4, 1, 8]));
// console.log(findOriginalArray([4, 4, 16, 20, 8, 8, 2, 10]));
// console.log(findOriginalArray([0, 0, 0, 0]));
console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));
