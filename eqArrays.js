// FUNCTION
// eqArrays: A function to check if arrays are identical
const eqArrays = function(arrayOne, arrayTwo) {
  let equal = true;  // set default result as true, unless proven false

  if (arrayOne.length !== arrayTwo.length) {
    equal = false; // fail on arrays of different lengths (essential for comparing element by element)
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (Array.isArray(arrayOne[i])) { // recursively call itself on nested arrays
        eqArrays(arrayOne[i], arrayTwo[i]);
      } else if (arrayOne[i] !== arrayTwo[i]) { // compare each element in the arrays
        equal = false;
      }
    }
  }
  return equal;
};

module.exports = eqArrays;