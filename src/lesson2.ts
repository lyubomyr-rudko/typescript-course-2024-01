/* eslint-disable */

function lesson2() {
  // Primitive types recap
  // number, string, boolean, null, undefined, symbol, bigint
  // let key: symbol = Symbol('key');
  // let o = {
  //   [key]: 'value',
  // };
  // Array recap
  let scores: number[] = [];

  // tuple - fixed length array
  let point3D: [number, number, number] = [1, 2, 3];
  // point3D = [1, 2, 3, 4]; // error
  let products: [string, number][];
  products = [
    ['apple', 1],
    ['banana', 2],
  ];
  type Product = [string, number];

  // Object type, type alias
  type Point2D = {
    x: number;
    y: number;
    // name: string;
    // age: number;
  };
  type ListOfPoints = Point2D[];

  const points: ListOfPoints = [{ x: 1, y: 2 }];
  // const point2: { x: number; y: number } = { x: 1, y: 2 };
  const point: Point2D = { x: 1, y: 2 };
  const point2: Point2D = { x: 1, y: 2 };

  type PI = 3.14;
  // boolean -> true, false
  // undefined -> undefined
  // null -> null
  let pi: PI = 3.14;

  // Const declarations
  const PI = 3.14;
  // PI = 3.15;
  const person = { name: 'John', age: 23 };
  person.age = 24;
  // person = { name: 'John', age: 24 }; // error

  // Functions
  function sumTwoNumbers(a: number, b: number): string {
    return (a + b).toString();
  }

  function sumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n, 0);
  }

  // const sumFn = (a: number, b: number): number => {
  //   return a + b;
  // }

  type SumFn = (a: number, b: number) => string;

  const myFn = (a: number, b: number) => (a + b).toString();

  const sumFn: SumFn = myFn;

  // Structural typing, duck typing, type compatibility
  type TProduct = { name: string };
  let t1: TProduct = { name: 'Table' };

  type TUser = { name: string };
  let u1: TUser = { name: 'John' };

  t1 = u1;

  type TPoint3D = { x: number; y: number; z: number };
  type TPoint2D = { x: number; y: number };

  let p3D: TPoint3D = { x: 1, y: 2, z: 3 };
  let p2D: TPoint2D = { x: 1, y: 2 };

  p2D = p3D;

  function printPoint(point: TPoint2D) {
    console.log(`Point: ${point.x.toFixed(2)}, ${point.y.toFixed(2)}`);
  }
  printPoint(p2D);
  printPoint(p3D);
  printPoint({ x: 1, y: 2 });
  // printPoint({ x: 1, y: 2, z: 3 }); // error

  // Classes
  class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    print() {
      console.log(`Point: ${this.x.toFixed(2)}, ${this.y.toFixed(2)}`);
    }
  }

  class Point3D extends Point {
    protected z: number;

    constructor(x: number, y: number, z: number) {
      super(x, y);
      this.z = z;
    }

    print() {
      console.log(
        `Point: ${this.x.toFixed(2)}, ${this.y.toFixed(2)}, ${this.z.toFixed(
          2,
        )}`,
      );
    }
  }

  const p1: Point = new Point(1, 2);

  // const p2:Point = { x: 1, y: 2, print: () => {} };

  // Unit testing introduction
  // test
}
lesson2();
