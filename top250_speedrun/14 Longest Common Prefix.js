/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let output = "";
  for (let i = 0; i < strs[0].length; i++) {
    let goalChar = strs[0][i];

    if (!strs.every((s) => s[i] === goalChar)) {
      break;
    }

    output += goalChar;
  }

  return output;
};
