/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let startI = 0;
  let fillI = -1;

  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      // Flip this bit, and see what happens.
      const curCount = i - startI;
      maxCount = Math.max(curCount, maxCount);
      startI = fillI + 1;
      fillI = i;
    }
  }
  const curCount = nums.length - startI;
  maxCount = Math.max(curCount, maxCount);

  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1]));
