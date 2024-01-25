// ********* Lesson 5 *********

// Readonly modifier
// Optional modifier
// Union Types
// Literal Types
// Intersection types

// Readonly modifier
function readonlyModifier() {
  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: 'John',
    age: 18,
  };

  // const in JS is not immutable, it prohibits reassignment
  // person = { name: 'John', age: 19 }; // error
  // but you can change the properties of the object
  person.age = 19; // no error

  type Person2 = {
    readonly name: string;
    readonly age: number;
  };

  const person2: Person2 = {
    name: 'John',
    age: 18,
  };
  console.log(person2);
}
readonlyModifier();

// Optional modifier
function optionalModifier() {
  type Person = {
    name: string;
    age: number;
    email: string;
    phone?: string; // optional modifier
  };

  const person: Person = {
    name: 'John',
    age: 18,
    email: '',
    phone: undefined, // optional modifier allows to omit the property when creating the object
  };
  console.log(person);

  // classes example
  class Point {
    x?: number;
    y?: number;
  }

  const point = new Point();
  // point.x = null; // null is not optional type member
  console.log(point);
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

    return '';
  }

  console.log(formatCommandLine('  git status  ')); // git status
  console.log(formatCommandLine(['git ', ' status '])); // git status
  // can pass any value to the function, with no type check errors
  console.log(formatCommandLine(123)); // ''

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
  // will break if you pass a number
  // console.log(formatCommandLineV2(123)); // error

  function repeat(value: unknown, times: number) {
    if (typeof value === 'string') {
      return value.repeat(times);
    } else if (typeof value === 'number') {
      return value * times;
    }

    throw new Error('value must be string or number');
  }
  const result = repeat('abc', 3);
  const result2 = repeat(false, 3); // no type check error, but will throw an error at runtime

  console.log(result);
  console.log(result2);

  function repeat2(value: string | number, times: number): string | number {
    if (typeof value === 'string') {
      return value.repeat(times);
    } else if (typeof value === 'number') {
      return value * times;
    }

    throw new Error('value must be string or number');
  }
  console.log(repeat2('abc', 3)); // abcabcabc
  console.log(repeat2(123, 3)); // 369
  // will trigger compile time error if you pass a boolean
  // console.log(repeat2(false, 3)); // error is thrown

  // examples of union types
  let val: string | number;
  val = 'abc';
  val = 123;

  console.log(val);

  type TPrimitive =
    | string // for multiple lines allows to start with trailing | for better readability
    | number
    | boolean
    | null
    | undefined
    | symbol
    | bigint;
  let val2: TPrimitive;
  val2 = 'abc';
  val2 = 123;

  console.log(val2);
}
unionTypes();

// Literal Types
function literalTypes() {
  // typescript allows to use any string as a type literal
  // type literals are used to restrict the values of the variable
  // example

  // let upDirection: 'up'; // the only value that can be assigned to the variable is 'up'
  // any other value will trigger compile time error

  // upDirection = 'up';
  // upDirection = 'down'; // error

  // single literal type is not very useful, but we can combine it with union types
  let direction: 'up' | 'down' | 'left' | 'right';

  direction = 'down';
  direction = 'left';
  direction = 'right';
  // direction = 'upward'; // compile time error
  console.log(direction);

  // it is possible to assign literal union type to a type alias
  type TDirection = 'up' | 'down' | 'left' | 'right';
  let direction2: TDirection;

  direction2 = 'down';
  direction2 = 'left';
  direction2 = 'right';

  console.log(direction2);

  type TPoint = {
    x: number;
    y: number;
  };

  function move(point: TPoint, direction: TDirection) {
    if (direction === 'up') {
      return { x: point.x, y: point.y + 1 };
    }
    if (direction === 'down') {
      return { x: point.x, y: point.y - 1 };
    }
    if (direction === 'left') {
      return { x: point.x - 1, y: point.y };
    }
    if (direction === 'right') {
      return { x: point.x + 1, y: point.y };
    }
    throw new Error('invalid direction');
  }

  const point = { x: 0, y: 0 };
  const point2 = move(point, 'up'); // { x: 0, y: 1 }
  const point3 = move(point2, 'right'); // { x: 1, y: 1 }
  console.log('point', point);
  console.log('point2', point2);
  console.log('point3', point3);

  // union literals can be of any other type, not only string
  // for example, number
  type TRating = 1 | 2 | 3 | 4 | 5;
  function printRating(rating: TRating) {
    // print number of stars based on the rating
    console.log(''.padStart(rating, '⭐'));
  }
  printRating(3); // ⭐⭐⭐
  printRating(5); // ⭐⭐⭐⭐⭐
  // printRating(6); // error
}
literalTypes();

// Intersection types
function intersectionTypes() {
  // type Point
  type TPoint = {
    x: number;
    y: number;
  };

  type TPoint3D = {
    x: number;
    y: number;
    z: number;
  };
  const point3D: TPoint3D = {
    x: 1,
    y: 2,
    z: 3,
  };
  console.log(point3D);

  // type intersection allows inheriting properties from multiple types
  // example
  type TPoint3DV2 = TPoint & {
    z: number;
  };
  const point3DV2: TPoint3DV2 = {
    x: 1,
    y: 2,
    z: 3,
  };
  console.log(point3DV2);

  // type intersection is used to combine multiple types
  // example
  type TPerson = {
    name: string;
  };
  type TEmail = {
    email: string;
  };
  type TPhone = {
    phone: string;
  };

  // type intersection is used to combine multiple types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function sendMessage(data: any) {
    console.log(
      `dear ${data.name}, your email is ${data.email}, your phone is ${data.phone}`,
    );
  }

  const data = {
    name: 'John',
    email: 'test@jhn.com',
    phone: '123-456-7890',
  };
  sendMessage(data);

  function sendMessageV2(data: TPerson & TEmail & TPhone) {
    console.log(
      `dear ${data.name}, your email is ${data.email}, your phone is ${data.phone}`,
    );
  }
  sendMessageV2(data);

  type TContact = TPerson & TEmail & TPhone;
  function sendMessageV3(data: TContact) {
    console.log(
      `dear ${data.name}, your email is ${data.email}, your phone is ${data.phone}`,
    );
  }

  sendMessageV3({
    name: 'John',
    email: 'asdf@asdf.com',
    phone: '123-456-7890', // if omitted, will trigger compile time error
  });
}
intersectionTypes();
