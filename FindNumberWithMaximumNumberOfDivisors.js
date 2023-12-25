/**
 * DESCRIPTION:
Task
Find the integer from a to b (included) with the greatest number
 of divisors. For example:

divNum(15, 30)   ==> 24
divNum(1, 2)     ==> 2
divNum(0, 0)     ==> 0
divNum(52, 156)  ==> 120
If there are several numbers that have the same (maximum) 
number of divisors, the smallest among them should be returned.
 Return the string "Error" if a > b.
 */

function divNum(a, b) {
    if (a > b) return 'Error';

    function getDivisors(num) {
        let result = [];
        for (i = 1; i <= num; i++) {
            if (num % i === 0) result.push(i);
        }
        return result.length;
    }

    let arr = [];
    for (let i = a; i <= b; i++) {
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

    const max = Math.max(...Object.keys(obj));

    return obj[max][0];
}

console.log(divNum(15, 30));
