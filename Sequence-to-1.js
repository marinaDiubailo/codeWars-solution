/**
 * DESCRIPTION:
Get the number n to return the sequence from n to 1.
 The number n can be negative and also large number.
  (See the range as the following)

Example : 
n=5  >> [5,4,3,2,1]
n=-1 >> [-1,0,1]
 */

function seqToOne(n) {
    const arr = [];

    let i = n;

    if (n > 0) {
        while (i !== 1) {
            arr.push(i);
            i--;
        }
    }

    if (n <= 0) {
        while (i <= 0) {
            arr.push(i);
            i++;
        }
    }

    return arr.concat([1]);
}

console.log(seqToOne(1));
