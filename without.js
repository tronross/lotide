const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION
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

module.exports = without;