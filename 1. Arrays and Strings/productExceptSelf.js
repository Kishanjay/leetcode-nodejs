/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let total = 1;
  let totalWithoutZero = 1;
  let numberOfZeros = 0;
  for (let i = 0; i < nums.length; i++) {
      total *= nums[i];
      
      if (nums[i] !== 0) {
          totalWithoutZero *= nums[i];
      } else {
          numberOfZeros ++;
      }
  }
  
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          if (numberOfZeros > 1) {
              result.push(0);
          } else {
              result.push(totalWithoutZero);
          }
          continue;
      }
      result.push(total / nums[i]);
  }
  
  return result;
};