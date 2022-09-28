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




// TEST CODE:
const ab = { a: "1", b: "2"};
const ba = { b: "1", a: "1"};
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false); // => false