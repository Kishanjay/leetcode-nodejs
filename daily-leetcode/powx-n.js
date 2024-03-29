/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }

  if (n < 0) {
    x = 1 / x;
    n = n * -1;
  }

  let half = n / 2;

  if (n % 2 === 0) {
    let resultHalf = myPow(x, half);
    return resultHalf * resultHalf;
  } else {
    half = Math.floor(half);
    let resultHalf = myPow(x, half);
    return resultHalf * resultHalf * x;
  }
};
