// FUNCTION
// findKey: Takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value. (If no key is found, it returns undefined.)

const findKey = function (object, callback) {
  for (const item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
};

module.exports = findKey;