/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0;
  outer: for (let i = 0; i < s.length; i++) {
    for (; j < t.length; j++) {
      if (s[i] === t[j]) {
        j++;
        continue outer;
      }
    }

    return false;
  }

  return true;
};
