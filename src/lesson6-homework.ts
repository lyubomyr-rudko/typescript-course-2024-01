import React from 'react';
import PropTypes from 'prop-types';
// import fetch from 'node-fetch';

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
    console.log(passanger.name);
    console.log(passanger.age);

    // TODO: use type narrowing to print the passanger info
    // TODO: print driverLicenseId if passanger is human
    if ('driverLicenseId' in passanger) {
      console.log(passanger.driverLicenseId);
    }
    // TODO: print species if passanger is animal
    if ('species' in passanger) {
      console.log(passanger.species);
    }

    console.log(passanger);
  }
  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: 'John',
    age: 23,
    driverLicenseId: 24534,
  };
  const animal: TAnimal = {
    name: 'Rex',
    age: 3,
    species: 'dog',
  };
  printPassangerInfo(human);
  printPassangerInfo(animal);
  // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
  // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
}
// TODO: compile and run the code
exercise27();

// use discriminated union to narrow the type of the object
function exercise28() {
  // TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
  type TBlogMessage = {
    kind: 'message';
    text: string;
  };
  type TBlogImage = {
    kind: 'image';
    url: string;
  };
  type TBlogComment = {
    kind: 'comment';
    text: string;
    messageId: string;
  };

  type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;

  function printBlogPost(post: TBlogPost): void {
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
  printBlogPost({ kind: 'message', text: 'abc message' });
  printBlogPost({ kind: 'image', url: 'abc image' });
  printBlogPost({ kind: 'comment', text: 'abc comment', messageId: '123' });
}
// TODO: compile and run the code
exercise28();

// use interface to define props type for react component
function excerciseA() {
  class Message {
    constructor(public text: string) {}
  }

  type TOptionalObjectWithShape = {
    optionalProperty?: string;
    requiredProperty: number;
  };

  type TOptionalObject = {
    name: string;
    age: number;
  };

  interface IMyComponentProps {
    optionalBool?: boolean;
    optionalArray?: (string | number)[];
    optionalFunc?: () => void;
    optionalNumber?: number;
    optionalObject?: TOptionalObject;
    optionalString?: string;
    optionalSymbol?: symbol;
    optionalMessage?: Message;
    optionalEnum?: 'News' | 'Photos';
    optionalUnion?: string | number | Message;
    optionalArrayOf?: number[];
    optionalObjectWithShape?: TOptionalObjectWithShape;
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
      console.log('requiredFunc');
    },
    requiredAny: 'any',
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

  // TODO: define IAddress interface with properties street, suite, city, zipcode, geo
  interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  }

  interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  // TODO: extend interface IUser with property address of type IAddress
  interface IUser {
    address: IAddress;
  }
  // TODO: extend interface IUser with property company of type ICompany and define ICompany interface with properties name, catchPhrase, bs
  interface IUser {
    company: ICompany;
  }

  // TODO: define function that returns array of user names in format { firstName: string, lastName: string}
  // TODO: use interface type for the function parameter
  interface IUserName {
    firstName: string;
    lastName: string;
  }

  function getUserNames(users: IUser[]): IUserName[] {
    return users.map((user) => {
      const [firstName, lastName] = user.name.split(' ');

      return { firstName, lastName };
    });
  }
  console.log(getUserNames(users));

  // TODO: define a function that returns array of company names

  // TODO: define a function that returns a company name that has the longest catchPhrase

  // TODO: define a function that returns a list of users that have website ending with .org

  // TODO: define a funciton that returns a list of cities where users live, sorted by city name

  // TODO: move all the functions above out of this function and export them
  // TODO: write unit tests for the 4 functions above
}
excerciseB();
