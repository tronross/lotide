///////////////////////
// assertObjectsEqual
///////////////////////

const eqObjects = require('./eqObjects');

/**
 * Compares two objects and asserts whether they are found to be equal.
 * @param {object} actual 
 * @param {object} expected 
 */

// assertObjectsEqual: 
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  const perfectMatch = eqObjects(actual, expected);

  if (perfectMatch === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;