// enums
export function exercise55() {
  // TODO: declare enum Color with values Red, Green, Blue
  // TODO: assing Red: 1, Green: 2, Blue: 4
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 3,
  }

  // TODO: declare a function that takes a color as a number and returns a string
  // TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
  function getColor(color: number): string {
    let result: string = '';
    // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
    if (color & Color.Red){
      result = 'Red';
    };
    // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
    if (color & Color.Green){
      result ? (result += ', Green') : (result = 'Green');
    }
    // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
    if (color & Color.Blue) {
      result ? (result += ', Blue') : (result = 'Blue');
    }

    // TODO: explain how bitmask works
    return result;
  }

  return {getColor};
  // TODO: add unit tests for getColor function
  console.log(0, getColor(0)); //=== """ (empty string, no color), bitmask ( 0 0 0 )
  console.log(1, getColor(1)); //=== "Red" // bitmask ( 0 0 1 )
  console.log(2, getColor(2)); //=== "Green // bitmask ( 0 1 0 )
  console.log(3, getColor(3)); //=== "Green, Blue" // bitmask ( 0 1 1 ) ?? // i have "Red, Green"
  console.log(4, getColor(4)); // === "Blue" bitmask ( 1 0 0 )
  console.log(5, getColor(5)); //=== "Red, Blue" // bitmask ( 1 0 1 )
  console.log(6, getColor(6)); //=== "Red, Green" // bitmask   ( 1 1 0 ) ?? // i have Green, Blue
  console.log(7, getColor(7)); //=== "Red, Green, Blue" // bitmask ( 1 1 1 )
}
exercise55();

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
    // return [...arr1, ...arr2].sort(comparator);

    const mergedArray: T[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (comparator(arr1[i], arr2[j]) <= 0) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }

    return mergedArray;

  }
  console.assert(
      mergeSortedArrays([1, 2, 3], [4, 5, 6], (a, b) =>
          a > b ? 1 : -1,
      ).toString() === [1, 2, 3, 4, 5, 6].toString(),
  );

  // console.assert(
  //     mergeSortedArrays([1, 2, 3], [4, 5, 6]).toString() ===
  //     [1, 2, 3, 4, 5, 6].toString()
  // );
  console.assert(
      mergeSortedArrays([1, 2, 3], [4, 5, 6], (a, b) =>
          a > b ? 1 : -1,
      ).toString() === [1, 2, 3, 4, 5, 6].toString()
  );
  //   console.assert(
  //     mergeSortedArrays([3, 4, 5], [4, 5, 6]).toString() ===
  //       [3, 4, 4, 5, 5, 6].toString()
  //   );
  console.assert(
      mergeSortedArrays([3, 4, 5], [4, 5, 6], (a, b) =>
          a > b ? 1 : -1,
      ).toString() === [3, 4, 4, 5, 5, 6].toString()
  );
  //   console.assert(
  //     mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
  //       [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString()
  //   );
  console.assert(
      mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6], (a, b) =>
          a > b ? 1 : -1,
      ).toString() === [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString()
  );

  // TODO: convert mergeSortedArrays to a generic function to support strings and numbers
}
exerciseExtraA();

