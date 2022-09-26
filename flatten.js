// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const arraysEqual = eqArrays(arrayOne, arrayTwo);
 
  if (arraysEqual) {
    console.log("✅✅✅ Assertion Passed: The arrays are equal.");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The arrays are not equal.");
  }
};

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

// FLATTEN: A function which takes in arrays containing elements including nested arrays of elements, and returns a "flattened" version of the array.
const flatten = function(array) {
  let flattenedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i][j]; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

// Test Code:
console.log([1, 2, [3, 4], 5, [6]]);
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, [3, 4], 5, [6]]);

console.log(["1", "2", "3", ["11", "12"]]);
console.log(flatten(["1", "2", "3", ["11", "12"]]));
assertArraysEqual((flatten(["1", "2", "3", ["11", "12"]])), ["1", "2", "3", ["11", "12"]]);

// TEST CASE TO BE REVIEWED WITH MENTOR: WILL NOT RECOGNIZE NESTED ARRAY WITH TEXT STRING
console.log(['yes', ['no'], 'maybe']);
console.log(flatten(['yes', ['no'], 'maybe']));
assertArraysEqual((flatten(['yes', ['no'], 'maybe'])), ['yes', ['no'], 'maybe']);