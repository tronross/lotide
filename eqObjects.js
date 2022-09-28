// ASSERTION HELPER CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION
// eqObjects: Takes in two objects and returns true on a purrfekt match, and false on anything else.
const eqObjects = function(object1, object2) {

};