// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */

// try different target compiler options
function excercise10() {
  // TODO: declare a Rectangle class, with width and height properties
  class Rectangle {
    #width: number;
    #height: number;

    // TODO: add a constructor which takes width and height as parameters
    constructor(width: number, height: number) {
      this.#width = width;
      this.#height = height;
    }

    // TODO: add a method `getArea` which returns the area of the rectangle
    getArea(): number {
      return this.#width * this.#height;
    }

    // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
    getPerimeter(): number {
      return 2 * (this.#width + this.#height);
    }
  }

  // TODO: create an instance of the Rectangle class, with width 10 and height 20
  const firstRectangle = new Rectangle(10, 20);

  // TODO: call the method `getArea` and print the result to console
  console.log(firstRectangle.getArea());

  // TODO: call the method `getPerimeter` and print the result to console
  console.log(firstRectangle.getPerimeter());

  // ++TODO: compile and run the code

  // ++TODO: change compiler target to ES5, complile and see the compiled code
  // ++TODO: change width and height properties to private, recomplile and
  // ++TODO: change compiler target to ES2015, complile and see the compiled code
  // ++TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  // ++TODO: change compiler target to ESNext, complile and see the compiled code
  // ++TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
}
// TODO: compile and run the code
excercise10();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  // TODO: create a generic Stack class
  class Stack<T> {
    // TODO: add a private data property of type array of T
    private data: T[] = [];

    // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
    push(item: T) {
      this.data.unshift(item);
    }

    // TODO: add a pop method which removes and returns the item from the top of the stack
    pop() {
      return this.data.shift();
    }
  }

  // TODO: create an instance of the Stack class with number type
  const numStack = new Stack<number>();

  // TODO: push two numbers to the stack
  numStack.push(3);
  numStack.push(5);

  // TODO: pop an item from the stack and print it to console, calling toFixed method on it
  console.log(numStack.pop()?.toFixed());

  // TODO: create an instance of the Stack class with string type
  const strStack = new Stack<string>();

  // TODO: push two strings to the stack
  strStack.push('first');
  strStack.push('second');

  // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
  console.log(strStack.pop()?.toUpperCase());
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
  function fetchUsers() {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: { users: TUser[] } = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );

    // TODO: add check for the data type to contain list of users
    if (
      typeof data === 'object' &&
      data !== null &&
      'users' in data &&
      Array.isArray(data.users) &&
      data.users.every((user) => user.name)
    ) {
      return data.users;
    }

    // return data;
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users = fetchUsers();

  // TODO: add type safety to the code to print the names of the users to console
  if (typeof users !== 'undefined') {
    users.forEach((user) => console.log(user.name));
  }
}
// TODO: compile and run the code
excercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVovels(str: string): string {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'y'];

  let result: string = '';

  for (let i: number = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    } else {
      continue;
    }
  }

  return result;
}

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(strArray: string[]): string[] {
  let result: string[] = [];

  for (let i: number = 0; i < strArray.length; i++) {
    result.push(removeAllVovels(strArray[i]));
  }

  return result;
}

// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(string: string): boolean {
  let reversedStr: string = '';

  for (let i: number = string.length - 1; i >= 0; i--) {
    reversedStr += string[i];
  }

  return string === reversedStr;
}

// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPolindropesOnly(...strings: string[]): string[] {
  let result: string[] = [];

  for (let i: number = 0; i < strings.length; i++) {
    if (isPalindromeString(strings[i])) {
      result.push(strings[i]);
    }
  }

  return result;
}

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(strArray: string[]): string[] {
  let result: string[] = [];

  for (let i: number = strArray.length - 1; i >= 0; i--) {
    let reversedStr: string = '';

    for (let j: number = strArray[i].length - 1; j >= 0; j--) {
      reversedStr += strArray[i][j];
    }

    result.push(reversedStr);
  }

  return result;
}

// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
export function generatePhoneNumbers(n: number): string[] {
  const kyivstarCode: string = '097';
  let result: string[] = [];

  for (let i: number = 0; i < n; i++) {
    let generatedNumber: string = kyivstarCode;

    for (let num: number = 0; num < 7; num++) {
      generatedNumber += Math.round(Math.random() * 9);
    }

    result.push(`(${generatedNumber})`);
  }

  return result;
}

// TODO: write unit-tests for the six functions above
