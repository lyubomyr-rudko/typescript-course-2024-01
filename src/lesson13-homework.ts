// enums
// TODO: declare enum Color with values Red, Green, Blue

// TODO: assign Red: 1, Green: 2, Blue: 4
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}

// TODO: declare a function that takes a color as a number and returns a string
// TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
function getColor(color: number): string {
  const result = [];
  // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
  // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
  // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
  if (color & Color.Red) result.push('Red');
  if (color & Color.Green) result.push('Green');
  if (color & Color.Blue) result.push('Blue');

  // TODO: explain how bitmask works
  return result.join(', ');
}

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtraA() {
  // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
  // TODO: use generic type to support any type of arrays
  function mergeSortedArrays<T>(arr1: T[], arr2: T[]): T[] {
    // TODO: remove the next line, implement the function without using array sort method
    const mixedArr = [...arr1, ...arr2];
    const resArr: T[] = [];

    function minFn(arr: T[]): void {
      if (arr.length === 0) return;

      let min = arr[0];
      let index = 0;
      for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
          min = arr[i];
          index = i;
        }
      }
      resArr.push(min);
      arr.splice(index, 1);
      minFn(arr);
    }
    minFn(mixedArr);

    return resArr;
  }
  console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));
  console.log(mergeSortedArrays([7, 12, 6], [4, 22, 0]));
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

export { getColor };
