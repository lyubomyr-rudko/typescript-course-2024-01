// Read the following typescript documentation (if you haven't already)
// Use Translate to Ukrainian
// 1. https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// 2. https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// 3. https://www.typescriptlang.org/docs/handbook/2/functions.html

// import { number } from 'prop-types';

// Read the following typescript documentation on decorators:
// Use Translate to Ukrainian
// 1. https://www.typescriptlang.org/docs/handbook/decorators.html#handbook-content
// 2. https://mirone.me/a-complete-guide-to-typescript-decorator/
// 3. https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators

// Use experimental decorators
// function exercise40() {
//   // TODO: 1. implement method decorator to print call count of the function
//   type TDecoration = {
//     name: string;
//   };
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   function callCount(originalMethod: any, _context: TDecoration) {
//     let calls: number = 0;
//     function replacementMethod(this: unknown, ...args: number[]) {
//       calls++;
//       const result = originalMethod.call(this, ...args);

//       console.log(`${_context.name} = call count ${calls}`);
//       return result;
//     }

//     return replacementMethod;
//   }

//   // TODO: 2. implement method decorator to print execution time of the function
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   function timeCount(originalMethod: any, _context: TDecoration) {
//     function replacementMethod(this: unknown, ...args: number[]) {
//       const timeBefore = new Date().getTime();
//       const timeAfter = new Date().getTime();
//       const result = originalMethod.call(this, ...args);
//       console.log(
//         `${_context.name} = execution time ${timeAfter - timeBefore}`,
//       );
//       return result;
//     }

//     return replacementMethod;
//   }

//   class Calculation {
//     // TODO: add both decorators to the following method
//     @callCount
//     @timeCount
//     static add(a: number, b: number) {
//       return a + b;
//     }
//   }
//   // TODO: create instance of Calculation class and call add method

//   // TODO: remove the following line
//   // console.log(Calculation);
//   console.log(Calculation.add(1, 2));
//   console.log(Calculation.add(3000, 4));
//   console.log(Calculation.add(5, 6));
// }
// exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function

  function callCount(
    target: object,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    let count = 0;
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: number[]) {
      count++;
      console.log(` ${key}= call count  ${count}`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  }
  // TODO: 2. implement method decorator to print execution time of the function

  function executionTime(
    target: object,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
      console.time(key);
      const result = originalMethod.apply(this, args);
      console.timeEnd(key);
      return result;
    };
    return descriptor;
  }
  class Calculation {
    @callCount
    @executionTime
    // TODO: add both decorators to the following method
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method

  // TODO: remove the following line
  console.log(Calculation);
  console.log(Calculation.add(1, 2));
  console.log(Calculation.add(3000, 4));
  console.log(Calculation.add(5, 6));
}
exercise41();
