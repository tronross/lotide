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


// Test Cases:
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Fail
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass
assertArraysEqual(["banana", "canteloupe", "watermelon"], ["banana", "canteloupe", "watermelon"]); // Pass
assertArraysEqual(["banana", "canteloupe", "watermelon"], ["banana", "antelope", "watermelon"]); // Fail

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Fail
assertArraysEqual([true, true],[true, false]); // Fail
assertArraysEqual([true, true],[true, true]); // Pass