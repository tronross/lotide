const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CODE:

// Primitives:
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectsEqual(ab, ba); // => Pass

const abc = { a: "1", b: "2", c: "3"};
assertObjectsEqual(ab, abc); // => Fail

const ad = { a: "1", d: "2"};
assertObjectsEqual(ab, ad); // => Fail


// Arrays as Values:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => Pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => Fail


// Nested objects:
assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => Pass
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => Fail
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => Fail

assertObjectsEqual({ a: { y: 0, z: 1, x: { z: 1 } }, b: 2 }, { a: { z: 1 }, b: 2 }); // => Fail
assertObjectsEqual({ a: { y: 0, z: 1, x: { z: 1, x: {xx: 77} } }, b: 2 }, { a: { y: 0, z: 1, x: { z: 1, x: {xx: 77} } }, b: 2 }); // => Pass