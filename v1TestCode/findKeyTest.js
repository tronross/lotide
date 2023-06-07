const assertEqual = require('../assertEqual');
const findKey =require('../findKey')

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

// Case b:
const lunch = {
  "Burger":   10,
  "Pizza":    12,
  "Falafel":  7,
  "Sushi":    12,
  "Steak":    25
};

assertEqual(findKey(lunch, x => x < 10), "Falafel");

// Case c:
assertEqual(findKey(lunch, x => x < 5), undefined);


// Case d:
const songs = {
  "The Botttom Line":                 { artist: "O.V. Wright", length: 313 },
  "I Don't Do Windows":               { artist: "O.V. Wright", length: 224 },
  "That's the Way I Feel About 'Cha": { artist: "O.V. Wright", length: 515 }
};

assertEqual(findKey(songs, x => x.length < 300), "I Don't Do Windows");