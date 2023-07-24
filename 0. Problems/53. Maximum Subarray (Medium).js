/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let startI = 0;
  let curTotal = undefined;
  let maxTotal = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (curTotal === undefined) {
      curTotal = num;
    } else {
      curTotal += num;
    }

    if (curTotal < 0) {
      startI = i + 1;
      curTotal = undefined;
      maxTotal = Math.max(maxTotal, num);
    } else {
      maxTotal = Math.max(maxTotal, curTotal);
    }
  }

  return maxTotal;
};
