/**
 * Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... 
 * XOR n where XOR is the bitwise XOR operator.

Write a function that takes n and returns it's sXORe.

Examples
n	sXORe n
0	0
1	1
50	51
1000000	1000000
 */

const sxore = function (n) {
    if (n == 0) return 0;

    let sXORe = 0;

    for (var i = 1; i <= n; i++) sXORe = sXORe ^ i;

    return sXORe;
};

console.log(sxore(50));
