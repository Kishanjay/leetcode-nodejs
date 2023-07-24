/**
 * You're at the start of a tree, what is the maximum points you can score while going down
 * given that every node has a number of points to earn.
 *
 *
 */

function bestPath() {}

function Node() {
  this.amount = 0;

  /**
   * @type { Node[] }
   */
  this.children = [];

  return {
    amount: this.amount,
    children: this.children,
  };
}

// What is the time complexity
// What is the space complexity
// Would you hand in your excersize like this?

// What would happen if you would add the `20` coin to the list of coins
// Could you solve it in a smarter way?
