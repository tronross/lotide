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

const eqArrays = function(arrayOne, arrayTwo) {
  let equal = true; // Set default condition as true

  if (arrayOne.length !== arrayTwo.length) {
    equal = false; // false if the arrays are different lengths, but also important to ensure accuracy of the following for loop conditionals
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        equal = false; // false if any of the compared elements are not strictly equal
      }
    }
  }
  return equal;
};

//FUNCTION
// without: Takes a source array and an array of elements to remove, and returns a new array that contains the elements _not_ removed. The source array is unchanged.
const without = function(source, itemsToRemove) {
  let array = source;
  let editedArray = [];

  for (let element of itemsToRemove) {
    for (let i = 0; i < array.length; i++) {
      if (element !== array[i]) {
        editedArray.push(array[i]);
      }
    }
  }
  return editedArray;
};


// TEST CODE

assertArraysEqual(without(["banana", "canteloupe", "watermelon"], ["banana"]), ["canteloupe", "watermelon"]); // => Pass

assertArraysEqual(without([17, 99, 104, 155], [99]), [17, 104, 155]); // => Pass

// Test Cases (b): Original array is not changed

const words = ["hello", "world", "lighthouse"];
const OrigWords = words;

without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function:
console.log("Original array: ", OrigWords, "Source array after without(): ", words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => Pass