/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 13 *********

function lesson13() {
  // Utility types deep dive - Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, ReturnType, InstanceType
  function utilityTypesDeepDive() {
    // Partial
    // Required
    // Readonly
    // Record
    // Pick
    type TPoint = {
      x: number;
      y: number;
      z: number;
      name: string;
    };
    type TPoint2d = Pick<TPoint, 'x' | 'y'>;
    type TPoint2d2 = {
      [P in 'x' | 'y']: TPoint[P];
    };
    type Pick<T, K extends keyof T> = {
      [P in K]: T[P];
    };

    // Exclude - exclude from T all union pargs that are assignable to U
    //   type Exclude<T, U> = T extends U ? never : T;
    type TPoint2d3Keys = Exclude<keyof TPoint, 'z' | 'name'>;

    // Extract
    type Extract<T, U> = T extends U ? T : never;
    type TPoint2d4Keys = Extract<keyof TPoint, 'x' | 'y'>;
    type TIntersection = Extract<'q' | 'w' | 'x' | 'a', 'x' | 'y' | 'a' | 'b'>;

    // Omit
    //   type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
    type TPoint2d5 = Omit<TPoint, 'z' | 'name'>;

    // NonNullable
    type TPointNullable = {
      x?: number | null;
      y?: number | null;
      z: number | null;
      name: string | null;
    };

    type TNotNullablePoint = NonNullable<TPoint>;

    // ReturnType
    type ReturnType<T extends (...args: any) => any> = T extends (
      ...args: any
    ) => infer R
      ? R
      : any;
    function sum(a: number, b: number) {
      return a + b;
    }
    type TSumReturnType = ReturnType<typeof sum>;

    // InstanceType
    //   type InstanceType<T extends abstract new (...args: any) => any> =
    //     T extends abstract new (...args: any) => infer R ? R : any;
    abstract class Point {
      constructor(
        public x: number,
        public y: number,
      ) {}
      abstract getDistance(): number;
    }
    type TPointInstanceType = InstanceType<typeof Point>;
    //   type TPpintAlias = Point;

    // PropertyKey type is a union of string | number | symbol
    // type PropertyKey = string | number | symbol;
    type PropertyKey = keyof any;
    // type Pro

    type PParam = Parameters<typeof sum>;
    type TPointTupple = [x: number, y: number]; // [number, number]
    const pointTupple: PParam = [1, 2];
    const point: TPointTupple = pointTupple;
    type TDIct = [word: string, description: number];
  }
  utilityTypesDeepDive();
  // Enums
  function enums() {
    enum FileAccess {
      None, // 000
      Read = 1 << 1, // 001
      Write = 1 << 2, // 010
      Execute = 1 << 3, // 100
      ReadWrite = Read | Write, // 011
    }

    function checkAccess(access: number) {
      if (access & FileAccess.Read) {
        console.log('Read');
      }
      if (access & FileAccess.Write) {
        console.log('Write');
      }
      if (access & FileAccess.Execute) {
        console.log('Execute');
      }
    }
    checkAccess(1);
    checkAccess(2);
    checkAccess(3);
    checkAccess(4);
    checkAccess(5);
  }
  enums();

  // React with Typescript - more on hooks - performance optimization
  // - useCallback
  // - useMemo
  // - useRef
  // - useImperativeHandle
  // - useReducer
  // - useContext
  // vite: https://vitejs.dev/guide/#scaffolding-your-first-vite-project
  // $ npm create vite@latest
}
lesson13();

export default lesson13;
