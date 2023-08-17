/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const nums2 = [...nums];

  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = nums2[i];
  }
};

/**
 * = SLOW
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let end = nums[nums.length - 1];
    for (let j = nums.length - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = end;
  }
};

/**
 * = Consumes more mem
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let mid = (nums.length - k) % nums.length;
  let slice1 = [...nums.slice(mid)];
  let slice2 = [...nums.slice(0, mid)];

  for (let i = 0; i < slice1.length; i++) {
    nums[i] = slice1[i];
  }

  for (let i = 0; i < slice2.length; i++) {
    nums[i + slice1.length] = slice2[i];
  }
};
