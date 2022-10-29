/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const mmap = {
    I: {
      V: 4,
      X: 9,
    },
    X: {
      L: 40,
      C: 90,
    },
    C: {
      D: 400,
      M: 900,
    },
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    let next = i + 1 < s.length ? s[i + 1] : null;

    if (next) {
      if (cur in mmap) {
        if (next in mmap[cur]) {
          total += mmap[cur][next];
          i++;
          continue;
        }
      }
    }
    total += map[cur];
  }
  return total;
};
