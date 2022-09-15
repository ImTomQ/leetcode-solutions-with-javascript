/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  let result = [];
  let arr = changed;
  let o = true;
  while (arr.length > 1) {
    let firstEl = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (firstEl === arr[i] / 2 || firstEl === arr[i] * 2) {
        let g = firstEl > arr[i] ? arr[i] : firstEl;
        result.push(g);
        arr = arr.filter((el) => el !== firstEl && el !== arr[i]);
        o = false;
        break;
      } else {
        o = true;
      }
    }
  }

  if (o) arr = [];

  return result;
};

findOriginalArray([0, 3, 2, 4, 6, 0]);
// findOriginalArray([1]);
