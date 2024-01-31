import React from 'react';
import PropTypes from 'prop-types';

const test = 'test'; // this is mock export
export default test;

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

  // annotate the function to accept TPassanger type
  function printPassengerInfo(passenger: TPassenger) {
    // TODO: use type narrowing to print the passenger info

    // console.log((passenger as any).name);
    console.log(passenger.name);

    // console.log((passenger as any).age);
    console.log(passenger.age);
    // }

    // TODO: print driverLicenseId if passenger is human
    if ('driverLicenseId' in passenger) {
      // console.log((passenger as any).driverLicenseId);
      console.log(passenger.driverLicenseId);
    }

    // TODO: print species if passenger is animal
    if ('species' in passenger) {
      // console.log((passenger as any).species);
      console.log(passenger.species);
    }

    // console.log(passenger);
  }
  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: 'John',
    age: 25,
    driverLicenseId: 123456987,
  };
  const animal: TAnimal = {
    name: 'Rex',
    age: 4,
    species: 'dog',
  };
  printPassengerInfo(human);
  printPassengerInfo(animal);
  // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
  class Animal implements TAnimal {
    constructor(
      public name: string,
      public age: number,
      public species: string,
    ) {}
  }
  class Human implements THuman {
    constructor(
      public name: string,
      public age: number,
      public driverLicenseId: number,
    ) {}
  }

  function printPassengerInfo2(passenger: TPassenger) {
    // TODO: use type narrowing to print the passenger info

    // console.log((passenger as any).name);
    console.log(passenger.name);

    // console.log((passenger as any).age);
    console.log(passenger.age);
    // TODO: print driverLicenseId if passenger is human
    if (passenger instanceof Human) {
      // console.log((passenger as any).driverLicenseId);
      console.log(passenger.driverLicenseId);
    }

    // TODO: print species if passenger is animal
    if (passenger instanceof Animal) {
      // console.log((passenger as any).species);
      console.log(passenger.species);
    }
  }
  const human2 = new Human('Liza', 26, 125896347);
  const animal2 = new Animal('Judi', 6, 'Cat');
  printPassengerInfo2(human2);
  printPassengerInfo2(animal2);
}
// TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger

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

  function printBlogPost(post: TBlogPost) {
    // TODO: use discriminated union instead of prop check to narrow the type of the object
    if (post.kind === 'comment') {
      console.log('comment: ', post.text);
    }
    if (post.kind === 'image') {
      console.log('image: ', post.url);
    }
    if (post.kind === 'comment' || post.kind === 'message') {
      console.log('message: ', post.text);
    }
  }

  // TODO: add missing type property to the objects
  printBlogPost({ kind: 'message', text: 'abc' });
  printBlogPost({ kind: 'image', url: 'abc' });
  printBlogPost({ kind: 'comment', text: 'abc', messageId: '123' });
}
// TODO: compile and run the code
exercise28();

// use interface to define props type for react component
function excerciseA() {
  class Message {
    constructor(public text: string) {}
  }

  interface IUser {
    name: string;
    id: number;
  }
  interface IMember {
    optionalProperty?: string;
    requiredProperty: number;
  }
  interface IMyComponentProps {
    optionalBool?: boolean;
    optionalArray?: string[];
    optionalFunc?: (e: React.SyntheticEvent<EventTarget>) => void;
    optionalNumber?: number;
    optionalObject?: IUser;
    optionalString?: string;
    optionalSymbol?: symbol;
    optionalMessage?: Message;
    optionalEnum?: 'News' | 'Photos';
    optionalUnion?: string | number | Message;
    optionalArrayOf?: number[];
    optionalObjectWithShape?: IMember;
    requiredFunc: (user: IUser) => number;
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
    requiredFunc: (user) => user.id,
    requiredAny: undefined,
  });
  console.log(component);
}
excerciseA();

async function excerciseB() {
  // TODO: define IUser interface with properties id, name, email, website
  interface IUser {
    id: 1;
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

  // TODO: extend interface IUser with property address of type IAddress

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
  interface IUser {
    address: IAddress;
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
  interface UserNames {
    firstName: string;
    lastName: string;
  }

  // TODO: use interface type for the function parameter
  function getUserNames(users: IUser[]): UserNames[] {
    const res: UserNames[] = users.map((user) => {
      const name = user.name.split(' ');
      return {
        firstName: name[0],
        lastName: name[1],
      };
    });
    return res;
  }
  console.log(getUserNames(users));

  // TODO: define a function that returns array of company names
  function getCompanyNames(users: IUser[]): string[] {
    const res: string[] = users.map((user) => user.company.name);
    return res;
  }
  console.log(getCompanyNames(users));

  // TODO: define a function that returns a company name that has the longest catchPhrase
  function getLongestCompany(users: IUser[]): string {
    const companies: string[] = getCompanyNames(users);
    const company: string = companies.reduce((acc, curr) => {
      if (curr.length > acc.length) {
        acc = curr;
      }
      return acc;
    }, '');
    return company;
  }
  console.log(getLongestCompany(users));

  // TODO: define a function that returns a list of users that have website ending with .org
  function getWebsiteOrg(users: IUser[]): string[] {
    const websites: string[] = users.map((user) => user.website);
    const res: string[] = websites.filter((website) =>
      website.endsWith('.org'),
    );
    return res;
  }
  console.log(getWebsiteOrg(users));

  // TODO: define a function that returns a list of cities where users live, sorted by city name
  function getSortedCities(users: IUser[]): string[] {
    const cities: string[] = users.map((user) => user.address.city);
    const res: string[] = cities.sort((a, b) => a.localeCompare(b));
    return res;
  }
  console.log(getSortedCities(users));

  // TODO: move all the functions above out of this function and export them
  // TODO: write unit tests for the 4 functions above
}
excerciseB();
interface IUser {
  id: number;
  name: string;
  email: string;
  website: string;
}
export async function fetchUsers(): Promise<IUser[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: IUser[] = await res.json();

  return users;
}
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
interface IUser {
  address: IAddress;
}
interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface IUser {
  company: ICompany;
}
interface UserNames {
  firstName: string;
  lastName: string;
}

// TODO: use interface type for the function parameter
export function getUserNames(users: IUser[]): UserNames[] {
  const res: UserNames[] = users.map((user) => {
    const name = user.name.split(' ');
    return {
      firstName: name[0],
      lastName: name[1],
    };
  });
  return res;
}

// TODO: define a function that returns array of company names
export function getCompanyNames(users: IUser[]): string[] {
  const res: string[] = users.map((user) => user.company.name);
  return res;
}

export function getLongestCompany(users: IUser[]): string {
  const companies: string[] = getCompanyNames(users);
  const company: string = companies.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      acc = curr;
    }
    return acc;
  }, '');
  return company;
}

export function getWebsiteOrg(users: IUser[]): string[] {
  const websites: string[] = users.map((user) => user.website);
  const res: string[] = websites.filter((website) => website.endsWith('.org'));
  return res;
}

export function getSortedCities(users: IUser[]): string[] {
  const cities: string[] = users.map((user) => user.address.city);
  const res: string[] = cities.sort((a, b) => a.localeCompare(b));
  return res;
}
export const mockedData = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
];
