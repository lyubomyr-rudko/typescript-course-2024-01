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
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    let count = 0;

    descriptor.value = function (...args: number[]) {
      count++;
      console.log(`Method ${propertyKey} has been called ${count} times.`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function executionTime(
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: number[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      console.log(
        `Method ${propertyKey} executed in ${end - start} milliseconds.`,
      );
      return result;
    };
    return descriptor;
  }
  console.log(callCount);
  console.log(executionTime);

  class Calculation {
    // TODO: add both decorators to the following method
    //@callCount
    //@executionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }

  // TODO: create instance of Calculation class and call add method
  const result = Calculation.add(5, 7);
  console.log('Result:', result);

  // TODO: remove the following line
  //console.log(Calculation);
}
exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  type TAdded = (...args: number[]) => number;
  function callCount(
    originalMethod: TAdded,
    _context: ClassMethodDecoratorContext,
  ) {
    let count = 0;
    function replacementMethod(this: unknown, ...args: number[]) {
      count += 1;
      const result = originalMethod.apply(this, args);
      console.log(
        `Method ${String(_context.name)} has been called ${count} times.`,
      );
      return result;
    }
    return replacementMethod;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function executionTime(
    originalMethod: TAdded,
    _context: ClassMethodDecoratorContext,
  ) {
    function replacementMethod(this: unknown, ...args: number[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      console.log(
        `Method ${String(_context.name)} executed in ${end - start}
         milliseconds.`,
      );
      return result;
    }
    return replacementMethod;
  }

  class Calculation {
    // TODO: add both decorators to the following method
    @callCount
    @executionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  const result1 = Calculation.add(5, 7);
  const result2 = Calculation.add(8, 9);
  console.log('Result:', result1);
  console.log('Result:', result2);
}
exercise41();
