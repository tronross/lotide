const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);// => fail
assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), true);// => fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => fail
assertEqual(eqArrays(["banana", "canteloupe", "watermelon"], ["banana", "canteloupe", "watermelon"]), true); // => pass
assertEqual(eqArrays(["banana", "canteloupe", "watermelon"], ["banana", "antelope", "watermelon"]), true); // => fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => fail
assertEqual(eqArrays([true, true],[true, false]), true); // => fail
assertEqual(eqArrays([true, true],[true, true]), true); // => true