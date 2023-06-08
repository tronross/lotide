//////////////////////
// assertArraysEqual
//////////////////////

const eqArrays = require('./eqArrays');

/**
 * Compares two arrays and asserts whether they are found to be equal.
 * @param {array} arrayOne 
 * @param {array} arrayTwo
 */

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const arraysEqual = eqArrays(arrayOne, arrayTwo);
 
  if (arraysEqual) {
    console.log("✅✅✅ Assertion Passed: The arrays are equal.");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: The arrays are not equal.");
  }
};

module.exports = assertArraysEqual;