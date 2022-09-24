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

console.log(without(["banana", "canteloupe", "watermelon"], ["banana", "antelope", "watermelon"]));
assertArraysEqual(without(["banana", "canteloupe", "watermelon"], ["banana", "antelope", "watermelon"]), ["banana", "canteloupe", "watermelon"]);

console.log(without(["1", "2", "3"], ["1", "2", 3]));
assertArraysEqual(without(["1", "2", "3"], ["1", "2", 3]), ["1", "2", "3"]);

console.log(without([true, true], [true, false]));
assertArraysEqual(without([true, true], [true, false]), [true, true]);

console.log(without([true, true], [true, true]));
assertArraysEqual(without([true, true], [true, true]), [true, true]);


// Test Cases: Original array is not changed

assertArraysEqual((without([1, 2, 3], [1])), [1, 2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);