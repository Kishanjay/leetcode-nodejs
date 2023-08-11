/**
 * @param {number} n
 * @return {number}
 */

let hist = {};
var climbStairs = function (n) {
  if (n in hist) {
    return hist[n];
  }
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  const manier1 = climbStairs(n - 1);
  const manier2 = climbStairs(n - 2);

  const result = manier1 + manier2;
  hist[n] = result;
  return result;
};
