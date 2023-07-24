/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) {
    return 0;
  }

  let buy = prices[0];
  let high = 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let cur = prices[i];

    if (cur > high) {
      high = cur;
    }

    // buy now.
    if (cur < buy) {
      maxProfit = Math.max(maxProfit, high - buy);
      buy = cur;
      high = 0;
    }
  }
  maxProfit = Math.max(maxProfit, high - buy);

  return maxProfit;
};
