/**
 
 *How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
 */

function rot13(str) {
    let newStr = '';

    for (let char of str) {
        let code = char.charCodeAt(0);
        if (code > 64 && code < 78) {
            char = String.fromCharCode(code + 13);
        } else if (code > 77 && code < 91) {
            char = String.fromCharCode(code - 13);
        } else if (code > 96 && code < 110) {
            char = String.fromCharCode(code + 13);
        } else if (code > 109 && code < 123) {
            char = String.fromCharCode(code - 13);
        }
        newStr = newStr + char;
    }
    return newStr;
}

//*-------------solution from other warrior-----------------*/
function rot131(str) {
    return str.replace(/[a-z]/gi, function (x) {
        return String.fromCharCode(
            x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13 : -13),
        );
    });
}

console.log(rot13('EBG13 rknzcyr.'));
