/* eslint-disable @typescript-eslint/ban-types */
// Read the following typescript documentation (if you haven't already)
// Use Translate to Ukrainian
// 1. https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// 2. https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// 3. https://www.typescriptlang.org/docs/handbook/2/functions.html

// Read the following typescript documentation on decorators:
// Use Translate to Ukrainian
// 1. https://www.typescriptlang.org/docs/handbook/decorators.html#handbook-content
// 2. https://mirone.me/a-complete-guide-to-typescript-decorator/
// 3. https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators

// Use experimental decorators
function exercise40() {
  // TODO: 1. implement method decorator to print call count of the function
  // TODO: 2. implement method decorator to print execution time of the function
  // function callCount(originalMethod: number, _context: any) {
  //   function replacementMethod(this: any, ...args: any[]) {
  //     console.log('LOG: Entering method.');
  //     const result = originalMethod.call(this, ...args);
  //     console.log('LOG: Exiting method.');
  //     return result;
  //   }
  //   return replacementMethod;
  // }
  // class Calculation {
  //   // TODO: add both decorators to the following method
  //   @callCount
  //   static add(a: number, b: number) {
  //     return a + b;
  //   }
  // }
  // const res = Calculation.add(1, 5);
  // const res2 = Calculation.add(1, 2);
  // const res3 = Calculation.add(1, 54);
  // console.log(res);
  // console.log(res2);
  // console.log(res3);
  // TODO: create instance of Calculation class and call add method
  // TODO: remove the following line
}

exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  // TODO: 2. implement method decorator to print execution time of the function
  class Calculation {
    // TODO: add both decorators to the following method
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method

  // TODO: remove the following line
  console.log(Calculation);
}
exercise41();
