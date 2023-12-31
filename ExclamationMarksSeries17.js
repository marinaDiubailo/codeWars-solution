/**
 * DESCRIPTION:
Each exclamation mark's weight is 2; each question mark's weight is 3.
Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy,
return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
 */

function balance(left, right) {
    const weight = (str) => {
        let result = 0;
        for (let char of str) {
            if (char === '!') {
                result += 2;
            } else {
                result += 3;
            }
        }
        return result;
    };

    const result = weight(left) - weight(right);

    return result < 0 ? 'Right' : result > 0 ? 'Left' : 'Balance';
}

console.log(balance('!!???!????', '??!!?!!!!!!!'));
