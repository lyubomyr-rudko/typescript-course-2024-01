// Use double assertion
function exercise35() {
  interface TUser {
    name: string;
    title: string;
    email: string;
  }
  interface TProduct {
    title: string;
    price: number;
    quantity: number;
  }

  const user: TUser = {
    name: 'John',
    title: 'Developer',
    email: 'asd@asdf.com',
  };
  let product: TProduct = {
    title: 'Laptop',
    price: 1200,
    quantity: 3,
  };

  product = user as unknown as TProduct;

  console.log(product);
}
exercise35();

// Use this parameter type annotation to fix the error in this code
function exercise36() {
  const data = {
    firstName: 'Joe',
    lastName: 'Doe',
    age: 30,
    role: 'Developer',
  };

  type TData = {
    name: string;
    age: number;
    role: string;
  };

  function toString(this: TData) {
    return `${this.name}, ${this.age}, ${this.role}`;
  }
  data.toString = toString;
  console.log(data.toString());
  // console.log(toString.call(data)); // error
  console.log(toString.call({ name: 'John', age: 40, role: 'Manager' }));
}
exercise36();

// Use generic constraints
function exercise37() {
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  function addGreeting<T extends IPerson>(
    obj: T,
  ): T & { sayHello: () => string } {
    return {
      ...obj,
      sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
      },
    };
  }

  const person = addGreeting({
    firstName: 'Joe',
    lastName: 'Smith',
    age: 30,
    email: 'john@sample.com',
  });

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

  let fetchResult: GroupDocument[] | null = null;

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
    const storedFetchResults = fetchResult;

    userNames.forEach((name) => {
      const result = storedFetchResults.find(
        (obj: GroupDocument) => obj.name === name,
      );

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
  console.log(user);

  // for each property of the user object, print its type using js typeof operator
  function printAllUserPropTypes() {
    Object.keys(user).forEach((key) => {
      console.log(typeof user[key as keyof typeof user]);
    });
  }
  printAllUserPropTypes();

  type TUser = typeof user;
  function getUserAddress(user: TUser): typeof user.address {
    return user.address;
  }
  console.log(getUserAddress(user));

  function getCoordinates(
    user: TUser,
  ): typeof user.company.address.coordinates {
    return user.company.address.coordinates;
  }
  console.log(getCoordinates(user));
}
exercise39();

// Write the generic function to remove the duplicates from the array
function removeDuplicates<T>(arr: T[]): T[] {
  const result: T[] = [];
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));

// Write a function that returns an intersection of two arrays, use generics
function getIntersection<T>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = [];
  arr1.forEach((item) => {
    if (arr2.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}
console.log(getIntersection([8, 3, 2, 4, 2], [7, 3, 4, 5, 3])); // [3, 4]

const test = 'test';
export default test;
