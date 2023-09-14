/**
 * Hashmap to quickly lookup where values are located in the minHeap.
 *
 * Basically a mapping from a number to an index in the minHeap array.
 */
const numToMinHeapIndexMap = {};

/**
 * Compact storage that always contains the smallest number at index 0.
 *
 * contains all unique numbers that are left.
 */
const minHeap = [];

/**
 * Helper method that rebalances the min heap upwards from a starting index.
 *
 * What it boils down to is that it compares a node with its parent, if the
 * parent is bigger they swap this continues until we've reached the top.
 *
 * Meaning a timecomplexity of O(log(n))
 *
 * @param {number} startingIndex
 */
function _balanceUpHeap(startingIndex) {
  let childIndex = startingIndex;
  let parentIndex = Math.floor((childIndex - 1) / 2);

  while (parentIndex >= 0) {
    if (minHeap[parentIndex] <= minHeap[childIndex]) {
      break;
    }
    const smallerNum = minHeap[childIndex];
    minHeap[childIndex] = minHeap[parentIndex];
    minHeap[parentIndex] = smallerNum;

    // Flip references in numToMinHeapIndexMap
    numToMinHeapIndexMap[minHeap[childIndex]] = childIndex;
    numToMinHeapIndexMap[minHeap[parentIndex]] = parentIndex;

    childIndex = parentIndex;
    parentIndex = Math.floor((childIndex - 1) / 2);
  }
}

/**
 * Helper method that rebalances the min heap downwards from a starting index.
 *
 * The opposite of the method above, it compares a node with its children. If
 * the value is bigger, it will move downwards towards the smaller child.
 *
 * Meaning a timecomplexity of O(log(n))
 *
 * @param {number} startingIndex
 */
function _balanceDownHeap(startingIndex) {
  let curIndex = startingIndex;

  while (curIndex !== undefined) {
    let leftChildIndex = curIndex * 2 + 1;
    let rightChildIndex = curIndex * 2 + 2;

    let childIndex = undefined;
    if (
      leftChildIndex < minHeap.length &&
      minHeap[leftChildIndex] < minHeap[curIndex]
    ) {
      childIndex = leftChildIndex;
    }
    if (
      rightChildIndex < minHeap.length &&
      minHeap[rightChildIndex] < minHeap[leftChildIndex] &&
      minHeap[rightChildIndex] < minHeap[curIndex]
    ) {
      childIndex = rightChildIndex;
    }

    if (childIndex) {
      const smallerNum = minHeap[childIndex];
      minHeap[childIndex] = minHeap[curIndex];
      minHeap[curIndex] = smallerNum;

      // Flip references
      numToMinHeapIndexMap[minHeap[childIndex]] = childIndex;
      numToMinHeapIndexMap[minHeap[curIndex]] = curIndex;
    }

    curIndex = childIndex;
  }
}

/**
 * Helper method that does a minHeap insert
 *
 * What it boils down to is that it inserts a number at the end and than
 * compares and does a reBalance from the end index onwards using the method
 * above.
 *
 * @param {number} num
 * @returns The index where num was actually inserted
 */
function _insertInMinHeap(num) {
  minHeap.push(num);
  numToMinHeapIndexMap[num] = minHeap.length - 1;

  _balanceUpHeap(minHeap.length - 1);
}

/**
 * Helper method that removes a number from the minHeap.
 *
 * Since we're using a hashmap to quickly find the minHeapIndex that
 * timecomplexity is O(1) after removing the node the worst case timecomplexity
 * is O(log(n));
 */
function _removeFromMinHeap(num) {
  const minHeapIndex = numToMinHeapIndexMap[num];

  /**
   * Means that it is already removed before.
   */
  if (minHeapIndex === -1) {
    return;
  }

  const numToBalance = minHeap.pop();

  /**
   * In the case we removed the last item there is no need to re-balance again.
   */
  if (minHeapIndex === minHeap.length) {
    numToMinHeapIndexMap[num] = -1;
    return;
  }

  minHeap[minHeapIndex] = numToBalance;
  numToMinHeapIndexMap[numToBalance] = minHeapIndex;

  _balanceDownHeap(minHeapIndex);

  numToMinHeapIndexMap[num] = -1;
}

/* =============================================================================
 Public methods below.

 The above are simply helper methods that deal with the under-the-hood 
 datastructures to make this possible
============================================================================= */
/**
 * Method that inserts a number
 *
 * Timecomplexity (n being the number of unique numbers that have been picked)
 * worstcase: O(log(n))
 * averagecase: O(log(n))
 * bestcase: O(1)
 */
function pickNumber(num) {
  if (num in numToMinHeapIndexMap) {
    // console.debug(`Remove ${num}`);
    _removeFromMinHeap(num);
  } else {
    // console.debug(`Insert ${num}`);
    _insertInMinHeap(num);
  }
}

/**
 * Timecomplexity O(1)
 */
function getLowestUniqueNumber() {
  return minHeap[0];
}

function reset() {
  while (minHeap.length) {
    minHeap.pop();
  }
  for (const key in numToMinHeapIndexMap) {
    delete numToMinHeapIndexMap[key];
  }
}

pickNumber(5);
pickNumber(5);
pickNumber(3);
pickNumber(1);
pickNumber(3);

/**
 * Show all uniqueNumbers that are left
 */
console.log({ uniqueNumbers: minHeap });

const lowestUniqueNumber = getLowestUniqueNumber();
console.log({ lowestUniqueNumber });

/* =============================================================================
 Some test cases
============================================================================= */
function assert(bool) {
  if (!bool) {
    console.error(`assertion failed`);
  }
}
reset();
pickNumber(7);
assert(getLowestUniqueNumber() === 7);

reset();
pickNumber(7);
pickNumber(7);
assert(getLowestUniqueNumber() === undefined);

reset();
pickNumber(7);
pickNumber(3);
pickNumber(5);
assert(getLowestUniqueNumber() === 3);

reset();
pickNumber(7);
pickNumber(7);
pickNumber(5);
assert(getLowestUniqueNumber() === 5);

reset();
pickNumber(7);
reset();
assert(getLowestUniqueNumber() === undefined);

reset();
pickNumber(-7);
pickNumber(-3);
assert(getLowestUniqueNumber() === -7);

reset();
pickNumber(0);
pickNumber(5);
assert(getLowestUniqueNumber() === 0);
