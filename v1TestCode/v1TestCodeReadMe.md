### V1 Test Code

The test code for `assertArraysEqual`, `assertEqual`, `assertObjectsEqual`, `countLetters`, `countOnly`, `eqArrays` and `findKey` resides here to prevent it being called via `npm test` and polluting the chai results and/or being called when the function itself is called as a module (previously situated in the `test` folder or in the original file of the function).