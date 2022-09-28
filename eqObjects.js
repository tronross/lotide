// ASSERTION HELPER CODE
// Assert Equal testing code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays: A function to check if arrays are identical
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
// eqObjects: Takes in two objects and returns true on a purrfekt match, and false on anything else.
const eqObjects = function(object1, object2) {
  let perfectMatch = true;

  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) {
    perfectMatch = false;
  } else {
    for (const key in object1) {
      for (const key2 in object2) {
        if (Array.isArray(object1[(key)]) && Array.isArray(object2[(key)])) {
          perfectMatch = eqArrays(object1[(key)], object2[(key)]);
        } else {
          if (key === key2) {
            if (object1[(key)] !== object2[(key)])
              perfectMatch = false;
          }
        }
      }
    }
  }
  return perfectMatch;
};


// TEST CODE:
// Primitives:
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false); // => false


// Arrays as Values:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false