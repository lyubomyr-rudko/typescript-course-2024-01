/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/ban-types */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// // ********* Lesson 12 *********

function lesson12() {
  // Fix autocoplete problem for literal union types
  function fixAutocompleteProblemForLiteralUnionTypes() {
    type Color = 'red' | 'green' | 'blue' | string;

    function drawRectangle(color: Color) {
      console.log(color);
    }
    drawRectangle('blue'); // no autocomplete
    // string includes all possible strings, so Color is a string type alias
    // if to remove the string - nice autocomplete, but we lose the ability to pass any string
    // eslint-disable-next-line @typescript-eslint/ban-types
    type Color2 = ('red' | 'green' | 'blue') | (string & {});
    function drawRectangle2(color: Color2) {
      console.log(color);
    }
    drawRectangle2('blue'); // autocomplete works
  }
  fixAutocompleteProblemForLiteralUnionTypes();

  // Satisfies constraint
  function satisfiesConstraint() {
    type ColorString = 'red' | 'green' | 'blue';
    type ColorRGB = [red: number, green: number, blue: number];

    type Color = ColorString | ColorRGB;

    // type Theme = {
    //   [x: string]: Color;
    // };
    // same as
    type Theme = Record<string, Color>;

    const theme: Theme = {
      primary: 'green',
      secondary: [0, 255, 0],
      danger: 'red',
    };

    const [r, g, b] = theme.secondary; // no type info for `secondary` property
    console.log(r, g, b);

    const theme2 = {
      primary: 'green',
      secondary: [0, 255, 0],
      danger: 'red',
    } satisfies Theme;

    const [r1, g1, b1] = theme2.secondary;
    console.log(r1, g1, b1);
  }
  satisfiesConstraint();

  // Utility Property key type
  function propertyKeyType() {
    // only string, number and symbol can be used as property keys
    const str = 'str';
    const num = 1;
    const sym = Symbol();

    const obj = {
      [str]: 1,
      [num]: 2,
      [sym]: 3,
    };

    const objAsKe = {};

    const obj2 = {
      // [objAsKe]: 1, // inva
    };

    // type PropertyKey = string | number | symbol;
    // type PropertyKey2 = keyof any;

    const str2: PropertyKey = 'str';
    const num2: PropertyKey = 1;
    const sym2: PropertyKey = Symbol();

    // const obj3: PropertyKey = {}; // invalid

    console.log(obj, obj2, str2, num2, sym2);
  }
  propertyKeyType();

  // Utility This type
  function utilityThisType() {
    // ThisType is a built-in utility type that allows you to specify the type of this inside an object literal, or inside a class declaration.

    type Math = {
      double(): void;
      half(): void;
      pow(n: number): void;
    };

    const math: Math = {
      double(this: { value: number }) {
        this.value *= 2;
      },
      half(this: { value: number }) {
        this.value *= 0.5;
      },
      pow(this: { value: number }, n: number) {
        this.value **= n;
      },
    };

    const obj = {
      value: 2,
      ...math,
    };

    obj.double();

    const math2: Math & ThisType<{ value: number } & Math> = {
      double() {
        this.value *= 2;
      },
      half() {
        this.value *= 0.5;
      },
      pow(n: number) {
        this.value **= n;
      },
    };

    const obj2 = {
      value: 2,
      ...math2,
    };

    obj2.double();

    // example 2
    type TStateDescriptin<D, M> = {
      data: D;
      methods: M & ThisType<D & M>;
    };

    function createState<D, M>(desc: TStateDescriptin<D, M>): D & M {
      return {
        ...desc.data,
        ...desc.methods,
      };
    }

    const state = createState({
      data: {
        name: 'John',
        age: 20,
      },
      methods: {
        getBirthYear() {
          console.log('this ', this.getFullName());

          return new Date().getFullYear() - this.age;
        },
        getFullName() {
          return this.name;
        },
      },
    });

    console.log('birthYear ', state.getBirthYear());
    console.log('name ', state.age);
    console.log('name ', state.name);
  }
  utilityThisType();

  // Awaited<T> Utility
  async function awaitedUtilityType() {
    const first: Promise<string> = new Promise<string>((resolve) => {
      return resolve('Superman');
    });
    const second: Promise<Promise<string>> = new Promise<Promise<string>>(
      (resolve, reject) =>
        resolve(new Promise<string>((resolve, reject) => resolve('Batman'))),
    );
    const third: Promise<Promise<Promise<string>>> = new Promise<
      Promise<Promise<string>>
    >((resolve, reject) =>
      resolve(
        new Promise<Promise<string>>((resolve, reject) =>
          resolve(
            new Promise<string>((resolve, reject) => resolve('Spiderman')),
          ),
        ),
      ),
    );

    const firstResult = await first;
    // const secondResult = await (await second);
    // const thirdResult = await (await (await third));
    const secondResult = await second;
    const thirdResult = await third;

    type FirstAwaited = Awaited<typeof first>;
    type SecondAwaited = Awaited<typeof second>;
    type ThirdAwaited = Awaited<typeof third>;

    // Awaited type is a built-in utility type designed to get the type of a promise result, unwrapping nested promises

    /**
     * Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to `never`. This emulates the behavior of `await`.
     */
    type Awaited<T> = T extends null | undefined
      ? T // special case for `null | undefined` when not in `--strictNullChecks` mode
      : // if it is an thenable object (is object and has a callable `then` property)
        // then- extracts the type of the value that the thenable resolves to (resolve is first argument of then)
        T extends object & { then(onfulfilled: infer F, ...args: infer _): any } // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
        ? F extends (value: infer V, ...args: infer _) => any // if the argument to `then` is callable, extracts the first argument
          ? Awaited<V> // recursively unwrap the value
          : never // the argument to `then` was not callable
        : T; // non-object or non-thenable

    // third.then((thirdResult) => console.log(thirdResult));
  }
  awaitedUtilityType();

  // String Manipulation Utilities
  function stringManipulationUtilities() {
    // Uppercase
    // Lowercase
    // Capitalize
    // Uncapitalize

    /**
     * Convert string literal type to uppercase
     */
    type Uppercase<S extends string> = intrinsic;

    /**
     * Convert string literal type to lowercase
     */
    type Lowercase<S extends string> = intrinsic;

    /**
     * Convert first character of string literal type to uppercase
     */
    type Capitalize<S extends string> = intrinsic;

    /**
     * Convert first character of string literal type to lowercase
     */
    type Uncapitalize<S extends string> = intrinsic;

    // examples
    type Sizes = 'small' | 'medium' | 'large';
    type UpperCaseSizes = Uppercase<Sizes>;
    type LowerCaseSizes = Lowercase<UpperCaseSizes>;

    type Colors = 'red' | 'green' | 'blue';
    type WidgetTypes = `${Uppercase<Sizes>}-${Colors}`;
    const a: WidgetTypes = 'SMALL-red';

    // used cases for string manipulation utilities
    // gettter
    type Getters<T> = {
      [K in keyof T & string as `get${Capitalize<K>}`]: () => T[K];
    };
    // T & string - will non-string keys
    // as - will rename keys

    type TPoint = {
      x: number;
      y: number;
      z: number;
      name: string;
    };
    type TPointGetters = Getters<TPoint>;
    const pointGetter: TPoint & TPointGetters = {
      x: 1,
      y: 2,
      z: 3,
      name: 'point',
      getX() {
        return this.x;
      },
      getY() {
        return this.y;
      },
      getZ() {
        return this.z;
      },
      getName() {
        return this.name;
      },
    };
  }
  stringManipulationUtilities();
}
lesson12();

// React with Typescript - more on hooks - performance optimization
// - components, jsx, props, state, events
// - list and keys
// - useState
// - useEffect

export default lesson12;
