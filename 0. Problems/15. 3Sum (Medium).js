/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a,b)=> a-b);

  const solutions = [];
  let prevTarget;
  for (let i = 0; i < nums.length; i++) {
      const target = nums[i];
      if (target === prevTarget) {
          continue;
      }
      prevTarget = target;


      let s = i+1;
      let e = nums.length;

      while (s < e) {
          const sum = nums[s] + nums[e];
          if (target + sum === 0) {
              solutions.push([target, nums[s], nums[e]]);
              let l = nums[s];
              e--;
              while (nums[s] === l && s < e) {
                  s++;
              }
          } else if (target + sum < 0) {
              s++;
          } else {
              e--;
          }
      }
  }

  return solutions;
}