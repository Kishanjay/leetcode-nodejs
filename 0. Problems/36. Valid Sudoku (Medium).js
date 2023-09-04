/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const rows = {};
    const cols = {};

    const groups = {};

    const rowStart = Math.floor(i / 3) * 3;
    const colStart = (i % 3) * 3;

    for (let j = 0; j < 9; j++) {
      const rowD = Math.floor(j / 3);

      const g = board[rowStart + rowD][colStart + (j % 3)];
      if (g in groups) {
        return false;
      }
      if (g !== ".") {
        groups[g] = true;
      }

      const col = board[i][j];
      if (col in cols) {
        console.log(`Found ${col} already on col ${j}`);
        return false;
      }
      if (col !== ".") {
        cols[col] = true;
      }

      const row = board[j][i];
      if (row in rows) {
        console.log(`Found ${row} already on row ${j}`);
        return false;
      }
      if (row !== ".") {
        rows[row] = true;
      }
    }
  }

  return true;
};
