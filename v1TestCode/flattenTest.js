const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten')

// TEST CODE
// Test case (a):
console.log("Source array: ", [1, 2, [3, 4], 5, [6]]);
console.log("Flattened array: ", flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

// Test case (b):
console.log("Source array: ", ["1", "2", "3", ["11", "12"]]);
console.log("Flattened array: ", flatten(["1", "2", "3", ["11", "12"]]));
assertArraysEqual((flatten(["1", "2", "3", ["11", "12"]])), ["1", "2", "3", "11", "12"]);

// Test case (c):
console.log("Source array: ", ['yes', ['no'], 'maybe']);
console.log("Flattened array: ", flatten(['yes', ['no'], 'maybe']));
assertArraysEqual((flatten(['yes', ['no'], 'maybe'])), ['yes', 'no', 'maybe']);
