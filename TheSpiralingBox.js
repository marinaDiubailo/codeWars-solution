/**
 * Given two positive integers m (width) and n (height),
 *  fill a two-dimensional list (or array) of size m-by-n in the following way:

(1) All the elements in the first and last row and column are 1.

(2) All the elements in the second and second-last row and column are 2,
 excluding the elements from step 1.

(3) All the elements in the third and third-last row and column are 3,
 excluding the elements from the previous steps.

And so on ...
 */

function createBox(m, n) {
    const array = [];

    for (let i = 0; i < n; i++) {
        array.push([]);
    }

    let count = 1;
    let startColumn = 0;
    let endColumn = m - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            array[startRow][i] = count;
        }
        startRow++;
        // right column
        for (let i = startRow; i <= endRow; i++) {
            array[i][endColumn] = count;
        }
        endColumn--;
        // bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            array[endRow][i] = count;
        }
        endRow--;
        // start column
        for (let i = endRow; i >= startRow; i--) {
            array[i][startColumn] = count;
        }
        startColumn++;
        count++;
    }
    console.log(array);
    return array;
}
//createBox(10, 9);
