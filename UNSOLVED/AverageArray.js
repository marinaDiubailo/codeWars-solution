/**
 * Create a function that takes a 2D array as an input,
 *  and outputs another array that contains the average values for the numbers
 *  in the nested arrays at the corresponding indexes.

Note: the function should also work with negative numbers and floats.

Examples
[ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

1st array: [1, 2, 3, 4]
2nd array: [5, 6, 7, 8]
            |  |  |  |
            v  v  v  v
average:   [3, 4, 5, 6]
 */

//********************TODO */
function avgArray(arr) {
    //const resultArr = new Array(arr[0].length).fill([]);
    const resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            resultArr.push(arr[i][j]);
        }
    }
    console.log(resultArr);
}

console.log(
    avgArray([
        [2, 3, 9, 10, 7],
        [12, 6, 89, 45, 3],
        [9, 12, 56, 10, 34],
        [67, 23, 1, 88, 34],
    ]),
);
