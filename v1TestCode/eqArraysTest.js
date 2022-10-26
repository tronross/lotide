const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE, with logged input arrays and test condition for visual verification.

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // Fail
console.log("[1, 2, 3], [1, 2, 3, 4] => Fail, different .length\n");

assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false); // Fail
console.log("[1, 2, 3], [1, '2', 3] => Fail, test for type coercion\n");

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Fail
console.log("[1, 2, 3], [3, 2, 1] => Fail, different element order\n");

assertEqual(eqArrays(['banana', 'canteloupe', 'watermelon'], ['banana', 'canteloupe', 'watermelon']), true); // Pass
console.log("['banana', 'canteloupe', 'watermelon'], ['banana', 'canteloupe', 'watermelon'] => Pass, identical arrays\n");

assertEqual(eqArrays(['banana', 'canteloupe', 'watermelon'], ['banana', 'antelope', 'watermelon']), false); // Fail
console.log("['banana', 'canteloupe', 'watermelon'], ['banana', 'antelope', 'watermelon'] => Fail, different single element\n");

// Nested arrays (recursive test)
assertEqual(eqArrays([1, [2, 3]], [1, [2, 3]]), true); // Pass
console.log("[1, [2, 3]], [1, [2, 3]] => Pass, identical arrays \n");

assertEqual(eqArrays([1, [2, 3, [1, 5]]], [1, [2, 3, [1, 5]]]), true); // Pass
console.log("[1, [2, 3, [1, 5]]], [1, [2, 3, [1, 5]]] => Pass, identical arrays \n");

assertEqual(eqArrays([1, [2, 3, [1, 5]]], [1, [2, 3, [1, 7]]]), false); // f
console.log("[1, [2, 3, [1, 5]]], [1, [2, 3, [1, 7]]] => Fail, different nested element \n");