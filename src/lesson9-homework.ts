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

// // Use experimental decorators
// function exercise40() {
//   // TODO: 1. implement method decorator to print call count of the function
//   // TODO: 2. implement method decorator to print execution time of the function
//   class Calculation {
//     // TODO: add both decorators to the following method
//     static add(a: number, b: number) {
//       return a + b;
//     }
//   }
//   // TODO: create instance of Calculation class and call add method
//
//   // TODO: remove the following line
//   console.log(Calculation);
// }
// exercise40();
// // Use 2023 decorators (Stage 3 decorator)
// function exercise41() {
//   // TODO: 1. implement method decorator to print call count of the function
//   // TODO: 2. implement method decorator to print execution time of the function
//   class Calculation {
//     // TODO: add both decorators to the following method
//     static add(a: number, b: number) {
//       return a + b;
//     }
//   }
//
//   // TODO: create instance of Calculation class and call add method
//
//   // TODO: remove the following line
//   // console.log(Calculation);
// }
// exercise41();
function exercise40() {
  function callCount(
    target: unknown,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    let count = 0;
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
      count++;
      console.log(`Method ${key} called ${count} times`);
      return originalMethod.apply(this, args);
    };
  }

  function executionTime(
    target: unknown,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
      const start = Date.now();
      const result = originalMethod.apply(this, args);
      const end = Date.now();
      console.log(`Method ${key} executed in ${end - start} ms`);
      return result;
    };
  }

  console.log(callCount);
  console.log(executionTime);

  class Calculation {
    // @callCount
    // @executionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }

  console.log(Calculation.add(2, 3));
}

exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function loggedMethod(originalMethod: Function, _context: unknown) {
    console.log(_context);

    function replacementMethod(this: unknown, ...args: unknown[]) {
      console.log('LOG: Entering method.');
      const result = originalMethod.call(this, ...args);
      console.log('LOG: Exiting method.');
      return result;
    }

    return replacementMethod;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  function executionTime(originalMethod: Function, _context: unknown) {
    console.log(_context);

    function replacementMethod(this: unknown, ...args: unknown[]) {
      const start = Date.now();
      const result = originalMethod.call(this, ...args);
      const end = Date.now();
      console.log(`Method executed in ${end - start} ms`);
      return result;
    }

    return replacementMethod;
  }

  class Calculation {
    @loggedMethod
    @executionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }

  console.log(Calculation.add(2, 3));
}

exercise41();
