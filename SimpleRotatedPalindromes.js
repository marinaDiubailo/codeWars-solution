/**
 * DESCRIPTION:
In this Kata, you will be given a string and your task is to determine
 if that string can be a palindrome if we rotate one or more characters to the left.

solve("4455") = true, because after 1 rotation, we get "5445" which is a palindrome
solve("zazcbaabc") = true, because after 3 rotations, we get "abczazcba", a palindrome
More examples in test cases. Input will be strings of lowercase letters or numbers only.
 */

function solve(str) {
    const isPalindrome = (str) => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    };

    for (let i = 0; i < str.length - 1; i++) {
        str = str.slice(-1) + str.slice(0, -1);

        if (isPalindrome(str)) {
            return true;
        }
    }

    return false;
}

console.log(solve('zazcaabc'));
