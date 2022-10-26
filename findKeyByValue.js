const assertEqual = require('./assertEqual');

// FUNCTION
// findKeyByValue: Takes in an object and a value, scans the object and returns the first key which contains the given value. If no key with that value is found, it returns undefined.

const findKeyByValue = function(objToSearch, searchValue) {
  for (const key in objToSearch) {
    if (searchValue === objToSearch[key]) {
      return key; // return first matching key
    }
  }
  return undefined; // return undefined if no match
};


// TEST CODE:
// Case 1:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


// Case 2:
const petNames = {
  dog: "Polar",
  cat: "Peach",
  bear: "Harold",
  chipmunk: "Franz"
};

assertEqual(findKeyByValue(petNames, "Polar"), "dog");
assertEqual(findKeyByValue(petNames, "Franz"), "chipmunk");
assertEqual(findKeyByValue(petNames, "Stevie"), undefined);

// Case 3 (return first key where two keys contain the value):
const bestTVShowsByGenre2 = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  test_fi: "The Expanse",
};

assertEqual(findKeyByValue(bestTVShowsByGenre2, "The Expanse"), "sci_fi");

module.exports = findKeyByValue;