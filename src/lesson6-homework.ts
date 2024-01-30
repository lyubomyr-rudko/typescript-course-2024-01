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
  function printPassangerInfo(passanger: TPassanger) {
    // TODO: use type narrowing to print the passanger info
    console.log(passanger.name);
    console.log(passanger.age);
    // TODO: print driverLicenseId if passanger is human
    if ('driverLicenseId' in passanger) {
      const human = passanger as THuman;
      console.log(human.driverLicenseId);
    }
    // TODO: print species if passanger is animal
    if ('species' in passanger) {
      const animal = passanger as TAnimal;
      console.log(animal.species);
    }
    console.log(passanger);
  }
  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: 'John',
    age: 33,
    driverLicenseId: 1,
  };
  const animal: TAnimal = {
    name: 'Rex',
    age: 7,
    species: 'Dalmatian',
  };
  printPassangerInfo(human);
  printPassangerInfo(animal);
  // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
  class Human implements THuman {
    constructor(
      public name: string,
      public age: number,
      public driverLicenseId: number,
    ) {}
  }

  class Animal implements TAnimal {
    constructor(
      public name: string,
      public age: number,
      public species: string,
    ) {}
  }

  const humanInstance = new Human('John', 33, 2);
  const animalInstance = new Animal('Buddy', 7, 'Dalmatian');

  function printPassangerInfo2(passanger: TPassanger) {
    // TODO: use type narrowing to print the passanger info
    console.log(passanger.name);
    console.log(passanger.age);
    // TODO: print driverLicenseId if passanger is human
    if (passanger instanceof Human) {
      const human = passanger as THuman;
      console.log(human.driverLicenseId);
    }
    // TODO: print species if passanger is animal
    if (passanger instanceof Animal) {
      const animal = passanger as TAnimal;
      console.log(animal.species);
    }
    console.log(passanger);
  }

  printPassangerInfo2(humanInstance);
  printPassangerInfo2(animalInstance);
  // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
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
    if (post.type === 'message') {
      console.log('comment: ', post.text);
    }
    if (post.type === 'image') {
      console.log('image: ', post.url);
    }
    if (post.type === 'comment') {
      console.log('message: ', post.text);
    }
  }

  // TODO: add missing type property to the objects
  printBlogPost({ text: 'abc', type: 'message' });
  printBlogPost({ url: 'abc', type: 'image' });
  printBlogPost({ text: 'abc', messageId: '123', type: 'comment' });
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
    optionalArray?: Message[];
    optionalFunc?: (id: number) => void;
    optionalNumber?: number;
    optionalObject?: { id: number; title: string };
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
    requiredFunc: (title: string) => void;
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
    requiredFunc: (title) => console.log(title),
    requiredAny: 'Hey',
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
  async function fetchUsers(): Promise<IUser[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // TODO: apply type to the result of this fetch function
    const users = await res.json();

    return users;
  }
  // All next tasks will be using a list of users
  const users = await fetchUsers();

  // TODO: extend interface IUser with property address of type IAddress
  interface IUser {
    address: IAddress;
  }
  // TODO: define IAddress interface with properties street, suite, city, zipcode, geo
  interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: object[];
  }
  // TODO: extend interface IUser with property company of type ICompany and define ICompany interface with properties name, catchPhrase, bs
  interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  interface IUser {
    company: ICompany;
  }
  // TODO: define function that returns array of user names in format { firstName: string, lastName: string}

  // TODO: use interface type for the function parameter
  function getUserNames(users: IUser[]) {
    console.log(users);
    return users.map(({ name }) => {
      const [firstName, ...lastName] = name
        .split(' ')
        .filter((n) => !n.includes('.'));
      return {
        firstName,
        lastName: lastName.join(' '),
      };
    });
  }
  console.log(getUserNames(users));

  // TODO: define a function that returns array of company names
  function getCompanyNames(users: IUser[]) {
    return users.map(({ company: { name } }) => name);
  }
  console.log(getCompanyNames(users));
  // TODO: define a function that returns a company name that has the longest catchPhrase
  function getCompanyNameWithLongestCatchPhrase(users: IUser[]) {
    if (!users.length) {
      throw new Error('Array of users should not be empty');
    }

    return users.reduce(
      (tar, { company: { name, catchPhrase } }) =>
        tar.catchPhrase.length > catchPhrase.length
          ? tar
          : { name, catchPhrase },
      { name: '', catchPhrase: '' },
    ).name;
  }
  console.log(getCompanyNameWithLongestCatchPhrase(users));
  // TODO: define a function that returns a list of users that have website ending with .org
  function getUsersWithDotOrgWebsites(users: IUser[]) {
    return users.filter(({ website }) => website.includes('.org'));
  }
  console.log(getUsersWithDotOrgWebsites(users));
  // TODO: define a funciton that returns a list of cities where users live, sorted by city name
  function getSortedUsersCityNames(users: IUser[]) {
    return users.map(({ address: { city } }) => city).sort();
  }
  console.log(getSortedUsersCityNames(users));
  // TODO: move all the functions above out of this function and export them
  // TODO: write unit tests for the 4 functions above
}
excerciseB();

interface IUser {
  id: number;
  name: string;
  email: string;
  website: string;
  address: IAddress;
  company: ICompany;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: object[];
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const mockUsers: IUser[] = [
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: [Object],
    },
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: [Object],
    },
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
];

export function getCompanyNames(users: IUser[]) {
  return users.map(({ company: { name } }) => name);
}

export function getCompanyNameWithLongestCatchPhrase(users: IUser[]) {
  if (!users.length) {
    throw new Error('Array of users should not be empty');
  }

  return users.reduce(
    (tar, { company: { name, catchPhrase } }) =>
      tar.catchPhrase.length > catchPhrase.length ? tar : { name, catchPhrase },
    { name: '', catchPhrase: '' },
  ).name;
}

export function getUsersWithDotOrgWebsites(users: IUser[]) {
  return users.filter(({ website }) => website.includes('.org'));
}

export function getSortedUsersCityNames(users: IUser[]) {
  return users.map(({ address: { city } }) => city).sort();
}
