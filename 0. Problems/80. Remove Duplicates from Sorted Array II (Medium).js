/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let curNum = -1;
  let curNumCount = 0;

  let iOffset = 0;

  for (let i = 0; i < nums.length; i++) {
    num = nums[i];
    nums[i - iOffset] = num;

    if (num === curNum) {
      curNumCount++;

      if (curNumCount >= 3) {
        iOffset++;
      }
    } else {
      curNum = num;
      curNumCount = 1;
    }
  }

  return nums.length - iOffset;
};
