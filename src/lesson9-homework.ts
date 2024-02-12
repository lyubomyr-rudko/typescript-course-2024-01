/* eslint-disable @typescript-eslint/no-explicit-any */
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
// function exercise40() {
//   // TODO: 1. implement method decorator to print call count of the function
//   // TODO: 2. implement method decorator to print execution time of the function
//   interface ICalculationDecorator {
//     (target: any, methodName: string, descriptor: PropertyDescriptor): void;
//   }

//   const callCount: ICalculationDecorator = function (
//     target: any,
//     methodName: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     const originalMethod = descriptor.value;
//     let count = 0;
//     descriptor.value = function (...args: any[]) {
//       count++;
//       console.log(`Calls count: ${count}`);
//       const result = originalMethod.apply(this, args);

//       return result;
//     };
//   };
//   const workTime: ICalculationDecorator = function (
//     target: any,
//     methodName: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       const start = new Date().getTime();
//       const result = originalMethod.apply(this, args);
//       const end = new Date().getTime();
//       const diff = end - start;
//       console.log(`Duration of work: ${diff} ms`);

//       return result;
//     };
//   };

//   class Calculation {
//     // TODO: add both decorators to the following method
//     @callCount
//     @workTime
//     static add(a: number, b: number) {
//       return a + b;
//     }
//   }
//   // TODO: create instance of Calculation class and call add method
//   console.log(Calculation.add(12, 10)); //22
//   console.log(Calculation.add(2, 1)); //3
//   console.log(Calculation.add(4, 6)); //10
// }
// exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  // TODO: 2. implement method decorator to print execution time of the function

  interface ICalculationDecorator {
    (originalMethod: any, context: any): void;
  }

  const callCount: ICalculationDecorator = function (
    originalMethod: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: any,
  ) {
    let count = 0;

    return function (this: any, ...args: any[]) {
      count++;
      console.log(`Calls count: ${count}`);
      const result = originalMethod.call(this, ...args);
      return result;
    };
  };
  const workTime: ICalculationDecorator = function (
    originalMethod: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: any,
  ) {
    return function (this: any, ...args: any[]) {
      const start = new Date().getTime();
      const result = originalMethod.apply(this, args);
      const end = new Date().getTime();
      const diff = end - start;
      console.log(`Duration of work: ${diff} ms`);
      return result;
    };
  };

  class Calculation {
    // TODO: add both decorators to the following method
    @workTime
    @callCount
    static add(a: number, b: number) {
      return a + b;
    }
  }

  // TODO: create instance of Calculation class and call add method

  console.log(Calculation.add(12, 12));
  console.log(Calculation.add(4, 3));
  console.log(Calculation.add(2, 2));
}
exercise41();
