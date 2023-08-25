/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxHeight = 0;

  let i = 0;
  while (i < height.length) {
    let nextI;
    const start = height[i];
    for (let j = i + 1; j < height.length; j++) {
      const end = height[j];

      let depth = end;
      if (end > start) {
        depth = start;
        if (!nextI) {
          nextI = j;
        }
      }

      maxHeight = Math.max(depth * (j - i), maxHeight);
    }

    if (nextI) {
      i = nextI;
    } else {
      break;
    }
  }
  return maxHeight;
};
