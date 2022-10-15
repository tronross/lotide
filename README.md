# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tronross/lotide`

**Require it:**

`const _ = require('@tronross/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
- `assertArraysEqual(arrayOne, arrayTwo) `: compares two arrays and prints a message to the console asserting whether they are strictly equal or not.

- `assertEqual(actual, expected)` : compares two values and prints a message to the console asserting whether they are strictly equal or not.


- `assertObjectsEqual(actual, expected)` : compares two objects and asserts an appropriate message to the console.

- `countLetters(sentence)` : takes in a string and returns an object containing counts of each letter that appears in the string.

- `countOnly(allItems, itemsToCount)` : takes in an array of strings and an object specifying what strings to count, and returns an object containing those strings and their count. 

- `eqArrays(arrayOne, arrayTwo)` : checks if two input arrays are identical, element by element.

- `eqObjects(object1, object2)` : checks if two input objects are identical, and returns true if they are.

- `findKey(object, callback)` : takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value. 

- `findKeyByValue`: takes in an object and a value, scans the object and returns the first key which contains the given value.

- `flatten`: takes an array with other arrays inside (one level of arrays only), and flattens it into a single-level array.

- `head`: returns the head of an array, and returns undefined in the event of an empty array.

- `letterPositions`: takes in a string and returns an object with properties (arrays) that correspond to the individual letters and their indices in the input string.

- `map`: takes an array and a callback function as arguments, and returns a new array corresponding to the results of the callback function.

- `middle`: returns an array containing the middle element(s) of an input array. If the input array contains two or fewer elements, middle returns an empty array.

- `tail`: returns a shallow copy of the tail of the input array, leaving the input array unchanged.

- `takeUntil`: takes in an array and a callback function and returns a slice of the array with elements taken from the beginning until the callback identifies the stopping point.

- `without`: takes a source array and an array of elements to remove, and returns a shallow copy of the array with the elements removed.
