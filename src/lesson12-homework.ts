// Read the following typescript documentation:
// 1. https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
// a. Generics - Types which take parameters
// b. Keyof Type Operator - Using the keyof operator to create new types
// c. Typeof Type Operator - Using the typeof operator to create new types
// d. Indexed Access Types - Using Type['a'] syntax to access a subset of a type
// e. Conditional Types - Types which act like if statements in the type system
// f. Mapped Types - Creating types by mapping each property in an existing type
// g. Template Literal Types - Mapped types which change properties via template literal strings

// Fix autocoplete problem for literal union types
// function exercise50() {
//   // TODO: observe the problem with autocomplete in the line createCar("BMW");
//   // TODO: fix the problem by using the approach from the lesson
//   type Brands = 'BMW' | 'Mercedes' | 'Audi' | string;
//
//   function createCar(brand: Brands) {
//     return `${brand} car`;
//   }
//   // TODO: check if autocomplete works before and after the fix
//   const car = createCar('BMW');
//   console.log(car);
// }
// exercise50();
function exercise50() {
  const brands = ['BMW', 'Mercedes', 'Audi'] as const;
  type Brands = (typeof brands)[number];

  function createCar(brand: Brands) {
    return `${brand} car`;
  }

  const car = createCar('BMW');
  console.log(car);
}

exercise50();

// Use satisfies constraint
// function exercise51() {
//   // Use satisfies constraint
//   // TODO: create a tuple type that represents a 3d point
//   type TPoint = [];
//   // TODO: create a type that represents a 3d shapes (key is a string, value is an array of 3d points)
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   type TShapes = {};
//
//   const shapes: TShapes = {
//     circle: [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     square: [
//       [1, 2, 3],
//       [4, 5, 6],
//     ],
//   };
//   console.log(shapes);
//
//   // TODO: create a function that takes a list points and prints them into console
//   function drawShape(points: TPoint[]) {
//     console.log(points);
//   }
//
//   console.log(drawShape);
//   // drawShape(shapes.circle123); // TOOD: uncomment and fix this to have compile check error, using satisfies constraint
// }
//
// exercise51();
function exercise51() {
  type TPoint = [number, number, number];
  type TShapes = {
    [key: string]: TPoint[];
  };

  const shapes: TShapes = {
    circle: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    square: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  };
  console.log(shapes);

  function drawShape(points: TPoint[]) {
    console.log(points);
  }

  console.log(drawShape);
}

exercise51();

// // string manipulation utilities type
// function exercise52() {
//   // TODO: write a utility type that for given object type T
//   // will create a new type with all properties plus methods to get and set properties
//   // plus methods to validate earch of the property
//   type TObjectWitName = {
//     name: string;
//   };
//   // TODO: declare utility type TGettersSettersValidators (union of TGetters, TSetters, TValidators)
//   // hint: TGetters for each of the property generates getXxxx method that returns property value
//   // hint: TSetters for each of the property generates setXxxx method that sets property value
//   // hint: TValidators for each of the property generates validateXxxx method that returns true if property value is valid
//   const obj = {
//     name: 'point',
//   };
//   console.log(obj);
//
//   // TODO: generate this type from TGettersSettersValidators using utility type
//   // type TObjectMethods = TGettersSettersValidators<typeof obj>;
//   // TODO: remvoe this declaration below and replac it with the one above
//   type TObjectMethods = {
//     getName(): string;
//     setName(name: string): void;
//     validateName(): boolean;
//   };
//
//   const object: TObjectWitName & TObjectMethods = {
//     name: 'point',
//     getName() {
//       return this.name;
//     },
//     setName(name: string) {
//       this.name = name;
//     },
//     validateName() {
//       return this.name.length > 0;
//     },
//   };
//   console.log(object);
//
//   // TODO: add property age to object and check if you get type check errors
// }
//
// exercise52();
function exercise52() {
  type TObjectWitName = {
    name: string;
  };

  type TGetters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
  };

  type TSetters<T> = {
    [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
  };

  type TValidators<T> = {
    [K in keyof T as `validate${Capitalize<string & K>}`]: () => boolean;
  };

  type TObjectMethods<T> = TObjectWitName &
    TGetters<T> &
    TSetters<T> &
    TValidators<T>;

  const obj = {
    name: 'point',
  };

  type TGettersSettersValidators<T> = TObjectMethods<T> & {
    setAge: (value: number) => void;
    age: number;
  };

  const object: TGettersSettersValidators<typeof obj> = {
    ...obj,
    age: 0,
    getName() {
      return this.name;
    },
    setName(name: string) {
      this.name = name;
    },
    validateName() {
      return this.name.length > 0;
    },
    setAge(value: number) {
      if (value >= 0 && value <= 120) {
        console.log(`Setting age to: ${value}`);
        this.age = value;

        if (value < 18) {
          console.log(`You're underage!`);
        } else {
          console.log(`You're an adult!`);
        }
      } else {
        console.log(`Invalid age: ${value}`);
      }
    },
  };

  console.log(object);

  object.setAge(25);
  console.log(object);

  object.setAge(15);
  console.log(object);
}

exercise52();

// // ThisType<T> Utility
// function excercise53() {
//   // TODO: review the code below and use ThisType<T> utility to remove explicit type annotations
//   type Methods<T> = {
//     log: () => void;
//     set: (n: T) => void;
//     validate: () => void;
//   };
//
//   type Data = {
//     value: number;
//     status: string;
//     isValid: boolean;
//   };
//
//   // TODO: use ThisType<T> utility in this code to remove explicit type annotations
//   const methods: Methods<number> = {
//     log(this: Data) {
//       console.log(this.value);
//     },
//     set(this: Data, value: number) {
//       this.value = value;
//     },
//     validate(this: Data) {
//       this.isValid = this.value > 0;
//     },
//   };
//
//   const data: Data & Methods<number> = {
//     value: 0,
//     status: 'ok',
//     isValid: false,
//     ...methods,
//   };
//   data.set(10);
//   data.validate();
//   data.log();
// }
//
// excercise53();
function exercise53() {
  type Methods<T> = {
    log: () => void;
    set: (n: T) => void;
    validate: () => void;
  };

  type Data = {
    value: number;
    status: string;
    isValid: boolean;
  };

  const data: Data & Methods<number> = {
    value: 0,
    status: 'ok',
    isValid: false,
    log: function (this: Data) {
      console.log(this.value);
    },
    set: function (this: Data, value: number) {
      this.value = value;
    },
    validate: function (this: Data) {
      this.isValid = this.value > 0;
    },
  };

  data.set(10);
  data.validate();
  data.log();
}

exercise53();

// // Awaited<T> Utility
// function excercise54() {
//   // TODO: study the code of hte Awaited<T> utility type
//   // TODO: implement similar utility type that gets a type from wrapped array type
//   // TODO: support any number of nested arrays [1] -> number, [[1]] -> number, [[[1]]] -> number
//   // TODO: update the code below
//   // type TArrayInner<T> = T extends any array - if yes - infer inner type ((infer U)[]), call TArrayInner recursively on U, if not - return T
//   const numberArr = [[[1, 2, 3]]];
//   // TODO: uncomment and check if you get type number
//   // type TNumber = TArrayInner<typeof numberArr>;
//
//   const stringArr = [[[[['hello']]]]];
//   // TODO: uncomment and check if you get type string
//   // type TString = TArrayInner<typeof stringArr>;
//
//   console.log(numberArr, stringArr);
// }
//
// excercise54();
function excercise54() {
  type TArrayInner<T> = T extends (infer U)[] ? TArrayInner<U> : T;

  const numberArr = [[[1, 2, 3]]];
  type TNumber = TArrayInner<typeof numberArr>;
  const numberValue: TNumber = 1;
  console.log(numberArr, numberValue);

  const stringArr = [[[[['hello']]]]];
  type TString = TArrayInner<typeof stringArr>;
  const stringValue: TString = 'hello';
  console.log(stringArr, stringValue);
}

excercise54();
