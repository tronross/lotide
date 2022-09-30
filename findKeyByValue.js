//ASSERTION HELPER CODE:
// assertEqual: compare two values and print out a message asserting whether they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//FUNCTION

const findKeyByValue = function(objToSearch, searchValue) {
  let matchKey = "";

  for (const key in objToSearch) {
    if (searchValue === objToSearch[(key)]) {
      matchKey = key;
    }
  }
  return matchKey;
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