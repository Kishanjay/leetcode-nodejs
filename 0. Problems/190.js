var reverseBits = function(n) { 
    let bits = numTo32Bits(n);
    bits.reverse();
    let result = bitsToNum(bits);
    
    return result;
};

function bitsToNum(bits) {
    let result = 0;

    for (let i = bits.length - 1; i >= 0; i--){
        let pow = bits.length - 1 - i;
        if (bits[i] === 0){
            continue;
        }

        let val = 2**pow;
        result += val;
    }

    return result;
}

function numTo32Bits(num) {
    let bits = new Array(32).fill(0);
    let bitIndex = 0;

    let rest = num;

    while (bitIndex <= 32){
        let bitValue = 2 ** (32-bitIndex-1);
        if (bitValue <= rest){
            bits[bitIndex] = 1;
            rest -= bitValue;    
        }
        bitIndex++
    }

    return bits;
}



assert(reverseBits(43261596), 964176192, "Example #1")
assert(reverseBits(4294967293), 3221225471, "Example #2")

function assert(a,b, msg) {
    if (a !== b) {
        console.log("Assertion Failure", msg, a, b);
    } else {
        console.log("Success", msg)
    }
}