// ASSERTION HELPER CODE
// Assert Equal testing code
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

// middle: A function to extract the middle element(s) of an array.
const middle = function(array) {
  let middleArray = [];
  
  if (array.length <= 2) {
    return middleArray;

  } else if ((array.length % 2) !== 0) {
    const midElement = (Math.floor(array.length / 2));
    middleArray.push(array[midElement]);
    return middleArray;

  } else if ((array.length % 2) === 0) {
    const midElelment = (array.length / 2);
    middleArray.push(array[(midElelment - 1)]);
    middleArray.push(array[midElelment]);
    return middleArray;
  }
};


// Test Code:
console.log("Source:", [1, 2], "Middle: ", middle([1, 2]));
assertArraysEqual(middle([1, 2]), [1, 2]);

console.log("Source:", [1, 2, 3, 4, 5], "Middle: ", middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

console.log("Source:", [1, 2, 3, 4, 5, 77], "Middle: ", middle([1, 2, 3, 4, 5, 77]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 77]), [1, 2, 3, 4, 5, 77]);

console.log("Source:", ["banana", "canteloupe", "watermelon"], "Middle: ", middle(["banana", "canteloupe", "watermelon"]));
assertArraysEqual(middle(["banana", "canteloupe", "watermelon"]), ["banana", "canteloupe", "watermelon"]);