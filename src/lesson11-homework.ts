// ++Read the following typescript documentation:
// 1. https://www.typescriptlang.org/docs/handbook/2/objects.html
// 2. https://www.typescriptlang.org/docs/handbook/2/generics.html
// 3. https://www.typescriptlang.org/docs/handbook/2/classes.html

// Use infer keyword
function exercise46() {
  // TODO: remove the next line
  function createUser(firstName: string, lastName: string, age: number) {
    const id = (Math.random() * 100000).toString();

    return {
      firstName,
      lastName,
      age,
      id,
    };
  }

  // TODO: create a type that extracts the type of the first argument of a function FirstParamType
  type FirstParameter<T> = T extends (...args: infer Params) => unknown
    ? Params[0]
    : T; // use infer keyword
  // TODO: uncomment the following line and fix the error
  /* eslint-disable @typescript-eslint/no-unused-vars */
  type TCreateUserFirstArg = FirstParameter<typeof createUser>; // string

  // TODO: create a type that extracts the return type of a function ReturnType
  /* eslint-disable @typescript-eslint/no-explicit-any */
  type MyReturnType<T> = T extends (...args: any) => infer ReturnType
    ? ReturnType
    : T; // use infer keyword
  // TODO: uncomment the following line and fix the error
  /* eslint-disable @typescript-eslint/no-unused-vars */
  type TCreateUserReturnType = MyReturnType<typeof createUser>; // { firstName: string; lastName: string; age: number; id: string; }

  // TODO: create a type that is a mixture of prev two functions
  // 1. it extracts the type of the first argument of a function FirstParamType
  // 2. it also extracts the return type of the function ReturnType
  // And creates a new function type definition with the same return type, and the first param only
  type FirstParameterFunction<T> = T extends (
    ...args: infer Params
  ) => infer ReturnType
    ? (arg: Params[0]) => ReturnType
    : T; // use infer keyword
  type TCreateUserFirstArgAndReturnType = FirstParameterFunction<
    typeof createUser
  >; // (firstName: string, lastName: string, age: number) => { firstName: string; lastName: string; age: number; id: string; }

  // (firstName: string, lastName: string, age: number) => { firstName: string; lastName: string; age: number; id: string; }

  // TODO: replace the next line with the correct type definition
  // type TCreateUserFirstArgAndReturnType = (firstName: string) => {
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   id: string;
  // };

  const fn: TCreateUserFirstArgAndReturnType = (firstName: string) => {
    return {
      firstName,
      lastName: 'Doe',
      age: 30,
      id: '123',
    };
  };
  console.log(fn('John'));
}
exercise46();

// Use mappping types
function exercise47() {
  // implement TRecord<K,T> mapped type that takes two types T and K
  // K must be a union of strings or numbers or symbols
  // the mapped type should create a new type that has all properties included in list K,
  // and the value of each property is T
  type TRecord<K extends string | number | symbol, T> = {
    [P in K]: T;
  };
  // TODO: uncomment the following code and check if your mapped type works
  type TPoint = TRecord<'x' | 'y' | 'z', number>;
  const point: TPoint = {
    x: 1,
    y: 2,
    z: 3,
  };

  console.log(point);
}
exercise47();

// Use mappping types modifiers
function exercise48() {
  // implement mapped type that makes all properties of T optional and nullable
  type TPartialNullable<T> = {
    [P in keyof T]?: T[P] | null;
  };

  type TPoint = {
    x: number;
    y: number;
    z: number;
    name: string;
  };
  const p0: TPoint = { x: 10, y: 20, z: 30, name: 'point' };
  console.log(p0);

  // TODO: uncomment the following code and check if your mapped type works
  type TNullablePoint = TPartialNullable<TPoint>;
  const p1: TNullablePoint = { x: 10 };
  const p2: TNullablePoint = { x: 10, y: null };

  console.log(p1, p2);
}
exercise48();

// Template Literal Type
function exercise49() {
  // TODO: create a type that represents a string that contains Tshirts sizes (S, M, L, XL, XXL)
  type TSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

  // TODO: create a type that represents a string that contains Tshirts colors (red, green, blue)
  type TColor = 'red' | 'green' | 'blue';

  // TODO: create a type that represents a string that contains Tshirts sizes and colors (e.g. "S-red", "M-green", "L-blue")
  type TTshirt = `${TSize}-${TColor}`;

  // TODO: create a function that takes a size and a color and returns a Tshirt size and color
  // TOOD: make sure you annotate the params and return type of the function
  // type TSize =
  // type TColor =
  // type TTshirt =
  function createTshirt(size: TSize, color: TColor): TTshirt {
    return `${size}-${color}`;
  }
  const tshirt = createTshirt('S', 'red');
  console.log(tshirt);
}
exercise49();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseA() {
  // TODO: create a function to determine if two strings are an anagram
  // HINT: A word is an anagram of another if you can rearrange its characters to produce the second word.
  function sortedStr(str: string): string {
    return [...str].sort().join();
  }

  function areAnagrams(s1: string, s2: string): boolean {
    const s1Sorted = sortedStr(s1);
    const s2Sorted = sortedStr(s2);

    // console.log('areAnagrams', s1, s2);
    return s1Sorted === s2Sorted;
  }

  console.assert(areAnagrams('listen', 'silent') === true);
  console.assert(areAnagrams('abc', 'cba') === true);
  console.assert(areAnagrams('abc', 'cbd') === false);

  // HINT: consider exercise33 for code reuse ideas
}
exerciseA();

export default {
  test: 'test',
};
