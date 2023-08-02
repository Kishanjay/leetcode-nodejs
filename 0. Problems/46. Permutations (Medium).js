/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [[nums[0]]];
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const nextNums = [...nums];

    const num = nextNums.splice(i, 1);
    result.push(...permute(nextNums).map((r) => [num, ...r]));
  }

  return result;
};
