var MinStack = function () {
  this.stack = [];
  this.minStack = [];
  this.curMin = undefined;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  this.curMin = this.curMin !== undefined ? Math.min(this.curMin, val) : val;
  this.minStack.push(this.curMin);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();

  if (this.minStack.length) {
    this.curMin = this.minStack[this.minStack.length - 1];
  } else {
    this.curMin = undefined;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.curMin;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
