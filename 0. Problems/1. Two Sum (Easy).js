/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hm = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hm) {
      return [hm[nums[i]], i];
    }

    hm[target - nums[i]] = i;
  }
};
