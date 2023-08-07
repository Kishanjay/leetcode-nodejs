/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let result = 0;
  let sign = undefined;
  let foundDigits = false;
  for (const chr of s) {
    if (chr === " ") {
      if (foundDigits) {
        break;
      }
      continue;
    }
    if (chr === "+" && sign === undefined) {
      if (foundDigits) {
        break;
      }
      foundDigits = true;
      sign = 1;
      continue;
    }
    if (chr === "-" && sign === undefined) {
      if (foundDigits) {
        break;
      }
      foundDigits = true;
      sign = -1;
      continue;
    }

    const numValue = chr.charCodeAt(0) - "0".charCodeAt(0);
    if (numValue < 0 || numValue > 9) {
      break;
    }

    foundDigits = true;
    result *= 10;
    result += numValue;
  }

  if (sign === -1) {
    return Math.max(result * -1, 2 ** 31 * -1);
  } else {
    return Math.min(result, 2 ** 31 - 1);
  }
};
