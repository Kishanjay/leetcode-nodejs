/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums
    .reduce((prev, cur) => {
      if (prev.has(cur)) {
        prev.delete(cur);
      } else {
        prev.set(cur);
      }

      return prev;
    }, new Map())
    .keys()
    .next().value;
};
