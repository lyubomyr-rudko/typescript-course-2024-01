// import React from 'react';
// import PropTypes from 'prop-types';

// import { StringLiteral } from 'typescript';

// const test = 'test'; // this is mock export
// // export default test;

// use type narrowing to print the passanger info
function exercise27() {
  // TODO: define THuman type with properties name, age, driverLicenseId
  type THuman = {
    name: string;
    age: number;
    driverLicenseId: number;
  };
  // TODO: define TAnimal type with properties name, age, species
  type TAnimal = {
    name: string;
    age: number;
    species: string;
  };
  // TODO: define TPassanger type as union of THuman and TAnimal
  type TPassanger = THuman | TAnimal;

  // annotate the function to accept TPassanger type
  function printPassangerInfo(passanger: TPassanger) {
    // TODO: use type narrowing to print the passanger info
    console.log((passanger as TPassanger).name);
    console.log((passanger as TPassanger).age);
    // TODO: print driverLicenseId if passanger is human
    if (passanger as THuman) {
      console.log((passanger as THuman).driverLicenseId);
    }
    if (passanger as TAnimal) {
      console.log((passanger as TAnimal).species);
    }
    // console.log((passanger as THuman).driverLicenseId);
    // TODO: print species if passanger is animal
    // console.log((passanger as TAnimal).species);
    console.log(passanger);
  }
  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: 'John',
    age: 21,
    driverLicenseId: 2345432,
  };
  const animal: TAnimal = {
    name: 'Rex',
    age: 4,
    species: 'shepherd',
  };
  printPassangerInfo(human);
  printPassangerInfo(animal);
  // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
  // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
  function printPassangerInfoV2(passanger: TPassanger) {
    console.log((passanger as TPassanger).name);
    console.log((passanger as TPassanger).age);
    if ('driverLicenseId' in passanger) {
      console.log(passanger.driverLicenseId);
    }
    if ('species' in passanger) {
      console.log(passanger.species);
    }
    console.log(passanger);
  }
  printPassangerInfoV2(human);
  printPassangerInfoV2(animal);
}
// TODO: compile and run the code
exercise27();

// use discriminated union to narrow the type of the object
function exercise28() {
  // TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
  type TBlogMessage = {
    text: string;
    kind: 'message';
  };
  type TBlogImage = {
    url: string;
    kind: 'image';
  };
  type TBlogComment = {
    text: string;
    messageId: string;
    kind: 'comment';
  };

  type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;

  function printBlogPost(post: TBlogPost) {
    // TODO: use discriminated union instead of prop check to narrow the type of the object
    if (post.kind === 'comment') {
      console.log('comment: ', post.text);
    }
    if (post.kind === 'image') {
      console.log('image: ', post.url);
    }
    if (post.kind === 'message') {
      console.log('message: ', post.text);
    }
  }

  // TODO: add missing type property to the objects
  printBlogPost({
    text: 'abc',
    kind: 'message',
  });
  printBlogPost({
    url: 'abc',
    kind: 'image',
  });
  printBlogPost({
    text: 'abc',
    messageId: '123',
    kind: 'comment',
  });
}
// TODO: compile and run the code
exercise28();

// use interface to define props type for react component
// function excerciseA() {
//   class Message {
//     constructor(public text: string) {}
//   }

//   interface IMyComponentProps {
//     optionalBool?: boolean;
//   }
//   class MyComponent extends React.Component<IMyComponentProps> {
//     render() {
//       return React.createElement('div', null, 'hello');
//     }

//     static propTypes = {
//       optionalArray: PropTypes.array,
//       optionalBool: PropTypes.bool,
//       optionalFunc: PropTypes.func,
//       optionalNumber: PropTypes.number,
//       optionalObject: PropTypes.object,
//       optionalString: PropTypes.string,
//       optionalSymbol: PropTypes.symbol,

//       optionalMessage: PropTypes.instanceOf(Message),

//       // prop is limited to specific values
//       optionalEnum: PropTypes.oneOf(['News', 'Photos']),

//       // object that could be one of many types
//       optionalUnion: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.instanceOf(Message),
//       ]),

//       // array of a certain type
//       optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

//       // object taking on a particular shape
//       optionalObjectWithShape: PropTypes.shape({
//         optionalProperty: PropTypes.string,
//         requiredProperty: PropTypes.number.isRequired,
//       }),

//       requiredFunc: PropTypes.func.isRequired,

//       // A value of any data type
//       requiredAny: PropTypes.any.isRequired,
//     };
//   }

//   const component = new MyComponent({ optionalBool: true });
//   console.log(component);
// }
// excerciseA();

async function excerciseB() {
  // TODO: define IUser interface with properties id, name, email, website
  interface IUser {
    id: number;
    name: string;
    email: string;
    website: string;
  }

  // TODO: implement function to fetch list of users from https://jsonplaceholder.typicode.com/users
  async function fetchUsers(): Promise<unknown> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // TODO: apply type to the result of this fetch function
    const users = await res.json();

    return users as unknown;
  }
  // All next tasks will be using a list of users
  const users = await fetchUsers();

  // TODO: extend interface IUser with property address of type IAddress
  // TODO: define IAddress interface with properties street, suite, city, zipcode, geo
  interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: string;
  }
  interface IUserWithAdress extends IUser {
    adress: IAddress;
  }
  // TODO: extend interface IUser with property company of type ICompany and define ICompany interface with properties name, catchPhrase, bs
  interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  interface IUserWithAdressAndCompany extends IUserWithAdress {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map: any;
    company: ICompany;
  }

  // TODO: define function that returns array of user names in format { firstName: string, lastName: string}
  // TODO: use interface type for the function parameter
  function getUserNames(users: IUserWithAdressAndCompany) {
    console.log(users);
    const res: [] = users.map((user: IUser) => user.name);
    return res;
  }
  console.log(getUserNames(users as IUserWithAdressAndCompany));

  // TODO: define a function that returns array of company names
  function getCompanyName(users: IUserWithAdressAndCompany) {
    const res: [] = users.map(
      (user: IUserWithAdressAndCompany) => user.company.name,
    );
    return res;
  }
  console.log(getCompanyName(users as IUserWithAdressAndCompany));

  // TODO: define a function that returns a company name that has the longest catchPhrase
  function getCompanyNameCatchPrice(users: IUserWithAdressAndCompany) {
    const res: [] = users.map(
      (user: IUserWithAdressAndCompany) => user.company.catchPhrase,
    );
    return res;
  }
  console.log(getCompanyNameCatchPrice(users as IUserWithAdressAndCompany));

  // TODO: define a function that returns a list of users that have website ending with .org
  function getCompanyDomen(users: IUserWithAdressAndCompany) {
    const res: IUser = users.map((user: IUser) => user.email);
    return res;
  }
  console.log(getCompanyDomen(users as IUserWithAdressAndCompany));

  // TODO: define a funciton that returns a list of cities where users live, sorted by city name

  // TODO: move all the functions above out of this function and export them
  // TODO: write unit tests for the 4 functions above
}
excerciseB();
