// ++ Read the following typescript documentation (if you haven't already)
// Use Translate to Ukrainian
// 1. https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// 2. https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// 3. https://www.typescriptlang.org/docs/handbook/2/functions.html

// Read the following typescript documentation on decorators:
// Use Translate to Ukrainian
// ++1. https://www.typescriptlang.org/docs/handbook/decorators.html#handbook-content
// ++2. https://mirone.me/a-complete-guide-to-typescript-decorator/
// ++3. https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators

// Use experimental decorators
function exercise40() {
  // TODO: 1. implement method decorator to print call count of the function
  function CallCount(
    target: object,
    methodName: string,
    descriptor: PropertyDescriptor,
  ) {
    let count: number = 0;
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: number[]) {
      const result = originalMethod.apply(this, args);

      if (result) {
        count++;
        console.log(count);
      }

      return result;
    };
  }

  // TODO: 2. implement method decorator to print execution time of the function
  function ExecutionTime(
    target: object,
    methodName: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: number[]) {
      const start = new Date().getTime();

      const result = originalMethod.apply(this, args);

      const end = new Date().getTime();

      console.log('execution time ms->', end - start);

      return result;
    };
  }
  console.log(ExecutionTime);
  console.log(CallCount);

  class Calculation {
    // TODO: add both decorators to the following method
    // @ExecutionTime
    // @CallCount
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  const calculation1 = Calculation.add(1, 1);
  console.log('calculation 1 ->', calculation1);

  const calculation2 = Calculation.add(1, 2);
  console.log('calculation 2 ->', calculation2);

  const calculation3 = Calculation.add(1, 3);
  console.log('calculation 3 ->', calculation3);

  // TODO: remove the following line
  // console.log(Calculation);
}
exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  function CallCount<TThis>(
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    originalMethod: any,
    _context: ClassMethodDecoratorContext,
  ) {
    console.log(_context);

    let count: number = 0;

    function replacementMethod(this: TThis, ...args: number[]) {
      const result = originalMethod.call(this, ...args);

      if (result) {
        count++;
        console.log(count);
      }

      return result;
    }

    return replacementMethod;
  }

  // TODO: 2. implement method decorator to print execution time of the function
  function ExecutionTime<TThis>(
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    originalMethod: any,
    _context: ClassMethodDecoratorContext,
  ) {
    console.log(_context);

    function replacementMethod(this: TThis, ...args: number[]) {
      const start = new Date().getTime();

      const result = originalMethod.apply(this, args);

      const end = new Date().getTime();

      console.log('execution time ms->', end - start);

      return result;
    }

    return replacementMethod;
  }
  class Calculation {
    // TODO: add both decorators to the following method
    @ExecutionTime
    @CallCount
    static add(a: number, b: number) {
      return a + b;
    }
  }

  // TODO: create instance of Calculation class and call add method
  const calculation1 = Calculation.add(1, 4);
  console.log('calculation 1 ->', calculation1);

  const calculation2 = Calculation.add(1, 44);
  console.log('calculation 1 ->', calculation2);

  const calculation3 = Calculation.add(1, 2);
  console.log('calculation 1 ->', calculation3);

  // TODO: remove the following line
  // console.log(Calculation);
}
exercise41();
