/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  const shortestPathPerK = [];

  let visitedNodes = {};
  let queue = [];

  let curX = 0;
  let curY = 0;
  let curKey = coordKey(curX, curY);
  let curCost = { c: 0, via: undefined };
  let curK = 0;

  shortestPathPerK[curK] = { [curKey]: curCost };

  // visit node
  while (curX && curY) {
    visitedNodes.push(curKey);
    const ns = getN(curX, curY);

    // update the entries for all these neighbours.
    for (n of ns) {
      // you can get here by going via: curKey
      const [nX, nY] = n;
      const nKey = coordKey(nX, nY);

      let deltaK = grid[curY][curX];

      for (let i = 0; i < shortestPathPerK.length; i++) {
        // This entry SHOULD exist, because we took it from the arr.
        const shortestPathForK = shortestPathPerK[i][curKey];

        nCost = { c: shortestPathForK + 1, via: curKey };
        if (!shortestPathPerK[curK + deltaK][nKey]) {
          shortestPathPerK[curK + deltaK][nKey] = nCost;
        } else if (shortestPathPerK[curK + deltaK][nKey].c > nCost.c) {
          shortestPathPerK[curK + deltaK][nKey] = nCost;
        }
      }
    }

    // Get the next shortestPath for EVERY k value that we've seen sofar
    for (let i = 0; i < shortestPathPerK.length; i++) {
      // find smollest;

      let smollest = { c: Number.MAX_SAFE_INTEGER };
      for (let j = 0; j < Object.keys(shortestPathPerK[i]).length; j++) {
        const key = Object.keys(shortestPathPerK[i]);
        if (key in visitedNodes) {
          continue;
        }

        const sp = shortestPathPerK[i][key];
        if (sp.c < smollest.c) {
          smollest = sp;
        }
      }
    }
  }

  function getN(xC, yC) {
    const neighbours = [];
    if (xC > 0) {
      let leftN = [xC - 1, yC];
      queue.push(leftN);
    }
    if (yC > 0) {
      let topN = [xC, yC - 1];
      queue.push(topN);
    }
    if (xC < grid[0].length - 2) {
      let rightN = [xC, yC + 1];
      queue.push(rightN);
    }
    if (yC < grid.length - 2) {
      let bottomN = [xC, yC + 1];
      queue.push(bottomN);
    }
    return neighbours;
  }
};

function coordKey(x, y) {
  return `${x},${y}`;
}
