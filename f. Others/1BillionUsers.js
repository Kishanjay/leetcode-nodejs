// Add any extra import statements you may need here


// Add any helper functions you may need here


function getBillionUsersDay(growthRates) {
  // Write your code here
  
  growthRates.sort((a,b) => b-a);
  const biggestGr = growthRates[0];
  
  
  let upperBound = Math.ceil(Math.log(1_000_000_000) / Math.log(biggestGr)) + 1;
  let lowerBound = 0;

  // loop needs to be inbetween bounds
  let currentPow = Math.floor((upperBound + lowerBound) / 2);
  

  while (lowerBound !== upperBound) {
    const totalNow = growthRates.reduce((prev, cur) => prev + Math.pow(cur, currentPow), 0);
    if (totalNow > 1_000_000_000) {
      upperBound = currentPow;
    } else if (totalNow < 1_000_000_000) {
      
      lowerBound = lowerBound === currentPow ? lowerBound + 1 : currentPow;
    } else {
      return currentPow;
    }

    currentPow = Math.floor((upperBound + lowerBound) / 2);
  }
  return lowerBound;
}


let r = getBillionUsersDay([ 1.1, 1.2, 1.3 ]);









// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var test_1 = [1.1, 1.2, 1.3];
var expected_1 = 79;
var output_1 = getBillionUsersDay(test_1);
check(expected_1, output_1);

var test_2 = [1.01, 1.02];
var expected_2 = 1047;
var output_2 = getBillionUsersDay(test_2);
check(expected_2, output_2);


var test_2 = [1.41, 1.01, 1.42];
var expected_2 = 58;
var output_2 = getBillionUsersDay(test_2);
check(expected_2, output_2);

// Add your own test cases here
