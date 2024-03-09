import React from 'react';
import PropTypes from 'prop-types';

const test = 'test'; // this is mock export
export default test;

console.log('Task27');
// use type narrowing to print the passenger info
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
  // TODO: define TPassenger type as union of THuman and TAnimal
  type TPassenger = THuman | TAnimal;

  // annotate the function to accept TPassenger type
  function printPassengerInfo(passenger: TPassenger) {
    // TODO: use type narrowing to print the passenger info
    console.log(passenger.name);
    console.log(passenger.age);
    // TODO: print driverLicenseId if passenger is human
    if ('driverLicenseId' in passenger) {
      console.log(passenger.driverLicenseId);
    }
    // TODO: print species if passenger is animal
    if ('species' in passenger) {
      console.log(passenger.species);
    }
    console.log(passenger);
  }
  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: 'Nikita',
    age: 23,
    driverLicenseId: 1,
  };
  const animal: TAnimal = {
    name: 'Rex',
    age: 2,
    species: 'Mops',
  };
  printPassengerInfo(human);
  printPassengerInfo(animal);
  // TODO: Implement function printPassengerInfo using instanceof operator to narrow the type of the passenger
  // TODO: Add implementation of the printPassengerInfo using property check to narrow the type of the passenger
}
// TODO: compile and run the code
exercise27();

console.log('exercise28');
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
    switch (post.type) {
      case 'message':
        console.log('message:', post.text);
        break;
      case 'image':
        console.log('image', post.url);
        break;
      case 'comment':
        console.log('comment: ', post.text);
        break;
      default:
        break;
    }
  }

  // TODO: add missing type property to the objects
  printBlogPost({ text: 'abc', type: 'message' });
  printBlogPost({ url: 'abd', type: 'image' });
  printBlogPost({ text: 'abe', messageId: '123', type: 'comment' });
}
// TODO: compile and run the code
exercise28();

// use interface to define props type for react component
console.log('ExerciseA');
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

// TODO: implement function to fetch list of users from https://jsonplaceholder.typicode.com/users
async function fetchUsers(): Promise<IUser[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // TODO: apply type to the result of this fetch function
  const users = await res.json();

  return users;
}
fetchUsers();
// TODO: define a function that returns a list of cities where users live, sorted by city name
export function sortUserCities(users: IUser[]): string[] {
  return users.map(({ address }) => address.city).sort();
}

// All next tasks will be using a list of users

// TODO: define function that prints user information to console
// function getUserNamesInfo(users: IUser[]): void {
//   console.log(users);
//   // return []; // No need to return anything
// }

// TODO: define function that returns array of user names in format { firstName: string, lastName: string}
export function getUserNames(
  users: IUser[],
): { firstName: string; lastName: string }[] {
  return users.map(({ name }) => {
    const [firstName, secondName] = name.split(' ');
    return { firstName, lastName: secondName }; // Changed secondName to lastName for clarity
  });
}

// TODO: define a function that returns array of company names
export function getCompanyNames(companies: IUser[]): string[] {
  return companies.map(({ company }) => company.name);
}

// TODO: define a function that returns a company name that has the longest catchPhrase
export function getLongestCompanyPhrase(companies: IUser[]): string {
  if (companies.length === 0) {
    throw new Error('Array of users should not be empty');
  }

  let longestPhraseLength = 0;
  let longestCompanyName = '';

  companies.forEach(({ company }) => {
    if (company.catchPhrase.length > longestPhraseLength) {
      longestPhraseLength = company.catchPhrase.length;
      longestCompanyName = company.name;
    }
  });

  return longestCompanyName;
}

// TODO: define a function that returns a list of users that have website ending with .org
export function getUsersWithDotOrgWebsites(users: IUser[]): IUser[] {
  return users.filter(({ website }) => website.endsWith('.org'));
}

// TODO: move all the functions above out of this function and export them

// TODO: write unit tests for the 4 functions above
