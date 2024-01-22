// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */
const logNormal = 'color: lightblue';
const logError = 'color: red';

/**
 *  ERR in browser -  ReferenceError: exports is not defined
 *  BUT work under node - node ./lib/lesson3-homework.js
 */

// try different target compiler options
function excercise10() {
  // TODO: declare a Rectangle class, with width and height properties
  // TODO: add a constructor which takes width and height as parameters
  // TODO: add a method `getArea` which returns the area of the rectangle
  // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
  class Rectangle {
    #width: number;
    #height: number;

    constructor(width: number, height: number) {
      this.#width = width;
      this.#height = height;
    }

    getArea(): number {
      return this.#width * this.#height;
    }

    getPerimeter(): number {
      return (this.#width + this.#height) * 2;
    }
  }
  // TODO: create an instance of the Rectangle class, with width 10 and height 20
  const region = new Rectangle(10, 20);
  // TODO: call the method `getArea` and print the result to console
  console.log(`%c Area: ${region.getArea()}m²`, logNormal);
  // TODO: call the method `getPerimeter` and print the result to console
  console.log(`%c Perimeter: ${region.getPerimeter()}m`, logNormal);
  // TODO: compile and run the code
  // TODO: change compiler target to ES5, complile and see the compiled code
  // ...done -> I see old code before class consturtion as standard (fn())(...params)

  // TODO: change width and height properties to private, recomplile and
  // ... see ERR: Private identifiers are only available when targeting ECMAScript 2015 and higher.

  // TODO: change compiler target to ES2015, complile and see the compiled code
  // ... all good compiled

  // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  // yes - TS compiled & add __classPrivateFieldSet

  // TODO: change compiler target to ESNext, complile and see the compiled code
  // .. yes - all good wprk & TS compiled as #variableName

  // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
  // .. yes & get: Private identifiers are only available when targeting ECMAScript 2015 and higher.
}
// TODO: compile and run the code
excercise10();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  // TODO: create a generic Stack class
  // TODO: add a private data property of type array of T
  // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
  // TODO: add a pop method which removes and returns the item from the top of the stack
  class Stack<T> {
    #stack: T[] = [];

    constructor(stack: T[]) {
      this.#stack = stack;
    }

    push(...data: T[]) {
      this.#stack.push(...data);
    }

    pop(): T | undefined {
      return this.#stack.pop();
    }
  }

  // TODO: create an instance of the Stack class with number type
  const values = new Stack<number>([2, 9, 8, 2, 3, 6, 1, 9, 7, 3, 6, 5]);
  // TODO: push two numbers to the stack
  values.push(6, 7);
  // TODO: pop an item from the stack and print it to console, calling toFixed method on it
  console.log(
    `%c 
  In stack was added:
    1: [2, 9, 8, 2, 3, 6, 1, 9, 7, 3, 6, 5]
    2: 6, 7
  Extractded from Stack: ${values.pop()}`,
    logNormal,
  );
  // TODO: create an instance of the Stack class with string type
  const countries = new Stack<string>(['Ukraine', 'USA', 'Germany', 'Norway']);
  // TODO: push two strings to the stack
  countries.push('Polska', 'Canada');
  // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
  console.log(
    `%c 
  In stack was added:
    1: ['Ukraine', 'USA', 'Germany', 'Norway']
    2: 'Polska', 'Canada'
  Extractded from Stack: ${countries.pop()?.toUpperCase()}`,
    logNormal,
  );
}
// TODO: compile and run the code
excercise11();

// add type safety to the code which uses any
function excercise12() {
  // TODO: declare a type for user object, which has a name property of type string
  type TUser = {
    name: string;
  };
  // TODO: fix the fetchUsers function to return an array of users, not any type
  function fetchUsers(): TUser[] {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: any = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );
    const errReturn: TUser = { name: 'Error name type' };
    // TODO: add check for the data type to contain list of users
    if (Array.isArray(data.users)) {
      const errField: number[] = [];

      data.users.forEach((data: any, i: number) => {
        if (typeof data.name !== 'string') {
          console.log(`%cError data type name in index: ${i}`, logError);
          errField.push(i);
        }
      });
      return errField.length ? [errReturn] : data.users;
    } else {
      console.log(
        `%c Input data must be array objects type, 
          similar as {users:[{name: 'stringUserName'}, ...]}
          but have : ${typeof data}`,
        logError,
      );
      return [errReturn];
    }
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users: TUser[] = fetchUsers();

  // TODO: add type safety to the code to print the names of the users to console
  users.forEach((user) => console.log(user.name));
}
// TODO: compile and run the code
excercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVovels(input: string): string {
  const maskVowels: RegExp = /[aeiouAEIOU]/g; // /[aeiouAEIOU]/g
  const res = input.replace(maskVowels, '');
  return res;
}
console.log(
  `%cRemove all vovels from string:
  Perfectionizm
${removeAllVovels('Perfectionizm')}
`,
  logNormal,
);

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(input: string[]): string[] {
  const maskVowels: RegExp = /[aeiouAEIOU]/g;
  const removedVovels = input.map((word) => word.replace(maskVowels, ''));
  // OR can be
  // const removedVovels = JSON.parse(
  //   JSON.stringify(input).replace(maskVowels, ''),
  // );
  return removedVovels;
}
console.log(
  `%cRemove all vovels from array:
  ['abstraction', 'javascript', 'react']
  ${removeVowelsFromArray(['abstraction', 'javascript', 'react'])}`,
  logNormal,
);

// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(input: string): boolean {
  let halfLength: number = Math.trunc(input.length / 2);

  for (let i = 0; i < halfLength; i++) {
    if (input[i] !== input[input.length - i - 1]) return false;
  }
  return true;
}
const testPalindrome1 = isPalindromeString('absba');
console.log(
  `%cTest palindrome:
  'absba'
  ${testPalindrome1}`,
  testPalindrome1 ? logNormal : logError,
);
const testPalindrome2 = isPalindromeString('abssba');
console.log(
  `%cTest palindrome:
  'tenet'
  ${testPalindrome2}`,
  testPalindrome2 ? logNormal : logError,
);
const testPalindrome3 = isPalindromeString('absudsba');
console.log(
  `%cTest palindrome:
  'absdsba'
  ${testPalindrome3}`,
  testPalindrome3 ? logNormal : logError,
);

// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPolindropesOnly(...input: string[]): string[] {
  const polindrome: string[] = input.filter((data) => testPalindrome(data));

  function testPalindrome(input: string): boolean {
    let halfLength: number = Math.trunc(input.length / 2);

    for (let i = 0; i < halfLength; i++) {
      if (input[i] !== input[input.length - i - 1]) return false;
    }
    return true;
  }

  return polindrome;
}
console.log(
  `%cTest palindrome:
  'abc', 'def', 'aba'
  ${getPolindropesOnly('abc', 'def', 'aba')}`,
  logNormal,
);

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(input: string[]): string[] {
  // return input.reverse(); // most simply
  // most handle work
  let reversed: string[] = [];
  input.forEach((data) => reversed.unshift(data));
  return reversed;
}
console.log(
  `%cReverse array:
  ['abc', 'def']
  ${reverseArrayOfStrings(['abc', 'def'])}`,
  logNormal,
);

// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
export function generatePhoneNumbers(count: number): string[] {
  // List of Kyivstar prefixes
  const prefixes = ['097', '098', '096'];

  function generatePhoneNumber(prefix: string, exist: string[]): string | any {
    let number: string = prefix;
    for (let i = 0; i < 7; i++) {
      number += Math.floor(Math.random() * 10).toString();
    }
    if (!exist.includes(number)) return number;
    else generatePhoneNumber(prefix, exist);
  }

  const phoneNumbers: string[] = [];
  for (let i = 0; i < count; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    phoneNumbers.push(generatePhoneNumber(prefix, phoneNumbers));
  }

  return phoneNumbers;
}
console.log(
  `%cGenerate unic Kyivstar phone numbers:
  10
  ${generatePhoneNumbers(10)}`,
  // ${generatePhoneNumbers(10).forEach((number) => console.log(number))}`,
  logNormal,
);
// TODO: write unit-tests for the six functions above
