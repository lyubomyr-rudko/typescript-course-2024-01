// Read the following typescript documentation:
// 1. https://www.typescriptlang.org/docs/handbook/2/objects.html
// 2. https://www.typescriptlang.org/docs/handbook/2/generics.html
// 3. https://www.typescriptlang.org/docs/handbook/2/classes.html

// Use infer keyword
function exercise46() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function createUser(firstName: string, lastName: string, age: number) {
    const id = (Math.random() * 100000).toString();
    return {
      firstName,
      lastName,
      age,
      id,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type FirstParameter<T> = T extends (first: infer P, ...args: any[]) => unknown
    ? P
    : never;
  type TCreateUserFirstArg = FirstParameter<typeof createUser>; // string
  const firstName: TCreateUserFirstArg = 'John';
  console.log(firstName);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
  type TCreateUserReturnType = MyReturnType<typeof createUser>; // { firstName: string; lastName: string; age: number; id: string; }
  const user: TCreateUserReturnType = createUser('John', 'Doe', 30);
  console.log(user);

  type FirstParameterFunction<T> = T extends (
    first: infer P,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: any[]
  ) => infer R
    ? (first: P) => R
    : never;
  // other way to define FirstParameterFunction
  // type FirstParameterFunction<T> = (arg: FirstParameter<T>) => MyReturnType<T>;
  type TCreateUserFirstArgAndReturnType = FirstParameterFunction<
    typeof createUser
  >;

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
  type TRecord<K extends string | number | symbol, T> = {
    [P in K]: T;
  };

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

  type TNullablePoint = TPartialNullable<TPoint>;
  const p1: TNullablePoint = { x: 10 };
  const p2: TNullablePoint = { x: 10, y: null };
  console.log(p1);
  console.log(p2);
}
exercise48();

// Template Literal Type
function exercise49() {
  type TSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  type TColor = 'red' | 'green' | 'blue';
  type TTshirt = `${TSize}-${TColor}`;

  function createTshirt(size: TSize, color: TColor): TTshirt {
    return `${size}-${color}`;
  }

  const tshirt = createTshirt('S', 'red');
  console.log(tshirt);
}
exercise49();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseA() {
  function caclulateLetterFrequency(s: string): Record<string, number> {
    const result: Record<string, number> = {};
    for (const c of s.toLowerCase()) {
      if (result[c]) {
        result[c]++;
      } else {
        result[c] = 1;
      }
    }
    return result;
  }
  function areAnagrams(s1: string, s2: string): boolean {
    const f1 = caclulateLetterFrequency(s1);
    const f2 = caclulateLetterFrequency(s2);

    if (Object.keys(f1).length !== Object.keys(f2).length) {
      return false;
    }

    for (const c in f1) {
      if (f1[c] !== f2[c]) {
        return false;
      }
    }

    return true;
  }

  console.assert(areAnagrams('listen', 'silent') === true);
  console.assert(areAnagrams('abc', 'cba') === true);
  console.assert(areAnagrams('abc', 'cbd') === false);
}
exerciseA();

export default {
  test: 'test',
};
