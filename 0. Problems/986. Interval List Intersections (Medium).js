/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const result = [];
  let aIndex = 0;
  let bIndex = 0;
  while (aIndex < firstList.length && bIndex < secondList.length) {
    // No intersection possible
    if (firstList[aIndex][1] < secondList[bIndex][0]) {
      aIndex++;
    } else if (secondList[bIndex][1] < firstList[aIndex][0]) {
      bIndex++;
    } else {
      // MUST BE INTERSECTING
      result.push([
        Math.max(firstList[aIndex][0], secondList[bIndex][0]),
        Math.min(firstList[aIndex][1], secondList[bIndex][1]),
      ]);

      if (firstList[aIndex][1] > secondList[bIndex][1]) {
        bIndex++;
      } else {
        aIndex++;
      }
    }
  }

  return result;
};
