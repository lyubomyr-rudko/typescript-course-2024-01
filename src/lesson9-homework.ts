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
function exercise40() {
  function countCalls(
    target: unknown,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    let count = 0;

    descriptor.value = function (...args: unknown[]) {
      count++;
      console.log(`Method ${key} has been called ${count} times.`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  }

  function logExecutionTime(
    target: unknown,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      const startTime = Date.now();
      const result = originalMethod.apply(this, args);
      const endTime = Date.now();
      const executionTime = endTime - startTime;
      console.log(
        `Method ${key} took ${executionTime} milliseconds to execute.`,
      );
      return result;
    };

    return descriptor;
  }

  class Calculation {
    @countCalls
    @logExecutionTime
    add(a: number, b: number) {
      return a + b;
    }
  }

  const calculator = new Calculation();
  calculator.add(2, 3);
}

exercise40();

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
//
// exercise41();

function exercise41() {
  function countCalls(
    target: unknown,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    let count = 0;

    descriptor.value = function (...args: unknown[]) {
      count++;
      console.log(`Method ${key} has been called ${count} times.`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  }

  function logExecutionTime(
    target: unknown,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      const startTime = Date.now();
      const result = originalMethod.apply(this, args);
      const endTime = Date.now();
      const executionTime = endTime - startTime;
      console.log(
        `Method ${key} took ${executionTime} milliseconds to execute.`,
      );
      return result;
    };

    return descriptor;
  }

  class Calculation {
    @countCalls
    @logExecutionTime
    static add(a: number, b: number) {
      return a + b;
    }
  }

  Calculation.add(2, 3); // Вызываем статический метод на классе, а не на экземпляре

  console.log(Calculation);
}

exercise41();
