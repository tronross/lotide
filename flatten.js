// A function which takes in arrays containing elements icluding nested arrays of elements, and returns a "flattened" version of the array.

const flatten = function(array) {
  let flattenedArray = [];

  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (j = 0; j < array[i][j]; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]


// A function to compare two arrays and assert if they are equal.
const assertArraysEqual = function(arrayOne, arrayTwo) {
  let arraysEqual = true;

  if (arrayOne.length !== arrayTwo.length) {
    arraysEqual = false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        arraysEqual = false;
      }
    }
  }

  if (arraysEqual) {
    console.log("✅✅✅ Assertion Passed: The arrays are equal.");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The arrays are not equal.");
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