const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE, with logged input arrays and test condition for visual verification.
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass
console.log("[1, 2, 3], [1, 2, 3] => Pass, identical arrays \n");

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Fail
console.log("[1, 2, 3], [1, 2, 3, 4] => Fail, different .length\n");

assertArraysEqual([1, 2, 3], [1, '2', 3]); // Fail
console.log("[1, 2, 3], [1, '2', 3] => Fail, test for type coercion\n");

assertArraysEqual([1, 2, 3], [3, 2, 1]); // Fail
console.log("[1, 2, 3], [3, 2, 1] => Fail, different element order\n");

assertArraysEqual(['banana', 'canteloupe', 'watermelon'], ['banana', 'canteloupe', 'watermelon']); // Pass
console.log("['banana', 'canteloupe', 'watermelon'], ['banana', 'canteloupe', 'watermelon'] => Pass, identical arrays\n");

assertArraysEqual(['banana', 'canteloupe', 'watermelon'], ['banana', 'antelope', 'watermelon']); // Fail
console.log("['banana', 'canteloupe', 'watermelon'], ['banana', 'antelope', 'watermelon'] => Fail, different single element\n");