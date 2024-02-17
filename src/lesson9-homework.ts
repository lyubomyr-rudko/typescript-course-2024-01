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
  function countCalls(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    let callCount = 0;
    descriptor.value = function (...args: number[]) {
      callCount++;
      console.log(
        `Function ${propertyKey} has been called ${callCount} times.`,
      );
      return originalMethod.apply(this, args);
    };
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function executionTime(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
      const startTime = performance.now();
      const result = originalMethod.apply(this, args);
      const endTime = performance.now();
      console.log(
        `Function ${propertyKey} took ${(endTime - startTime).toFixed(
          2,
        )} milliseconds to execute.`,
      );
      return result;
    };
  }
  class Calculation {
    // TODO: add both decorators to the following method

    // "experimentalDecorators": true,  /* Need to Enable experimental support for legacy experimental decorators. */
    @countCalls
    @executionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  const result = Calculation.add(5, 3);
  console.log(`Result: ${result}`); // Output: Result: 8

  // TODO: remove the following line
  // console.log(Calculation);
}
exercise40();

//--------------------------------------//

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  type TDecoration = {
    name: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function callCount(originalMethod: any, _context: TDecoration) {
    let calls: number = 0;
    function replacementMethod(this: unknown, ...args: number[]) {
      calls++;
      const result = originalMethod.call(this, ...args);

      console.log(`${_context.name} - call count ${calls}`);
      return result;
    }

    return replacementMethod;
  }

  // TODO: 2. implement method decorator to print execution time of the function

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function timeCount(originalMethod: any, _context: TDecoration) {
    function replacementMethod(this: unknown, ...args: number[]) {
      const timeBefore = new Date().getTime();
      const timeAfter = new Date().getTime();
      const result = originalMethod.call(this, ...args);
      console.log(
        `${_context.name} - execution time ${timeAfter - timeBefore}`,
      );
      return result;
    }

    return replacementMethod;
  }
  class Calculation {
    // TODO: add both decorators to the following method
    @callCount
    @timeCount
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  console.log(Calculation.add(1, 2));
  console.log(Calculation.add(3, 4));
  console.log(Calculation.add(5, 6));
}
// TODO: remove the following line
// console.log(Calculation);

exercise41();
