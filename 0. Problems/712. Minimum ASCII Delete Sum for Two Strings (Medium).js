/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  memo = {};
  return dp(s1, s2, s1.length, s2.length);
};

let memo = {};
function dp(s1, s2, i, j) {
  const id = `${i},${j}`;
  if (id in memo) {
    return memo[id];
  }

  if (i === -1 && j === -1) {
    return 0;
  }
  if (j === -1) {
    return sumSubstr(s1, i);
  }
  if (i === -1) {
    return sumSubstr(s2, j);
  }
  if (s1[i] === s2[j]) {
    const r = dp(s1, s2, i - 1, j - 1);
    memo[id] = r;
    return r;
  }

  const r = Math.min(
    dp(s1, s2, i - 1, j) + toAsciValue(s1[i]),
    dp(s1, s2, i, j - 1) + toAsciValue(s2[j])
  );
  memo[id] = r;
  return r;
}

function sumSubstr(s, maxI) {
  let total = 0;
  for (let i = maxI; i >= 0; i--) {
    total += toAsciValue(s[i]);
  }
  return total;
}
function toAsciValue(c) {
  return c.charCodeAt(0);
}

// cbaaw
// dcbaa
