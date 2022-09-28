// ASSERTION CODE:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//FUNCTION

const findKeyByValue = function(objToSearch, searchValue) {
  const matchKey = ""

  for (const key in objToSearch) {
    //const contender = objToSearch[(key)]
   // if (searchValue === objToSearch[(key)]) {}
    console.log(objToSearch[(key)]);
  }
  //return matchKey;
}


// TEST CODE:
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);