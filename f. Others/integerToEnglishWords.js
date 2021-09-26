/**
 * @param {number} num
 * @return {string}
 */

const WORD_MAP = {
  ones: {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
  },
  tens: {
    10: 'Ten',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety'
  }
}
var numberToWords = function(num) {
  let result = [];
  if (num >= 1000000000){
    const numBillions = Math.floor(num / 1000000000);
    result.push(numberToWords(numBillions), 'Billion');
    num = num % 1000000000
  }

  if (num >= 1000000){
    const numMillions = Math.floor(num / 1000000);
    result.push(numberToWords(numMillions), 'Million');
    num = num % 1000000
  }

  if (num >= 1000) {
    const numThousands = Math.floor(num / 1000);
    result.push(numberToWords(numThousands), 'Thousand');
    num = num % 1000
  }

  if (num >= 100) {
    const numHundreds = Math.floor(num / 100);
    result.push(numberToWords(numHundreds), 'Hundred');
    num = num % 100
  }

  if (!(num === 0 && result.length)){ 
    for (let key of Object.keys(WORD_MAP.ones)){
      key = parseInt(key);
      if (num === key) {
        result.push(WORD_MAP.ones[key]);
        return result.join(' ');
      }
    }
  }

  for (let key of Object.keys(WORD_MAP.tens).reverse()){
    key = parseInt(key);
    if (num >= key) {
      result.push(WORD_MAP.tens[key]);
      num -= key;
    }
  }

  if (!(num === 0 && result.length)){ 
    for (let key of Object.keys(WORD_MAP.ones)){
      key = parseInt(key);
      if (num === key) {
        result.push(WORD_MAP.ones[key]);
        return result.join(' ');
      }
    }
  }

  return result.join(' ');
};

let r = numberToWords(1000000);
console.log({r});