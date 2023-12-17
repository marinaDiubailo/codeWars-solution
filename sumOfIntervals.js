/**
 * Write a function called sumIntervals/sum_intervals that accepts an array of intervals,
 *  and returns the sum of all the interval lengths.
 *  Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array.
 The first value of the interval will always be less than the second value.
  Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
 */

function sumIntervals1(intervals) {
    const sorted = intervals.sort((a, b) => a[0] - b[0]);

    const stack = [sorted[0]];

    for (let i = 0; i < sorted.length - 1; i++) {
        let currentArr = sorted[i];
        let nextArr = sorted[i + 1];

        if (nextArr[0] <= currentArr[1]) {
            stack.pop();
            stack.push([currentArr[0], Math.max(nextArr[1], currentArr[1])]);
        } else if (currentArr[1] < nextArr[0]) {
            stack.push(nextArr);
        }
    }
    return stack.reduce((acc, item) => acc + item[1] - item[0], 0);
}

function sumIntervals(intervals) {
    const sorted = intervals.sort((a, b) => a[0] - b[0]);

    const stack = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        let last = stack.length - 1;
        let currentArr = sorted[i];
        if (currentArr[0] >= stack[last][1]) {
            stack.push(currentArr);
        } else {
            const poped = stack.pop();
            stack.push([
                Math.min(poped[0], currentArr[0]),
                Math.max(currentArr[1], poped[1]),
            ]);
        }
    }
    return stack.reduce((acc, item) => acc + item[1] - item[0], 0);
}

// console.log(
//     sumIntervals([
//         [0, 20],
//         [-100000000, 10],
//         [30, 40],
//     ]),
// );
// console.log(
//     sumIntervals([
//         [1, 4],
//         [7, 10],
//         [3, 5],
//     ]),
// );
// console.log(
//     sumIntervals([
//         [1, 2],
//         [2, 3],
//     ]),
// );
console.log(
    sumIntervals([
        [-17, -14],
        [-14, -12],
        [-8, -4],
        [-8, 0],
        [0, 4],
        [4, 5],
        [5, 7],
        [7, 15],
        [13, 15],
        [13, 15],
    ]),
);
