/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  outer: for (let i = 0; i < haystack.length; i++) {
    inner: for (let j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        continue outer;
      }
    }

    return i;
  }

  return -1;
};
