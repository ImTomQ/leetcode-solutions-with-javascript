/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let char = "";
  let count = 0;

  if (s.length <= 0) return 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      if (char.indexOf(s[i]) < 0) {
        char += s[i];
        count++;
      }
      if (result < count) {
        result = count;
      }
    } else {
      if (char.indexOf(s[i]) < 0) {
        count++;
      }
      if (result < count) {
        result = count;
      }
      char = "";
      count = 0;
    }
  }

  console.log(result);

  if (result == 0) return 1;

  return result;
};
