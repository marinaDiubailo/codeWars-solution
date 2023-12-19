/**
 * Given the string representations of two integers,
 *  return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters
 besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits),
 converting to int will not work.
 */
function sumStrings(a, b) {
    function calculate(a, b, result, memo) {
        if (a.length == 0 && b.length == 0 && !memo) return result;

        const first = parseInt(a.pop() || '0');
        const second = parseInt(b.pop() || '0');

        const sum = first + second + (memo || 0);

        return calculate(
            a,
            b,
            (sum % 10) + (result || ''),
            Math.floor(sum / 10),
        );
    }

    const firstArray = a.split('');
    const secondArray = b.split('');

    const result = calculate(firstArray, secondArray, '', '');
    return result.replace(/^0+/, '');
}

//********************************************* */
function sumStrings1(a, b) {
    return (BigInt(a) + BigInt(b)).toString();
}

console.log(sumStrings('00103', '08567'));
