// Assert Equal testing code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// A function to check if arrays are identical
const eqArrays = function(arrayOne, arrayTwo) {
  let equal = true;

  if (arrayOne.length !== arrayTwo.length) {
    equal = false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        equal = false;
      }
    }
    return equal;
  }
};


// Test cases utilizing assertEqual:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);// => fail
assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), true);// => fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => fail
assertEqual(eqArrays(["banana", "canteloupe", "watermelon"], ["banana", "canteloupe", "watermelon"]), true); // => pass
assertEqual(eqArrays(["banana", "canteloupe", "watermelon"], ["banana", "antelope", "watermelon"]), true); // => fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => fail
assertEqual(eqArrays([true, true],[true, false]), true); // => fail
assertEqual(eqArrays([true, true],[true, true]), true); // => true