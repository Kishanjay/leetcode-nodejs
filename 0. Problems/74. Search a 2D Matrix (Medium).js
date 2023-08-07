/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let iMin = 0;
  let iMax = matrix[0].length * matrix.length;

  function indexToNum(i) {
    row = Math.floor(i / matrix[0].length);
    col = i % matrix[0].length;

    return matrix[row][col];
  }

  let iCur = Math.floor((iMax + iMin) / 2);

  let num = indexToNum(iCur);
  while (num !== target) {
    if (num < target) {
      iMin = iCur + 1;
    } else {
      iMax = iCur;
    }

    if (iMin === iMax) {
      return false;
    }

    iCur = Math.floor((iMax + iMin) / 2);
    num = indexToNum(iCur);
  }

  return true;
};

const x = searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3
);

console.log({ x });
