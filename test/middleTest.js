const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
// All assertions fail because assertArraysEqual is testing the input array against the extracted middle element(s).
console.log("Source:", [1, 2], "Middle: ", middle([1, 2]));
assertArraysEqual(middle([1, 2]), [1, 2]);

console.log("Source:", [1, 2, 3, 4, 5], "Middle: ", middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

console.log("Source:", [1, 2, 3, 4, 5, 77], "Middle: ", middle([1, 2, 3, 4, 5, 77]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 77]), [1, 2, 3, 4, 5, 77]);

console.log("Source:", ["banana", "canteloupe", "watermelon"], "Middle: ", middle(["banana", "canteloupe", "watermelon"]));
assertArraysEqual(middle(["banana", "canteloupe", "watermelon"]), ["banana", "canteloupe", "watermelon"]);