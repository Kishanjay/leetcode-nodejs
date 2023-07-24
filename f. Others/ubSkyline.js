//  [left_i, right_i, hieght_i]
// Input: buildings = [[ 2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
// Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
// 1 <= buildings.length <= 10^4
// 0 <= lefti < righti <= 2^31 - 1
// 1 <= heighti <= 2^31 - 1
// -> buildings is sorted by lefti in non-decreasing order.

function solve2(buildings) {
  function highestBuildingAtX(x) {
    let highest = 0;
    for (let i = 0; i < buildings.length; i++) {
      const building = buildings[i];
      const [start, end, height] = building;

      if (x >= start && x < end) {
        highest = Math.max(highest, height);
      }
    }
    return highest;
  }

  let currentHeight = 0;
  const output = [];
  let maxEnd = 0;
  for (let i = 0; i < buildings.length; i++) {
    const building = buildings[i];
    const [start, end, height] = building;
    maxEnd = Math.max(maxEnd, end);

    // would be problematic for same height buildings like this.
    // could be fixed by merging overlapping buildings with the same height in O(n).
    const heightAtStart = highestBuildingAtX(start); // check if its the current building that starts
    if (heightAtStart === height) {
      output.push([start, height]);
      currentHeight = height;
    }
    const heightAtEnd = highestBuildingAtX(end);
    const heightAtEnd2 = highestBuildingAtX(end - 1); // check if its the current building that ends
    if (heightAtEnd !== currentHeight && height === heightAtEnd2) {
      output.push([end, heightAtEnd]);
      currentHeight = heightAtEnd;
    }
  }

  return output;
}

function solve(buildings) {
  const result = [];

  for (let i = 0; i < buildings.length; i++) {
    const building = buildings[i];
    const [start, end, height] = building;

    for (let j = start; j < end; j++) {
      result[j] = Math.max(result[j] || 0, height);
    }
  }

  let output = [];
  let currentValue = undefined;
  for (let i = 0; i < result.length; i++) {
    let cur = result[i];

    if (cur !== currentValue) {
      output.push([i, cur || 0]);
      currentValue = cur;
    }
  }
  output.push([result.length, 0]);

  return output;
}

const r = solve2([
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8],
]);

console.log(r);
