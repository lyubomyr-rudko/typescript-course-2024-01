import React from 'react';
import PropTypes from 'prop-types';
// const fs = require('fs');
// import { faker } from '@faker-js/faker';
// import fetch1 from './lesson6-mock-1';
// import fetch2 from './lesson6-mock-2';
// import fetch3 from './lesson6-mock-3';

const test = 'test'; // this is mock export
export default test;

// use type narrowing to print the passanger info
function exercise27() {
  // TODO: define THuman type with properties name, age, driverLicenseId
  type THuman = {
    name: string;
    age?: number;
    driverLicenseId?: string;
  };
  class Human {
    constructor(
      public name: string,
      public age?: number,
      public driverLicenseId?: string,
    ) {}
  }
  // TODO: define TAnimal type with properties name, age, species
  type TAnimal = {
    name: string;
    age?: number;
    species?: string;
  };
  class Animal {
    constructor(
      public name: string,
      public age?: number,
      public species?: string,
    ) {}
  }
  // TODO: define TPassanger type as union of THuman and TAnimal
  type TPassanger = THuman | TAnimal | Human | Animal;

  // annotate the function to accept TPassanger type
  function printPassangerInfo(passanger: TPassanger) {
    // TODO: use type narrowing to print the passanger info
    console.log(`\n====== Passanger Info ======`);
    console.log((passanger as TPassanger).name);
    console.log((passanger as TPassanger).age);
    if ('driverLicenseId' in passanger || passanger instanceof Human) {
      // TODO: print driverLicenseId if passanger is human
      console.log((passanger as THuman).driverLicenseId);
    }
    if ('species' in passanger || passanger instanceof Animal) {
      // TODO: print species if passanger is animal
      console.log((passanger as TAnimal).species);
    }
    console.log(passanger);
  }
  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: 'John',
    age: 45,
    driverLicenseId: 'abc123',
  };
  const human1 = new Human('Stan', 45, 'def456');
  const animal: TAnimal = {
    name: 'Rex',
    age: 4,
    species: 'French Bulldog',
  };
  const animal1 = new Animal('TRex', 3, 'Papuga');
  // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
  printPassangerInfo(human);
  printPassangerInfo(animal);
  // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
  printPassangerInfo(human1);
  printPassangerInfo(animal1);
}
// TODO: compile and run the code
exercise27();

// use discriminated union to narrow the type of the object
function exercise28() {
  // TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
  type TBlogMessage = {
    type: 'message';
    text: string;
  };
  type TBlogImage = {
    type: 'image';
    url: string;
  };
  type TBlogComment = {
    type: 'comment';
    text: string;
    messageId: string;
  };

  type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;

  function printBlogPost(post: TBlogPost) {
    // TODO: use discriminated union instead of prop check to narrow the type of the object
    if ('messageId' in post) {
      console.log('comment: ', post.text);
    }
    if ('url' in post) {
      console.log('image: ', post.url);
    }
    if ('text' in post) {
      console.log('message: ', post.text);
    }
  }

  // TODO: add missing type property to the objects
  printBlogPost({ type: 'message', text: 'abc' });
  printBlogPost({ type: 'image', url: '/abc' });
  printBlogPost({ type: 'comment', text: 'abc', messageId: '123' });
}
// TODO: compile and run the code
exercise28();

// use interface to define props type for react component
// WAIT NEXT LESSON FOR  RUN
function excerciseA() {
  class Message {
    constructor(public text: string) {}
  }

  interface IMyComponentProps {
    optionalBool?: boolean;
  }
  class MyComponent extends React.Component<IMyComponentProps> {
    render() {
      return React.createElement('div', null, 'hello');
    }

    static propTypes = {
      optionalArray: PropTypes.array,
      optionalBool: PropTypes.bool,
      optionalFunc: PropTypes.func,
      optionalNumber: PropTypes.number,
      optionalObject: PropTypes.object,
      optionalString: PropTypes.string,
      optionalSymbol: PropTypes.symbol,

      optionalMessage: PropTypes.instanceOf(Message),

      // prop is limited to specific values
      optionalEnum: PropTypes.oneOf(['News', 'Photos']),

      // object that could be one of many types
      optionalUnion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Message),
      ]),

      // array of a certain type
      optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

      // object taking on a particular shape
      optionalObjectWithShape: PropTypes.shape({
        optionalProperty: PropTypes.string,
        requiredProperty: PropTypes.number.isRequired,
      }),

      requiredFunc: PropTypes.func.isRequired,

      // A value of any data type
      requiredAny: PropTypes.any.isRequired,
    };
  }

  const component = new MyComponent({ optionalBool: true });
  console.log(component);
}
excerciseA();

async function excerciseB() {
  // TODO: move all the functions above out of this function and export them
  // TODO: write unit tests for the 4 functions above
  async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // TODO: apply type to the result of this fetch function
    if (!res.ok) throw new Error('Failed to fetch user data');

    const users: IUser | IUser[] = await res.json();
    return users;
  }
  // All next tasks will be using a list of users
  return await fetchUsers();
}

// TODO: define IUser interface with properties id, name, email, website
export interface IUser {
  id: string;
  name: string;
  email: string;
  website: string;
}

// TODO: implement function to fetch list of users from https://jsonplaceholder.typicode.com/users

// const users = fetch1; // fetch2  fetch3 for get result

// TODO: extend interface IUser with property address of type IAddress
type TAddress = {
  street?: string;
  city?: string;
  zipcode?: number;
  geo: string;
};
interface IAddress extends IUser {
  address: TAddress;
}

// TODO: define IAddress interface with properties street, suite, city, zipcode, geo
interface IAddress {
  street?: string;
  city?: string;
  zipcode?: number;
  geo?: string;
}

// TODO: extend interface IUser with property company of type ICompany and define ICompany interface with properties name, catchPhrase, bs
// type TCompany = {
//   name?: string;
//   catchPhrase?: string;
//   bs?: string;
// };
export interface ICompany extends IUser {
  // company: TCompany;
  company: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

// TODO: define function that returns array of user names in format { firstName: string, lastName: string}
// TODO: use interface type for the function parameter
type TUserSplitted = {
  firstName: string;
  lastName: string;
};
export function getUserNames(users: IUser | IUser[]): TUserSplitted[] {
  const testIsArray = Array.isArray(users);
  const splitFullname = (fullname: string): TUserSplitted => {
    const splitted = fullname.split(' ');
    // const pattern = /^(?:\S+\.\s+)?(\S+)\s+(\S+)$/;
    // const splitted = fullname.match(pattern) || '';
    return {
      firstName: splitted[0], // splitted[0],
      lastName: splitted[1], // splitted[1],
    };
  };

  return testIsArray
    ? users.map((user) => splitFullname(user.name))
    : [splitFullname(users.name)];
}

// TODO: define a function that returns array of company names
function getCompanyNames(input: ICompany | ICompany[]): string[] {
  const testIsArray = Array.isArray(input);
  return testIsArray ? input.map((el) => el.company.name || '') : [''];
}

// TODO: define a function that returns a company name that has the longest catchPhrase
export function getLongestCatchPhaseCompany(
  input: ICompany | ICompany[],
): string {
  const testIsArray = Array.isArray(input);
  let max = 0;
  let maxIndex = 0;
  if (!testIsArray) return input.company.name || '';
  input.forEach((el: ICompany, i: number) => {
    const testType: boolean = typeof el.company.catchPhrase === 'undefined';
    const length = testType ? 0 : el.company.catchPhrase?.length; // bad work
    const safetyInt = parseInt(length + '');
    if (safetyInt > max) {
      max = safetyInt;
      maxIndex = i;
    }
  });
  return input[maxIndex].company.name || '';
}

// TODO: define a function that returns a list of users that have website ending with .org
export function getOrgWebsites(input: ICompany | ICompany[]): string[] {
  const testIsArray = Array.isArray(input);
  const pattern = /\.org$/;
  // const isORG = (email:string):boolean => email.includes('.org')
  if (!testIsArray) {
    const isOrg = pattern.test(input.website);
    return isOrg ? [input.website] : [];
  } else {
    return input
      .filter((el) => pattern.test(el.website))
      .map((user) => user.name);
  }
}

// TODO: define a funciton that returns a list of cities where users live, sorted by city name
export function getCityes(input: IAddress | IAddress[]): string[] {
  const testIsArray = Array.isArray(input);
  const cities = testIsArray
    ? input.map((el) => el.address.city || '')
    : [input.address.city || ''];
  return cities.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

async function runFetchLogs() {
  const data = await excerciseB();
  console.log('>>> USERNAMES: \n', getUserNames(data));
  console.log(
    '>>> COMPANIES: \n',
    getCompanyNames(data as unknown as ICompany),
  );
  console.log(
    '>>> LONGEST CatchPhazeCompany:\n',
    getLongestCatchPhaseCompany(data as unknown as ICompany),
  );
  console.log(
    '>>> USERS with website ending *.org: \n',
    getOrgWebsites(data as unknown as ICompany),
  );
  console.log('>>> CITIES: \n', getCityes(data as unknown as IAddress));
}
runFetchLogs();

//  Generate Mocks for tests
// function mockFetchDataGenerate() {
//   const rand = Math.round(Math.random() * 10) + 10;
//   console.log('RAND: ', rand);

//   const generateRandomUserWebsite = () => {
//     const username = faker.internet.userName();
//     const domain = faker.internet.domainName();
//     const tld = faker.internet.domainSuffix();

//     return `http://${username}.${domain}.${tld}`;
//   };

//   let data = [];
//   for (let i = 0; i < rand; i++) {
//     const fakeData = {
//       id: faker.string.uuid(),
//       name: faker.person.fullName(),
//       email: faker.internet.email(),
//       username: faker.internet.userName(),

//       address: {
//         street: faker.location.street(),
//         suite: faker.location.buildingNumber(),
//         city: faker.location.city(),
//         zipcode: faker.location.zipCode(),
//         geo: faker.location.nearbyGPSCoordinate() || {
//           latitude: faker.location.latitude(),
//           longitude: faker.location.longitude(),
//         },
//       },
//       phone: faker.phone.number(),
//       website: generateRandomUserWebsite(),
//       company: {
//         name: faker.company.name(),
//         catchPhrase: faker.company.catchPhrase(),
//         bs: faker.company.buzzPhrase(),
//       },
//     };
//     console.log('____', fakeData);
//     data.push(fakeData);
//   }
//   // const data = Array(rand).map((el) => {
//   //   const fakeData = {
//   //     id: faker.string.uuid(),
//   //     name: faker.person.fullName(),
//   //     email: faker.internet.email(),
//   //     username: faker.internet.userName(),

//   //     address: {
//   //       street: faker.location.street(),
//   //       suite: faker.location.buildingNumber(),
//   //       city: faker.location.city(),
//   //       zipcode: faker.location.zipCode(),
//   //       geo: faker.location.nearbyGPSCoordinate() || {
//   //         latitude: faker.location.latitude(),
//   //         longitude: faker.location.longitude(),
//   //       },
//   //     },
//   //     phone: faker.phone.number(),
//   //     website: generateRandomUserWebsite(),
//   //     company: {
//   //       name: faker.company.name(),
//   //       catchPhrase: faker.company.catchPhrase(),
//   //       bs: faker.company.buzzPhrase(),
//   //     },
//   //   };
//   //   console.log('____', fakeData);

//   //   return fakeData;
//   // });
//   console.log(data.length, 'DATA: ', data);

//   return data;
// }

// fs.writeFileSync(
//   './src/lesson6-mock-1.json',
//   JSON.stringify(mockFetchDataGenerate(), null, 2),
// );
// fs.writeFileSync(
//   './src/lesson6-mock-2.json',
//   JSON.stringify(mockFetchDataGenerate(), null, 2),
// );
// fs.writeFileSync(
//   './src/lesson6-mock-3.json',
//   JSON.stringify(mockFetchDataGenerate(), null, 2),
// );
