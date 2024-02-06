import React from 'react';
// import PropTypes from 'prop-types';

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
    if (passanger instanceof Object) {
      console.log(passanger.name);
      console.log(passanger.age);
    }
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
    age: 24,
    driverLicenseId: 2184626,
  };
  const animal: TAnimal = {
    name: 'Rex',
    age: 2,
    species: 'shepherd',
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

  function printBlogPost(post: TBlogPost) {
    // TODO: use discriminated union instead of prop check to narrow the type of the object
    if (post.kind === 'message') {
      console.log('comment: ', post.text);
    }
    if (post.kind === 'image') {
      console.log('image: ', post.url);
    }
    if (post.kind === 'comment') {
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
  const text = new Message('Some text');
  console.log(text);

  interface IMyComponentProps {
    optionalArray?: [];
    optionalBool?: boolean;
    optionalFunc?: (arr: string[], num: number) => string;
    optionalNumber?: number;
    optionalObject?: { name?: string; age?: number; status?: boolean };
    optionalString?: string;
    optionalSymbol?: symbol;
    optionalMessage?: { text: string };
    optionalEnum?: [string, string];
    optionalUnion?: [string, number, { text: string }];
    optionalArrayOf?: number[];
    optionalObjectWithShape?: {
      optionalProperty?: string;
      requiredProperty: number;
    };
    requiredFunc?: (a: number, b: number) => number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    requiredAny?: any;
  }
  class MyComponent extends React.Component<IMyComponentProps> {
    render() {
      return React.createElement('div', null, 'hello');
    }

    // static propTypes = {
    //   optionalArray: PropTypes.array,
    //   optionalBool: PropTypes.bool,
    //   optionalFunc: PropTypes.func,
    //   optionalNumber: PropTypes.number,
    //   optionalObject: PropTypes.object,
    //   optionalString: PropTypes.string,
    //   optionalSymbol: PropTypes.symbol,

    //   optionalMessage: PropTypes.instanceOf(Message),

    //   // prop is limited to specific values
    //   optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    //   // object that could be one of many types
    //   optionalUnion: PropTypes.oneOfType([
    //     PropTypes.string,
    //     PropTypes.number,
    //     PropTypes.instanceOf(Message),
    //   ]),

    //   // array of a certain type
    //   optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    //   // object taking on a particular shape
    //   optionalObjectWithShape: PropTypes.shape({
    //     optionalProperty: PropTypes.string,
    //     requiredProperty: PropTypes.number.isRequired,
    //   }),

    //   requiredFunc: PropTypes.func.isRequired,

    //   // A value of any data type
    //   requiredAny: PropTypes.any.isRequired,
    // };
  }

  const component = new MyComponent({ optionalBool: true });
  console.log(component);
}
excerciseA();

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}
interface IAdress {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: { lat: number; lng: number };
  };
}
interface ICompany {
  company: { name: string; catchPhrase: string; bs: string };
}
interface IUser extends IAdress {}
interface IUser extends ICompany {}

async function excerciseB() {
  // TODO: define IUser interface with properties id, name, email, website

  // TODO: implement function to fetch list of users from https://jsonplaceholder.typicode.com/users
  async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // TODO: apply type to the result of this fetch function
    const users: IUser[] = await res.json();

    return users;
  }
  // All next tasks will be using a list of users
  const users: IUser[] = await fetchUsers();

  // TODO: extend interface IUser with property address of type IAddress
  // TODO: define IAddress interface with properties street, suite, city, zipcode, geo
  // TODO: extend interface IUser with property company of type ICompany and define ICompany interface with properties name, catchPhrase, bs

  // TODO: define function that returns array of user names in format { firstName: string, lastName: string}
  // TODO: use interface type for the function parameter

  console.log(getUserNames(users));

  // TODO: define a function that returns array of company names

  console.log(getCompanyNames(users));

  // TODO: define a function that returns a company name that has the longest catchPhrase

  console.log(getCompanyNamesForLength(users));

  // TODO: define a function that returns a list of users that have website ending with .org

  console.log(getUserWebsites(users));

  // TODO: define a funciton that returns a list of cities where users live, sorted by city name

  console.log(getUserCities(users));

  // TODO: move all the functions above out of this function and export them
  // TODO: write unit tests for the 4 functions above
}
excerciseB();

type TUserName = { firstName: string; lastName: string };
type TCompanyName = string[];

function getUserNames(users: IUser[]): TUserName[] {
  const arrOfResults = [];

  for (let i = 0; i < users.length; i++) {
    const newUser: TUserName = {
      firstName: users[i].name,
      lastName: users[i].username,
    };
    arrOfResults.push(newUser);
  }
  return arrOfResults;
}
function getCompanyNames(users: IUser[]): TCompanyName {
  const arrOfResults = [];

  for (let i = 0; i < users.length; i++) {
    const companyName: string = users[i].company.name;
    arrOfResults.push(companyName);
  }
  return arrOfResults;
}
function getCompanyNamesForLength(users: IUser[]): string {
  let longesPhrase: string = '';

  for (let i = 0; i < users.length; i++) {
    const phrase = users[i].company.catchPhrase;

    if (!longesPhrase) {
      longesPhrase = phrase;
      continue;
    }
    if (phrase.length > longesPhrase.length) {
      longesPhrase = phrase;
    }
  }
  const user = users.filter(
    (user) => user.company.catchPhrase === longesPhrase,
  );
  return user[0].company.name;
}
function getUserWebsites(users: IUser[]): IUser[] {
  const arrOfResults = [];
  const template = '.org';

  for (let i = 0; i < users.length; i++) {
    const ending = users[i].website.slice(-4);
    if (ending === template) {
      arrOfResults.push(users[i]);
    }
  }
  return arrOfResults;
}
function getUserCities(users: IUser[]): string[] {
  const arrOfResults = [];

  for (let i = 0; i < users.length; i++) {
    const city = users[i].address.city;
    arrOfResults.push(city);
  }
  arrOfResults.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  return arrOfResults;
}
