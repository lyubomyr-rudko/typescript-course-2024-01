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

  const usersNames = getUserNames(users);

  // TODO: define a function that returns array of company names
  function getUserCompanies(users: IUser[]): string[] {
    return users.map((user) => {
      return user.company.name;
    });
  }

  const usersCompanies = getUserCompanies(users);

  // TODO: define a function that returns a company name that has the longest catchPhrase
  function getLongestCompany(users: IUser[]): string {
    const result: IUser = users.reduce((longest, current) => {
      return longest.company.catchPhrase.length >
        current.company.catchPhrase.length
        ? longest
        : current;
    });

    return result.company.name;
  }

  const longestCompany = getLongestCompany(users);

  // TODO: define a function that returns a list of users that have website ending with .org
  function getUsersWithOrgDomen(users: IUser[]): IUser[] {
    const result: IUser[] = users.filter((user) => {
      return user.website.includes('.org');
    });

    return result;
  }

  const usersWithOrgDomen = getUsersWithOrgDomen(users);

  // TODO: define a funciton that returns a list of cities where users live, sorted by city name
  function getUserCities(users: IUser[]): string[] {
    const cities: string[] = users.map((user) => {
      const { city } = user.address;

      return city;
    });

    return cities.sort((x, y) => (x > y ? 1 : -1));
  }

  const usersCities = getUserCities(users);

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

export async function fetchUsers() {
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

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUser {
  address: IAddress;
}

interface IUser {
  company: ICompany;
}

interface IUserName {
  firstName: string;
  lastName: string;
}

export function getUserNames(users: IUser[]): IUserName[] {
  return users.map((user) => {
    const [firstName, lastName] = user.name.split(' ');

    return { firstName, lastName };
  });
}

export function getUserCompanies(users: IUser[]): string[] {
  return users.map((user) => {
    return user.company.name;
  });
}

export function getLongestCompany(users: IUser[]): string {
  const result: IUser = users.reduce((longest, current) => {
    return longest.company.catchPhrase.length >
      current.company.catchPhrase.length
      ? longest
      : current;
  });

  return result.company.name;
}

export function getUsersWithOrgDomen(users: IUser[]): IUser[] {
  const result: IUser[] = users.filter((user) => {
    return user.website.includes('.org');
  });

  return result;
}

export function getUserCities(users: IUser[]): string[] {
  const cities: string[] = users.map((user) => {
    const { city } = user.address;

    return city;
  });

  return cities.sort((x, y) => (x > y ? 1 : -1));
}

export const mockedUsers = [
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
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];
