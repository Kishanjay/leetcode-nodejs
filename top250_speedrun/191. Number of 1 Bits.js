/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  rest = n;

  let total = 0;
  while (rest > 0) {
    if (rest % 2 === 1) {
      total++;
    }

    rest = Math.floor(rest / 2);
  }

  return total;
};
