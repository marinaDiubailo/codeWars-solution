/**
 * DESCRIPTION:
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.
 */
function convertHashToArray(hash) {
    return Object.entries(hash).sort((a, b) => (a[0][0] < b[0][0] ? -1 : 1));
}

console.log(
    convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' }),
);
