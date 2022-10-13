// FUNCTION
// eqArrays: check if two input arrays are identical.
const eqArrays = function(arrayOne, arrayTwo) {
  let equal = true; // Set default condition as true

  if (arrayOne.length !== arrayTwo.length) {
    equal = false; // false if the arrays are different lengths, but most important to ensure accuracy of the following for loop conditionals
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        equal = false; // false if any of the compared elements are not strictly equal
      }
    }
  }
  return equal;
};

module.exports = eqArrays;