/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 10 *********

function lesson10() {
  // Lookup types
  function lookupTypes() {
    interface Person {
      name: string;
      age: number;
      address: {
        city: string;
        state: string;
        location: {
          lat: number;
          lng: number;
        };
      };
    }
    type P1 = Person['name']; // string
    type P2 = Person['name' | 'age']; // string | number

    type PersonList = Person[];
    type P4 = PersonList[0]['name']; // string

    type P3 = string['charAt']; // (pos: number) => string
    type P5 = string[][0]; // string

    const usersList = [
      {
        id: 1,
        firstName: 'Terry',
        lastName: 'Medhurst',
        maidenName: 'Smitham',
        age: 50,
        gender: 'male',
        email: 'atuny0@sohu.com',
        phone: '+63 791 675 8914',
        username: 'atuny0',
        password: '9uQFF1Lh',
        birthDate: '2000-12-25',
        image: 'https://robohash.org/hicveldicta.png',
        bloodGroup: 'A−',
        height: 189,
        weight: 75.4,
        eyeColor: 'Green',
        hair: {
          color: 'Black',
          type: 'Strands',
        },
        domain: 'slashdot.org',
        ip: '117.29.86.254',
        address: {
          address: '1745 T Street Southeast',
          city: 'Washington',
          coordinates: {
            lat: 38.867033,
            lng: -76.979235,
          },
          postalCode: '20020',
          state: 'DC',
        },
        macAddress: '13:69:BA:56:A3:74',
        university: 'Capitol University',
        bank: {
          cardExpire: '06/22',
          cardNumbers: ['50380955204220685', '6762303175774717'],
          cardType: 'maestro',
          currency: 'Peso',
          iban: 'NO17 0695 2754 967',
        },
        company: {
          address: {
            address: '629 Debbie Drive',
            city: 'Nashville',
            coordinates: {
              lat: 36.208114,
              lng: -86.58621199999999,
            },
            postalCode: '37076',
            state: 'TN',
          },
          department: 'Marketing',
          name: "Blanda-O'Keefe",
          title: 'Help Desk Operator',
        },
        ein: '20-9487066',
        ssn: '661-64-2976',
        userAgent:
          'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
      },
    ];

    interface IUser {
      id: number;
      firstName: string;
      lastName: string;
      maidenName: string;
      age: number;
      gender: string;
      email: string;
      phone: string;
      username: string;
      password: string;
      birthDate: string;
      image: string;
      bloodGroup: string;
      height: number;
      weight: number;
      eyeColor: string;
      hair: {
        color: string;
        type: string;
      };
      domain: string;
      ip: string;
      address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        postalCode: string;
        state: string;
      };
      macAddress: string;
      university: string;
      bank: {
        cardExpire: string;
        cardNumbers: string[];
        cardType: string;
        currency: string;
        iban: string;
      };
      company: {
        address: {
          address: string;
          city: string;
          coordinates: {
            lat: number;
            lng: number;
          };
          postalCode: string;
          state: string;
        };
        department: string;
        name: string;
        title: string;
      };
      ein: string;
      ssn: string;
      userAgent: string;
    }

    // no type safety here
    function printUserAddress(address: any) {
      console.log(address.address, address.city, address.state);
    }

    // for large interfaces it is possible to use lookup types
    function printUserAddressV2(address: IUser['address']) {
      // lookup type
      console.log(address.address, address.city, address.state);
    }

    // lookup type requires square brackets syntax around the property name
    // this does not work
    // function printUserAddressV3(address: IUser.address) {
    //   console.log(address.address, address.city, address.state);
    // }

    // lookup type allows to access nested properties
    function navigateToCoordinates(
      workCoordinates: IUser['company']['address']['coordinates'],
    ) {
      console.log(workCoordinates.lat, workCoordinates.lng);
    }

    // lookup type allows to access array elements
    function getUserCardNumber(user: IUser): IUser['bank']['cardNumbers'][0] {
      return user.bank.cardNumbers[0];
    }
    const cardNumber = getUserCardNumber(usersList[0]);

    type keys = 'name' | 'age';
    type PX = Person[keys]; // string
    //   let x = "name"
    // type PY = Person[x]; // error - x is not a type
  }
  lookupTypes();

  // keyof type operator
  function keyofTypeOperator() {
    type TPersonV1 = {
      name: string;
      age: number;
      address: {
        street: string;
        city: string;
      };
    };

    const person7: TPersonV1 = {
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Nashville',
      },
    };

    function getProperty(obj: any, key: string) {
      console.log('getProperty', obj[key]);

      return obj[key];
    }
    // problem - any allows to pass any argument, and no type safety is enforced

    const peronName = getProperty(person7, 'name'); // John - but any type is returned, no type safety
    const personAge = getProperty(person7, 'age'); // 30
    const personAddress = getProperty(person7, 'adres'); // undefined - typo, but no error

    function getPropertyV2(obj: any, key: 'name' | 'age' | 'address') {
      console.log('getPropertyV2', obj[key]);

      return obj[key];
    }

    // getPropertyV2(person7, 'adres'); // good - error for typo
    // but can code duplication ('name' | 'age' | 'address') be avoided?

    function getPropertyV3(obj: any, key: keyof TPersonV1) {
      console.log('getPropertyV2', obj[key]);

      return obj[key];
    }

    // you could also save it to a type variable
    type TPersonKey = keyof TPersonV1;

    function getPropertyV4(obj: TPersonV1, key: TPersonKey) {
      console.log('getPropertyV2', obj[key]);

      return obj[key];
    }

    function getPropertyV5<T>(obj: T, key: keyof T) {
      type K = typeof key;
      console.log('getPropertyV2', obj[key]);
      return obj[key];
    }

    function getPropertyV6<T, K extends keyof T>(obj: T, key: K) {
      console.log('getPropertyV2', obj[key]);
      return obj[key];
    }

    const peronName2 = getPropertyV5(person7, 'name'); // John
    const personAge2 = getPropertyV5(person7, 'age'); // 30
    // const parsonAddress2 = getPropertyV5(person7, 'adres'); // error for typo

    // type TestType = string[];
    type TestType = {
      [key: number]: string;
      // name: string;
      // age: number;
      // address: {
      //   street: string;
      //   city: string;
      // };
    };

    // type lookup operator with keof operator
    type Tkey = keyof TestType; // number
    type TValue2 = TestType[0]; // string
    type TValue3 = TestType[number]; // string
    type TValue4 = TestType[Tkey]; // string
    type TValue5 = TestType[keyof TestType]; // string
  }
  keyofTypeOperator();

  // Conditional types
  function conditionalTypes() {
    // ternary operator in js
    let x = 10;
    let y = x > 5 ? 'yes' : 'no'; // y is string

    type IsNumber<T> = T extends number ? 'number' : 'not number';

    type TIsNumber = IsNumber<number>; // number
    type TIsNotNumber = IsNumber<string>; // not number
    type TIsNotNumber2 = IsNumber<0>; // number

    const isNumber = (value: unknown) => {
      return typeof value === 'number' ? 'number' : 'not number';
    };
    const result = isNumber(123); // number

    // type TypeName<T> =
    //   T extends string ? 'string':
    //   T extends number ? 'number':
    //   T extends boolean ? 'boolean':
    //   T extends undefined ? 'undefined':
    //   T extends Function ? 'function':
    //   T extends symbol ? 'symbol':
    //   T extends bigint ? 'bigint':
    //   'object';

    type TypeName<T> = T extends string
      ? 'string'
      : T extends number
        ? 'number'
        : T extends boolean
          ? 'boolean'
          : T extends undefined
            ? 'undefined'
            : T extends Function
              ? 'function'
              : T extends symbol
                ? 'symbol'
                : T extends bigint
                  ? 'bigint'
                  : 'object';

    function getTypeName<T>(value: T): TypeName<T> {
      return typeof value as TypeName<T>;
    }

    type TStringTypeName = TypeName<string>; // 'string' - literal type
    const str = getTypeName('abc'); // 'string' - string value is returned, of literal type 'string'
    type TNumberTypeName = TypeName<number>; // 'number' - literal type
    const num = getTypeName(123); // 'number' - string value is returned, of literal type 'number'
    type TBooleanTypeName = TypeName<boolean>; // 'boolean'
    const bool = getTypeName(true); // 'boolean'
    type TUndefinedTypeName = TypeName<undefined>; // 'undefined'
    const undef = getTypeName(undefined); // 'undefined'
    type TFunctionTypeName = TypeName<() => void>; // 'function'
    const func = getTypeName(() => {}); // 'function'
    type TSymbolTypeName = TypeName<symbol>; // 'symbol'
    const sym = getTypeName(Symbol('abc')); // 'symbol'
    type TBigIntTypeName = TypeName<bigint>; // 'bigint'
    const big = getTypeName(BigInt(123)); // 'bigint'
    type TObjectTypeName = TypeName<object>; // 'object'
    const obj = getTypeName({}); // 'object'

    // Question: what is the type of the following variable?
    type TName = TypeName<string | number>; // 'string' | 'number'
    // same as TypeName<string> | TypeName<number>
  }
  conditionalTypes();

  // Conditional Types with Unions and never
  function coditionalTypesWithUnionsAndNever() {
    // In terms of sets, we can think of the never type as an empty set.
    // An empty set contains no elements, and the never type similarly represents
    // a set of values that cannot exist. Any expression that evaluates to never
    // is considered to be unreachable, meaning that it can never be executed
    // during the runtime of a program. For example, consider the following function
    // that takes an argument of type string and returns a value of type never:

    function throwError(message: string): never {
      throw new Error(message);
    }

    let impossible = throwError('error message');
    // never type - variable is expected to never be assigned,
    // this line is expected to never be executed
    // impossible = 'abc'; // error - type 'string' is not assignable to type 'never'

    // type 'string' is not assignable to variable of type 'never', declared implicitly
    // const nverGreeting: never = 'Hello';

    // but never can be assigned to any type
    let impossible2 = throwError('error message'); // never
    // since impossible2 is of blank type, and contains "vacuum" - it can be assigned to any variable
    // it is part of any set
    let x: string = impossible2;
    console.log(impossible2);

    // if you unite unknown with any type, you get unknown, because unknown includes any type
    type TUnknown = unknown | number; // unknown

    // never in a union types is ignored - adding 'vacuum' type to the union type does not change the union type
    type TStringOrNumberOrNever = string | number | never; // never is ignored
    type TStringOrNumber = string | number; // both are the same

    // usefull in conditional types
    // exclude null and undefined from type in generic
    type NotNullable<T> = T extends null | undefined ? never : T;

    type TUser = {
      id: string;
      name: string;
    };
    type TNullableUser = TUser | null | undefined;
    type TNotNullable = NotNullable<TNullableUser>; // string
    // if you pass a union type to a generic utility type, it is applied to each type in the union
    // so this are the same
    type TExample1 = NotNullable<string | null | undefined>; // string
    // this is the same as
    type TExample2 =
      | NotNullable<string>
      | NotNullable<null>
      | NotNullable<undefined>;
    // type TExample3 =
    //   | string extends null | undefined ? never : string
    //   | null extends null | undefined ? never : null
    //   | undefined extends null | undefined ? never : undefined;
    type TExample4 = string | never | never;
    type TExample5 = string;

    // if utility generic conditional type returns never for some type in the union,
    // it is removed from the union
  }
  coditionalTypesWithUnionsAndNever();
}
lesson10();

const test = 'test';
export default test;
