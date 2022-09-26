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

// middle:
const middle = function(array) {
  let middleArray = []
  
  if (array.length <= 2) {
    return middleArray;
  } else if ((array.length % 2) !== 0) {
    let midElement = (Math.floor(array.length / 2));
    middleArray.push(array[midElement]);
    return middleArray;
  } else if ((array.length % 2) === 0) {
    let midElelment = (array.length / 2);
    middleArray.push(array[midElelment]);
    middleArray.push(array[(midElelment + 1)]);
    return middleArray;
  }
};


  // Test Code:
  console.log([1, 2], middle([1, 2]));
  console.log([1, 2, 3, 4, 5], middle([1, 2, 3, 4, 5]));