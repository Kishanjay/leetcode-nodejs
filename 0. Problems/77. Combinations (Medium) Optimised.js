/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  perfCombine(1, n, k, [], result);
  return result;
};

function perfCombine(startN, n, remainingK, cur, result) {
  if (remainingK === 0) {
    result.push([...cur]);
  }

  for (let i = startN; i <= n; i++) {
    cur.push(i);
    perfCombine(i + 1, n, remainingK - 1, cur, result);
    cur.pop();
  }
}

console.log(combine(4, 2));
