// ASSERTION HELPER CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION
// eqObjects: Takes in two objects and returns true on a purrfekt match, and false on anything else.
const eqObjects = function(object1, object2) {
  for (const key in object1) {
    console.log(key);
    for (const key2 in object2) {
      if (key === key2) {
        console.log(object1[(key)], object2[(key)]);
        if (object1[(key)] !== object2[(key)])
        return false;
      }
    }
  }

};




// TEST CODE:
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true); // => true

//const abc = { a: "1", b: "2", c: "3"};
//assertEqual(eqObjects(ab, abc), false); // => false