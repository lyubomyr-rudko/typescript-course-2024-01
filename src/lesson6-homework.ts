import React from 'react';
import PropTypes from 'prop-types';
// import { first } from 'lodash';

const test = 'test'; // this is mock export
export default test;

// use type narrowing to print the passanger info
function exercise27() {
  // TODO: define THuman type with properties name, age, driverLicenseId
  type THuman = {
    name: string;
    age: number;
    driverLicenseId: string;
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
    age: 25,
    driverLicenseId: 'dreverLicenseId',
  };
  const animal: TAnimal = {
    name: 'Rex',
    age: 5,
    species: 'bulldog',
  };
  printPassangerInfo(human);
  printPassangerInfo(animal);
  // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
  // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
  class Human {
    constructor(
      public name: string,
      public age: number,
      public driverLicenseId: string,
    ) {}
  }
  class Animal {
    constructor(
      public name: string,
      public age: number,
      public species: string,
    ) {}
  }
  type TPassanger2 = Human | Animal;
  function printPassangerInfoWithInstanceOf(passanger: TPassanger2) {
    if (passanger instanceof Human) {
      console.log(passanger.driverLicenseId);
    }
    if (passanger instanceof Animal) {
      console.log(passanger.species);
    }
  }
  const human1 = new Human('Juli', 29, 'id');
  const animal1 = new Animal('Sharik', 2, 'bulldog');
  printPassangerInfoWithInstanceOf(human1);
  printPassangerInfoWithInstanceOf(animal1);
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

  function printBlogPost(post: TBlogPost) {
    // TODO: use discriminated union instead of prop check to narrow the type of the object
    if (post.kind === 'comment') {
      console.log('comment: ', post.text, post.messageId);
    }
    if (post.kind === 'image') {
      console.log('image: ', post.url);
    }
    if (post.kind === 'message') {
      console.log('message: ', post.text);
    }
  }

  const comment: TBlogComment = {
    kind: 'comment',
    text: 'abc',
    messageId: '123',
  };
  const image: TBlogImage = {
    kind: 'image',
    url: 'abc',
  };
  const message: TBlogMessage = {
    kind: 'message',
    text: 'abc',
  };
  // TODO: add missing type property to the objects
  printBlogPost(message);
  printBlogPost(image);
  printBlogPost(comment);
  //or
  printBlogPost({ kind: 'image', url: 'abc' });
  printBlogPost({ kind: 'comment', text: 'abc', messageId: 'abc' });
  printBlogPost({ kind: 'message', text: 'abc' });
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
    const users: IUser[] = await res.json();

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
  interface IUser {
    company: ICompany;
  }
  interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  // TODO: define function that returns array of user names in format { firstName: string, lastName: string}
  interface IGetUserNames {
    firstName: string;
    lastName: string;
  }

  // TODO: use interface type for the function parameter
  function getUserNames(users: IUser[]) {
    const getUserName = users.map((el) => el.name.split(' '));
    const getUserFirstLastName: IGetUserNames[] = getUserName.map((el) => {
      if (el.includes('Mrs.')) {
        return {
          firstName: ` ${el[0]} ${el[1]}`,
          lastName: el.slice(2).join(' '),
        };
      } else {
        return {
          firstName: el[0],
          lastName: el.slice(1).join(' '),
        };
      }
    });
    return getUserFirstLastName;
  }
  // console.log(getUserNames(users));
  getUserNames(users);

  // TODO: define a function that returns array of company names
  function getCompanyNames(users: IUser[]) {
    const getCompanyName = users.map(({ company }) => company.name);

    return getCompanyName;
  }
  // console.log(getCompanyNames(users));
  getCompanyNames(users);

  // TODO: define a function that returns a company name that has the longest catchPhrase
  function getLongerCatchPhrase(users: IUser[]) {
    let maxLength = 0;
    let companyName = '';
    let longerCatchPhrase = '';

    users.forEach((company) => {
      const catchPhrase = company.company.catchPhrase;
      if (catchPhrase.length > maxLength) {
        maxLength = catchPhrase.length;
        companyName = company.company.name;
        longerCatchPhrase = catchPhrase;
      }
    });
    console.log(`${companyName} : ${longerCatchPhrase}`);
    return companyName;
  }

  // console.log(getLongerCatchPhrase(users));
  getLongerCatchPhrase(users);

  // TODO: define a function that returns a list of users that have website ending with .org
  function getWebsiteEndinOrg(users: IUser[]) {
    const getWebsiteEndingWithOrg = users.filter(({ website }) =>
      website.endsWith('.org'),
    );
    return getWebsiteEndingWithOrg;
  }

  console.log(getWebsiteEndinOrg(users));
  getWebsiteEndinOrg(users);

  // TODO: define a funciton that returns a list of cities where users live, sorted by city name
  function getListCities(users: IUser[]) {
    return users.map(({ address }) => address.city).sort();
  }
  // console.log(getListCities(users));
  getListCities(users);

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

interface IUser {
  address: IAddress;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: object[];
}

interface IUser {
  company: ICompany;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const usersArr: IUser[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object],
    },
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
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: [Object],
    },
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
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: [Object],
    },
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
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: [Object],
    },
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
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: [Object],
    },
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
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: [Object],
    },
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
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: [Object],
    },
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
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: [Object],
    },
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];
export function getCompanyNames(users: IUser[]) {
  const getCompanyName = users.map(({ company }) => company.name);

  return getCompanyName;
}
getCompanyNames(usersArr);

export function getLongerCatchPhrase(users: IUser[]) {
  const getLongetPhrase = users.map(({ company }) => company.catchPhrase);
  getLongetPhrase.sort((a, b) => b.length - a.length);

  return getLongetPhrase[0];
}
getLongerCatchPhrase(usersArr);

export function getWebsiteEndinOrg(users: IUser[]) {
  const getWebsiteEndingWithOrg = users.filter(({ website }) =>
    website.includes('.org'),
  );
  return getWebsiteEndingWithOrg;
}

getWebsiteEndinOrg(usersArr);

export function getListCities(users: IUser[]) {
  return users.map(({ address }) => address.city).sort();
}
console.log(getListCities(usersArr));
