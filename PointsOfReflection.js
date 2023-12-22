/**
 * "Point reflection" or "point symmetry"
 *  is a basic concept in geometry where a given point,
 *  P, at a given position relative to a mid-point,
 *  Q has a corresponding point, P1, which is the
 *  same distance from Q but in the opposite direction.

Task
Given two points P and Q, output the symmetric
 point of point P about Q. Each argument is
  a two-element array of integers representing
   the point's X and Y coordinates.
    Output should be in the same format,
     giving the X and Y coordinates of point P1.
      You do not have to validate the input.
 */

function symmetricPoint(p, q) {
    let x =
        p[0] === q[0]
            ? p[0]
            : p[0] > q[0]
            ? q[0] - (p[0] - q[0])
            : q[0] + (q[0] - p[0]);
    let y =
        p[1] === q[1]
            ? p[1]
            : p[1] > q[1]
            ? q[1] - (p[1] - q[1])
            : q[1] + (q[1] - p[1]);

    return [x, y];
}

const symmetricPoint = ([a, b], [c, d]) => [c * 2 - a, d * 2 - b];

console.log(symmetricPoint([10, -10], [-10, 10]));
