// enums
function exercise55() {
  // TODO: declare enum Color with values Red, Green, Blue
  // TODO: assing Red: 1, Green: 2, Blue: 4
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
  }

  // TODO: declare a function that takes a color as a number and returns a string
  // TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getColor(color: number): string {
    let result = '';
    // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
    if (color & Color.Red) {
      result += 'Red, ';
    }
    // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
    if (color & Color.Green) {
      result += 'Green, ';
    }
    // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
    if (color & Color.Blue) {
      result += 'Blue';
    }
    result = result.replace(/, $/, '');

    // TODO: explain how bitmask works
    return result;
  }

  // TODO: add unit tests for getColor function
  // getColor(0) === """ (empty string, no color), bitmask ( 0 0 0 )
  // getColor(1) === "Red" // bitmask ( 0 0 1 )
  // getColor(2) === "Green // bitmask ( 0 1 0 )
  // getColor(3) === "Green, Blue" // bitmask ( 0 1 1 )
  // getColor(4) === "Blue" bitmask ( 1 0 0 )
  // getColor(5) === "Red, Blue" // bitmask ( 1 0 1 )
  // getColor(6) === "Red, Green" // bitmask   ( 1 1 0 )
  // getColor(7) === "Red, Green, Blue" // bitmask ( 1 1 1 )

  console.log(getColor(0));
  console.log(getColor(1));
  console.log(getColor(2));
  console.log(getColor(3)); // === "Red, Green"
  console.log(getColor(4));
  console.log(getColor(6)); // === "Green, Blue"
  console.log(getColor(7));
}
exercise55();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtraA() {
  // write a function to merge two sorted arrays of numbers into one sorted array
  // use generic type to support any type of arrays
  function mergeSortedArrays<T>(
    arr1: T[],
    arr2: T[],
    comparator: (a: T, b: T) => number,
  ): T[] {
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

  // console.log(
  //   mergeSortedArrays([1, 2, 3], [4, 5, 6], (a, b) => (a > b ? 1 : -1)),
  // );

  console.assert(
    mergeSortedArrays([1, 2, 3], [4, 5, 6], (a, b) =>
      a > b ? 1 : -1,
    ).toString() === [1, 2, 3, 4, 5, 6].toString(),
  );

  console.assert(
    mergeSortedArrays([3, 4, 5], [4, 5, 6], (a, b) =>
      a > b ? 1 : -1,
    ).toString() === [3, 4, 4, 5, 5, 6].toString(),
  );

  console.assert(
    mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6], (a, b) =>
      a > b ? 1 : -1,
    ).toString() === [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString(),
  );

  // convert mergeSortedArrays to a generic function to support strings and numbers
}

exerciseExtraA();

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
function getColorTest(color: number): string {
  let result = '';

  if (color & Color.Red) {
    result += 'Red, ';
  }
  if (color & Color.Green) {
    result += 'Green, ';
  }
  if (color & Color.Blue) {
    result += 'Blue';
  }
  result = result.replace(/, $/, '');
  return result;
}

export { getColorTest };
