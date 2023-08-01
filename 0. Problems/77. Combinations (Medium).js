/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  return dfs(1, n, k);
};

function dfs(startN, n, remainingK) {
  if (remainingK === 1) {
    return arrRange(startN, n + 1);
  }

  // Not possible, the whole branch should die.
  if (n - startN + 1 < remainingK) {
    return [];
  }

  const result = [];
  for (let i = startN; i <= n; i++) {
    const setResult = dfs(i + 1, n, remainingK - 1).map((x) => [i, ...x]);
    result.push(...setResult);
  }

  return result;
}

function arrRange(start, end) {
  const r = [];
  for (let i = start; i < end; i++) {
    r.push([i]);
  }
  return r;
}

const x = combine(4, 2);
console.log({ x });
