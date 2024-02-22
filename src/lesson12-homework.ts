// Read the following typescript documentation:
// 1. https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
// a. Generics - Types which take parameters
// b. Keyof Type Operator - Using the keyof operator to create new types
// c. Typeof Type Operator - Using the typeof operator to create new types
// d. Indexed Access Types - Using Type['a'] syntax to access a subset of a type
// e. Conditional Types - Types which act like if statements in the type system
// f. Mapped Types - Creating types by mapping each property in an existing type
// g. Template Literal Types - Mapped types which change properties via template literal strings

/* eslint-disable @typescript-eslint/no-unused-vars */

// Fix autocoplete problem for literal union types
function exercise50() {
  // TODO: observe the problem with autocomplete in the line createCar("BMW");
  // TODO: fix the problem by using the approach from the lesson
  type Brands = ('BMW' | 'Mercedes' | 'Audi') & (string | object);

  function createCar(brand: Brands) {
    return `${brand} car`;
  }
  // TODO: check if autocomplete works before and after the fix
  const car = createCar('BMW');
  console.log(car);
}
exercise50();

// Use satisfies constraint
function exercise51() {
  // Use satisfies constraint
  // TODO: create a tuple type that represents a 3d point
  type TPoint = [x: number, y: number, z: number];
  // TODO: create a type that represents a 3d shapes (key is a string, value is an array of 3d points)
  // eslint-disable-next-line @typescript-eslint/ban-types
  type TShapes = {
    [key: string]: TPoint[];
  };

  const shapes = {
    circle: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    square: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  } satisfies TShapes;
  console.log(shapes);

  // TODO: create a function that takes a list points and prints them into console
  function drawShape(points: TPoint[]) {
    console.log('p: ', points);
  }
  console.log(drawShape);
  // TOOD: uncomment and fix this to have compile check error, using satisfies constraint
  // drawShape(shapes.circle123); // Did you mean 'circle'?
  // Property 'circle123' does not exist on type '{
  //      circle: [number, number, number][];
  //      square: [number, number, number][];
  //     }'.
  //   Did you mean 'circle'? 'circle' is declared here.
  drawShape(shapes.circle);
}
exercise51();

// string manipulation utilities type
function exercise52() {
  // TODO: write a utility type that for given object type T
  // will create a new type with all properties plus methods to get and set properties
  // plus methods to validate earch of the property
  type TObjectWitName = {
    name: string;
  };
  // TODO: declare utility type TGettersSettersValidators (union of TGetters, TSetters, TValidators)
  // hint: TGetters for each of the property generates getXxxx method that returns property value
  // hint: TSetters for each of the property generates setXxxx method that sets property value
  // hint: TValidators for each of the property generates validateXxxx method that returns true if property value is valid

  type TGetters = {
    getName(): string;
  };
  type TSetters = {
    setName(name: string): void;
  };
  type TValidators = {
    validateName(): boolean;
  };
  type TGettersSettersValidators = TGetters & TSetters & TValidators;

  const obj: TObjectWitName = {
    name: 'point',
  };
  console.log(obj);

  // TODO: generate this type from TGettersSettersValidators using utility type

  // type TObjectMethods = TGettersSettersValidators<typeof obj>;
  type TObjectMethods = TGettersSettersValidators;

  // TODO: remvoe this declaration below and replac it with the one above
  // type TObjectMethods = {
  //   getName(): string;
  //   setName(name: string): void;
  //   validateName(): boolean;
  // };

  const object: TObjectWitName &
    TObjectMethods &
    ThisType<{ name: string } & TGettersSettersValidators> = {
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
  console.log('getName: ', object.getName());
  console.log('Set New point: "point-2"', object.setName('point-2'));
  console.log('getName: ', object.getName());
  console.log('Name validate: ', object.validateName());

  // TODO: add property age to object and check if you get type check errors
  // object.age = 13; //Property 'age' does not exist on type 'TObjectWitName & TGetters & TSetters & TValidators & ThisType<{ name: string; } & TGetters & TSetters & TValidators>'
}
exercise52();

// ThisType<T> Utility
function excercise53() {
  // TODO: review the code below and use ThisType<T> utility to remove explicit type annotations
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

  // TODO: use ThisType<T> utility in this code to remove explicit type annotations
  const methods: Methods<number> & ThisType<Data> = {
    log(this) {
      console.log(this.value);
    },
    set(this, value) {
      this.value = value;
    },
    validate(this) {
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
  console.log('Validate: ', data.isValid);
  data.log();
}
excercise53();

// Awaited<T> Utility
async function excercise54() {
  // TODO: study the code of hte Awaited<T> utility type
  const one: Promise<string> = new Promise<string>((resolve) => resolve('1'));
  const res1 = await one;
  console.log('res1: ', res1);

  // TODO: implement similar utility type that gets a type from wrapped array type
  // TODO: support any number of nested arrays [1] -> number, [[1]] -> number, [[[1]]] -> number
  // TODO: update the code below
  // type TArrayInner<T> = T extends any array -
  //        if yes - infer inner type ((infer U)[]),
  //           call TArrayInner recursively on U,
  //        if not - return T

  // V1
  // type TArrayInner<T extends any[]> = T extends (
  //   first: [infer U],
  //   ...args: any
  // ) => any[]
  //   ? TArrayInner<U[]>
  //   : T;

  // V@
  // type TArrayInner<T extends any[]> = T extends infer U
  //   ? U extends []
  //     ? TArrayInner<U>
  //     : U
  //   : T;

  // V3
  // type TArrayInner<T> = T extends any[]
  // ? T extends infer U
  //   ? U extends []
  //     ? TArrayInner<U>
  //     : U
  //   : T
  // : T;

  // V4
  // type TArrayInner<T extends any[]> = T extends (value: infer U) => any
  //   ? TArrayInner<U[]>
  //   : T;

  // 5
  type TArrayInner<T> = T extends (infer U)[] ? TArrayInner<U> : T;

  const numberArr = [[[1, 2, 3]]];
  // TODO: uncomment and check if you get type number
  type TNumber = TArrayInner<typeof numberArr>; // number

  const stringArr = [[[[['hello']]]]];
  // TODO: uncomment and check if you get type string
  type TString = TArrayInner<typeof stringArr>; // string

  console.log(numberArr, stringArr);
}
excercise54();
