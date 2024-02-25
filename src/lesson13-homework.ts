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
  function getColor2(color: number): string {
    let result = color.toFixed();
    if (color === 1) {
      result = 'red';
    }
    if (color === 2) {
      result = 'Green';
    }
    if (color === 4) {
      result = 'Blue';
    }
    return result;
  }
  console.log(getColor2(1));
  console.log(getColor2(2));
  console.log(getColor2(4));
  // TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getColor(color: number): string {
    let result = '';
    // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
    // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
    // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
    if (color & Color.Red) {
      result = 'Red';
    }
    if (color & Color.Green) {
      result = 'Green';
    }
    if (color & Color.Blue) {
      result = 'Blue';
    }

    // TODO: explain how bitmask works
    return result;
  }
  console.log(getColor(1));
  console.log(getColor(2));
  console.log(getColor(4));

  // TODO: add unit tests for getColor function
  // getColor(0) === """ (empty string, no color), bitmask ( 0 0 0 )
  // getColor(1) === "Red" // bitmask ( 0 0 1 )
  // getColor(2) === "Green // bitmask ( 0 1 0 )
  // getColor(3) === "Green, Blue" // bitmask ( 0 1 1 )
  // getColor(4) === "Blue" bitmask ( 1 0 0 )
  // getColor(5) === "Red, Blue" // bitmask ( 1 0 1 )
  // getColor(6) === "Red, Green" // bitmask   ( 1 1 0 )
  // getColor(7) === "Red, Green, Blue" // bitmask ( 1 1 1 )
}
exercise55();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtraA() {
  // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
  // TODO: use generic type to support any type of arrays
  // function mergeSortedArrays(
  //   arr1: number[],
  //   arr2: number[],
  //   comparator: (a: number, b: number) => 1 | -1 | 0,
  // ): number[] {
  //   // TODO: remove the next line, implement the function without using array sort method
  //   return [...arr1, ...arr2].sort(comparator);
  // }
  function mergeSortedArrays<T>(arr1: T[], arr2: T[]) {
    let i = 0;
    let j = 0;
    const result: T[] = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }
  console.assert(
    mergeSortedArrays([1, 2, 3], [4, 5, 6]).toString() ===
      [1, 2, 3, 4, 5, 6].toString(),
  );

  console.assert(
    mergeSortedArrays([3, 4, 5], [4, 5, 6]).toString() ===
      [3, 4, 4, 5, 5, 6].toString(),
  );
  console.assert(
    mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
      [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString(),
  );

  // TODO: convert mergeSortedArrays to a generic function to support strings and numbers
}
exerciseExtraA();

// export {};
