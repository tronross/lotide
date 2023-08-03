////////
// map
////////

/**
 * Takes in an array and a callback function as arguments, and returns a new array based on the results of the callback function.
 *
 * @param {array} array to be processed.
 * @param {function} callback Function to execute on array.
 * @returns {array} New array created by executing callback.
 */

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;