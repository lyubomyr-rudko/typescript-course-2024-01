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
    return result.join(',');
  }
  console.log(getColor(1));
  console.log(getColor(2));
  console.log(getColor(4));
}
exercise55();
// TODO: add unit tests for getColor function
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
export function getColor(color: number): string {
  const result = [];
  if (color & Color.Red) {
    result.push('Red');
  }
  if (color & Color.Green) {
    result.push('Green');
  }
  if (color & Color.Blue) {
    result.push('Blue');
  }
  return result.join(', ');
}

console.log(getColor(0));
// getColor(0) === """ (empty string, no color), bitmask ( 0 0 0 )
// getColor(1) === "Red" // bitmask ( 0 0 1 )
// getColor(2) === "Green // bitmask ( 0 1 0 )
// getColor(3) === "Green, Blue" // bitmask ( 0 1 1 )
// getColor(4) === "Blue" bitmask ( 1 0 0 )
// getColor(5) === "Red, Blue" // bitmask ( 1 0 1 )
// getColor(6) === "Red, Green" // bitmask   ( 1 1 0 )
// getColor(7) === "Red, Green, Blue" // bitmask ( 1 1 1 )
// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtraA() {
  // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
  // TODO: use generic type to support any type of arrays
  function mergeSortedArrays<T>(
    arr1: T[],
    arr2: T[],
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    comparator?: (a: T, b: T) => 1 | -1 | 0,
  ): T[] {
    // TODO: remove the next line, implement the function without using array sort method
    // return [...arr1, ...arr2].sort(comparator);
    // let mergeArray = [...arr1, ...arr2];
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    for (let i = 0; i < arr1.length; i++) {
      for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr2[j]) {
          const temp = arr1[i];
          arr1[i] = arr2[j];
          arr2[j] = temp;
        }
      }
    }
    return arr1;
  }

  console.log(
    mergeSortedArrays<number>([1, 2, 3], [4, 5, 6], (a, b) => (a > b ? 1 : -1)),
  );

  console.assert(
    mergeSortedArrays<number>([1, 2, 3], [4, 5, 6]).toString() ===
      [1, 2, 3, 4, 5, 6].toString(),
  );

  console.assert(
    mergeSortedArrays<number>([3, 4, 5], [4, 5, 6]).toString() ===
      [3, 4, 4, 5, 5, 6].toString(),
  );
  console.assert(
    mergeSortedArrays<number>([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
      [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString(),
  );

  // TODO: convert mergeSortedArrays to a generic function to support strings and numbers
  console.log(
    mergeSortedArrays<string>(['10', '20', '30'], ['40', '50', '60'], (a, b) =>
      a > b ? 1 : -1,
    ),
  );
}
exerciseExtraA();

export {};
