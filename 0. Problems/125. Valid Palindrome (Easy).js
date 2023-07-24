/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  ss = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      ss += String.fromCharCode(s.charCodeAt(i) + 32);
    }
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      ss += s[i];
    }
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      ss += s[i];
    }
  }

  s = ss;
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};
