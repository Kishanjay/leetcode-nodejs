/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const seen = {};
  const longestSeq = {}

  for (const num of nums) {
      if (num in seen) {
          continue;
      }
      seen[num] = true;

      let min = num;
      let max = num;
      

      if (num-1 in longestSeq) { 
          let [pMin, pMax] = longestSeq[num-1];
          min = Math.min(pMin, min);
          max = Math.max(pMax, max);
      }

      if (num+1 in longestSeq) { 
          let [pMin, pMax] = longestSeq[num+1];
          min = Math.min(pMin, min);
          max = Math.max(pMax, max);
          
      }

      let obj = longestSeq[min] ?? longestSeq[max] ?? [0,0];
      obj[0] = min;
      obj[1] = max;

      longestSeq[min] = obj
      longestSeq[max] = obj
  }

  let r = 0;
  for (const value of Object.values(longestSeq)) {
    const val = value[1]+1 - value[0]
    if (val > r) {
      r = val;
    }
  }

  return r;
};

var longestConsecutive = function(nums) {
  const map = {}

  for (const num of nums) {
      map[num] = true;
  }

  let maxLen = 0;
  for (const num of nums) {
      if (num-1 in map) {
          continue;
      }

      let len = 1;

      let next = num+1;
      while (next in map) {
          len += 1;
          next += 1;
      }

      maxLen = Math.max(len, maxLen);
  }

  return maxLen;
};

