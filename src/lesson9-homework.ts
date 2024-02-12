// // Read the following typescript documentation (if you haven't already)
// // Use Translate to Ukrainian
// // 1. https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// // 2. https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// // 3. https://www.typescriptlang.org/docs/handbook/2/functions.html

// // Read the following typescript documentation on decorators:
// // Use Translate to Ukrainian
// // 1. https://www.typescriptlang.org/docs/handbook/decorators.html#handbook-content
// // 2. https://mirone.me/a-complete-guide-to-typescript-decorator/
// // 3. https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators

// // Use experimental decorators
// function exercise40() {
//   // TODO: 1. implement method decorator to print call count of the function
//   // function logCountCalls(
//   //   target: any,
//   //   propertyKey: string,
//   //   descriptor: PropertyDescriptor,
//   // ): any {
//   //   // console.log(JSON.stringify({ target, propertyKey, descriptor }));
//   //   const originalFn = descriptor.value;

//   //   return function (this: any, ...args: any[]) {
//   //     let calls: number = 0;
//   //     const result = originalFn.call(this, ...args);
//   //     console.log(`Method called ${calls} times.`);
//   //     return result;
//   //   };
//   // }

//   // function logCountCalls(originalFn: any, ...args: any[]): any {
//   //   let calls: number = 0;
//   //   return function (this: any, ...args: any[]) {
//   //     const result = originalFn.call(this, ...args);
//   //     console.log(`Method called ${calls} times.`);
//   //     return result;
//   //   };
//   // }

//   function logCountCalls(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     console.log('target: ', target);
//     console.log('propertyKey: ', propertyKey);
//     console.log('descriptor: ', descriptor);

//     // work code from lecture BUT can compiled in TS:  - Property 'calls' does not exist on type '() => void'  any
//     // function printCallCount() {
//     //   if (!printCallCount.calls) printCallCount.calls = 1;
//     //   else printCallCount.calls++;
//     //   console.log('Calls: ', printCallCount.calls);
//     // }
//     // printCallCount();

//     // my version
//     // const originalFn = descriptor.value;
//     let calls: number = 0;
//     function logger(this: any, ...args: any[]): any {
//       calls++;
//       console.log(`Method ${propertyKey} called ${calls} times.`);
//       const res = target.call(this, ...args);
//       return res;
//       // return descriptor.value.call(this, args);
//     }
//     return logger;
//   }

//   // TODO: 2. implement method decorator to print execution time of the function
//   function printExceutionTime(originalFn: any, ...args: any[]): any {
//     return function (this: any, ...args: any[]) {
//       let startTime = Date.now();
//       let res = originalFn.apply(this, args);
//       let endTime = Date.now();
//       console.log(`Executed time: ${endTime - startTime} ms.`);
//       return res;
//     };
//   }
//   // function printExceutionTime() {
//   //   return (
//   //     target: any,
//   //     propertyKey: string,
//   //     descriptor: PropertyDescriptor,
//   //   ) => {
//   //     const originalFn = descriptor.value;

//   //     descriptor.value = function (...args: any[]) {
//   //       let startTime = Date.now();
//   //       let result = originalFn.apply(this, args);
//   //       let endTime = Date.now();
//   //       console.log(
//   //         `Method ${propertyKey} executed in ${endTime - startTime} ms.`,
//   //       );
//   //       return result;
//   //     };

//   //     return descriptor;
//   //   };
//   // }

//   class Calculation {
//     // TODO: add both decorators to the following method
//     @logCountCalls
//     @printExceutionTime
//     // bad idea use sctatic for decorator - its won't work for instances
//     static add1(a: number, b: number): number {
//       return a + b;
//     }
//     // my code for compare work with static idea method
//     add2(a: number, b: number): number {
//       return a + b;
//     }
//   }
//   // TODO: create instance of Calculation class and call add method
//   const calc1 = new Calculation();
//   // static method can't calls from instances BUT work from root class
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static?retiredLocale=uk
//   // https://www.w3schools.com/js/js_class_static.asp
//   (calc1.constructor as typeof Calculation).add1(1, 1); // SOLVED
//   (calc1.constructor as typeof Calculation).add1(1, 2);
//   calc1.add2(2, 2); // good work without blackmagic as must work !
//   calc1.add2(2, 3);

//   // TODO: remove the following line
//   // console.log(Calculation);
// }
// exercise40();

// // Use 2023 decorators (Stage 3 decorator)
// function exercise41() {
//   // TODO: 1. implement method decorator to print call count of the function :
//   function logCountCalls() {
//     let calls: number = 0;
//     return (
//       target: any,
//       propertyKey: string,
//       descriptor: PropertyDescriptor,
//     ) => {
//       calls++;
//       console.log('Count calls: ', calls);
//     };
//   }

//   // TODO: 2. implement method decorator to print execution time of the function
//   function printExceutionTime() {
//     return (
//       target: any,
//       propertyKey: string,
//       descriptor: PropertyDescriptor,
//     ) => {
//       const originalFn = descriptor.value;

//       descriptor.value = function (...args: any[]) {
//         if (this instanceof target.constructor) {
//           const start = +Date.now();
//           const res = originalFn.apply(target, args);
//           const end = +Date.now();
//           console.log(
//             `Start on: ${start}, End on: ${end}. Execute time: ${end - start}`,
//           );
//           // return (constructor.prototype[originalFn] = res);
//           return res;
//         } else {
//           const start = +Date.now();
//           const res = originalFn.apply(this, args);
//           const end = +Date.now();
//           console.log(
//             `Start on: ${start}, End on: ${end}. Execute time: ${end - start}`,
//           );
//           // return (constructor.prototype[originalFn] = res);
//           return res;
//         }
//       };
//       return descriptor;
//     };
//   }

//   class Calculation {
//     // TODO: add both decorators to the following method
//     @logCountCalls()
//     @printExceutionTime()
//     static add(a: number, b: number) {
//       return a + b;
//     }
//   }
//   // TODO: create instance of Calculation class and call add method
//   const calc = new Calculation();
//   // static method can't calls from instances BUT work from root class
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static?retiredLocale=uk
//   // https://www.w3schools.com/js/js_class_static.asp
//   // as sample Calculation.add(3,4) will good work BUT
//   console.log(
//     '\nStage 3 decorators sample:\n',
//     (calc.constructor as typeof Calculation).add(3, 4),
//   );
//   // TODO: remove the following line
//   // console.log(Calculation);
// }
// exercise41();
