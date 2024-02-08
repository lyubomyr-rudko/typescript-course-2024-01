// Read the following typescript documentation:
// 1. https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// 2. https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// 3. https://www.typescriptlang.org/docs/handbook/2/functions.html

// TODO: (important!) remove all // eslint-disable-next-line comments

// Use double assertion
function exercise35() {
  // TODO:Create two types: TUser and TProduct
  interface TUser {
    /* TODO: add definition for user name, title and email */
    name: string;
    title: string;
    email: string;
  }
  interface TProduct {
    /* TODO: add definition for product title, price and quantity */
    title: string;
    price: number;
    quantity: number;
  }

  const user: TUser = {
    name: 'Stan',
    title: 'freelancer',
    email: 'bla.bla@example.com',
  };
  let product: TProduct = {
    title: 'Macbook Pro',
    price: 2_500,
    quantity: 1,
  };

  // TODO: fix the error by adding double assertion
  product = user as unknown as TProduct;

  console.log(product);
}
exercise35();

// Use this parameter type annotation to fix the error in this code
function exercise36() {
  // Note: this object does not have a name property
  // but the toString function expects it to be there, and there is no type check
  type TData = {
    name: string;
    age: number;
    role: string;
  };
  const data = {
    firstName: 'Joe',
    lastName: 'Doe',
    age: 30,
    role: 'Developer',
  };
  // TODO: add this param annotation, to enforce that this function
  // can only be called on an object with name, age and role properties
  function toString(this: TData) {
    // TODO: uncomment the following line, fix the error
    return `${this.name}, ${this.age}, ${this.role}`;
  }
  data.toString = toString;
  // TODO: run the code and observe the error
  console.log(data + ''); // ERR 'this' implicitly has type 'any' because it does not have a type annotation.ts(
  console.log(data.toString());
  // TODO: add required properties to the data object, fixing the error
}
exercise36();

// Use generic constraints
function exercise37() {
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  const person = addGreeting({
    firstName: 'Joe',
    lastName: 'Smith',
    age: 30,
    email: 'john@sample.com',
  });

  // TODO: implement method that adds addGreeting method to the object
  addGreeting(person as IPerson);
  // TODO: add generic constraints to enforce type checking, add return type annotation
  function addGreeting<T extends IPerson>(
    obj: T,
  ): T & { sayHello: () => string } {
    // TODO: implement the method sayHello that returns a greeting string
    // TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    function sayHello() {
      return `Hello ${obj.firstName} ${obj.lastName}`;
    }
    // TODO: make sure the obj is not modified, and new object is returned
    return { ...obj, sayHello: sayHello };
  }

  // TODO: remove the following line
  // console.log(person as IPerson);

  // TODO: uncomment the following line and fix the error
  console.log(person.sayHello());
}
exercise37();

// fix issues related to temporal uncertainty
function exercise38() {
  interface FetchDocument {
    date: number;
    hours: number;
  }

  type DataArray = FetchDocument[];

  interface GroupDocument {
    name: string;
    data: DataArray;
  }

  // TODO: fix the type of fetchResult variable to be union of array of GroupDocument objects / null

  // TODO: uncomment the following line
  let fetchResult: GroupDocument[] | null = null;

  // TODO: remove this line
  // let fetchResult: GroupDocument[] | null = null as unknown as GroupDocument[];

  // TODO: keep this code as is
  fetchResult = [
    {
      name: 'John',
      data: [
        {
          date: 13,
          hours: 14,
        },
        {
          date: 12,
          hours: 433,
        },
      ],
    },
    {
      name: 'Ringo',
      data: [
        {
          date: 13,
          hours: 41,
        },
        {
          date: 11,
          hours: 233,
        },
      ],
    },
  ];
  const userNames = ['John', 'Ringo'];

  if (fetchResult !== null) {
    // fix type narrow bug for use in cb - simple create local var
    const res = fetchResult;
    // NOTE: observe taht type narrowing works here
    console.log(res.length);

    userNames.forEach((name) => {
      // TOOD: explain why type narrowing does not work here and fix the error (and remove `any` type annotations)

      // result have type  :GroupDocument | undefined
      // fix it adding to end " || null" for version with retun undefined (no any find)
      const result = res.find((obj) => obj.name === name) || null;

      if (result) {
        console.log(result.data);
      }
    });
  }
}
exercise38();

// Use typeof operator
function exercise39() {
  // type TUser = {
  //   id: number;
  //   firstName: string;
  //   lastName: string;
  //   maidenName: string;
  //   age: number;
  //   gender: string;
  //   email: string;
  //   phone: string;
  //   username: string;
  //   password: string;
  //   birthDate: string;
  //   image: string;
  //   bloodGroup: string;
  //   height: number;
  //   weight: number;
  //   eyeColor: string;
  //   hair: {
  //     color: string;
  //     type: string;
  //   };
  //   domain: string;
  //   ip: string;
  //   address: {
  //     address: string;
  //     city: string;
  //     coordinates: {
  //       lat: number;
  //       lng: number;
  //     };
  //     postalCode: string;
  //     state: string;
  //   };
  //   macAddress: string;
  //   university: string;
  //   bank: {
  //     cardExpire: string;
  //     cardNumbers: [string, string];
  //     cardType: string;
  //     currency: string;
  //     iban: string;
  //   };
  //   company: {
  //     address: {
  //       address: string;
  //       city: string;
  //       coordinates: {
  //         lat: number;
  //         lng: number;
  //       };
  //       postalCode: string;
  //       state: string;
  //     };
  //     department: string;
  //     name: string;
  //     title: string;
  //   };
  //   ein: string;
  //   ssn: string;
  //   userAgent: string;
  // };
  // for this exercise, use the following data
  const user = {
    // : TUser
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
  };
  console.log(user);
  type TUser = typeof user; // not work for loop typeof

  // TODO: for each property of the user object, print its type using js typeof operator
  function printAllUserPropTypes() {
    // TODO: get lis of own keys of the user object
    const propList = Object.keys(user);
    // TODO: iterate over the keys with foreach
    propList.forEach((key) => {
      // TODO: console.log the typeof for each property
      console.log(`User.${key} \ttypeof: ${typeof user[key as keyof TUser]}`);
    });
  }
  printAllUserPropTypes();

  // TODO: create function that returns address of the user object,
  // TODO: set the return type of that function using typeof operator
  function getUserAddress1(user: TUser): typeof user.address {
    return user.address;
  }
  console.log(`\nUser.address v1:\n`, getUserAddress1(user));

  // TODO: create function that returns coordinates of the user copany address
  // user -> company -> address -> coordinates
  // TODO: set the return type of that function using typeof operator
  function getCoordinates(): typeof user.company.address.coordinates {
    return user.company.address.coordinates;
  }
  console.log(`COMPANY COORDS: `, getCoordinates());
}
exercise39();

// Write the generic function to remove the duplicates from the array
export function removeDuplicates<T>(arr: T[]): T[] {
  // TODO: remimplement this code, do not use Set data structure
  // const set = new Set(arr);
  // const distinctArr = [...set];
  // return distinctArr;
  const unic: T[] = [];
  arr.forEach((el) => {
    if (!unic.includes(el)) unic.push(el);
  });
  return unic;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
// TODO: write unit tests for this function

// Write a function that returns an intersection of two arrays, use generics
export function getIntersection<T>(arr1: T[], arr2: T[]): T[] {
  // return [...arr1, ...arr2];
  const intersect: T[] = [];
  arr1.forEach((el) => {
    if (arr2.includes(el) && !intersect.includes(el)) {
      intersect.push(el);
    }
  });
  return intersect;
}
console.log(getIntersection([8, 3, 2, 4, 4, 2], [7, 3, 4, 5, 3])); // [3, 4]
// TODO: write unit tests for this function

const test = 'test';
export default test;
