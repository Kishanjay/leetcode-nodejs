/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  for (let i = 0; i <= x; i++) {
    const sq = i * i;
    if (sq === x) {
      return i;
    }

    if (sq > x) {
      return i - 1;
    }
  }
};
