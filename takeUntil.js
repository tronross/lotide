//ASSERTION HELPER CODE:
// aasertArraysEqual: a function to compare two arrays and assert if they are equal.
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const arraysEqual = eqArrays(arrayOne, arrayTwo);
 
  if (arraysEqual) {
    console.log("✅✅✅ Assertion Passed: The arrays are equal.");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The arrays are not equal.");
  }
};

// eqArrays: A function to check if arrays are identical.
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


// FUNCTION
// takeUntil:
const takeUntil = function(array, callback) {
  const arraySlice = [];

  for (let element of array) {
    if (callback(element)) {
      return arraySlice;
    } else {
      arraySlice.push(element);
    }
  }
  return arraySlice;
};

// TEST CODE:
const data1 = ["onions", "tomatoes", "bread", "cheese", "leather", "felt"];
const results1 = takeUntil(data1, x => x === "leather");
assertArraysEqual(results1, ['onions', 'tomatoes', 'bread', 'cheese']);

const data2 = ["a", "screaming", "comes", "across", "the", "sky"];
const results2 = takeUntil(data2, x => x.length < 7 && x.length > 5);
assertArraysEqual(results2, ['a', 'screaming', 'comes']);

const data3 = [2.66, 5.5, 1.66, -56, 55.77, 112];
const results3 = takeUntil(data3, x => Number.isInteger(x));
assertArraysEqual(results3, [2.66, 5.5, 1.66]);