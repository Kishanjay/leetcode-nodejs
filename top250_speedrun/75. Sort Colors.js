/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  let i = 0;
  while (i <= r) {
    let num = nums[i];

    if (num === 0) {
      nums[i] = nums[l];
      nums[l] = 0;
      l++;
      i++;
    } else if (num === 2) {
      nums[i] = nums[r];
      nums[r] = 2;
      r--;
    } else {
      i++;
    }
  }
};
