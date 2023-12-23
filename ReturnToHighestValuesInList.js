/**
 * DESCRIPTION:
In this kata, your job is to return the two distinct highest
 values in a list. If there're less than 2 unique values,
  return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
 */

function twoHighest(arr) {
    if (!arr.length || arr.length === 1) return arr;

    const sorted = arr.sort((a, b) => b - a);

    const result = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        let element = sorted[i];
        if (element < sorted[0]) {
            result.push(element);
            return result;
        }
    }
    return result;
}

function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}

console.log(twoHighest([15, 20, 20, 17]));
