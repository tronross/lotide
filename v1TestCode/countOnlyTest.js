

// TEST CODE:
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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1); // One Jason
assertEqual(result1["Karima"], undefined); // undefined (no Karimas)
assertEqual(result1["Fang"], 2); // Two Fangs
assertEqual(result1["Agouhanna"], undefined); // undefined (no Agouhannas counted (value is false))