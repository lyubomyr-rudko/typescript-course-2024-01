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
    getAge() {
      return this.#width * this.#height;
    }
    // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
    getPerimeter() {
      return (this.#width + this.#height) * 2;
    }
  }
  // TODO: create an instance of the Rectangle class, with width 10 and height 20
  const rectangle = new Rectangle(10, 20);
  // TODO: call the method `getArea` and print the result to console
  console.log(rectangle.getAge());
  // TODO: call the method `getPerimeter` and print the result to console
  console.log(rectangle.getPerimeter());
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

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  // TODO: create a generic Stack class
  class Stack<T> {
    // TODO: add a private data property of type array of T
    #data: T[] = [];
    // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
    push(...item: T[]) {
      this.#data.push(...item);
    }
    // TODO: add a pop method which removes and returns the item from the top of the stack
    pop() {
      return this.#data.pop();
    }
  }

  // TODO: create an instance of the Stack class with number type
  const stackNumber = new Stack<number>();
  // TODO: push two numbers to the stack
  stackNumber.push(2);
  stackNumber.push(3);
  // TODO: pop an item from the stack and print it to console, calling toFixed method on it
  console.log(stackNumber.pop()?.toFixed());
  // TODO: create an instance of the Stack class with string type
  const stackString = new Stack<string>();
  // TODO: push two strings to the stack
  stackString.push('hello');
  stackString.push('world');
  // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
  console.log(stackString.pop()?.toUpperCase());
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
    const data: { users: TUser[] } = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );
    // TODO: add check for the data type to contain list of users
    if (typeof data === 'object' && data !== null && 'users' in data) {
      console.log(data.users);
    }

    return data.users;
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users: TUser[] = fetchUsers();
  // TODO: add type safety to the code to print the names of the users to console
  // users.forEach((user) => console.log(user.name));
  users.forEach((user) => console.log(user.name));
}
// TODO: compile and run the code
excercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVovels(word: string) {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  return word
    .split('')
    .filter((char) => !vowels.includes(char))
    .join('');
}
console.log(removeAllVovels('exception'));
console.log(removeAllVovels('javascript'));

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(wordArr: string[]) {
  return wordArr.map((el) => removeAllVovels(el));
}
console.log(removeVowelsFromArray(['abstraction', 'javascript', 'react']));
// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(str: string) {
  return str == str.split('').reverse().join('');
}
console.log(isPalindromeString('abcba'));
console.log(isPalindromeString('abc'));
// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPolindropesOnly(...strArray: string[]) {
  return strArray.filter((el) => isPalindromeString(el));
}
console.log(getPolindropesOnly('abc', 'def', 'aba'));

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(strArray: string[]) {
  return strArray.reverse().map((el) => [...el].reverse().join(''));
}
console.log(reverseArrayOfStrings(['abc', 'def']));
// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
export function generatePhoneNumbers(n: number): string[] {
  const listNumbers: string[] = [];
  for (let i = 0; i <= n - 1; i++) {
    let phoneNumber: string = '097';

    for (let i = 0; i < 7; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      phoneNumber += randomNumber.toString();
    }
    listNumbers.push(phoneNumber);
  }
  return listNumbers;
}
console.log(generatePhoneNumbers(3));

// TODO: write unit-tests for the six functions above
