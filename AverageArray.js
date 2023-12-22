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

function avgArray(arr) {
    const result = [];
    const columnsLength = arr.length;
    let startCol = 0;
    let endCol = arr[0].length - 1;

    while (startCol <= endCol) {
        let accumulator = 0;
        for (let i = 0; i < columnsLength; i++) {
            let num = arr[i][startCol];
            accumulator += num;
        }
        result.push(accumulator / columnsLength);
        startCol++;
    }
    return result;
}

console.log(
    avgArray([
        [2, 3, 9],
        [12, 6, 89],
    ]),
);
