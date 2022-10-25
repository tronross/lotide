const eqArrays = require('./eqArrays');

// FUNCTION
// eqObjects: Takes in two objects and returns true on a perfect match, and false on anything else.
const eqObjects = function(object1, object2) {
  // set default condition as true
  let eqObjs = true;
  
  // create sorted arrays of the input objects keys
  const obj1Keys = (Object.keys(object1)).sort();
  const obj2Keys = (Object.keys(object2)).sort();
  
  // return false if different number of keys or any of the compared elements (keys) are not strictly equal
  const keysCheck = eqArrays((obj1Keys), (obj2Keys));
  if (keysCheck === false) {
    return eqObjs = false;
  } 

  for (const key in object1) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // if property is an array, call eqArray
          eqObjs = eqArrays(object1[key], object2[key]);
        } else if (object1[key] !== object2[key]) // return false on differing properties
          return eqObjs = false;
        }
  return eqObjs;
};

module.exports = eqObjects;