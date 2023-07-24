// /**
//  * @param {number[][]} points
//  * @param {number} k
//  * @return {number[][]}
//  */
// var kClosest = function (points, k) {
//   const nodes = points
//     .map(([x, y]) => {
//       const d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
//       return { x, y, d };
//     })
//     .sort((a, b) => a.d - b.d)
//     .slice(0, k);

//   return nodes.map((x) => [x.x, x.y]);
// };

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const result = [];

  let rPoints = points.map((p) => {
    const d = Math.sqrt(Math.pow(p[0], 2) + Math.pow(p[1], 2));
    return { p: p, d };
  });

  let rK = k;

  while (result.length < k) {
    if (rK === 0) {
      break;
    }
    if (rK < 0) {
      throw Error(`Unexpected k value.`);
    }
    if (!rPoints.length) {
      throw Error(`unexpected rPoints length`);
    }
    const left = [];
    const right = [];

    let pivot = rPoints[0];
    const pivots = [pivot];

    for (let i = 1; i < rPoints.length; i++) {
      if (rPoints[i].d < pivot.d) {
        left.push(rPoints[i]);
      } else if (rPoints[i].d === pivot.d) {
        pivots.push(rPoints[i]);
      } else {
        right.push(rPoints[i]);
      }
    }

    if (left.length < rK) {
      left.push(...pivots);
    } else {
      right.push(...pivots);
    }

    if (left.length <= rK) {
      result.push(...left);
      rPoints = right;
      rK -= left.length;
    } else {
      rPoints = left;
      // Keep finding what you're looking for from this box;
    }
  }

  return result.map((x) => x.p);
};
