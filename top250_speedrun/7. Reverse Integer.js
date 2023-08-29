/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = 0;
  let sign = 1;
  remainder = x;
  if (x < 0) {
    sign = -1;
    remainder = x * -1;
  }

  while (remainder >= 10) {
    let digit = remainder % 10;
    remainder = Math.floor(remainder / 10);
    num += digit;
    num *= 10;
  }
  num += remainder;

  const result = num * sign;
  if (result < (-2) ** 31 || result > 2 ** 31 - 1) {
    return 0;
  }
  return result;
};
