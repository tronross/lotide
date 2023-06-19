////////////
// flatten
////////////

 /**
  * Takes in a two-dimensional array and returns a "flattened" version of the array.
  *
  * @param {array} array Two-dimensional array to be "flattened".
  * @returns {array} Returns a "flattened", one-dimensional array.
  */

const flatten = function (array) {
  let flattenedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;