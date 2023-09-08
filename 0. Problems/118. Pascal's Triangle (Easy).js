/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  let prevRow = [];
  for (let i = 0; i < numRows; i++) {
    const length = i + 1;

    const row = [];
    for (let j = 0; j < length; j++) {
      if (j === 0 || j === length - 1) {
        row.push(1);
      } else {
        row.push(prevRow[j - 1] + prevRow[j]);
      }
    }

    result.push(row);
    prevRow = row;
  }

  return result;
};
