/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (!carry) {
      break;
    }
    carry = 0;

    digits[i] += 1;

    if (digits[i] > 9) {
      carry = 1;
      digits[i] = 0;
    }
  }

  if (carry) {
    return [carry, ...digits];
  }

  return digits;
};
