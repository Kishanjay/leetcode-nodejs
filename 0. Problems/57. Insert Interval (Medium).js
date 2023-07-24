/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];
  let [si, ei] = newInterval;
  let pushedNew = false;

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    // Before
    if (interval[0] < si && interval[1] < si) {
      result.push(interval);
    }

    // Swallow
    else if (interval[0] <= si && interval[1] >= ei) {
      result.push(interval);
      pushedNew = true; // no need to push anymore.
    }

    // After (only when finding the first 'after', the new element should be pushed.)
    else if (interval[0] > ei) {
      if (!pushedNew) {
        result.push([si, ei]);
        pushedNew = true;
      }
      result.push(interval);
    }

    // start a merged interval
    else if (interval[0] < si && interval[1] >= si && interval[1] < ei) {
      si = interval[0];
    }

    // merge interval
    else if (interval[0] >= si && interval[0] <= ei && interval[1] > ei) {
      ei = interval[1];
    }

    // interval is swallowed by us.
    else {
      //
    }
  }

  if (!pushedNew) {
    result.push([si, ei]);
  }
  return result;
};
