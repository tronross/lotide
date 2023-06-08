////////////////
// assertEqual
////////////////

/**
 * Compares two primitive values and asserts whether they are equal.
 * @param {*} actual 
 * @param {*} expected 
 */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;