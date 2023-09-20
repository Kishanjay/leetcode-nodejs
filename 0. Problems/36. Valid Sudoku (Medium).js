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

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const row = {};
    const col = {};
    const grid = {};

    for (let j = 0; j < 9; j++) {
      if (board[i][j] in row && board[i][j] !== ".") {
        return false;
      } else {
        row[board[i][j]] = true;
      }

      if (board[j][i] in col && board[j][i] !== ".") {
        return false;
      } else {
        col[board[j][i]] = true;
      }

      // Start row + row offset because of j.
      let rowI = ~~(i / 3) * 3 + ~~(j / 3);

      // Start col + col offset because of j.
      let colI = (i % 3) * 3 + (j % 3);

      const gval = board[rowI][colI];
      if (gval in grid && gval !== ".") {
        return false;
      } else {
        grid[gval] = true;
      }
    }
  }
  return true;
};

var isValidSudoku = function (board) {
  const rows = {};
  const cols = {};
  const grids = {};

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const val = board[row][col];
      if (val === ".") {
        continue;
      }

      if (row in rows) {
        if (val in rows[row]) {
          return false;
        }
        rows[row][val] = true;
      } else {
        rows[row] = { [val]: true };
      }

      if (col in cols) {
        if (val in cols[col]) {
          return false;
        }
        cols[col][val] = true;
      } else {
        cols[col] = { [val]: true };
      }

      // get the grid index -> how?
      const basedOnRow = ~~(row / 3) * 3;
      const basedOnCol = ~~(col / 3);

      const gridI = basedOnRow + basedOnCol;

      if (gridI in grids) {
        if (val in grids[gridI]) {
          return false;
        }
        grids[gridI][val] = true;
      } else {
        grids[gridI] = { [val]: true };
      }
    }
  }
  return true;
};
