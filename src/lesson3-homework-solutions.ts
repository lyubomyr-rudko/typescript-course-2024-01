// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */

// try different target compiler options
function excercise10() {
  // TODO: declare a Rectangle class, with width and height properties
  // TODO: add a constructor which takes width and height as parameters
  // TODO: add a method `getArea` which returns the area of the rectangle
  // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
  // TODO: create an instance of the Rectangle class, with width 10 and height 20
  // TODO: call the method `getArea` and print the result to console
  // TODO: call the method `getPerimeter` and print the result to console
  // TODO: compile and run the code
  // TODO: change compiler target to ES5, complile and see the compiled code
  // TODO: change width and height properties to private, recomplile and
  // TODO: change compiler target to ES2015, complile and see the compiled code
  // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  // TODO: change compiler target to ESNext, complile and see the compiled code
  // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
}
// TODO: compile and run the code
excercise10();

function exercise10Solution() {
  class Rectangle {
    #width: number;
    #height: number;
    constructor(width: number, height: number) {
      this.#width = width;
      this.#height = height;
    }
    getArea() {
      return this.#width * this.#height;
    }
    getPerimeter() {
      return 2 * (this.#width + this.#height);
    }
  }
  const rectangle = new Rectangle(10, 20);
  console.log(rectangle.getArea());
  console.log(rectangle.getPerimeter());
}
exercise10Solution();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  // TODO: create a generic Stack class
  // TODO: add a private data property of type array of T
  // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
  // TODO: add a pop method which removes and returns the item from the top of the stack
  // TODO: create an instance of the Stack class with number type
  // TODO: push two numbers to the stack
  // TODO: pop an item from the stack and print it to console, calling toFixed method on it
  // TODO: create an instance of the Stack class with string type
  // TODO: push two strings to the stack
  // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
}
// TODO: compile and run the code
excercise11();
function exercise11Solution() {
  class Stack<T> {
    private data: T[] = [];

    constructor(items?: T[]) {
      if (items) {
        this.data = items;
      }
    }

    push(item: T) {
      this.data.push(item);
    }

    pop(): T | undefined {
      return this.data.pop();
    }
  }

  const stack = new Stack<number>();

  stack.push(1);
  stack.push(2);

  console.log(stack.pop()?.toFixed(2));

  const stack2 = new Stack<string>();

  stack2.push('1');
  stack2.push('2');

  // pop an item from the stack and print it to console, calling toUpperCase method on it
  console.log(stack2.pop()?.toUpperCase());

  // if you have constructor defined, type argument is not required
  const stack3 = new Stack([1, 2]);
  console.log(stack3.pop()?.toFixed(2));
}
exercise11Solution();

// add type safety to the code which uses any
function excercise12() {
  // TODO: declare a type for user object, which has a name property of type string

  // TODO: fix the fetchUsers function to return an array of users, not any type
  function fetchUsers() {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: unknown = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );

    // TODO: add check for the data type to contain list of users
    return data;
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users = fetchUsers();
  // TODO: add type safety to the code to print the names of the users to console
  // users.forEach((user) => console.log(user.name));
}
// TODO: compile and run the code
excercise12();
function exercise12Solution() {
  type TUser = {
    name: string;
  };
  function fetchUsers(): TUser[] {
    const data: unknown = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );

    let users: TUser[] = [];
    if (
      typeof data === 'object' &&
      data !== null &&
      'users' in data &&
      Array.isArray(data.users)
    ) {
      users = data.users.map((user: unknown) => {
        if (
          typeof user !== 'object' ||
          user === null ||
          !('name' in user) ||
          typeof user.name !== 'string'
        ) {
          throw new Error('Invalid user data');
        }

        return { name: user.name };
      });
    }

    return users;
  }

  const users: TUser[] = fetchUsers();
  users.forEach((user) => console.log(user.name));
}
exercise12Solution();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVovels(word: string) {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  return word
    .split('')
    .filter((char) => !vowels.includes(char.toLowerCase()))
    .join('');
}
export function removeAllVovels2(word: string) {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  return word.replace(new RegExp(`[${vowels.join('')}]`, 'gi'), '');
  // same as
  // return word.replace(/[aeiou]/gi, '');
  // or
  // return word.replace(/[aeiouAEIOU]/g, '');
}

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(words: string[]) {
  return words.map(removeAllVovels);
}

// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(str: string) {
  return str === str.split('').reverse().join('');
}
export function isPalindromeString2(str: string): boolean {
  return str === str.split('').reduceRight((acc, el) => acc + el, '');
}
export function isPalindromeString3(str: string): boolean {
  let reversed: string = '';
  for (let i: number = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str ? true : false;
}

// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPolindropesOnly(...words: string[]) {
  return words.filter(isPalindromeString);
}

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(s: string[]) {
  return s.map((str) => str.split('').reverse().join('')).reverse();
}
export function reverseArrayOfStrings2(s: string[]) {
  return s.reverse().map((el) => [...el].reverse().join(''));
}

// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: 097XXXXXXX
export function generatePhoneNumbers(n: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < n; i++) {
    result.push(
      `097${Math.floor(Math.random() * 10000000)
        .toString()
        .padStart(7, '0')}`,
    );
  }
  return result;
}
export function generatePhoneNumbers2(n: number): string[] {
  const res: string[] = [];
  for (let i: number = 1; i <= n; i++) {
    res.push(`097${Math.random().toString().slice(2, 9)}`);
  }
  return res;
}
export function generatePhoneNumbers3(n: number): string[] {
  const kyivstarCode: string = '097';
  const result: string[] = [];

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
