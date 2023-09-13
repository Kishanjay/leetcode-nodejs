/**
 * @param {number} n
 * @return {string}
 */

const charcodebase = "A".charCodeAt(0) - 1;
var convertToTitle = function (n) {
  let result = "";

  while (n > 0) {
    let ci = n % 26;
    if (ci === 0) {
      ci = 26;
    }

    result = String.fromCharCode(charcodebase + ci) + result;
    n -= ci;
    n = Math.floor(n / 26);
  }
  return result;
};

var convertToTitle2 = function (n) {
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
