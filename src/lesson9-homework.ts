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
  function call(
      target: any,
      key: string,
      descriptor: PropertyDescriptor,
  ) {
    let originalMethod = descriptor.value;
    let callCount: number = 0;
    descriptor.value = function (...args: any[]) {
      callCount++;
      console.log(`Call count: ${callCount}`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  }

  function time(
      target: any,
      name: string,
      descriptor: PropertyDescriptor) {

    let originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      let startTime = performance.now();
      let result = originalMethod.apply(this, args);
      let endTime = performance.now();
      console.log(`Execution time: ${endTime - startTime} milliseconds`);
      return result;
    };
    return descriptor;
  }

  // TODO: 2. implement method decorator to print execution time of the function
  class Calculation {
    // TODO: add both decorators to the following method
    // @call
    // @time
    static add(a: number, b: number): number  {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method

  // TODO: remove the following line
  console.log(Calculation);
}
exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
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
  // TODO: 2. implement method decorator to print execution time of the function
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
    // TODO: add both decorators to the following method
    @loggedMethod
    @executionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  console.log(Calculation.add(2, 3));
  // TODO: remove the following line
}
exercise41();
