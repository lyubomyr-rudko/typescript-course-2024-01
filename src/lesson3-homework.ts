// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */

// try different target compiler options
// + excercise10
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
// TODO: compile and run the code
function exercise10() {
  class Rectangle {
    private readonly width: number;
    private readonly height: number;

    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    getArea() {
      return this.width * this.height;
    }

    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }

  const rectangle = new Rectangle(10, 20);
  console.log('Area:', rectangle.getArea());
  console.log('Perimeter:', rectangle.getPerimeter());
}
exercise10();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
// + exercise11
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
// TODO: compile and run the code

function exercise11() {
  class Stack<T> {
    private data: T[] = [];

    push(item: T): void {
      this.data.push(item);
    }

    pop(): T | undefined {
      return this.data.pop();
    }
  }

  const numberStack = new Stack<number>();
  numberStack.push(42);
  numberStack.push(27);

  const poppedNumber = numberStack.pop();
  if (poppedNumber !== undefined) {
    console.log(`Popped number: ${poppedNumber.toFixed(2)}`);
  }

  const stringStack = new Stack<string>();
  stringStack.push('hello');
  stringStack.push('world');

  const poppedString = stringStack.pop();
  if (poppedString !== undefined) {
    console.log(`Popped string: ${poppedString.toUpperCase()}`);
  }
}
exercise11();

// add type safety to the code which uses any
// + excercise12
// TODO: declare a type for user object, which has a name property of type string
// TODO: fix the fetchUsers function to return an array of users, not any type
// function fetchUsers() {
// TODO: add type safety to the data variable, annotate it with the type of users
// const data: unknown = JSON.parse(
//   '{"users": [{"name": "John"}, {"name": "Jane"}]}',
// );
// TODO: add check for the data type to contain list of users
// return data;
// }
// TODO: fix typings of the users variable (currently it is of type any)
// const users = fetchUsers();
// TODO: add type safety to the code to print the names of the users to console
// users.forEach((user) => console.log(user.name));
// TODO: compile and run the code

function exercise12() {
  type User = {
    name: string;
  };

  function fetchUsers(): User[] {
    const data: { users: User[] } = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );

    if (Array.isArray(data.users)) {
      return data.users;
    } else {
      throw new Error('Invalid data format');
    }
  }

  const users: User[] = fetchUsers();

  users.forEach((user) => console.log(user.name));
}
exercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVovels(input: string): string {
  return input.replace(/[aeiouAEIOU]/g, '');
}
const input1 = 'exception';
const result1 = removeAllVovels(input1);
console.log(result1);

const input2 = 'javascript';
const result2 = removeAllVovels(input2);
console.log(result2);

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(arr: string[]): string[] {
  return arr.map((str) => removeAllVovels(str));
}
const inputArray = ['abstraction', 'javascript', 'react'];
const resultArray = removeVowelsFromArray(inputArray);
console.log(resultArray);

// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(input: string): boolean {
  const sanitizedInput = input.toLowerCase().replace(/\s/g, '');
  const reversedInput = sanitizedInput.split('').reverse().join('');
  return sanitizedInput === reversedInput;
}

const input3 = 'abcba';
const result3 = isPalindromeString(input3);
console.log(result3);

const input4 = 'abc';
const result4 = isPalindromeString(input4);
console.log(result4);

// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPolindropesOnly(...args: string[]): string[] {
  return args.filter((str) => isPalindromeString(str));
}

const palindromes = getPolindropesOnly('abc', 'def', 'aba');
console.log(palindromes);

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(arr: string[]): string[] {
  return arr.map((str) => str.split('').reverse().join(''));
}
const inputArray1 = ['abc', 'def'];
const reversedArray = reverseArrayOfStrings(inputArray1);
console.log(reversedArray);

// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
export function generatePhoneNumbers(n: number): string[] {
  const phoneNumbers = [];
  const prefix = '097';
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, '0');
    const phoneNumber = `${prefix}${randomNumber}`;
    phoneNumbers.push(phoneNumber);
  }
  return phoneNumbers;
}

const generatedPhoneNumbers = generatePhoneNumbers(3);
console.log(generatedPhoneNumbers);

// TODO: write unit-tests for the six functions above
