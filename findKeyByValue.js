///////////////////
// findKeyByValue
///////////////////

/**
 * Takes in an object and a value, scans the object and returns the first key which contains the given value. If no key with that value is found, it returns undefined.
 *
 * @param {object} objToSearch Object to scan.
 * @param {string} searchValue Value to scan for.
 * @returns {string || undefined} Returns the first matching key as a string, or undefined if no match.
 */

const findKeyByValue = function (objToSearch, searchValue) {
  for (const key in objToSearch) {
    if (searchValue === objToSearch[key]) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;