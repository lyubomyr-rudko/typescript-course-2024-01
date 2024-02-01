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
    driverLicenseId: string;
  };
  // TODO: define TAnimal type with properties name, age, species
  type TAnimal = {
    name: string;
    age: number;
    species: string;
  };
  // TODO: define TPassanger type as union of THuman and TAnimal
  // type TPassanger = {};
  type TPassanger = THuman | TAnimal;

  // annotate the function to accept TPassanger type
  function printPassangerInfo(passanger: TPassanger) {
    // TODO: use type narrowing to print the passanger info

    // console.log((passanger as any).name);
    console.log(passanger.name);
    // console.log((passanger as any).age);
    console.log(passanger.age);
    // TODO: print driverLicenseId if passanger is human
    // console.log((passanger as any).driverLicenseId);
    if ('driverLicenseId' in passanger) {
      console.log(passanger.driverLicenseId);
    }
    // TODO: print species if passanger is animal
    // console.log((passanger as any).species);
    if ('species' in passanger) {
      console.log(passanger.species);
    }
  }

  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: 'John',
    age: 30,
    driverLicenseId: 'DL12345',
  };
  const animal: TAnimal = {
    name: 'Rex',
    age: 5,
    species: 'Dog',
  };
  printPassangerInfo(human);
  printPassangerInfo(animal);
}
// TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
// TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
//}
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
      console.log('message: ', post.text);
    }
    if (post.kind === 'image') {
      console.log('image: ', post.url);
    }
    if (post.kind === 'comment') {
      console.log('comment: ', post.text);
    }
  }

  // TODO: add missing type property to the objects
  const message: TBlogMessage = {
    kind: 'message',
    text: 'abc',
  };
  const image: TBlogImage = {
    kind: 'image',
    url: 'abc',
  };
  const comment: TBlogComment = {
    kind: 'comment',
    text: 'abc',
    messageId: '123',
  };
  printBlogPost(message);
  printBlogPost(image);
  printBlogPost(comment);
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
    optionalArray?: any[];
    optionalFunc?: () => void;
    optionalNumber?: number;
    optionalObject?: object;
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
    requiredAny: any;
  }

  class MyComponent extends React.Component<IMyComponentProps> {
    static propTypes = {
      optionalArray: PropTypes.array,
      optionalBool: PropTypes.bool,
      optionalFunc: PropTypes.func,
      optionalNumber: PropTypes.number,
      optionalObject: PropTypes.object,
      optionalString: PropTypes.string,
      optionalSymbol: PropTypes.symbol,
      optionalMessage: PropTypes.instanceOf(Message),
      optionalEnum: PropTypes.oneOf(['News', 'Photos']),
      optionalUnion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Message),
      ]),
      optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
      optionalObjectWithShape: PropTypes.shape({
        optionalProperty: PropTypes.string,
        requiredProperty: PropTypes.number.isRequired,
      }),
      requiredFunc: PropTypes.func.isRequired,
      requiredAny: PropTypes.any.isRequired,
    };

    render() {
      return React.createElement('div', null, 'hello');
    }
  }

  const component = new MyComponent({
    requiredFunc: () => {},
    requiredAny: 'test',
  });
  console.log(component);
}
excerciseA();

// async function excerciseB() {
// TODO: define IUser interface with properties id, name, email, website
interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  website: string;
  address: IAddress;
  company: ICompany;
}

export async function fetchUsers(): Promise<IUser[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: IUser[] = await res.json();
  return users;
}

export function getUserNames(
  users: IUser[],
): { firstName: string; lastName: string }[] {
  return users.map((user) => {
    const [firstName, lastName] = user.name.split(' ');
    return { firstName, lastName };
  });
}

export function getCompanyNames(users: IUser[]): string[] {
  return users.map((user) => user.company.name);
}

export function getCompanyWithLongestCatchPhrase(users: IUser[]): string {
  let longestCatchPhraseCompany = '';
  let longestCatchPhraseLength = 0;

  users.forEach((user) => {
    const catchPhraseLength = user.company.catchPhrase.length;
    if (catchPhraseLength > longestCatchPhraseLength) {
      longestCatchPhraseLength = catchPhraseLength;
      longestCatchPhraseCompany = user.company.name;
    }
  });

  return longestCatchPhraseCompany;
}

export function getUsersWithOrgWebsite(users: IUser[]): IUser[] {
  return users.filter((user) => user.website.endsWith('.org'));
}

export function getCitiesSorted(users: IUser[]): string[] {
  const cities = users.map((user) => user.address.city);
  return cities.sort();
}

async function main() {
  const users = await fetchUsers();
  console.log(getUserNames(users));
  console.log(getCompanyNames(users));
  console.log(getCompanyWithLongestCatchPhrase(users));
  console.log(getUsersWithOrgWebsite(users));
  console.log(getCitiesSorted(users));
}

main();

// TODO: define a function that returns array of company names

// TODO: define a function that returns a company name that has the longest catchPhrase

// TODO: define a function that returns a list of users that have website ending with .org

// TODO: define a funciton that returns a list of cities where users live, sorted by city name

// TODO: move all the functions above out of this function and export them
// TODO: write unit tests for the 4 functions above
// }
// excerciseB();
