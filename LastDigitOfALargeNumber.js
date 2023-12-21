/**
 * DESCRIPTION:
Define a function that takes in two non-negative integers a and b 
and returns the last decimal digit of a ^ b. Note that a and b may be very large!
For example, the last decimal digit of 9 ^ 7 is 9, since 9 ^ 7 = 4782969.
You may assume that the input will always be valid.
*/

var lastDigit1 = function (str1, str2) {
    const map = {
        0: [0],
        1: [1],
        2: [6, 2, 4, 8],
        3: [1, 3, 9, 7],
        4: [6, 4],
        5: [5],
        6: [6],
        7: [1, 7, 9, 3],
        8: [6, 8, 4, 2],
        9: [1, 9],
    };

    if ((str1 === '0' && str2 === '0') || str2 === '0') return 1;

    let lastA = BigInt(str1) % 10n;
    let length = map[lastA].length;
    let index = BigInt(str2) % BigInt(length);

    return map[lastA][index];
};

var lastDigit = function (str1, str2) {
    return +str2 === 0
        ? 1
        : Math.pow(+str1.slice(-1), (+str2.slice(-2) % 4) + 4) % 100;
};

console.log(lastDigit('2', '2'));
console.log(lastDigit('2', '2'));
console.log(2 ** 7);
