/**
 * Write a simple regex to validate a username.
 *  Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
 */
function validateUsr(username) {
    const res = /^[a-z0-9_]{4,16}$/.test(username);
    if (username.includes(' ')) {
        return false;
    } else {
        return res;
    }
}

console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'));
console.log(validateUsr('a'));
console.log(validateUsr('____'));
console.log(validateUsr(''));
console.log(validateUsr('asd43 34'));
console.log(validateUsr('70qgy7cbH_ka'));
