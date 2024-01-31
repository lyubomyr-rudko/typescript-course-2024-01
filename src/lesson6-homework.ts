import React from 'react';
import PropTypes from 'prop-types';

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
  // TODO: define IUser interface with properties id, name, email, website

  // TODO: implement function to fetch list of users from https://jsonplaceholder.typicode.com/users
  async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // TODO: apply type to the result of this fetch function
    const users = await res.json();

    return users;
  }
  // All next tasks will be using a list of users
  const users = await fetchUsers();

  // TODO: extend interface IUser with property address of type IAddress
  // TODO: define IAddress interface with properties street, suite, city, zipcode, geo
  // TODO: extend interface IUser with property company of type ICompany and define ICompany interface with properties name, catchPhrase, bs

  // TODO: define function that returns array of user names in format { firstName: string, lastName: string}
  // TODO: use interface type for the function parameter
  function getUserNames(users: unknown) {
    console.log(users);
    return [];
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
