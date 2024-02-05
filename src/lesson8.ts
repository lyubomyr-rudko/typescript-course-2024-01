/* eslint-disable @typescript-eslint/no-unused-vars */
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

    let p1: TPoint2D = { x: 1, y: 2 };
    let p2: TPoint3D = { x: 1, y: 2, z: 3 };

    // OK
    p1 = p2;

    p2 = p1 as TPoint3D; // single assertion

    type TPerson = {
      x: string;
    };

    // p2 = 10 as TPoint3D; // Error: Type '10' is not assignable to type 'TPoint3D'.

    const person: TPerson = {
      x: 'Joe',
    };

    // p2 = person;// error
    // p2 = person as TPoint3D; // single assertion

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p2 = person as any as TPoint3D; // double assertion
    p2 = person as unknown as TPoint3D; // double assertion

    console.log(p1);
    console.log(p2);
  }
  doubleAssertions();

  // "this" function parameter type
  function thisFunctionParameter() {
    type TUser = {
      name: string;
      age: number;
      role: string;
    };
    const data: TUser = {
      name: 'Joe',
      age: 30,
      role: 'Developer',
    };

    function sayHello(user: TUser) {
      console.log(`Hello, ${user.name}`);
    }
    sayHello(data);

    function toString(this: TUser, prefix: string) {
      return `${prefix} ${this.name}`;
    }
    toString.call(data, 'Mr.');
    // toString.apply(data);
    const newToString = toString.bind(data);
    newToString('Mr.');

    type TSerializer = (this: TUser) => string;

    class MyClass implements TUser {
      name: string;
      serialize: TSerializer;
      age: number;
      role: string;

      constructor(name: string, searializer: TSerializer) {
        this.name = name;
        this.serialize = searializer;
        this.age = 0;
        this.role = '';
      }

      toString(this: MyClass) {
        return this.serialize();
      }
    }

    const myObj = new MyClass('Joe', function () {
      return `Hello, ${this.name}`;
    });
    console.log(myObj.toString()); // Hello, Joe
    console.log(myObj + ''); // Hello, Joe

    //
    function toStringBox(this: Box) {
      return `${this.width}x${this.height}`;
    }

    class Box {
      width = '';
      height = '';
      constructor(width: string, height: string) {
        this.width = width;
        this.height = height;
      }

      toString = toStringBox;

      // "this" here - is a type alias for the class
      equal(other: Box) {
        return other.width === this.width && other.height === this.height;
      }
    }

    const box = new Box('10', '20');
    console.log(box.toString()); // 10x20
  }
  thisFunctionParameter();

  // Generic constraints
  function genericConstraints() {
    function getFirstItem<T>(arr: T[]): T | undefined {
      return arr[0];
    }
    console.log(getFirstItem([1, 2, 3])); // 1
    console.log(getFirstItem(['a', 'b', 'c'])); // a
    type TUser = {
      firstName: string;
      lastName: string;
    };

    type TAdmin = {
      firstName: string;
      lastName: string;
      role: string;
    };

    function addFullName(obj: TUser): TUser & { fullName: string } {
      return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`,
      };
    }

    const a: TAdmin = {
      firstName: 'Joe',
      lastName: 'Doe',
      role: 'Admin',
    };
    const b = addFullName(a);

    function addFullNameGood<T extends TUser>(
      obj: T,
    ): T & { fullName: string } {
      return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`,
      };
    }
    const c = addFullNameGood(a);

    // addFullNameGood({}); // Error: Property 'firstName' is missing in type '{}'

    console.log(b);
    console.log(c);
  }
  genericConstraints();

  // Temporal uncertaintly
  function temporalUncertainty() {
    let greetingsText: string | null = 'Hello';

    if (greetingsText !== null) {
      greetingsText.toUpperCase(); // OK

      const list = Array(5)
        .fill(null)
        .map(() => {
          return greetingsText?.split('').join('-');
          //return greetingsText?.split('').join('-');
        });

      // map might execute asyncronously - same as setTimeout
      setTimeout(() => {
        // error is expected here
        console.log(greetingsText?.split('').join('-'));
      }, 1000);

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

    // async function sample() {
    //   // eslint-disable-next-line prefer-const
    //   //   let greetingsText: string | null = 'Hello';

    //   if (greetingsText !== null) {
    //     greetingsText.toUpperCase(); // OK

    //     const list = Array(5).fill(null);

    //     list.map(() => {
    //       return greetingsText?.split('').join('-');
    //       //return greetingsText?.split('').join('-');
    //     });

    //     for (let i = 0; i < list.length; i++) {
    //       await new Promise((resolve) => setTimeout(resolve, 1000));

    //       console.log(greetingsText.split('').join('-'));
    //     }

    //     console.log(list);
    //   }
    // }
    // sample();
  }
  temporalUncertainty();

  // typeof operator in ts
  // Typeof type operator
  function typeofTypeOperator() {
    // JavaScript already has a typeof operator you can use in an expression context:
    // Prints "string"
    console.log(typeof 'Hello world'); // 'string'

    const s = 'hello';
    const n = typeof s;
    // n is value "string"
    console.log(n); // 'string'

    // if typeof s is used in a type context, it acts as a type query operator
    type TypeofS = typeof s;
    // TypeofS is alias to type "string" and has no value - it is a type, removed during compilation

    const person5 = {
      firstName: 'Joe',
      lastName: 'Smith',
      age: 30,
    };

    type TPersonType = { firstName: string; lastName: string; age: number };

    const user = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };
    type TUser = typeof user;

    // type TUser = {
    //   id: number;
    //   name: string;
    //   username: string;
    //   email: string;
    //   address: {
    //     street: string;
    //     suite: string;
    //     city: string;
    //     zipcode: string;
    //     geo: {
    //       lat: string;
    //       lng: string;
    //     };
    //   };
    //   phone: string;
    //   website: string;
    //   company: {
    //     name: string;
    //     catchPhrase: string;
    //     bs: string;
    //   };
    // };

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
  // React with Typescript
  // vite: https://vitejs.dev/guide/#scaffolding-your-first-vite-project
  // $ npm create vite@latest
  // jsx, React.createElement
  // class components vs functional components
  // state, props, setState
  // lifecycle methods
}
lesson8();

const test = 'test';
export default test;
