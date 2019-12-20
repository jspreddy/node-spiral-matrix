# Directions
write a function that takes an input positive integer number N and
returns a NxN spiral Matrix.

# examples

## for N=2
```js
const output = [
  [1, 2],
  [4, 3]
];

expect(spiralMatrix(2)).toEqual(output);
```

## for N=3
```js
const output = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
];

expect(spiralMatrix(3)).toEqual(output);
```

## for N=4
```js
const output = [
  [1,  2, 3, 4],
  [12,13,14, 5],
  [11,16,15, 6],
  [10, 9, 8, 7]
];

expect(spiralMatrix(4)).toEqual(output);
```

An NxN matrix where the numbers increment in a spiral.

## Spiral Matrix:
If you draw a line on a spiral matrix in the ascending order of the values, you will see that a spiral is formed.
