const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

// TEST CODE:
// Case 1:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
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
  drama: "The Wire",
  test_fi: "The Expanse",
};

assertEqual(findKeyByValue(bestTVShowsByGenre2, "The Expanse"), "sci_fi");
