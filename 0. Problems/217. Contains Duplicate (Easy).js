/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const dict = {};

  for (const num of nums) {
    if (num in dict) {
      return true;
    }

    dict[num] = true;
  }

  return false;
};
