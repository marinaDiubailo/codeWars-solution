/**
 * This kata is a slightly harder version of Gravity Flip.
 *  It is recommended to do that first.

Bob is bored in his physics lessons yet again, and this time,
 he's brought a more complex gravity-changing box with him. It's 3D, with small cubes arranged in a matrix of n×m columns. It can change gravity to go in a certain direction, which can be 'L', 'R', 'D', and 'U' (left, right, down, and up).

Given the initial configuration of the cubes inside of the box as a 2D array,
 determine how the cubes are arranged after Bob switches the gravity.

See the sample tests for examples.
 */

function flip(d, a) {
    if (d === 'R') {
        return a.map((subArr) => subArr.sort((a, b) => a - b));
    }
    if (d === 'L') {
        return a.map((subArr) => subArr.sort((a, b) => b - a));
    }

    if (d === 'U' || d === 'D') {
        const result = rotateMatrix(a);

        let answer;
        if (d === 'U') {
            answer = result.map((subArr) => subArr.sort((a, b) => b - a));
        } else {
            answer = result.map((subArr) => subArr.sort((a, b) => a - b));
        }

        return rotateMatrix(answer);

        function rotateMatrix(a) {
            const result = [];
            let startCol = 0;
            let endCol = a[0].length - 1;

            while (startCol <= endCol) {
                let accumulator = [];

                for (let i = 0; i < a.length; i++) {
                    accumulator.push(a[i][startCol]);
                }
                result.push(accumulator);
                startCol++;
            }
            return result;
        }
    }
}
const transpose = (arr) =>
    arr.length ? arr[0].map((_, i) => arr.map((row) => row[i])) : arr;

const sort_rows = (arr, m) =>
    arr.map((row) => [...row].sort((a, b) => (a - b) * m));

const flip = (dir, arr) => {
    if (dir === 'R') return sort_rows(arr, 1);

    if (dir === 'L') return sort_rows(arr, -1);

    if (dir === 'D') return transpose(sort_rows(transpose(arr), 1));

    if (dir === 'U') return transpose(sort_rows(transpose(arr), -1));
};

console.log(
    flip('U', [
        [1, 3, 2],
        [4, 5, 1],
        [6, 5, 3],
        [7, 2, 9],
    ]),
);
