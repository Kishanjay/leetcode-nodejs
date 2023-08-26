/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let startI = 0;
  let endI = height.length - 1;

  let maxArea = 0;
  while (startI !== endI) {
    let width = endI - startI;

    const bar1 = height[startI];
    const bar2 = height[endI];

    if (bar1 > bar2) {
      maxArea = Math.max(maxArea, bar2 * width);

      endI--;
    } else {
      maxArea = Math.max(maxArea, bar1 * width);

      startI++;
    }
  }

  return maxArea;
};

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
