/**
 * DESCRIPTION:
Wilson primes satisfy the following condition.
 Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if
 the given number is a Wilson prime.
 */

function amIWilson(p) {
    const factorial = (n) => {
        if (n <= 1n) return 1n;
        return n * factorial(n - 1n);
    };

    return (factorial(BigInt(p) - 1n) + 1n) % (BigInt(p) * BigInt(p)) === 0n
        ? true
        : false;
}

function amIWilson(p) {
    // "The only known Wilson primes are 5, 13 and 563."
    return p == 5 || p == 13 || p == 563;
}
