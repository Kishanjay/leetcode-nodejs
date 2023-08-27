/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxLen = 0;
  let maxStr = "";

  for (let i = 0; i < s.length; i++) {
    // Check odd length palindromies

    let a = i;
    let b = i;
    while (a >= 0 && b < s.length) {
      if (s[a] !== s[b]) {
        break;
      }
      const strLen = b + 1 - a;
      if (strLen > maxLen) {
        maxLen = strLen;
        maxStr = s.slice(a, b + 1);
      }

      a--;
      b++;
    }

    // Check even length palindromies
    a = i;
    b = i + 1;
    while (a >= 0 && b < s.length) {
      if (s[a] !== s[b]) {
        break;
      }
      const strLen = b + 1 - a;
      if (strLen > maxLen) {
        maxLen = strLen;
        maxStr = s.slice(a, b + 1);
      }

      a--;
      b++;
    }
  }

  return maxStr;
};
