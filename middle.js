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
console.log([1, 2], middle([1, 2]));
assertArraysEqual(middle([1, 2]), [1, 2]);

console.log([1, 2, 3, 4, 5], middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

console.log([1, 2, 3, 4, 5, 77], middle([1, 2, 3, 4, 5, 77]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 77]), [1, 2, 3, 4, 5, 77]);

console.log(["banana", "canteloupe", "watermelon"], middle(["banana", "canteloupe", "watermelon"]));
assertArraysEqual(middle(["banana", "canteloupe", "watermelon"]), ["banana", "canteloupe", "watermelon"]);