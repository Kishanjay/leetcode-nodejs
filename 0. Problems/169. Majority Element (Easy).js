/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let winner;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      winner = nums[i];
      count = 1;
    } else if (winner === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return winner;
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function (nums) {
//   const count = {};

//   for (let num of nums) {
//     if (num in count) {
//       count[num]++;
//     } else {
//       count[num] = 1;
//     }
//   }

//   let goalNum = Math.floor(nums.length / 2);
//   for (const c in count) {
//     if (count[c] > goalNum) {
//       return c;
//     }
//   }

//   return -1;
// };
