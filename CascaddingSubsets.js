/**
 * reate a method each_cons that accepts a list and a number n,
 *  and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading;
 ie, they overlap, but never out of order.
 */

function eachCons(array, n) {
    let result = [];

    let start = 0;
    let end = n;

    while (end <= array.length) {
        result.push(array.slice(start, end));
        start++;
        end++;
    }
    return result;
}

console.log(eachCons([1, 2, 3, 4], 2));
