// ********* Lesson 5 *********

// import { union } from 'lodash';

// Readonly modifier
function readonlyModifier() {
  type Person = {
    readonly name: string;
    readonly age: number;
  };

  const person: Person = {
    name: 'John',
    age: 18,
  };

  console.log(person);

  interface IPoint {
    readonly x: number;
    readonly y: number;
  }

  const pointA: IPoint = {
    x: 1,
    y: 2,
  };

  console.log(pointA);

  // classes
  class Point {
    readonly x: number;
    readonly y: number;
    private readonly z: number;

    constructor(x: number, y: number, z: number) {
      this.x = x;
      this.y = y;
      this.z = z;

      //   this.x++;
    }

    // move(n: number) {
    //   this.x = n;
    // }

    // set xx(n: number) {
    //   this.x = n;
    // }
  }

  const point = new Point(1, 2, 3);
  //   point.x = 2;
  console.log(point);

  // arrays
  const arr: readonly number[] = [1, 2, 3];

  //   arr.push(4);
  //   arr.push(4);
  //   arr.push(4);
  //   arr.pop();

  console.log(arr);

  // person.age = 19;

  // tuples
  const tuple: readonly [number, string] = [1, '2'];

  //   tuple[0] = 2;

  console.log(tuple);
}
readonlyModifier();

// Optional modifier
function optionalModifier() {
  type User = {
    name: string;
    age: number;
    phone?: string;
  };
  //   type User2 = {
  //     name: string;
  //     age: number;
  //     phone: string | undefined;
  //   };
  //   const user22: User2 = {
  //     name: 'John',
  //     age: 18,
  //     // phone: undefined,
  //   };
  //   console.log(user22);

  const person: User = {
    name: 'John',
    age: 18,
  };

  console.log(person);

  const person2: User = {
    name: 'John',
    age: 18,
    phone: '123',
  };

  console.log(person2);

  if (person2.phone) {
    console.log(person2.phone.trim());
  }

  interface IUser {
    name: string;
    age: number;
    phone?: string;
  }

  const person3: IUser = {
    name: 'John',
    age: 18,
    phone: undefined,
  };
  console.log(person3);

  console.log('phone' in person3); // true
}
optionalModifier();

// Union Types
function unionTypes() {
  function formatCommandLine(command: unknown) {
    if (typeof command === 'string') {
      return command.trim();
    } else if (Array.isArray(command)) {
      return command.map((arg) => arg.trim()).join(' ');
    }

    // return '';
    throw new Error('Invalid command');
  }

  console.log(formatCommandLine('  git status  ')); // git status
  console.log(formatCommandLine(['git ', ' status '])); // git status

  console.log(formatCommandLine(123)); // no error

  // to fix the problem, use union types
  function formatCommandLineV2(command: string | string[]) {
    if (typeof command === 'string') {
      return command.trim();
    }
    // it must be an array if it is not a string
    return command.map((arg) => arg.trim()).join(' ');
  }

  console.log(formatCommandLineV2('  git status  ')); // git status
  console.log(formatCommandLineV2(['git ', ' status '])); // git status
  // console.log(formatCommandLineV2(123)); // error

  type StringCommand = string | string[];

  function formatCommandLineV3(command: StringCommand) {
    if (typeof command === 'string') {
      return command.trim();
    }
    // it must be an array if it is not a string
    return command.map((arg) => arg.trim()).join(' ');
  }

  console.log(formatCommandLineV3('  git status  ')); // git status

  // example 2
  function repeat(value: string | number, times: number) {
    if (typeof value === 'string') {
      return value.repeat(times);
    } else if (typeof value === 'number') {
      return value * times;
    }

    throw new Error('value must be string or number');
  }

  repeat('abc', 3);
  // repeat(false, 3); // no type check error, but will throw an error at runtime
  type TPrimitive =
    | string
    | number
    | boolean
    | null
    | undefined
    | symbol
    | bigint;

  let x: TPrimitive = 'abc';
  x = 123;
  x = true;
  x = null;

  console.log(x);
}
unionTypes();
// Literal Types
function literalTypes() {
  let direction: 'up' | 'down' | 'left' | 'right';

  direction = 'up';
  direction = 'right';

  console.log(direction);

  type TDirection = 'up' | 'down' | 'left' | 'right';
  class Point {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    move(direction: TDirection) {
      switch (direction) {
        case 'up':
          this.y++;
          break;
        case 'down':
          this.y--;
          break;
        case 'left':
          this.x--;
          break;
        case 'right':
          this.x++;
          break;
        default:
          throw new Error('Invalid direction');
      }
    }
  }
  const po = new Point(1, 2, 3);
  po.move('up');

  console.log(po);

  type TRating = 1 | 2 | 3 | 4 | 5;

  function printRating(rating: TRating) {
    console.log(''.padStart(rating, '⭐'));
  }
  printRating(3); // ⭐⭐⭐
  printRating(5); // ⭐⭐⭐⭐⭐
  //   printRating(6); // error
  //   type TBoolean = true | false;
  type checkboxState = 'checked' | 'unchecked' | 'indeterminate';
  const CHECKED = 'checked';
  const UNCHECKED = 'unchecked';
  const INDETERMINATE = 'indeterminate';

  let checkbox: checkboxState = CHECKED;

  checkbox = UNCHECKED;
  checkbox = INDETERMINATE;
  console.log(checkbox);

  //   type TUnexpected =
  //     | 1
  //     | '1'
  //     | 2
  //     | '2'
  //     | 3
  //     | '3'
  //     | undefined
  //     | { value: 1 | 2 | 3 };
}
literalTypes();
// Intersection types
function intersectionTypes() {
  // & operator
  type TNameble = {
    name: string;
  };

  type TAgeble = {
    age: number;
  };

  type TWithEmail = {
    email: string;
  };

  //   type TAbc = 1 & 2 & 3;

  type TPerson = TNameble & TAgeble & TWithEmail;

  const person: TPerson = {
    name: 'John',
    age: 18,
    email: 'asdf@asdf.com',
  };

  console.log(person);

  type TPoint2D = {
    x: number;
    y: number;
  };

  //   type TPoint3D = {
  //     x: number;
  //     y: number;
  //     z: number;
  //   };

  interface IPoint3D {
    x: number;
    y: number;
    z: number;
  }

  type TPointAlias = IPoint3D;

  const p5: TPointAlias = {
    x: 1,
    y: 2,
    z: 3,
  };

  console.log(p5);

  type TPoint3D = TPoint2D & {
    z: number;
  };

  const point: TPoint3D = {
    x: 1,
    y: 2,
    z: 1,
  };

  console.log(point);

  const p6: TPoint2D & TPoint3D = {
    x: 1,
    y: 2,
    z: 1,
  };

  console.log(p6);
}
intersectionTypes();

// React with Typescript - proj setup
// create-react-app my-app --template typescript
// vitejs
// https://vitejs.dev/guide/#scaffolding-your-first-vite-project
// npm init vite@latest

const test = 'test';
export default test;
