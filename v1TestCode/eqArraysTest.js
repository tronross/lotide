const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // pass
console.log("[1, 2, 3], [1, 2, 3] => Pass, identical arrays \n");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // fail
console.log("[1, 2, 3], [1, 2, 3, 4] => Fail, different .length\n");

assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false); // fail
console.log("[1, 2, 3], [1, '2', 3] => Fail, test for type coercion\n");

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // fail
console.log("[1, 2, 3], [3, 2, 1] => Fail, different element order\n");

assertEqual(eqArrays(['banana', 'canteloupe', 'watermelon'], ['banana', 'canteloupe', 'watermelon']), true); // pass
console.log("['banana', 'canteloupe', 'watermelon'], ['banana', 'canteloupe', 'watermelon'] => Pass, identical arrays\n");

assertEqual(eqArrays(['banana', 'canteloupe', 'watermelon'], ['banana', 'antelope', 'watermelon']), false); // fail
console.log("['banana', 'canteloupe', 'watermelon'], ['banana', 'antelope', 'watermelon'] => Fail, different single element\n");