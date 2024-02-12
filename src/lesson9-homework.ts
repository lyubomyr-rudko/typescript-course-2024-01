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
/* eslint-disable @typescript-eslint/no-explicit-any */
// function exercise40() {
//   // for used static  methods
//   // function LogCauntCallsFunc(
//   //   target: any,
//   //   key: string,
//   //   descriptor: PropertyDescriptor,
//   // ) {
//   //   let callCount = 0;

//   //   const originalMethod = descriptor.value;

//   //   descriptor.value = function (...args: any[]) {
//   //     callCount++;
//   //     console.log(`Function ${key} has been called ${callCount} time(s).`);
//   //     return originalMethod.apply(this, args);
//   //   };

//   //   return descriptor;
//   // }

//   interface IWrapperStatic {
//     add(a: number, b: number): number;
//     log(a: number, b: number): void;
//     timer(a: number, b: number): void;
//   }

//   // function LogExecuteTimeFunc (...args: any[]){
//   //   console.log(args);
//   // }

//   // BAD IDEA FOR TS :
//   // In your case, you're trying to use a decorator on a function declaration, but
//   //  decorators in TypeScript are only allowed on classes, methods, accessor declarations, properties, or parameters.
//   // @LogExecuteTimeFunc
//   function WrapperStatic(constructor: any) {
//     // Function call TS Error Compile
//     // const add = function (a: number, b: number) {
//     //   console.log('wrapper work ', a, b);
//     //   return a + b;
//     // };
//     // constructor.prototype.add = LogCauntCallsFunc(this, 'add', { value: add });
//     let counter = 0;
//     constructor.prototype.add = function (a: number, b: number) {
//       console.log('wrapper work ', a, b);
//       return a + b;
//     };
//     constructor.prototype.log = function (a: number, b: number) {
//       counter++;
//       this.add(a, b);
//       console.log(`Called: ${counter} times for ${a}+${b}`);
//     };
//     constructor.prototype.timer = function (a: number, b: number) {
//       const start = Date.now();
//       setTimeout(
//         async () => {
//           this.add(a, b);
//           const end = Date.now();
//           console.log(
//             `For ${a}+${b} Start: ${start}, End: ${end}, Executed time: ${
//               end - start
//             }`,
//           );
//         },
//         Math.round(Math.random() * 10),
//       );
//     };
//   }

//   // TODO: 1. implement method decorator to print call count of the function
//   function logCauntCalls(
//     target: any,
//     methodName: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     console.log('Use method: ', methodName);
//     const origMethod = descriptor.value;
//     let counter = 0;
//     descriptor.value = function (...args: any[]) {
//       counter++;
//       console.log(`${methodName} called: ${counter} times`);
//       return origMethod.apply(this, args);
//     };
//     return descriptor;
//   }

//   // TODO: 2. implement method decorator to print execution time of the function
//   function logExecuteTime(
//     target: any,
//     methodName: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     const origMethod = descriptor.value;
//     const start = Date.now();

//     descriptor.value = function (...args: any[]) {
//       const res = setTimeout(
//         async () => {
//           const res = await origMethod.apply(this, args);
//           const end = Date.now();
//           console.log(
//             `Method: ${methodName} with params: ${JSON.stringify(
//               args,
//             )}\n\tStart: ${start}, End: ${end}, Executed time: ${end - start}`,
//           );
//           return res;
//         },
//         Math.round(Math.random() * 10),
//       );

//       return res;
//     };
//     return descriptor;
//   }

//   @WrapperStatic
//   class Calculation {
//     // TODO: add both decorators to the following method
//     @logCauntCalls
//     @logExecuteTime
//     static add(a: number, b: number) {
//       return a + b;
//     }
//   }
//   type TCalculation = Calculation & IWrapperStatic;
//   // TODO: create instance of Calculation class and call add method
//   const calc = new Calculation() as TCalculation;
//   // static method can't directly calls from instances - only from obj Class OR
//   (calc.constructor as typeof Calculation).add(1, 1);
//   Calculation.add(2, 1);
//   calc.add(2, 2); // decorator can't work for function() on TS - only in JS
//   calc.log(2, 2); // decorator can't work for function() on TS - only in JS
//   calc.timer(2, 2); // decorator can't work for function() on TS - only in JS

//   // TODO: remove the following line
//   // console.log(Calculation);
// }
// exercise40();

// Use 2023 decorators (Stage 3 decorator)
function exercise41() {
  // TODO: 1. implement method decorator to print call count of the function
  // es-disable-next-line @typescript-eslint/no-unused-vars
  function logCallsCount(origMethod: any, _context: any) {
    let counter: number = 0;
    function wrapperMethod(this: any, ...args: any[]) {
      counter++;
      console.log(`Call: ${counter} times`);
      return origMethod.call(this, args);
    }
    return wrapperMethod;
  }
  // TODO: 2. implement method decorator to print execution time of the function
  // es-disable-next-line @typescript-eslint/no-unused-vars
  function logExecuteTime(origMethod: any, _context: any) {
    const start = Date.now();

    function wrapperMethod(this: any, ...args: any[]) {
      // console.log('origMethod: ', origMethod(...args));
      // console.log('args', ...args);
      const res = origMethod.apply(this, ...args); // NOT CALL!!!
      const end = Date.now();
      console.log(
        `Start on: ${start}, End: ${end} \tExecute time: ${
          end - start
        }, res: ${res}`,
      );
      return res;
    }
    return wrapperMethod;
  }

  class Calculation {
    // TODO: add both decorators to the following method
    @logCallsCount
    @logExecuteTime
    static add(a: number, b: number) {
      return a + b;
    }

    @logCallsCount
    @logExecuteTime
    add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  const calc = new Calculation();
  console.log((calc.constructor as typeof Calculation).add(3, 7));
  console.log((calc.constructor as typeof Calculation).add(1, 4));
  console.log(calc.add(444, 555));
  console.log(calc.add(2, 1));

  // TODO: remove the following line
  // console.log(Calculation);
}
exercise41();
