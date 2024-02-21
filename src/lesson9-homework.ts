/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
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
    target: unknown,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    let originalMethod = descriptor.value;
    let callCount: number = 0;

    descriptor.value = function (...args: unknown[]) {
      callCount++;
      console.log(`Method ${key} has been called ${callCount} times.`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function logExecutionTime(
    target: unknown,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    let originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      console.time(`Execution time for ${key}`);
      let result = originalMethod.apply(this, args);
      console.timeEnd(`Execution time for ${key}`);
      return result;
    };

    return descriptor;
  }

  class Calculation {
    // TODO: add both decorators to the following method
    @countCalls
    @logExecutionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  // TODO: remove the following line
  console.log(Calculation.add(1, 2));
}
exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  function countCalls(originalMethod: unknown, _context: unknown) {
    let callCount: number = 0;

    function replacementMethod(this: unknown, ...args: unknown[]) {
      const result = originalMethod.call(this, ...args);
      callCount++;
      console.log(`Method has been called ${callCount} times.`);
      return result;
    }
    return replacementMethod;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  // eslint-disable-next-line @typescript-eslint/ban-types
  function logExecutionTime(originalMethod: Function, _context: unknown) {
    function replacementMethod(this: unknown, ...args: unknown[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, ...args);
      const end = performance.now();

      console.log(`Execution time for ${end - start}`);
      return result;
    }
    return replacementMethod;
  }

  class Calculation {
    // TODO: add both decorators to the following method
    @countCalls
    @logExecutionTime

    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method

  // TODO: remove the following line
  console.log(Calculation.add(1, 2));
}
exercise41();
