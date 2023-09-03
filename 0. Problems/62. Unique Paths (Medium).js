/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const grid = [];

  for (let i = 0; i < m; i++) {
    grid[i] = Array(n);
  }

  grid[m - 1][n - 1] = 1;

  const nodes = [];
  if (m > 1) {
    nodes.push([m - 2, n - 1]);
  }
  if (n > 1) {
    nodes.push([m - 1, n - 2]);
  }

  while (nodes.length) {
    const [row, col] = nodes.pop();

    if (grid[row][col] !== undefined) {
      continue;
    }

    // visit node
    let options = 0;
    if (row + 1 < m) {
      options += grid[row + 1][col];
    }
    if (col + 1 < n) {
      options += grid[row][col + 1];
    }
    grid[row][col] = options;

    // move left
    if (col > 0) {
      nodes.unshift([row, col - 1]);
    }
    // move up
    if (row > 0) {
      nodes.unshift([row - 1, col]);
    }
  }

  return grid[0][0];
};

console.log(uniquePaths(3, 7));
