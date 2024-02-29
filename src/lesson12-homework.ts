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
  function fixAutocompleteProblemForLiteralUnionTypes() {
    type Brands = `BMW` | `Mercedes` | `Audi` | string;

    function fixBrand(brand: Brands) {
      console.log(brand);
    }

    fixBrand(`BMW`);
    type Brands2 = (`BMW` | `Mercedes` | `Audi`) | (string & object);

    function fixBrand2(brand: Brands2) {
      console.log(brand);
    }

    fixBrand2(`BMW`);
  }

  fixAutocompleteProblemForLiteralUnionTypes();
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
// function exerciseExample() {
//   function satisfiesConstraint() {
//     type ColorString = `red` | `green` | `blue`;
//     type ColorRGB = [red: number, green: number, blue: number];
//
//     type Color = ColorString | ColorRGB;
//     type Theme = Record<string, Color>;
//     const theme: Theme = {
//       primary: `green`,
//       secondary: [0, 255, 0],
//       danger: `red`,
//     };
//     const [r, g, b] = theme.secondary;
//     console.log(r, g, b);
//     const theme2 = {
//       primary: `green`,
//       secondary: [0, 255, 0],
//       danger: `red`,
//     } satisfies Theme;
//
//     const [r1, g1, b1] = theme2.secondary;
//     console.log(r1, g1, b1);
//   }
//
//   satisfiesConstraint();
// }
// exerciseExample();
function exercise51() {
  // TODO: create a tuple type that represents a 3d point
  type TPoint = [number, number, number];
  // TODO: create a type that represents a 3d shapes (key is a string, value is an array of 3d points)
  type TShapes = Record<string, TPoint[]>;

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

  // TODO: create a function that takes a list points and prints them into console
  function drawShape(points: TPoint[]) {
    console.log(points);
  }

  console.log(drawShape);

  type TDrawShape = (points: TPoint[]) => void;
  const drawShapeSatisfies = drawShape as TDrawShape & {
    satisfies: (test: TShapes) => void;
  };

  // Uncommenting the line below will result in a compile-time error, thanks to satisfies constraint
  // drawShapeSatisfies.satisfies(shapes.circle123);

  drawShapeSatisfies.satisfies(shapes); // No compile-time error
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

  type TGettersSettersValidators<T> = TGetters<T> &
    TSetters<T> &
    TValidators<T>;

  const obj = {
    name: 'point',
  };

  type TObjectMethods = TGettersSettersValidators<typeof obj>;

  const object: TObjectWitName & TObjectMethods = {
    name: 'point',
    getName() {
      return this.name;
    },
    setName(name: string) {
      this.name = name;
    },
    validateName() {
      return this.name.length > 0;
    },
  };

  console.log(object);

  // Uncommenting the line below will result in a compile-time error, ensuring type check
  // object.age = 25; //TS2339: Property 'age' does not exist on type 'TObjectWitName & TGetters<{ name: string; }> & TSetters<{ name: string; }> & TValidators<{ name: string; }>'.
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

  const methods: Methods<number> = {
    log(this: Data) {
      console.log(this.value);
    },
    set(this: Data, value: number) {
      this.value = value;
    },
    validate(this: Data) {
      this.isValid = this.value > 0;
    },
  };

  const data: Data & Methods<number> = {
    value: 0,
    status: 'ok',
    isValid: false,
    ...methods,
  };
  data.set(10);
  data.validate();
  data.log();
}

exercise53();

// // Awaited<T> Utility
// function excercise54() {
//   // TODO: study the code of the Awaited<T> utility type
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
function exercise54() {
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

exercise54();
