/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const counter = {};

  for (const num of nums) {
    if (num in counter) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }

  const counterArr = [];

  for (const [num, count] of Object.entries(counter)) {
    counterArr.push({ num, count });
  }

  counterArr.sort((a, b) => {
    return b.count - a.count;
  });

  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(counterArr[i].num);
  }

  return result;
};
