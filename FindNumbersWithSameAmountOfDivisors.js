/**
 * DESCRIPTION:
The integers 14 and 15, are contiguous (1 the difference between them, obvious)
 and have the same number of divisors.

14 ----> 1, 2, 7, 14 (4 divisors)
15 ----> 1, 3, 5, 15 (4 divisors)
The next pair of contiguous integers with this property is 21 and 22.

21 -----> 1, 3, 7, 21 (4 divisors)
22 -----> 1, 2, 11, 22 (4 divisors)
We have 8 pairs of integers below 50 having this property, they are:

[[2, 3], [14, 15], [21, 22], [26, 27], [33, 34], [34, 35], [38, 39], [44, 45]]
Let's see now the integers that have a difference of 3 between them.
 There are seven pairs below 100:

[[2, 5], [35, 38], [55, 58], [62, 65], [74, 77], [82, 85], [91, 94]]
Let's name, diff, the difference between two integers, next and prev,
 (diff = next - prev) and nMax, an upper bound of the range.

We need a special function, count_pairsInt(), that receives two arguments
, diff and nMax and outputs the amount of pairs of integers that fulfill this property,
 all of them being smaller (not smaller or equal) than nMax.

Let's see it more clearly with examples.

count_pairsInt(1, 50) -----> 8 (See case above)
count_pairsInt(3, 100) -----> 7 (See case above)
 */

function countPairsInt(diff, nMax) {
    function getDivisors(num) {
        let result = [];
        for (i = 1; i <= num; i++) {
            if (num % i === 0) result.push(i);
        }
        return result.length;
    }

    let arr = [];
    for (let i = 2; i < nMax; i++) {
        arr.push(i);
    }

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let divisorsCount = getDivisors(arr[i]);
        if (!obj[divisorsCount]) {
            obj[divisorsCount] = [arr[i]];
        } else {
            obj[divisorsCount] = obj[divisorsCount].concat([arr[i]]) || [
                arr[i],
            ];
        }
    }

    function getPairs(arr, diff) {
        let pairs = [];
        for (let i = 0; i < arr.length - 1; i++) {
            let curr = arr[i];
            let pair = [];
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] - curr === diff) {
                    pair.push(curr, arr[j]);
                } else if (arr[j] - curr > diff) {
                    break;
                }
            }
            if (pair.length) pairs.push(pair);
        }
        return pairs;
    }

    let result = [];
    Object.values(obj).forEach((value) => {
        let pairs = getPairs(value, diff);
        if (pairs.length) {
            result = result.concat(pairs);
        }
    });

    return result.length;
}

console.log(countPairsInt(3, 100));
