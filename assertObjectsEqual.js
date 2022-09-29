// ASSERTION HELPER CODE
// eqArrays: A function to check if two arrays are identical.
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

// eqObjects: Takes in two objects and returns true on a perfect match, and false on anything else.
const eqObjects = function(object1, object2) {
  let perfectMatch = true;
  const obj1Keys = (Object.keys(object1)).sort();
  const obj2Keys = (Object.keys(object2)).sort();
  
  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) {
    perfectMatch = false;
  } else {
    for (const key in object1) {
      for (const key2 in object2) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          perfectMatch = eqArrays(object1[key], object2[key]);
        } else if (key === key2) {
          if (object1[key] !== object2[key])
            perfectMatch = false;
        } else {
          perfectMatch = eqArrays((obj1Keys), (obj2Keys));
        }
      }
    }
  }
  return perfectMatch;
};


// FUNCTION
// assertObjectsEqual: takes in two objects and console.logs an appropriate assertion message to the console.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const perfectMatch = eqObjects(actual, expected);

  if (perfectMatch === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// TEST CODE:
// Primitives:
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectsEqual(ab, ba); // => Pass

const abc = { a: "1", b: "2", c: "3"};
assertObjectsEqual(ab, abc); // => Fail

const ad = { a: "1", d: "2"};
assertObjectsEqual(ab, ad); // => Fail


// Arrays as Values:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => Pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => Fail