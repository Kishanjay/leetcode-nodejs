/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const suffixProd = new Array(nums.length);
  const prefixProd = [];

  let suffixNum = 1;
  let prefixNum = 1;
  for (let i = 0; i < nums.length; i++) {
    suffixNum *= nums[nums.length - 1 - i];
    prefixNum *= nums[i];

    prefixProd.push(prefixNum);
    suffixProd[nums.length - 1 - i] = suffixNum;
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = 1;

    if (i > 0) {
      num *= prefixProd[i - 1];
    }

    if (i < nums.length - 1) {
      num *= suffixProd[i + 1];
    }

    result.push(num);
  }

  return result;
};

/**
 * FOLLOW UP
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length);

  let mnum = 1;
  result[nums.length - 1] = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    mnum *= nums[nums.length - 1 - i];
    result[nums.length - 2 - i] = mnum;
  }

  mnum = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= mnum;
    mnum *= nums[i];
  }

  return result;
};
