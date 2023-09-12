/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  if (n < 27) return String.fromCharCode(n + 64);
  let result = "";
  while (n > 0) {
    let cur = n % 26;
    if (cur === 0) {
      cur = 26;
    }
    result = String.fromCharCode(cur + 64) + result;
    n -= cur;
    n /= 26;
  }
  return result;
};
