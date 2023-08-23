/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const subStrMap = {};
  let startI = 0;
  let longestLen = 0;

  for (let curI = 0; curI < s.length; curI++) {
    let chr = s[curI];

    if (chr in subStrMap && subStrMap[chr] >= startI) {
      startI = subStrMap[chr] + 1;
    } else {
      longestLen = Math.max(curI - startI + 1, longestLen);
    }
    subStrMap[chr] = curI;
  }

  longestLen = Math.max(s.length - 1 - startI, longestLen);

  return longestLen;
};
