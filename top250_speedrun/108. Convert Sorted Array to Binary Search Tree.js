/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // -10, -3, 0, 5, 9

  if (nums.length === 0) {
    return;
  }
  if (nums.length === 1) {
    new TreeNode(nums[0]);
  }
  if (nums.length === 2) {
    new TreeNode(nums[0], nums[1]);
  }

  let half1 = nums.slice(0, nums.length / 2);
  let half2 = nums.slice(nums.length / 2 + 1);

  return new TreeNode(
    nums[Math.floor(nums.length / 2)],
    sortedArrayToBST(half1),
    sortedArrayToBST(half2)
  );
};
