/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min;
  let prefixMin = [];
  
  let max;
  let prefixMax = [];
  
  for (let i = 0; i < prices.length; i++ ){
      if (min === undefined || prices[i] < min) {
          min = prices[i];
      }    
      prefixMin.push(min);
      
      if (max === undefined || prices[prices.length - 1 - i] > max) {
          max = prices[prices.length - 1 -i];
      }
      prefixMax.unshift(max);
  }
  
  let deltaMax = 0;
  for (let i = 0; i < prefixMin.length; i++) {
      let delta = prefixMax[i] - prefixMin[i];
      if (delta > deltaMax) {
          deltaMax = delta;
      }
  }
  
  return deltaMax
};