/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;

  const r = [];
  while (i < m || j < n) {
    if ((i < m && nums1[i] < nums2[j]) || j >= n) {
      r.push(nums1[i]);
      i++;
    } else {
      r.push(nums2[j]);
      j++;
    }
  }

  for (let i = 0; i < r.length; i++) {
    nums1[i] = r[i];
  }
};
