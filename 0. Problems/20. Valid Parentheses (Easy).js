/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let hist = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === `]`) {
      if (hist.pop() !== `[`) {
        return false;
      }
    } else if (s[i] === `}`) {
      if (hist.pop() !== `{`) {
        return false;
      }
    } else if (s[i] === `)`) {
      if (hist.pop() !== `(`) {
        return false;
      }
    } else {
      hist.push(s[i]);
    }
  }

  return hist.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */

const pairs = {
  "}": "{",
  ")": "(",
  "]": "["
}
var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) {
      if (stack.pop() !== pairs[s[i]]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};