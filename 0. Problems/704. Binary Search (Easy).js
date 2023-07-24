/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let minI = 0;
  let maxI = nums.length - 1;

  while (minI < maxI) {
    let curI = Math.floor((minI + maxI) / 2);
    console.log({ minI, maxI, curI });

    if (nums[curI] === target) {
      return curI;
    }
    if (nums[curI] > target) {
      maxI = curI - 1;
    } else {
      minI = curI + 1;
    }
  }

  if (nums[minI] !== target) {
    return -1;
  }

  return minI;
};

console.log(search([2, 5], 0));
