// ASSERTION CODE:
// A function to compare two arrays and assert if they are equal.
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const arraysEqual = eqArrays(arrayOne, arrayTwo);
 
  if (arraysEqual) {
    console.log("✅✅✅ Assertion Passed: The arrays are equal.");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The arrays are not equal.");
  }
};

// eqArrays: A function to check if arrays are identical
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
  }
  return equal;
};


// without: Takes a source array and an array of elements to remove, and returns a new array that contains the elements _not_ removed. The source array is unchanged.
const without = function(source, itemsToRemove) {
  let editedArray = source;

  for (let element of itemsToRemove) {
    for (let i = 0; i < editedArray.length; i++) {
      if (element === editedArray[i]) {
        editedArray.splice((i), 1);
      }
    }
  }
  return editedArray;
};


// Test Cases:

console.log(without(["banana", "canteloupe", "watermelon"], ["banana"]));
assertArraysEqual(without(["banana", "canteloupe", "watermelon"], ["banana"]), ["canteloupe", "watermelon"]); // => Pass

console.log(without(["1", "2", "3"], ["1", "2"]));
assertArraysEqual(without(["1", "2", "3"], ["1", "2"]), ["3"]); // => Pass

console.log(without([17, 99, 104, 155], [99]));
assertArraysEqual(without([17, 99, 104, 155], [99]), [17, 104, 155]); // => Pass


// Test Case (b): Original array is not changed

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => Fail