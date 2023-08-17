/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const count = {};

  for (let num of nums) {
    if (num in count) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  let goalNum = Math.floor(nums.length / 2);
  for (const c in count) {
    if (count[c] > goalNum) {
      return c;
    }
  }

  return -1;
};
