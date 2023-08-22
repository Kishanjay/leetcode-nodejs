/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const goalNums = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const goal = target - num;

    if (num in goalNums) {
      return [goalNums[num], i];
    }
    goalNums[goal] = i;
  }
};

/**
 * Intro to hashmaps for quick lookup.
 */
