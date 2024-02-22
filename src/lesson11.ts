/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 11 *********

import { get } from 'lodash';

function lesson11() {
  function Q_and_A() {
    type TType =
      | 'string'
      | 'number'
      | 'boolean'
      | 'object'
      | 'function'
      | 'undefined'
      | 'symbol'
      | 'bigint';
    type TType2 = string | number | boolean;

    type TMyUtility<T> = T extends number ? never : T;
    // TMyUtility<string | number> => TMyUtility<string> | TMyUtility<number> => string | never => string;

    // A extends B

    // 1. A == B -> true
    // 2. sub-set 1 | 2 | 3 extends number;
    type TMyNUmber = number; // 1 2 3 10
    type TMyNUmber2 = 1 | 2 | 3; // 1 2 3
    // TMyNUmber2 extends TMyNUmber -> true

    // class A extends B {}
    class Point2D {
      public x: number;
      public y: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
      }
    }

    class Point3D extends Point2D {
      public z: number;

      constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
      }
    }
  }
  Q_and_A();
  // type conversion
  type TPoint = {
    x: number;
    y: number;
    z: number;
    name: string;
    id: string | number;
  };

  type TPointKeys = 'x' | 'y' | 'z';
  type TPointKeys2 = keyof TPoint;
  const key: TPointKeys2 = 'name';
  Object.keys({ x: 1, y: 2, z: 3 }); // ['x', 'y', 'z']

  //
  // type TNameFieldType = TPoint[TPointKeys2];
  // type TNameFieldType = string;

  //
  type TUtility<T> = T extends number ? never : T;
  type TUtility2<T> = T extends 'x' | 'y' | 'z' ? never : T;

  type TRes = TUtility2<keyof TPoint>; // never | never | never | string => string

  // Infer keyword and `ReturnType<T>`
  function inferKeywordAndReturnTypeUtility() {
    // types can be inferred from other types - sort of 'type variables'

    // a. infer keyword
    // infer keyword is used in conditional types to infer the type of a type parameter
    type TGetArrayInnerType<T> = T extends Array<infer A> ? A : never;
    type TInnerType = TGetArrayInnerType<string[]>; // true
    type TUsers = {
      id: string;
      name: string;
    }[];
    type TInnerType2 = TGetArrayInnerType<TUsers>; // true

    // type TIsArray = IsArray<string[]>; // 'array'
    // type TIsNotArray = IsArray<string>; // 'not array'

    type TGetTypeOfArray<T> = T extends Array<infer InnerType> ? InnerType : T;

    type TTypeOfArray = TGetTypeOfArray<string[]>; // string
    type TTypeOfArray2 = TGetTypeOfArray<number[]>; // number
    const value1 = 'abc';
    type TTypeOfArray3 = TGetTypeOfArray<typeof value1>; // string
    const value2 = ['abc', 'def'];
    type TTypeOfArray4 = TGetTypeOfArray<typeof value2>; // string

    function getFirstElement<T>(arr: T): TGetTypeOfArray<T> {
      return Array.isArray(arr) ? arr[0] : arr;
    }
    const example1 = getFirstElement(['abc', 'def']); // 'abs' string
    const example2 = getFirstElement('asdf'); // 'asdf'

    // b. ReturnType<T>
    function createUser(firstName: string, lastName: string, age: number) {
      const id = (Math.random() * 100000).toString();

      return {
        firstName,
        lastName,
        age,
        id,
      };
    }

    type MyUser = {
      firstName: string;
      lastName: string;
      age: number;
      id: string;
    };

    type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

    type ReturnType2 = ReturnType<typeof createUser>; // MyUser
    // type TError = ReturnType<number>; // error

    function printUserInfo(user: ReturnType<typeof createUser>) {
      console.log(
        `User ${user.firstName} ${user.lastName} is ${user.age} years old`,
      );
    }
    // ReturnType<T> is a utility type, defined in lib.es5.d.ts
    function printUserInfoV2(user: ReturnType<typeof createUser>) {
      console.log(
        `User ${user.firstName} ${user.lastName} is ${user.age} years old`,
      );
    }

    type TGetFullNameReturnType = MyReturnType<typeof createUser>; // string

    // type ReturnType<T extends (...args: any) => any> = T extends (
    //   ...args: any
    // ) => infer R
    //   ? R
    //   : any;

    // some utility types from lib.es5.d.ts
    // https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts#L185

    /**
     * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
     */
    type ThisParameterType<T extends (...args: any) => any> = T extends (
      this: infer U,
      ...args: never
    ) => any
      ? U
      : unknown;

    function toString(this: { name: string; age: number }) {
      return `${this.name}, ${this.age}`;
    }

    type TThisParamResult = ThisParameterType<typeof toString>; // { name: string; age: number }

    /**
     * Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to `never`. This emulates the behavior of `await`.
     */
    type Awaited<T> = T extends null | undefined
      ? T // special case for `null | undefined` when not in `--strictNullChecks` mode
      : T extends object & { then(onfulfilled: infer F, ...args: infer _): any } // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
        ? F extends (value: infer V, ...args: infer _) => any // if the argument to `then` is callable, extracts the first argument
          ? Awaited<V> // recursively unwrap the value
          : never // the argument to `then` was not callable
        : T; // non-object or non-thenable

    /**
     * Obtain the parameters of a function type in a tuple
     */
    type Parameters<T extends (...args: any) => any> = T extends (
      ...args: infer P
    ) => any
      ? P
      : never;

    /**
     * Obtain the parameters of a constructor function type in a tuple
     */
    type ConstructorParameters<T extends abstract new (...args: any) => any> =
      T extends abstract new (...args: infer P) => any ? P : never;

    /**
     * Obtain the return type of a constructor function type
     */
    type InstanceType<T extends abstract new (...args: any) => any> =
      T extends abstract new (...args: any) => infer R ? R : any;

    // function createUser(firstName: string, lastName: string, age: number) {
    //   const id = (Math.random() * 100000).toString();

    //   return {
    //     firstName,
    //     lastName,
    //     age,
    //     id,
    //   };
    // }
    type TCreateUserParams = Parameters<typeof createUser>; // [string, string, number]
    const params: TCreateUserParams = ['John', 'Doe', 30];
    const user = createUser(...params);
  }
  inferKeywordAndReturnTypeUtility();

  // Mapped Types
  function mappedTypes() {
    // js has for in loop
    // for (const key in object) {
    // mapped types are similar to for in loop but for types

    // point.x = 10; // error

    // type TReadOnlyPoint = {
    //   readonly x: number;
    //   readonly y: number;
    //   readonly z: number;
    // };

    type Point = {
      x: number;
      y: number;
      z: number;
      name: string;
    };

    type TMyReadonly<T> = {
      readonly [K in keyof T]: T[K];
    };

    type TReadOnlyPointV1 = TMyReadonly<Point>;

    type TPointV2 = {
      [K in 'x' | 'y' | 'z']: Point[K];
    };

    type TReadOnlyPointV2 = {
      readonly [K in 'x' | 'y' | 'z']: Point[K];
    };

    type TReadOnlyPointV3 = {
      readonly [K in keyof Point]: Point[K];
    } & { debugValue: string };
    // const x:TReadOnlyPointV3 = {
    //   x: 1,
    //   y: 2,
    //   z: 3,
    //   name: "point",
    //   debugValue: "debug",
    // };

    /**
     * Make all properties in T readonly
     */
    // type Readonly<T> = {
    //   readonly [K in keyof T]: T[K];
    // };

    type TReadOnlyPointV4 = Readonly<Point>;

    const zeroPoint: TReadOnlyPointV4 = {
      x: 0,
      y: 0,
      z: 0,
      name: 'zero',
    };

    // zeroPoint.x = 10; // error
    // Readonly<T> is a built-in mapped type
  }
  mappedTypes();

  // Mappping types modifiers
  function mappedTypesModifiers() {
    type TCopy<T> = {
      [P in keyof T]: T[P];
    };

    type TPoint3D = {
      readonly x: number;
      y: number;
      z: number;
      name?: string;
    };

    type TCopyPoint = TCopy<TPoint3D>;

    /**
     * Make all properties in T optional
     */
    type Partial<T> = {
      [P in keyof T]?: T[P];
    };

    type Partial2<T> = {
      [P in keyof T]+?: T[P];
    };

    type TPartialPoint = Partial<TPoint3D>;

    /**
     * Make all properties in T required
     */
    type Required<T> = {
      [P in keyof T]-?: T[P];
    };
    type TPointRequired = Required<TPoint3D>;

    /**
     * Make all properties in T readonly
     */
    type Readonly<T> = {
      +readonly [P in keyof T]: T[P];
    };
    /**
     * Remove readonly modifier from all properties in T
     */
    type Mutable<T> = {
      -readonly [P in keyof T]: T[P];
    };
    type TPointMutable = Mutable<TPoint3D>;

    /**
     * Make all properties in T nullable
     */
    type Nullable<T> = {
      [P in keyof T]: T[P] | null;
    };

    type TPoint = {
      x: number;
      y: number;
      z: number;
      name: string;
    };

    type TNullablePoint = Nullable<TPoint>;

    // usage example
    class State<T, K extends keyof T> {
      constructor(private state: T) {}
      updateState(newState: Partial<T>) {
        // TODO: use Partial
        this.state = { ...this.state, ...newState };
      }
      getStateByKey(key: K): T[K] {
        return this.state[key];
      }
    }

    const state = new State({
      x: 1,
      y: 2,
      z: 3,
      name: 'point',
    } as TPoint);
    state.updateState({ z: 10 }); // error

    // class State<T> {
    //   constructor(private state: T) {}
    //   updateState(newState: Partial<T>) {
    //     this.state = { ...this.state, ...newState };
    //   }
    //   getStateByKey(key: keyof T) {
    //     return this.state[key];
    //   }
    // }

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Pick<T, K extends keyof T> = {
      [P in K]: T[P];
    };
    type TPoint2d = Pick<TPoint, 'x' | 'y'>;

    type Record<K extends keyof any, T> = {
      [P in K]: T;
    };

    type TPoint4d = Record<'x' | 'y' | 'z' | 't', number>;
    type TPoint4d2 = {
      x: number;
      y: number;
      z: number;
      t: number;
    };
  }
  mappedTypesModifiers();

  // Template Literal Type
  function templateLiteralType() {
    // in js we have template literals
    const name = 'John';
    const greeting = `Hello ${name}!!!`;

    // in ts we have template literal for types
    type Greeting = `Hello ${string}!!!`; // it is a string type that starts with "Hello " and ends with any string
    const greeting2: Greeting = `Hello ${name}!!!`;
    // const greeting3: Greeting = "Hello123 John";

    // example 1
    type CssValue = `${number}px` | `${number}em` | `${number}%`;
    const width2: CssValue = '100px';
    const width3: CssValue = '100em';
    const width4: CssValue = '100%';
    const width5: CssValue = '100em';
    // example 2
    type Color = 'red' | 'green' | 'blue';
    type CssColor = Color | `#${number}${number}${number}`;
    // example 3
    type Shape = 'circle' | 'square';
    type ShapeWithColor = `${Shape}-${Color}`;

    function drawShapeWithColor(shapeWithColor: ShapeWithColor) {
      console.log(shapeWithColor);
    }
    drawShapeWithColor('circle-red');
    // drawShapeWithColor("circle-red123"); // error
  }
  templateLiteralType();
}
lesson11();
