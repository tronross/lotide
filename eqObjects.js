const eqArrays = require('./eqArrays');

// FUNCTION
// eqObjects: Takes in two objects and returns true on a perfect match, and false on anything else.
const eqObjects = function(object1, object2) {
  let perfectMatch = true;  // set default condition as true
  const obj1Keys = (Object.keys(object1)).sort(); // create sorted arrays of the input objects keys
  const obj2Keys = (Object.keys(object2)).sort();

  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) {
    perfectMatch = false; // return false on differing number of keys
  } else {
    for (const key in object1) {
      for (const key2 in object2) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // if property is an array, call eqArray
          perfectMatch = eqArrays(object1[key], object2[key]);
        } else if (key === key2) {
          if (object1[key] !== object2[key]) // return false on differing properties
            perfectMatch = false;
        } else {
          perfectMatch = eqArrays((obj1Keys), (obj2Keys)); // return false if any of the compared elements (keys) are not strictly equal
        }
      }
    }
  }
  return perfectMatch;
};

module.exports = eqObjects;