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
  function countCall(
    target: unknown,
    methodName: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    let count = 0;
    descriptor.value = function (...args: number[]) {
      count++;
      console.log(`method ${methodName} has been called ${count}`);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function runtime(
    target: unknown,
    methodName: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    // let startTime = now Date();
    descriptor.value = function (...args: number[]) {
      const startTime = Date.now();
      const result = originalMethod.apply(this, args);
      const endTime = Date.now();
      const executionTime = endTime - startTime;
      console.log(`Method ${methodName} took ${executionTime} milliseconds.`);
      return result;
    };
    return descriptor;
  }
  class Calculation {
    // TODO: add both decorators to the following method
    @countCall
    @runtime
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  // TODO: remove the following line
  // console.log(Calculation);
  const calc1 = Calculation.add(6, 7);
  console.log(calc1);
}
exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  type TAdd = (...args: number[]) => number;
  function countCall(
    originalMethod: TAdd,
    _context: ClassMemberDecoratorContext,
  ) {
    let count = 0;
    function replacementMethod(this: unknown, ...args: number[]) {
      count++;
      const result = originalMethod.apply(this, args);
      console.log(`${String(_context.name)} method was called ${count} times`);
      return result;
    }
    return replacementMethod;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function runtime(
    originalMethod: TAdd,
    _context: ClassMemberDecoratorContext,
  ) {
    function replacementMethod(this: Calculation, ...args: number[]) {
      const startTime = Date.now();
      const result = originalMethod.apply(this, args);
      const endTime = Date.now();
      const executionTime = endTime - startTime;
      console.log(
        `Method ${String(_context.name)} took ${executionTime} milliseconds.`,
      );
      return result;
    }
    return replacementMethod;
  }

  class Calculation {
    // TODO: add both decorators to the following method
    @countCall
    @runtime
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  const calc1 = Calculation.add(1, 1);
  const calc2 = Calculation.add(1, 6);

  console.log(calc1);
  console.log(calc2);
}
exercise41();
