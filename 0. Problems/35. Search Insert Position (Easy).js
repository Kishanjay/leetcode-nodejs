/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let startI = 0;
  let endI = nums.length;

  while (startI <= endI) {
    const i = Math.floor((startI + endI) / 2);

    if (nums[i] === target) {
      return i;
    }
    if (nums[i] < target) {
      if (nums.length > i + 1) {
        if (nums[i + 1] > target) {
          return i + 1;
        } else {
          startI = i + 1;
        }
      } else {
        return i + 1;
      }
    }

    if (nums[i] > target) {
      if (i >= 1) {
        if (nums[i - 1] < target) {
          return i;
        } else {
          endI = i - 1;
        }
      } else {
        return 0;
      }
    }
  }
};

// const r = searchInsert([1, 3, 5, 6], 5);
// const r2 = searchInsert([1, 3, 5, 6], 2);
const r3 = searchInsert([1, 3], 2);
console.log({ r3 });
