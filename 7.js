/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let nums = [];

    let remainder = Math.abs(x);
    let sign = x < 0 ? -1 : 1;
    while (remainder >= 10) {
        let num = remainder % 10;
        remainder = Math.floor(remainder / 10);
        nums.push(num);
    }
    nums.push(remainder);
    let result = Number.parseInt(nums.join(''));

    if ((result > 2**31) || result < (-(2**31))){
        return 0;
    }

    return result * sign;
};

assert(reverse(123), 321, "Basic #1");
assert(reverse(-123), -321, "Basic #2");
assert(reverse(10), 1, "Basic #3");

function assert(a,b, msg) {
    if (a !== b) {
        console.log("Assertion Failure", msg, a, b);
    } else {
        console.log("Success", msg)
    }
}