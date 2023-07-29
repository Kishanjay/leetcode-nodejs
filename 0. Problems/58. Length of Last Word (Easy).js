/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    let charIndex = s.length - 1 - i;
    if (s[charIndex] === " ") {
      if (length === 0) {
        continue;
      }
      return length;
    }
    length++;
  }

  return length;
};
