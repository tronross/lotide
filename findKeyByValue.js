// FUNCTION
// findKeyByValue: Takes in an object and a value, scans the object and returns the first key which contains the given value. If no key with that value is found, it returns undefined.

const findKeyByValue = function (objToSearch, searchValue) {
  for (const key in objToSearch) {
    if (searchValue === objToSearch[key]) {
      return key; // return first matching key
    }
  }
  return undefined; // return undefined if no match
};

module.exports = findKeyByValue;