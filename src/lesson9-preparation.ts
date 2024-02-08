/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 9 *********

export function lesson9() {
  // Decorators
  // function decorators() {
  //   // to enable decorators in tsconfig.json
  //   // "experimentalDecorators": true
  //   // decorators are functions that can be attached to classes, methods, properties, parameters

  //   // class decorators are called when class is declared
  //   function Component(constructor: Function) {
  //     console.log('Component decorator added to', constructor);
  //     constructor.prototype.datestamp = Date.now();
  //     constructor.prototype.log = function () {
  //       console.log('datestamp', this.datestamp);
  //     };
  //   }
  //   interface ICompnent {
  //     log(): void;
  //   }
  //   @Component
  //   class Person {
  //     firstName = '';
  //     lastName = '';
  //     constructor(firstName: string, lastName: string) {
  //       this.firstName = firstName;
  //       this.lastName = lastName;
  //     }
  //   }
  //   type PersonComponent = Person & ICompnent;
  //   const p1 = new Person('Joe', 'Smith') as PersonComponent;
  //   p1.log();

  //   // example 2
  //   function sealed(constructor: Function) {
  //     Object.seal(constructor);
  //     Object.seal(constructor.prototype);
  //   }
  //   @sealed
  //   class BugReport {
  //     type = 'report';
  //     title: string;

  //     constructor(t: string) {
  //       this.title = t;
  //     }
  //   }
  //   // BugReport.prototype.newMethod = function () {}; // error
  //   const bug = new BugReport('Refactoring needed');
  //   console.log(bug.title);

  //   // decorators with parameters
  //   function ComponentWithParam(value: number) {
  //     return function (constructor: Function) {
  //       console.log(`Component with ${value} decorator added to`, constructor);
  //       constructor.prototype.datestamp = Date.now();
  //       constructor.prototype.id = value;
  //       constructor.prototype.log = function () {
  //         console.log('datestamp', this.datestamp);
  //       };
  //     };
  //   }
  //   @ComponentWithParam(10)
  //   class Person3 {
  //     firstName = '';
  //     lastName = '';
  //     constructor(firstName: string, lastName: string) {
  //       this.firstName = firstName;
  //       this.lastName = lastName;
  //     }
  //   }

  //   // multiple decorators
  //   function Stringify(constructor: Function) {
  //     console.log('Stringify decorator added to', constructor);
  //     constructor.prototype.toString = function () {
  //       return JSON.stringify(this);
  //     };
  //   }
  //   @ComponentWithParam(20)
  //   @Stringify
  //   class Person4 {
  //     firstName = '';
  //     lastName = '';
  //     constructor(firstName: string, lastName: string) {
  //       this.firstName = firstName;
  //       this.lastName = lastName;
  //     }
  //   }
  // compiled to
  //   Person4 = __decorate([
  //     ComponentWithParam(20),
  //     Stringify
  // ], Person4);

  // // first Stringify is called, then ComponentWithParam
  // // 4.method decorators
  // function Log(
  //   target: any,
  //   methodName: string,
  //   descriptor: PropertyDescriptor
  // ) {
  //   console.log("Log decorator added to", methodName);
  //   const originalMethod = descriptor.value;
  //   descriptor.value = function (...args: any[]) {
  //     console.log("Log decorator - before method call");
  //     const result = originalMethod.apply(this, args);
  //     console.log("Log decorator - after method call");
  //     return result;
  //   };
  // }
  // // function loggedMethod(originalMethod: any, _context: any) {
  // //   function replacementMethod(this: any, ...args: any[]) {
  // //     console.log("LOG: Entering method.");
  // //     const result = originalMethod.call(this, ...args);
  // //     console.log("LOG: Exiting method.");
  // //     return result;
  // //   }
  // //   return replacementMethod;
  // // }
  // class PersonWithLog {
  //   firstName = "";
  //   lastName = "";
  //   constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  //   @Log
  //   printFullName() {
  //     console.log(`full name: ${this.firstName} ${this.lastName}`);
  //   }
  // }
  // const p = new PersonWithLog("Joe", "Smith");
  // p.printFullName();
  // // 5.getter decorators
  // function padLeftWith(num: number, char = " ") {
  //   return function (
  //     target: any,
  //     methodName: string,
  //     descriptor: PropertyDescriptor
  //   ) {
  //     const original = descriptor.get;
  //     descriptor.get = function () {
  //       const result = original?.call(this);
  //       if (typeof result === "string" && result.length < num) {
  //         return char.repeat(num - result.length) + result;
  //       }
  //       return result;
  //     };
  //   };
  // }
  // class PersonWithGetter {
  //   firstName = "";
  //   lastName = "";
  //   constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  //   @padLeftWith(20, "-")
  //   get fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  // }
  // const p2 = new PersonWithGetter("Joe", "Smith JR");
  // console.log(p2.fullName); // --------------Joe Smith
  // // 6. property decorators
  // // "useDefineForClassFields": false, in tsconfig.json or "target": "2016
  // function PropertyValidator(regexp: RegExp) {
  //   return function (
  //     target: any,
  //     propertyName: string
  //     // descriptor: PropertyDescriptor
  //   ) {
  //     console.log("PropertyValidator decorator added to", propertyName);
  //     let value: string;
  //     const descriptor: PropertyDescriptor = {
  //       get() {
  //         return value;
  //       },
  //       set(newValue: string) {
  //         console.log(`!!! Validating ${propertyName} value ${newValue}`);
  //         if (!regexp.test(newValue)) {
  //           throw new Error(`Invalid ${propertyName} value ${newValue}`);
  //         }
  //         value = newValue;
  //       },
  //     };
  //     Object.defineProperty(target, propertyName, descriptor);
  //   };
  // }
  // class User {
  //   @PropertyValidator(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)
  //   email?: string;
  //   constructor(email: string) {
  //     console.log("constructor");
  //     this.email = email;
  //   }
  // }
  // const user = new User("asdf@test.com");
  // user.email = "test@test.com";
  // console.log(user.email); // test@gmail.com
  // // user.email = "test";
  // // // error
  // // 7. parameter decorators
  // function Watch(target: any, methodName: string, paramIndex: number) {
  //   console.log("Watch decorator added to", methodName);
  //   console.log("paramIndex", paramIndex);
  // }
  // class Vehicle {
  //   move(@Watch speed: number) {
  //     console.log(`Moving at speed ${speed}`);
  //   }
  // }
  // const v = new Vehicle();
  // v.move(100);
  // // // Decorators in React
  // // decorator/navbar.js
  // // import React, {Component} from "react";
  // // export default function navBar() {
  // //     return function(Child) {
  // //       return class extends Component {
  // //          constructor(props) {
  // //            super(props);
  // //          }
  // //          render() {
  // //            return (
  // //              <div>
  // //                <h2>Hello this is the navigation bar</h2>
  // //                <Child />
  // //              </div>
  // //            )
  // //         }
  // //      }
  // //  }
  // // // anotherComponent.js
  // // import React, {Component} from "react";
  // // import navBar from "./decorator/navBar";
  // // @navBar()
  // // class AnotherComponent extends Component {
  // //   render() {
  // //    return(
  // //      <div>
  // //        <p>Hello World</p>
  // //       </div>
  // //    )}
  // // }
  // // more resources
  // // https://dev.to/danywalls/decorators-in-typescript-with-example-part-1-m0f
  // // https://dev.to/danywalls/using-property-decorators-in-typescript-with-a-real-example-44e
  // }
  // decorators();

  // typescript5 stage3 decorators
  function staget3Decorators() {
    // // 1. class decorators
    // @printDecoratorData
    // class Manager {
    //   task: string = 'Simple task';
    //   project: string = 'Simple project';
    //   constructor() {
    //     console.log('Initializing the Manager class');
    //   }
    // }
    // console.log('Before new Manager()');
    // const manager = new Manager();
    // console.log(manager);
    // function printDecoratorData(
    //   value: Function,
    //   context: ClassDecoratorContext,
    // ) {
    //   console.log('value: ', value);
    //   console.log(context);
    //   context.addInitializer(() => {
    //     console.log('Initialized class v1' + context.name);
    //   });
    // }
    // // 2. method decorators
    // // RESULT:
    // // class Person {
    // //   name: string;
    // //   constructor(name: string) {
    // //     this.name = name;
    // //   }
    // //   greet() {
    // //     console.log(`Hello, my name is ${this.name}.`);
    // //   }
    // //   // greet() {
    // //   //   console.log("LOG: Entering method.");
    // //   //   console.log(`Hello, my name is ${this.name}.`);
    // //   //   console.log("LOG: Exiting method.");
    // //   // }
    // // }
    // // const p = new Person("Ron");
    // // p.greet();
    //
    // function loggedMethod(
    //   originalMethod: Function,
    //   _context: ClassMethodDecoratorContext,
    // ) {
    //   function replacementMethod(this: any, ...args: any[]) {
    //     console.log('LOG: Entering method.', _context);
    //     const result = originalMethod.call(this, ...args);
    //     console.log('LOG: Exiting method.');
    //     return result;
    //   }
    //   return replacementMethod;
    // }
    // class Person2 {
    //   name: string;
    //   constructor(name: string) {
    //     this.name = name;
    //   }
    //   @loggedMethod
    //   greet() {
    //     console.log(`Hello, my name is ${this.name}.`);
    //   }
    // }
    // const p2 = new Person2('Ron');
    // p2.greet();
    // // 3. method decorators 2
    // function bound(
    //   originalMethod: Function,
    //   context: ClassMethodDecoratorContext,
    // ) {
    //   console.log('inside of bound decorator');
    //   const methodName = context.name;
    //   if (context.private) {
    //     throw new Error(
    //       `'bound' cannot decorate private properties like ${
    //         methodName as string
    //       }.`,
    //     );
    //   }
    //   context.addInitializer(function () {
    //     // this[methodName] = this[methodName].bind(this); // this is unknown
    //     console.log('inside of bound decorator initializer', this);
    //     const thisAsAny = this as any;
    //     thisAsAny[methodName] = thisAsAny[methodName].bind(this);
    //   });
    // }
    // console.log('before class declaration');
    // class Person3 {
    //   name: string;
    //   constructor(name: string) {
    //     console.log('ctor');
    //     this.name = name;
    //   }
    //   @bound
    //   @loggedMethod
    //   greet() {
    //     console.log(`!!!Hello!!! My name is ${this?.name}.`);
    //   }
    // }
    // console.log('after class declaration');
    // // same as
    // // class Person4 {
    // //   name: string;
    // //   constructor(name: string) {
    // //     this.name = name;
    // //   }
    // //   greet = () => {
    // //     console.log(`Hello, my name is ${this.name}.`);
    // //   };
    // // }
    // // This code is written to ensure that this isn’t re-bound if greet is called as a stand-alone function or passed as a callback.
    // console.log('before new Person3');
    // const p3 = new Person3('Ron');
    // const greet = p3.greet;
    // // Works!
    // console.log('calling method');
    // greet();
    // greet();
    // setTimeout(p3.greet, 1000);
  }
  staget3Decorators();

  // React with Typescript - more on hooks
  // - useState and state update batching
  // - useEffect to fetch data
  // - useLayoutEffect
  // React Styles
  // - inline styles
  // - styled-components
  // - css modules
}
lesson9();
