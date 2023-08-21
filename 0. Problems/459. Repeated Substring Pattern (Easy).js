/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 2; i <= s.length; i++) {
    const strLen = s.length / i;
    if (strLen % 1 === 0) {
      if (s.slice(0, strLen).repeat(i) === s) {
        return true;
      }
    }
  }

  return false;
};
