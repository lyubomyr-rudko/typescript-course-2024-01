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

  function CallCount(
    target: Calculation,
    methodName: string,
    descriptor: PropertyDescriptor,
  ) {
    let calls: number = 0;
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
      calls += 1;
      console.log(`method was called ${calls} times`);
      const result = originalMethod.apply(this, args);
      return result;
    };
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function TimeExecution(
    target: Calculation,
    methodName: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
      const date = new Date().getTime();
      const result = originalMethod.apply(this, args);
      console.log(
        `time of function execution is ${new Date().getTime() - date} `,
      );
      return result;
    };
  }
  console.log(TimeExecution, CallCount);

  class Calculation {
    // TODO: add both decorators to the following method
    // @CallCount
    // @TimeExecution
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  const calc1 = Calculation.add(1, 1);
  const calc2 = Calculation.add(1, 6);

  console.log(calc1);
  console.log(calc2);

  // TODO: remove the following line
  //   console.log(Calculation);
}
exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  type TAdd = (...args: number[]) => number;
  function CallCount(
    originalMethod: TAdd,
    _context: ClassMemberDecoratorContext,
  ) {
    let calls: number = 0;
    function replacementMethod(this: Calculation, ...args: number[]) {
      calls += 1;
      const result = originalMethod.apply(this, args);
      console.log(`${String(_context.name)} method was called ${calls} times`);
      return result;
    }
    return replacementMethod;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  function TimeExecution(
    originalMethod: TAdd,
    _context: ClassMemberDecoratorContext,
  ) {
    function replacementMethod(this: Calculation, ...args: number[]) {
      const date = new Date().getTime();
      const result = originalMethod.apply(this, args);
      console.log(
        `time of ${String(_context.name)} method execution is ${
          new Date().getTime() - date
        } ms`,
      );
      return result;
    }
    return replacementMethod;
  }

  class Calculation {
    // TODO: add both decorators to the following method
    @TimeExecution
    @CallCount
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
