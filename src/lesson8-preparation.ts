/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 8 *********

function lesson8() {
  // Double assertions
  function doubleAssertions() {
    type TPoint2D = {
      x: number;
      y: number;
    };
    type TPoint3D = {
      x: number;
      y: number;
      z: number;
    };
    // same as
    // type TPoint3DV2 = TPoint2D & {
    //     z: number;
    // }

    let point2D: TPoint2D = { x: 1, y: 2 };
    let point3D: TPoint3D = { x: 1, y: 2, z: 3 };

    // OK
    point2D = point3D;
    // Error: Type 'TPoint2D' is not assignable to type 'TPoint3D'.
    // point3D = point2D;
    point3D = point2D as TPoint3D; // type assertion - single assertion

    type TPerson = {
      name: string;
      dateOfBirth: Date;
    };

    // Error: Type 'TPoint2D' is not assignable to type 'TPoint3D'.
    // const person2: TPerson = point3D as TPerson;

    // double assertion -  convert tounknown type first
    // anything can be converted to unknown
    const person2: TPerson = point3D as unknown as TPerson;
    console.log(person2);
  }
  doubleAssertions();

  // "this" function parameter type
  function thisFunctionParameter() {
    // a. this as param type name
    const data = {
      name: 'Joe',
      age: 30,
      role: 'Developer',
    };

    function toStringBad() {
      // no type check for this to be defined, this.name, this.age, this.role
      // type of this is any
      // return `${this.name}, ${this.age}, ${this.role}`;
      return '';
    }

    data.toString = toStringBad;
    // no type check
    toStringBad(); // undefined, undefined, undefined - or throws an error in strict mode

    type TPerson = {
      name: string;
      age: number;
      role: string;
    };

    function toStringGood(this: TPerson) {
      // no type check for this to be defined, this.name, this.age, this.role
      return `${this.name}, ${this.age}, ${this.role}`;
    }
    data.toString = toStringGood;
    // Error: The 'this' context of type 'void' is not assignable to method's 'this' of type '{ name: string; age: number; role: string; }'.
    // toStringGood();
    // OK
    toStringGood.call(data); // Joe, 30, Developer
    data.toString(); // Joe, 30, Developer

    const badData = {
      name: 'Joe',
      toString: toStringGood,
    };
    // Error: Cannot read property 'name' of undefined
    // badData.toString();
    console.log(badData.toString.call(data));

    // Note: this parameter should be the first parameter of the function, only used in type checking

    class Person {
      name = '';
      age = 0;
      role = '';

      constructor(name: string) {
        this.name = name;
      }

      toString() {
        return `${this.name}, ${this.age}, ${this.role}`;
      }

      print() {
        console.log(this.toString());
      }
    }
    const person = new Person('Joe');
    person.print();

    // b. this in a class type alias
    class Box {
      width = '';
      height = '';
      constructor(width: string, height: string) {
        this.width = width;
        this.height = height;
      }

      toString = toStringGood;

      // "this" here - is a type alias for the class
      equal(other: Box) {
        return other.width === this.width && other.height === this.height;
      }
    }

    const box1 = new Box('10px', '20px');
    // Error: Argument of type '{}' is not assignable to parameter of type 'Box'.
    // box1.equal({});
    box1.equal(new Box('10px', '20px')); // true
  }
  thisFunctionParameter();

  // Generic constraints
  function genericConstraints() {
    // function addFullNameV1<T>(obj: T) {
    //   // Error: Property 'fullName' does not exist on type 'T'.
    //   obj.fullName = `${obj.firstName} ${obj.lastName}`;
    // }

    function addFullNameV2<T>(obj: T): T & { fullName: string } {
      // Error: Property 'fullName' does not exist on type 'T'.
      // return { ...obj, fullName: `${obj.firstName} ${obj.lastName}` };
      return {
        ...obj,
        fullName: `${(obj as any).firstName} ${(obj as any).lastName}`,
      };
    }

    interface IPerson {
      firstName: string;
      lastName: string;
    }
    function addFullNameV3<T extends IPerson>(
      obj: T,
    ): T & { fullName: string } {
      return { ...obj, fullName: `${obj.firstName} ${obj.lastName}` };
    }

    const person3 = addFullNameV3({
      firstName: 'Joe',
      lastName: 'Smith',
      age: 30,
      email: 'john@sample.com',
    });
    console.log(person3);
    // Error: Argument of type '{ firstName: string; }' is not assignable to parameter of type 'IPerson'.
    // const person4 = addFullNameV3({ firstName: 'Joe' });
  }
  genericConstraints();

  // Temporal uncertainty
  function temporalUncertainty() {
    let greetingsText: string | null = 'Hello';
    if (greetingsText !== null) {
      greetingsText.toUpperCase(); // OK

      const list = Array(5)
        .fill(null)
        .map(() => {
          // return greetingsText.split('').join('-');
          return greetingsText?.split('').join('-');
        });

      // map might execute asyncronously - same as setTimeout
      // setTimeout(() => {
      //   // error is expected here
      //   console.log(greetingsText.split('').join('-'));
      // }, 1000);

      console.log(list);
    }
    // greetingsText = null;

    if (greetingsText !== null) {
      greetingsText.toUpperCase(); // OK
      const localGreetingsText = greetingsText;

      const list = Array(5)
        .fill(null)
        .map(() => {
          return localGreetingsText.split('').join('-');
        });

      console.log(list);

      setTimeout(() => {
        // OK
        console.log(localGreetingsText.split('').join('-'));
      }, 1000);
    }

    greetingsText = null;
  }
  temporalUncertainty();

  // Typeof type operator
  function typeofTypeOperator() {
    // JavaScript already has a typeof operator you can use in an expression context:
    // Prints "string"
    console.log(typeof 'Hello world');

    const s = 'hello';
    const n = typeof s;
    // n is value "string"

    // if typeof s is used in a type context, it acts as a type query operator
    type TypeofS = typeof s;
    // TypeofS is alias to type "string" and has no value - it is a type, removed during compilation

    const person5 = {
      firstName: 'Joe',
      lastName: 'Smith',
      age: 30,
    };

    type TPersonType = { firstName: string; lastName: string; age: number };

    // it is possible to use typeof operator to get a type of a variable
    type TPersonType2 = typeof person5;

    const person6: TPersonType = {
      firstName: 'Joe',
      lastName: 'Smith', // if typo in the property name - error
      age: 30, // if this is omitted - error
    };

    // b.
    const apiResponse = {
      data: {
        firstName: 'Joe',
        lastName: 'Smith',
        age: 30,
      },
      status: 200,
    };

    // can be used to define a return type of a function
    function getPerson(): typeof apiResponse.data {
      return apiResponse.data;
    }
  }
  typeofTypeOperator();

  // React with Typescript - class components, functional components, hooks, jest dependency mocks
  // vite: https://vitejs.dev/guide/#scaffolding-your-first-vite-project
  // $ npm create vite@latest
  // React hooks
  // - useEffect
  // - useState
  // - useLayoutEffect
}
lesson8();

const test = 'test';
export default test;
