/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let curPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(curPrefix)) {
      curPrefix = curPrefix.slice(0, curPrefix.length - 1);
    }
  }

  return curPrefix;
};
