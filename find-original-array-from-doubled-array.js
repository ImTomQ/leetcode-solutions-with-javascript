/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  let result = [];
  let arr = changed;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < changed.length; i++) {
    let count = 1;
    while (arr && count <= arr.length) {
      if (arr[0] === arr[count] * 2 || arr[0] === arr[count] / 2) {
        result.push(arr[0] > arr[count] ? arr[count] : arr[0]);
        arr = arr.filter((_, index) => index !== 0 && index !== count);
        break;
      }
      count++;
    }
  }
  if (arr.length > 0) return [];
  return result;
};

// findOriginalArray([0, 3, 2, 4, 6, 0]);
// findOriginalArray([1]);
// console.log(findOriginalArray([6, 3, 0, 0, 4, 5]));
console.log(findOriginalArray([1, 2, 2, 4, 1, 8]));
console.log(findOriginalArray([4, 4, 16, 20, 8, 8, 2, 10]));
console.log(findOriginalArray(
  
));
// console.log(findOriginalArray([4, 4, 16, 20, 8, 8, 2, 10]));
