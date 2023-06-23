const assert = require('chai').assert;
const { expect } = require('chai');
const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countNames = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

describe("#countOnly", () => {
  it("returns an object containing the property 'Fang': 2 when the input array has two 'Fang's", () => {
    const counts = countOnly(firstNames, countNames);

    assert.equal(counts["Fang"], 2)
  });

  it("does not contain a property referencing an item if the input array does not contain it", () => {
    const counts = countOnly(firstNames, countNames);

    assert.equal(counts["Steve-o"], undefined)
  });
  // it("returns a one-dimensional array when fed a two-dimensional array of strings", () => {
  //   assert.deepEqual((flatten(['yes', ['no'], 'maybe'])), ['yes', 'no', 'maybe']);
  // });

  // it("returns a one-dimensional array when fed a two-dimensional array of strings and numbers, without mutating types", () => {
  //   assert.deepEqual((flatten(['yes', 17, ['no', 999], 'maybe'])), ['yes', 17, 'no', 999, 'maybe']);
  // });

  // it("returns an empty array when fed an empty array", () => {
  //   assert.deepEqual((flatten([])), []);
  // });

});
// // TEST CODE:
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1); // One Jason
// assertEqual(result1["Karima"], undefined); // undefined (no Karimas)
// assertEqual(result1["Fang"], 2); // Two Fangs
// assertEqual(result1["Agouhanna"], undefined); // undefined (no Agouhannas counted (value is false))