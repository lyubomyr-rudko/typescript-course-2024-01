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
  type TDecoratorContext = {
    name: string;
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  function callCount(originalMethod: Function, _context: TDecoratorContext) {
    let count = 0;
    function replacementMethod(this: unknown, ...args: number[]) {
      count++;
      const result = originalMethod.call(this, ...args);
      console.log(`Method ${_context.name} called ${count} times`);
      return result;
    }

    return replacementMethod;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function executionTime(
    // eslint-disable-next-line @typescript-eslint/ban-types
    originalMethod: Function,
    _context: TDecoratorContext,
  ) {
    function replacementMethod(this: unknown, ...args: number[]) {
      const startTime = performance.now();
      const result = originalMethod.call(this, ...args);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(
        `Method ${_context.name} execution time: ${executionTime.toFixed(4)}ms`,
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

  // TODO: remove the following line
  console.log(Calculation.add(1, 2));
  console.log(Calculation.add(1, 2));
  console.log(Calculation.add(1, 2));
}
exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function callCount(
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Function,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    let count = 0;
    const original = descriptor.value;

    descriptor.value = function (...args: number[]) {
      count += 1;
      const result = original.call(this, ...args);
      console.log(`Method ${propertyKey} called ${count} times`);
      return result;
    };

    return descriptor;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function executionTime(
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Function,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: number[]) {
      const startTime = performance.now();
      const result = original.call(this, ...args);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(
        `Method ${propertyKey} execution time: ${executionTime.toFixed(4)}ms`,
      );
      return result;
    };

    return descriptor;
  }
  class Calculation {
    // TODO: add both decorators to the following method
    // Need set "experimentalDecorators": true in tsconfig then uncomment next two lines
    // @callCount
    // @executionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method

  // TODO: remove the following line
  console.log(Calculation.add(1, 2));
  console.log(Calculation.add(1, 2));
  console.log(Calculation.add(1, 2));
}
exercise41();
