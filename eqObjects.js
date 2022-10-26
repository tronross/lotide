const eqArrays = require('./eqArrays');

// FUNCTION
// eqObjects: Takes in two objects and returns true if equal, and false if not equal.

const eqObjects = function(obj1, obj2) {
  // create and compare sorted arrays of the input objects' keys;
  const obj1Keys = (Object.keys(obj1)).sort();
  const obj2Keys = (Object.keys(obj2)).sort();
  const keysCheck = eqArrays((obj1Keys), (obj2Keys));
  
  if (keysCheck === false) {
    return false;
  }

  for (const key in obj1) {
    // if value is an array, compare it with its corresponding array
    if (Array.isArray(obj1[key])) {
      const arraysCheck = eqArrays(obj1[key], obj2[key]);
      if (arraysCheck === false) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true; // return true if passes all tests
};

module.exports = eqObjects;