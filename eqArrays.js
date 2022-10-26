// FUNCTION
// eqArrays: A function to check if arrays are identical

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false; // immediately return false on arrays of different lengths (essential for comparing element by element)
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (Array.isArray(arrayOne[i])) { // recursively call on nested arrays
        const nestArrCheck = eqArrays(arrayOne[i], arrayTwo[i]);
        if (nestArrCheck === false) {
          return false;
        }
      } else if (arrayOne[i] !== arrayTwo[i]) {
        return false; // immediately return false if an index does not match between arrays
      }
    }
  }
  return true; // return true if passes all tests
};


module.exports = eqArrays;