/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let dMat = []; // === the hist table also.
  let q = [];

  for (let i = 0; i < mat.length; i++) {
    let dMatRow = [];
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        dMatRow.push(0);
        q.push({ coord: [i, j], d: 0 });
      } else {
        dMatRow.push(-1);
      }
    }

    dMat.push(dMatRow);
  }

  while (q.length) {
    let n = q.shift();

    const [i, j] = n.coord;

    for (let di = -1; di < 2; di++) {
      for (let dj = -1; dj < 2; dj++) {
        if (di !== 0 && dj !== 0) continue;
        if (di === dj) continue;

        if (
          i + di >= 0 &&
          i + di < mat.length &&
          j + dj >= 0 &&
          j + dj < mat[i].length
        ) {
          if (dMat[i + di][j + dj] !== -1) {
            continue; // Already got this neigba
          }

          // new neigba is one step further.
          dMat[i + di][j + dj] = n.d + 1;
          q.push({ coord: [i + di, j + dj], d: n.d + 1 });
        }
      }
    }
  }

  return dMat;
};

const r = updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]);
console.log(r);
