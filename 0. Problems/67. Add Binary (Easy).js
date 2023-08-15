/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();

  const resultArr = [];

  const maxLen = Math.max(a.length, b.length);
  let carry = 0;
  for (let i = 0; i < maxLen; i++) {
    value = carry;
    if (i < a.length && a[i] === "1") {
      value++;
    }
    if (i < b.length && b[i] === "1") {
      value++;
    }

    resultArr.push(value % 2);
    carry = Math.floor(value / 2);
  }
  if (carry) {
    resultArr.push(carry);
  }

  return resultArr.reverse().join("");
};
