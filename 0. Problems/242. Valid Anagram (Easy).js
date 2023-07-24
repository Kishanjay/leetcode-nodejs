/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let cCount = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in cCount)) {
      cCount[s[i]] = 1;
    } else {
      cCount[s[i]] += 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const chr = t[i];

    if (!(chr in cCount)) {
      return false;
    }
    if (--cCount[chr] < 0) {
      return false;
    }
  }

  for (let count of Object.values(cCount)) {
    if (count > 0) {
      return false;
    }
  }

  return true;
};
