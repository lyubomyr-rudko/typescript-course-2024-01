// enums
function exercise55() {
  // TODO: declare enum Color with values Red, Green, Blue
  // TODO: assing Red: 1, Green: 2, Blue: 4
  enum Color {
    Red = 1 << 0,
    Green = 1 << 1,
    Blue = 1 << 2,
  }

  // TODO: declare a function that takes a color as a number and returns a string
  // TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getColor(color: number): string {
    const result = [];
    // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
    if (color & Color.Red) {
      result.push('Red');
    }
    // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
    if (color & Color.Green) {
      result.push('Green');
    }
    // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
    if (color & Color.Blue) {
      result.push('Blue');
    }
    // TODO: explain how bitmask works
    return result.join(', ');
  }

  return getColor;
  // TODO: add unit tests for getColor function
  // getColor(0) === """ (empty string, no color), bitmask ( 0 0 0 )
  // getColor(1) === "Red" // bitmask ( 0 0 1 )
  // getColor(2) === "Green // bitmask ( 0 1 0 )
  // getColor(3) === "Red, Green" // bitmask ( 0 1 1 )
  // getColor(4) === "Blue" bitmask ( 1 0 0 )
  // getColor(5) === "Red, Blue" // bitmask ( 1 0 1 )
  // getColor(6) === "Red, Green" // bitmask   ( 1 1 0 )
  // getColor(7) === "Red, Green, Blue" // bitmask ( 1 1 1 )
}
export const getColor = exercise55();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtraA() {
  // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
  // TODO: use generic type to support any type of arrays
  function mergeSortedArrays<T>(
    arr1: T[],
    arr2: T[],
    comparator: (a: T, b: T) => 1 | -1 | 0,
  ): T[] {
    // TODO: remove the next line, implement the function without using array sort method
    const mergedArray = [...arr1, ...arr2];

    for (let i = 0; i < mergedArray.length; i++) {
      for (let j = 0; j < mergedArray.length; j++) {
        const comparison = comparator(mergedArray[j], mergedArray[j + 1]);
        if (comparison === 1) {
          const tmp = mergedArray[j];
          mergedArray[j] = mergedArray[j + 1];
          mergedArray[j + 1] = tmp;
        }
      }
    }

    return mergedArray;
  }
  console.log(
    mergeSortedArrays<number>([1, 2, 3], [4, 5, 6], (a, b) => (a > b ? 1 : -1)),
  );

  console.assert(
    mergeSortedArrays<number>([1, 2, 3], [4, 5, 6], (a, b) =>
      a > b ? 1 : -1,
    ).toString() === [1, 2, 3, 4, 5, 6].toString(),
  );

  console.assert(
    mergeSortedArrays<number>([3, 4, 5], [4, 5, 6], (a, b) =>
      a > b ? 1 : -1,
    ).toString() === [3, 4, 4, 5, 5, 6].toString(),
  );
  console.assert(
    mergeSortedArrays<number>([3, 4, 5, 6, 6, 10, 20], [4, 5, 6], (a, b) =>
      a > b ? 1 : -1,
    ).toString() === [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString(),
  );
  // TODO: convert mergeSortedArrays to a generic function to support strings and numbers
  console.assert(
    mergeSortedArrays<string>(
      ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
      ['eight', 'nine', 'ten'],
      (a, b) => (a > b ? 1 : -1),
    ).toString() ===
      [
        'eight',
        'five',
        'four',
        'nine',
        'one',
        'seven',
        'six',
        'ten',
        'three',
        'two',
      ].toString(),
  );
}
exerciseExtraA();

export {};
