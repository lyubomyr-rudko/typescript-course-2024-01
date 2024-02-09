// Read the following typescript documentation:
// ++1. https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// ++2. https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// ++3. https://www.typescriptlang.org/docs/handbook/2/functions.html

// ++TODO: (important!) remove all // eslint-disable-next-line comments

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
    name: 'Alex',
    title: 'AlexTitle',
    email: 'alex@gmail.com',
  };
  let product: TProduct = {
    title: 'product',
    price: 100,
    quantity: 3,
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
  type TDataUser = {
    [key: string]: string | number;
  };

  const data: TDataUser = {
    firstName: 'Joe',
    lastName: 'Doe',
    age: 30,
    role: 'Developer',
  };

  type TUser = {
    name: string;
    age: number;
    role: string;
  };

  // TODO: add this param annotation, to enforce that this function
  // can only be called on an object with name, age and role properties
  function toString(this: TUser): string {
    // TODO: remove the following line
    // return '';
    // TODO: uncomment the following line, fix the error
    return `${this.name}, ${this.age}, ${this.role}`;
  }
  data.toString = toString;
  // TODO: run the code and observe the error
  console.log(data + '');
  console.log(data.toString());

  // TODO: add required properties to the data object, fixing the error
  data.name = `${data.firstName} ${data.lastName}`;

  console.log(data + '');
  console.log(data.toString());
}
exercise36();

// Use generic constraints
function exercise37() {
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  interface IPersonGreeting {
    (): string;
  }

  // TODO: implement method that adds addGreeting method to the object
  // TODO: add generic constraints to enforce type checking, add return type annotation
  function addGreeting<T extends IPerson>(
    obj: T,
  ): T & { sayHello: IPersonGreeting } {
    // return obj; // remove this line

    // TODO: implement the method sayHello that returns a greeting string
    // TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    // TODO: make sure the obj is not modified, and new object is returned
    function sayHello(): string {
      return `Hello ${obj.firstName} ${obj.lastName}!`;
    }

    return {
      ...obj,
      sayHello,
    };
  }

  const person = addGreeting({
    firstName: 'Joe',
    lastName: 'Smith',
    age: 30,
    email: 'john@sample.com',
  });

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
  // let fetchResult: GroupDocument[] = null as unknown as GroupDocument[];

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
    // NOTE: observe that type narrowing works here
    console.log(fetchResult.length);

    userNames.forEach((name) => {
      // TOOD: explain why type narrowing does not work here and fix the error (and remove `any` type annotations)

      // !--- because of callback function. TypeScript can`t be sure that this callback will run syncronously ---!

      // TODO: remove this line
      const result = fetchResult?.find((obj) => obj.name === name);

      if (result) {
        console.log(result.data);
      }
    });
  }
}
exercise38();

// Use typeof operator
function exercise39() {
  // for this exercise, use the following data
  const user = {
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
  // console.log(user);

  // TODO: for each property of the user object, print its type using js typeof operator
  function printAllUserPropTypes() {
    // TODO: get list of own keys of the user object
    const userKeys: string[] = Object.keys(user);

    // TODO: iterate over the keys with foreach
    userKeys.forEach((key) => {
      // TODO: console.log the typeof for each property
      console.log(typeof user[key as keyof typeof user]);
    });
  }
  printAllUserPropTypes();

  // TODO: create function that returns address of the user object,
  // TODO: set the return type of that function using typeof operator
  function getUserAddress(): typeof user.address {
    return user.address;
  }
  console.log(getUserAddress());

  // TODO: create function that returns coordinates of the user company address
  // user -> company -> address -> coordinates
  // TODO: set the return type of that function using typeof operator
  function getCoordinates(): typeof user.company.address.coordinates {
    return user.company.address.coordinates;
  }
  console.log(getCoordinates());
}
exercise39();

// Write the generic function to remove the duplicates from the array
export function removeDuplicates<T>(arr: T[]): T[] {
  // TODO: reimplement this code, do not use Set data structure
  return arr.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
// TODO: write unit tests for this function

// Write a function that returns an intersection of two arrays, use generics
export function getIntersection<T>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = [];

  const maxArrayLength: number = Math.max(arr1.length, arr2.length);
  const items: T[] = [...arr1, ...arr2];

  for (let i = 0; i < maxArrayLength; i++) {
    const currentItem: T = items[i];

    if (arr1.includes(currentItem) && arr2.includes(currentItem)) {
      result.push(currentItem);
    }
  }

  return result;
}
console.log(getIntersection([8, 3, 2, 4, 2], [7, 3, 4, 5, 3])); // [3, 4]
// console.log(getIntersection(['a', 'v', 'r', 'e'], ['a', 't', 'e', 'q'])); // ['a', 'e']
// TODO: write unit tests for this function

const test = 'test';
export default test;
