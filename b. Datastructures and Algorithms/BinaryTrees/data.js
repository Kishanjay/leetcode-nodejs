/**
 *            1
 *      2           3
 *   4     5     6     7
 * 8   9
 */
exports.arrayTree = [1,2,3,4,5,6,7,8,9];
exports.inOrderArrayTree = [8,4,9,2,5,1,6,3,7];
exports.preOrderArrayTree = [1,2,4,8,9,5,3,6,7];
exports.postOrderArrayTree = [8,9,4,5,2,6,7,3,1];

exports.structTree = {
  left: {
    left: {
      left: {
        left: null,
        value: 8,
        right: null,
      },
      value: 4,
      right: {
        left: null,
        value: 9,
        right: null,
      },
    },
    value: 2,
    right: {
      left: null,
      value: 5,
      right: null,
    }
  },
  value: 1,
  right: {
    left: {
      left: null,
      value: 6,
      right: null,
    },
    value: 3,
    right: {
      left: null,
      value: 7,
      right: null,
    }
  }
}