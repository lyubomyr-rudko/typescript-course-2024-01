/* eslint-disable @typescript-eslint/no-explicit-any*/
// enums
function exercise55() {
  // TODO: declare enum Color with values Red, Green, Blue
  // TODO: assing Red: 1, Green: 2, Blue: 4
  enum Color {
    None, // 000
    Red = 1, // 001
    Green = 2, // 010
    'Red, Green' = Green | Red, // 011
    Blue = 4, // 100
    // 'Red, Blue' = Red | Blue, // 101
    // 'Red, Green' = Red | Green, // 110
    'Red, Blue' = Blue | Red, // 101
    'Green, Blue' = Blue | Green, // 110
    'Red, Green, Blue' = Red | Green | Blue, // 111
  }
  // console.log(Color); // { '1': 'Red', '2': 'Green', '4': 'Blue', Red: 1, Green: 2, Blue: 4 }

  // TODO: declare a function that takes a color as a number and returns a string
  // TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
  // eslint-disable @typescript-eslint/no-unused-vars
  function getColor(color: number): string {
    let result = color.toFixed();
    // console.log(color, color.toString(2).padStart(32, '0'));

    if (color === 0) {
      // result = Color[color];
      result = Color[0];
    }
    // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
    if (color & Color.Red) {
      result = Color[color];
    }
    // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
    if (color & Color.Green) {
      result = Color[color];
    }
    // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
    if (color & Color.Blue) {
      result = Color[color];
    }

    return result;
  }

  // TODO: add unit tests for getColor function
  getColor(0) === ''; // (empty string, no color), bitmask ( 0 0 0 )
  getColor(1) === 'Red'; // bitmask ( 0 0 1 )
  getColor(2) === 'Green'; // bitmask ( 0 1 0 )
  getColor(3) === 'Green, Blue'; // bitmask ( 0 1 1 )
  getColor(4) === 'Blue'; // bitmask ( 1 0 0 )
  getColor(5) === 'Red, Blue'; // bitmask ( 1 0 1 )
  getColor(6) === 'Red, Green'; // bitmask   ( 1 1 0 )
  getColor(7) === 'Red, Green, Blue'; // bitmask ( 1 1 1 )

  return getColor;
}
export const exercise55Test = exercise55;

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtraA() {
  // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
  // TODO: use generic type to support any type of arrays

  // type TComparator =  (a: any, b: any) => 1 | -1 | 0
  function mergeSortedArrays<T1 extends any[], T2 extends any[]>(
    arr1: T1,
    arr2: T2,
    comparator = (a: any, b: any) => (a > b ? 1 : -1),
  ): any[] {
    // TODO: remove the next line, implement the function without using array sort method
    // return [...arr1, ...arr2].sort(comparator);
    //
    //
    const all = [...arr1, ...arr2];

    const res: any = [];

    all.forEach((el, i) => {
      // init value
      if (i === 0) res[i] = all[i];
      // continue
      else {
        let test = comparator(el, res[res.length - 1]);

        if (test > 0) {
          res.push(el);
        } else {
          // console.log('_ el', el);

          // test prev & etc
          for (let j = res.length; j > 0; j--) {
            test = comparator(el, res[j - 1]);
            // console.log(
            //   j,
            //   // res.length,
            //   // j - 1,
            //   ' el: ',
            //   el,
            //   ' retest for:',
            //   res[j - 1],
            //   ':',
            //   test,
            //   res,
            // );
            if (test > 0) {
              // console.log(res.length, ' j: ', j, ' el:', el);
              res.splice(j, 0, el);
              break;
            }
            if (test < 0 && j == 1) {
              // console.log('smallest: ', el, ' test: ', test);
              res.unshift(el);
              break;
            } // for smallest
          }
        }
        // console.log(el, ' vs ', res[res.length - 1], test, '\t', res);
      }
    });

    return res;
  }
  console.log(
    // mergeSortedArrays([1, 2, 3], [4, 5, 6], (a, b) => (a > b ? 1 : -1)),
    mergeSortedArrays([2, 1, 3], [5, 4, 6], (a, b) => (a > b ? 1 : -1)),
  );

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

  function mergeSortedSimple<T extends number | string>(...args: T[]): any[] {
    const comparator = (a: any, b: any) => (a > b ? 1 : -1);

    const res: any = [];

    args.forEach((el, i) => {
      // init value
      if (i === 0) res[i] = args[i];
      // continue
      else {
        let test = comparator(el, res[res.length - 1]);

        if (test > 0) {
          res.push(el);
        } else {
          // test prev & etc
          for (let j = res.length; j > 0; j--) {
            test = comparator(el, res[j - 1]);
            if (test > 0) {
              res.splice(j, 0, el);
              break;
            }
            if (test < 0 && j == 1) {
              res.unshift(el);
              break;
            } // for smallest
          }
        }
      }
    });

    return res;
  }

  console.log(mergeSortedSimple(9, 2, 1, 0, 7, 5, 3, 6, 7, 9, 2)); //[0, 1, 2, 2, 3,5, 6, 7, 7, 9, 9]
  console.log(mergeSortedSimple('34', '3', '56', '5', '57', '56')); //[ '3', '34', '5', '56', '56', '57' ]

  // as more universal can be  use in line 147
  // function mergeSortedSimple<T extends number | string>(...args: T[]): any[] {
  // console.log(
  //   mergeSortedSimple(9, '0', 2, 1, 0, 'null', 7, '5', 'A', 3, '6', 7, 9, 2),
  // );
}
exerciseExtraA();

export {};
