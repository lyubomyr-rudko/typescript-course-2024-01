/* eslint-disable @typescript-eslint/no-explicit-any */
function lesson9() {
  // Decorators
  // sayHello = timeCount(callCount(sayHello))
  // @timeCount
  // @callCount
  // function sayHello(name: string) {
  //     console.log('Hello'+name);
  // }
  //   function exmple1() {
  //     // class decorators are called when class is declared
  //     // eslint-disable-next-line @typescript-eslint/ban-types
  //     function Component(constructor: Function) {
  //       console.log('Component decorator added to', constructor);
  //       constructor.prototype.datestamp = Date.now();
  //       constructor.prototype.log = function (this: { datestamp: number }) {
  //         console.log('datestamp', this.datestamp);
  //       };
  //     }
  //     interface ICompnent {
  //       log(): void;
  //     }
  //     @Component
  //     class Person {
  //       firstName = '';
  //       lastName = '';
  //       constructor(firstName: string, lastName: string) {
  //         this.firstName = firstName;
  //         this.lastName = lastName;
  //       }
  //     }
  //     type PersonCompnent = Person & ICompnent;
  //     const person = new Person('John', 'Doe') as PersonCompnent;
  //     console.log(person);
  //     person.log();
  //   }
  //   // exmple1();
  //   function example2() {
  //     // eslint-disable-next-line @typescript-eslint/ban-types
  //     function sealed(constructor: Function) {
  //       Object.seal(constructor);
  //       Object.seal(constructor.prototype);
  //     }
  //     @sealed
  //     class BugReport {
  //       type = 'report';
  //       title: string;
  //       constructor(t: string) {
  //         this.title = t;
  //       }
  //     }
  //     const bug = new BugReport('Refactoring needed');
  //     console.log(bug.title);
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     (BugReport.prototype as any).newMethod = function () {}; // error
  //   }
  //   // example2();
  //   function example3() {
  //     // decorators with parameters
  //     function ComponentWithParam(value: number) {
  //       // eslint-disable-next-line @typescript-eslint/ban-types
  //       return function (constructor: Function) {
  //         console.log(`Component with ${value} decorator added to`, constructor);
  //         constructor.prototype.datestamp = Date.now();
  //         constructor.prototype.id = value;
  //         constructor.prototype.log = function () {
  //           console.log('datestamp', this.datestamp);
  //         };
  //       };
  //     }
  //     @ComponentWithParam(10)
  //     class Person3 {
  //       firstName = '';
  //       lastName = '';
  //       constructor(firstName: string, lastName: string) {
  //         this.firstName = firstName;
  //         this.lastName = lastName;
  //       }
  //     }
  //     const person = new Person3('John', 'Doe');
  //     console.log(person);
  //     // eslint-disable-next-line @typescript-eslint/ban-types
  //     function Stringify(constructor: Function) {
  //       console.log('Stringify decorator added to', constructor);
  //       constructor.prototype.toString = function () {
  //         return JSON.stringify(this);
  //       };
  //     }
  //     @ComponentWithParam(20)
  //     @Stringify
  //     class Person4 {
  //       firstName = '';
  //       lastName = '';
  //       constructor(firstName: string, lastName: string) {
  //         this.firstName = firstName;
  //         this.lastName = lastName;
  //       }
  //     }
  //     const p4 = new Person4('John', 'Doe');
  //     console.log(`value: ${p4}`);
  //   }
  //   example3();
  //   function example4() {
  //     function Log(
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       target: any,
  //       methodName: string,
  //       descriptor: PropertyDescriptor,
  //     ) {
  //       console.log('Log decorator added to', methodName);
  //       const originalMethod = descriptor.value;
  //       descriptor.value = function (...args: any[]) {
  //         console.log('Log decorator - before method call');
  //         const result = originalMethod.apply(this, args);
  //         console.log('Log decorator - after method call');
  //         return result;
  //       };
  //     }
  //     class PersonWithLog {
  //       firstName = '';
  //       lastName = '';
  //       constructor(firstName: string, lastName: string) {
  //         this.firstName = firstName;
  //         this.lastName = lastName;
  //       }
  //       @Log
  //       printFullName() {
  //         console.log(`full name: ${this.firstName} ${this.lastName}`);
  //       }
  //     }
  //     const p = new PersonWithLog('John', 'Doe');
  //     p.printFullName();
  //   }
  //   example4();
  // 1. class decorators
  // eslint-disable-next-line @typescript-eslint/ban-types
  //   function printDecoratorData(value: Function, context: ClassDecoratorContext) {
  //     console.log('value: ', value);
  //     console.log(context);
  //     context.addInitializer(() => {
  //       debugger;
  //       console.log('Initialized class v1' + context.name);
  //       context.prototype.log = function () {
  //         console.log('log from class v1');
  //       };
  //     });
  //   }
  //   @printDecoratorData
  //   class Manager {
  //     task: string = 'Simple task';
  //     project: string = 'Simple project';
  //     constructor() {
  //       console.log('Initializing the Manager class');
  //     }
  //   }
  //   console.log('Before new Manager()');
  //   const manager = new Manager();
  //   console.log(manager);
  //--
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   function loggedMethod(originalMethod: any, _context: any) {
  //     debugger;
  //     function replacementMethod(this: any, ...args: any[]) {
  //       debugger;
  //       console.log('LOG: Entering method.');
  //       const result = originalMethod.call(this, ...args);
  //       console.log('LOG: Exiting method.');
  //       return result;
  //     }
  //     return replacementMethod;
  //   }
  //   class Person {
  //     name: string;
  //     constructor(name: string) {
  //       this.name = name;
  //     }
  //     @loggedMethod
  //     greet() {
  //       debugger;
  //       console.log(`Hello, my name is ${this.name}.`);
  //     }
  //   }
  //   const p = new Person('John');
  //   p.greet();
  //   loggedMethod(() => {
  //     console.log('Hello');
  //   })
}
lesson9();
// typescript5 stage3 decorators
// Lookup types

// React with Typescript - more on hooks
// - useState and state update batching
// - useEffect to fetch data
// - useLayoutEffect
// React Styles
// - inline styles
// - styled-components
// - css modules
