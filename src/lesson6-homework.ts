import React from 'react';
import PropTypes from 'prop-types';

const test = 'test'; // this is mock export
export default test;

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
  function printPassangerInfo(passanger: TPassanger): void {
    // TODO: use type narrowing to print the passanger info
    // TODO: print driverLicenseId if passanger is human
    // console.log((passanger as any).driverLicenseId);
    // TODO: print species if passanger is animal
    // console.log((passanger as any).species);
    console.log(passanger.age);
    console.log(passanger.name);
    if ('driverLicenseId' in passanger) {
      console.log(passanger.driverLicenseId);
    }
    if ('species' in passanger) {
      console.log(passanger.species);
    }
    console.log(passanger);
  }
  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: 'John',
    age: 25,
    driverLicenseId: 4823024,
  };
  const animal: TAnimal = {
    name: 'Rex',
    age: 5,
    species: 'Dog',
  };
  printPassangerInfo(human);
  printPassangerInfo(animal);
  // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
  // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
  class Human2 {
    constructor(
      public name: string,
      public age: number,
      public driverLicenseId: number,
    ) {}
  }
  class Animal2 {
    constructor(
      public name: string,
      public age: number,
      public species: string,
    ) {}
  }
  type TPassanger2 = Human2 | Animal2;

  function printPassangerInfoinstanceof(passanger: TPassanger2): void {
    console.log(passanger.age);
    console.log(passanger.name);
    if (passanger instanceof Human2) {
      console.log(passanger.driverLicenseId);
    }
    if (passanger instanceof Animal2) {
      console.log(passanger.species);
    }
    console.log(passanger);
  }
  const human2 = new Human2('alex', 26, 3253125);
  const animal2 = new Animal2('alex', 6, 'cat');

  printPassangerInfoinstanceof(human2);
  printPassangerInfoinstanceof(animal2);

  // function printPassangerInfotype(passanger: TPassanger): void {
  //   console.log(passanger.age);
  //   console.log(passanger.name);
  //   if (typeof passanger.driverLicenseId !== 'undefined') {
  //     console.log(passanger.driverLicenseId);
  //   }
  //   if (typeof passanger.species !== 'undefined') {
  //     console.log(passanger.species);
  //   }
  //   throw new TypeError('value must be an object');
  //   console.log(passanger);
  // }
  // printPassangerInfotype(human);
  // printPassangerInfotype(animal);
}
// TODO: compile and run the code
exercise27();

// use discriminated union to narrow the type of the object
function exercise28() {
  // TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'image'
  type TBlogMessage = {
    type: 'message';
    text: string;
  };
  type TBlogImage = {
    type: 'image';
    url: string;
  };
  type TBlogComment = {
    type: 'image';
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
  printBlogPost({ type: 'image', url: 'abc' });
  printBlogPost({ type: 'image', text: 'abc', messageId: '123' });
}
// TODO: compile and run the code
exercise28();

// use interface to define props type for react component
function excerciseA() {
  class Message {
    constructor(public text: string) {}
  }

  interface IMyComponentProps {
    optionalBool?: boolean;
    optionalArray?: [];
    optionalFunc?: () => void;
    optionalNumber?: number;
    optionalObject?: { name: string };
    optionalString?: string;
    optionalSymbol?: symbol;
    optionalMessage?: Message;
    optionalEnum?: 'News' | 'Photos';
    optionalUnion?: string | number | Message;
    optionalArrayOf?: number[];
    optionalObjectWithShape?: {
      optionalProperty?: string;
      requiredProperty: number;
    };
    requiredFunc: () => void;
    requiredAny: unknown;
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

  const component = new MyComponent({
    optionalBool: true,
    requiredFunc() {
      console.log(1);
    },
    requiredAny: 3,
  });
  console.log(component);
}
excerciseA();

async function excerciseB() {
  // TODO: define IUser interface with properties id, name, email, website
  interface IUser {
    id: number;
    name: string;
    email: string;
    website: string;
    address: IAddress;
    company: ICompany;
  }

  // TODO: implement function to fetch list of users from https://jsonplaceholder.typicode.com/users
  async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // TODO: apply type to the result of this fetch function
    const users: IUser[] = await res.json();

    return users;
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
    // geo: {};
  }
  // TODO: extend interface IUser with property company of type ICompany and define ICompany interface with properties name, catchPhrase, bs
  interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  // TODO: define function that returns array of user names in format { firstName: string, lastName: string}
  // TODO: use interface type for the function parameter
  function getUserNames(users: IUser[]): {
    firstname: string;
    lastname: string;
  }[] {
    return users.map((user) => {
      const fullName = user.name.split(' ');
      const firstname = fullName[0];
      const lastname = fullName.slice(1).join(' ');
      return {
        firstname,
        lastname,
      };
    });
  }
  console.log(getUserNames(users));

  // TODO: define a function that returns array of company names
  function getCompanyName(users: IUser[]): string[] {
    return users.map((user) => {
      return user.company.name;
    });
  }
  console.log(getCompanyName(users));

  // TODO: define a function that returns a company name that has the longest catchPhrase
  function getCompanyLongestName(users: IUser[]): string {
    const companyNames = getCompanyName(users);

    const companyLongestName = companyNames.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, companyNames[0]);
    return companyLongestName;
  }
  console.log(getCompanyLongestName(users));

  // TODO: define a function that returns a list of users that have website ending with .org
  function getUsersOrg(users: IUser[]): string[] {
    const result: IUser[] = users.filter((user) =>
      user.website.endsWith('.org'),
    );
    return result.map((user) => user.name);
  }
  console.log(getUsersOrg(users));

  // TODO: define a funciton that returns a list of cities where users live, sorted by city name
  function getNameCity(users: IUser[]): string[] {
    const result = users.map((user) => user.address.city).sort();
    return result;
  }
  console.log(getNameCity(users));
  // TODO: move all the functions above out of this function and export them
  // TODO: write unit tests for the 4 functions above
}
excerciseB();
