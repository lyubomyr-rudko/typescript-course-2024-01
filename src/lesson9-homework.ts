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
  function callCount(
    target: unknown,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    let value = 0;
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
      value++;
      console.log(`Method ${key} was called ${value} times`);
      return originalMethod.apply(this, args);
    };
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function executionTime(
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
      const start = Date.now();
      const result = originalMethod.apply(this, args);
      const end = Date.now();
      console.log(
        `Method ${propertyKey} executed in ${end - start} milliseconds`,
      );
      return result;
    };
  }

  console.log(callCount);
  console.log(executionTime);

  class Calculation {
    // TODO: add both decorators to the following method
    // @callCount
    // @executionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method

  // TODO: remove the following line
  console.log(Calculation);
}
exercise40();

console.log('Exercise 41');
// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  type TDecoration = {
    name: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function callCount(originalMethod: any, _context: TDecoration) {
    let callCount: number = 0;
    function replacementMethod(this: unknown, ...args: number[]) {
      callCount++;
      const result = originalMethod.call(this, ...args);

      console.log(`${_context.name} - call count ${callCount}`);
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
