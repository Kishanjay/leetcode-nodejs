var generateParenthesis = function (n) {
  const stack = [];
  const result = [];

  function backtrack(numOpen, numClosed) {
    if (numOpen === numClosed && numOpen === n) {
      result.push(stack.join(""));
      return;
    }

    if (numOpen < n) {
      stack.push("(");
      backtrack(numOpen + 1, numClosed);
      stack.pop();
    }

    if (numOpen > numClosed) {
      stack.push(")");
      backtrack(numOpen, numClosed + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /**
   * @type {
   *  str: string,
   *  numOpen: number,
   *  numClosed: number,
   * }[]
   */
  let queue = [{ str: "", numOpen: 0, numClosed: 0 }];

  for (let i = 0; i < n * 2; i++) {
    // Run through whole queue.

    const newQueue = [];
    while (queue.length) {
      let item = queue.pop();

      // Add `(`
      if (item.numOpen < n) {
        newQueue.push({
          str: item.str + "(",
          numOpen: item.numOpen + 1,
          numClosed: item.numClosed,
        });
      }

      // Add `)` if possible
      if (item.numOpen > item.numClosed) {
        newQueue.push({
          str: item.str + ")",
          numOpen: item.numOpen,
          numClosed: item.numClosed + 1,
        });
      }
    }

    queue = newQueue;
  }

  return queue.map((q) => q.str);
};

// Add another open

const r = generateParenthesis(3);
console.log(r);
