/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const histMap = {};

  let startI = 0;
  let maxLength = -1;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    // A character that we encounted before
    // - drop all characters until we got c again
    if (c in histMap) {
      maxLength = Math.max(i - startI, maxLength);
      for (let j = startI; j < i; j++) {
        startI++;
        if (s[j] === c) {
          break;
        }
        delete histMap[s[j]];
      }
    } else {
      histMap[c] = 1;
    }
  }

  maxLength = Math.max(s.length - startI, maxLength);
  return maxLength;
};
