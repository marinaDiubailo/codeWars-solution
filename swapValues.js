/**
 * I would like to be able to pass an array with two elements to my
 *  swapValues function to swap the values.
 *  However it appears that the values aren't changing.

Can you figure out what's wrong here?
 */

function swapValues(args) {
    var a = args[0];
    var b = args[1];
    args[0] = b;
    args[1] = a;
}
