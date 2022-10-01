//ASSERTION HELPER CODE:
// assertEqual: compare two values and print out a message asserting whether they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// FUNCTION
// findKey: Takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value. (If no key is found, it returns undefined.)
const findKey = function(object, callback) {
  for (const item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
};


// TEST CODE
// Case a:
const cats = { 
  Cat1: "Barlo",
  Cat2: "Peach",
  Cat3: "Aktar",
  Cat4: "Boobooboo",
  Cat5: "Huxley"
};

assertEqual(findKey(cats, x => x === "Peach"), "Cat2");

//Case b:
const lunch = {
  "Burger":   10,
  "Pizza":    12,
  "Falafel":  7,
  "Sushi":    12,
  "Steak":    25
};

assertEqual(findKey(lunch, x => x < 10), "Falafel");

//Case c:
const songs = {
  "The Botttom Line":                 { artist: "O.V. Wright", length: 313 },
  "I Don't Do Windows":               { artist: "O.V. Wright", length: 224 },
  "That's the Way I Feel About 'Cha": { artist: "O.V. Wright", length: 515 } 
};

assertEqual(findKey(songs, x => x.length < 300), "I Don't Do Windows");