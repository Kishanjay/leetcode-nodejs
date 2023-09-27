/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let biggestLeftValues = [];
  let biggestRightValues = [];

  let maxL = 0;
  let maxR = 0;
  for (let i = 0; i < height.length; i++) {
      biggestLeftValues[i] = maxL;
      maxL = Math.max(maxL, height[i]);

      biggestRightValues[height.length-1-i] = maxR;
      maxR = Math.max(maxR, height[height.length-1-i]);
  }

  let total = 0;
  for ( let i = 0; i < height.length; i++) {
      const cur = height[i];

      total += Math.max(Math.min(biggestLeftValues[i], biggestRightValues[i]) - cur, 0);
  }

  return total

};


var trap = function(height) {
  let maxL = 0;
  let maxR = 0;

  let i = 0;
  let j = height.length - 1;

  let total = 0;
  while (i <= j) {

    const maxBar = Math.min(maxL, maxR);
    if (maxL <= maxR) {
      total += Math.max(maxBar - height[i], 0);

      maxL = Math.max(maxL, height[i])
      i++;


    } else {
      total += Math.max(maxBar - height[j], 0);

      maxR = Math.max(maxR, height[j]);
      j--;
    }
  }

  return total;

};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))