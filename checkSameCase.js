/**Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

function sameCase(a, b) {
    const REGEX = /^[a-zA-Z]*$/;
    const LOWER = /^[a-z]*$/;
    const UPPER = /^[A-Z]*$/;

    if (!REGEX.test(a + b)) {
        return -1;
    } else if (LOWER.test(a + b) || UPPER.test(a + b)) {
        return 1;
    } else {
        return 0;
    }
}

console.log(sameCase('a', 'b'));
console.log(sameCase('?', 'b'));
console.log(sameCase('a', 'B'));
console.log(sameCase('C', 'B'));
