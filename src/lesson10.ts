/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 10 *********

import { get } from 'lodash';

// Q/A
// const prices = [
//   {
//     entityId: 1,
//     price: 100,
//   },
// ];
// type PriceHistory = typeof prices;

// const pricesMap = prices.reduce((acc, price) => {
//   const { entityId } = price;

//   if (acc.has(entityId)) acc.get(entityId)?.push(price);
//   else acc.set(price.entityId, [price]);
//   return acc;
// }, new Map<number, PriceHistory>());

// class MyMap<V, K> {
//   constructor() {
//     console.log('MyMap constructor');
//   }
// }

// const myMap = new MyMap([1], ['test']);
// const myMap2 = new MyMap();

// Lookup types
// keyof type operator
// Conditional types
// Conditional Types with Unions and never

function lesson10() {
  // Lookup types

  const person = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      state: 'NY',
      location: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
  };
  console.log(person.name); // John
  console.log(person['name']); // John

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

  type PersonName = Person['name']; // string

  const personName: PersonName = 'John';

  type PersonAddress = Person['address']; // { city: string; state: string; location: { lat: number; lng: number; }; }

  const personAddress: PersonAddress = {
    city: 'New York',
    state: 'NY',
    location: {
      lat: 40.7128,
      lng: -74.006,
    },
  };

  type TPerson = {
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
  };

  type PersonName2 = TPerson['name']; // string

  type P2 = Person['name' | 'age']; // Person['name'] | Person['age'] => string | number

  function getLocation(person: Person): Person['address']['location'] {
    return person.address.location;
  }

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
      cardNumbers: {
        number: string;
        cvv: string;
      }[];
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

  type TUserList = IUser[];
  type TUserCompany = TUserList[0]['company']['address']; // string

  type TuserMap = {
    [key: string]: IUser;
  };
  type TUserCompany2 = TuserMap[0]['company']['address']; // string

  // no type safety here
  function printUserAddress(address: TUserList[0]['address']) {
    console.log(address.address, address.city, address.state);
  }

  type TUser2 = TUserList[0];
  //   type Tuser2 = IUser;

  function navigateToCoordinates(
    workCoordinates: IUser['company']['address']['coordinates'],
  ) {
    console.log(workCoordinates.lat, workCoordinates.lng);
  }

  function getUserCardNumber(user: IUser): IUser['bank']['cardNumbers'][0] {
    return user.bank.cardNumbers[0];
  }

  type keys = 'name' | 'age';
  type PX = Person[keys]; // string

  // keyof type operator

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

  function getProperty(obj: TPersonV1, key: keyof TPersonV1) {
    console.log('getProperty', obj[key]);

    return obj[key];
  }

  getProperty(person7, 'name');
  getProperty(person7, 'age');

  function getPropertyGeneric<T>(obj: T, key: keyof T) {
    console.log('getProperty', obj[key]);

    return obj[key];
  }

  getPropertyGeneric(person7, 'name');
  getPropertyGeneric(person7, 'age');

  getPropertyGeneric([1, 2, 3] as const, 5);

  //   type TArrayKeys = keyof [1, 2, 3];

  type TUsersMap = {
    [key: string]: {
      id: number;
      name: string;
      age: number;
    };
  };

  const users = {
    John: {
      id: 1,
      name: 'John',
      age: 30,
    },
    Jane: {
      id: 2,
      name: 'Jane',
      age: 25,
    },
  };

  // Why
  type TUserKeys = keyof typeof users; // "John" | "Jane"
  const keys = Object.keys(users) as TUserKeys[];

  keys.forEach((key: TUserKeys) => {
    console.log(users[key].id, users[key].name, users[key].age);
  });

  // type TestType = string[];
  type TestType = {
    [key: number]: string;
  };

  type TMyType = {
    name: string;
    age: number;
    email: string;
  };

  type TMy1 = TMyType['email'];

  // type lookup operator with keof operator
  type Tkey = keyof TestType; // number
  type TValue2 = TestType[0 | 1 | 2]; // string
  type TValue3 = TestType[1]; // string
  type TValue4 = TestType[Tkey]; // string
  type TValue5 = TestType[keyof TestType]; // string

  // Conditional types
  function conditionalTypes() {
    // ternary operator in js
    let x = 10;
    let y = x > 5 ? 'yes' : 'no'; // y is string

    type IsNumber<T> = T extends number ? 'number' : 'not number';
    // type IsNumber<T> = T extends number ? TMapOfNUmber : TMapOfNotNumber;

    type TIsNumber = IsNumber<number>; // number
    // type TIsNumber_ = 'I am a number';
    // const a: TIsNumber = 'I am a number';
    type TIsNotNumber = IsNumber<string>; // not number
    // type TIsNotNumber = "I`m not a number"
    type TIsNotNumber2 = IsNumber<0>; // number
    type TIsNotNumber3 = IsNumber<1 | 2 | 3>; // number

    const isNumber = <T>(value: T): IsNumber<T> => {
      return (
        typeof value === 'number' ? 'number' : 'not number'
      ) as IsNumber<T>;
    };
    const result = isNumber(123);

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

    type T1 = NotNullable<string | null | undefined>; // string

    type SimpleOnly<T> = T extends number | string ? T : never;

    type T2 = SimpleOnly<number | string | boolean>; // number | string

    // if utility generic conditional type returns never for some type in the union,
    // it is removed from the union

    type TUserOrProduct =
      | {
          name: string;
          title: string;
          email: string;
        }
      | {
          price: number;
          quantity: number;
        };

    // type TUser = NonNullable<TUserOrProduct>; // string

    // type NotNullable<T> = T extends null | undefined ? never : T;
    type Namable<T> = T extends { name: string } ? T : never;
    type TNamableUser = Namable<TUserOrProduct>; // { name: string; title: string; email: string; }
    const user22: TNamableUser = {
      name: 'John',
      title: 'Developer',
      email: 'asdf@asdf.com',
    };
  }
  coditionalTypesWithUnionsAndNever();
}
lesson10();

const test = 'test';
export default test;
