
// try different target compiler options
function excercise10() {
  // +TODO: declare a Rectangle class, with width and height properties
  //+TODO: add a constructor which takes width and height as parameters
  // +TODO: add a method `getArea` which returns the area of the rectangle
  // +TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
  // +TODO: create an instance of the Rectangle class, with width 10 and height 20
  // +TODO: call the method `getArea` and print the result to console
  // +TODO: call the method `getPerimeter` and print the result to console
  // + TODO: compile and run the code
  // +TODO: change compiler target to ES5, complile and see the compiled code
  // +TODO: change width and height properties to private, recomplile and
  // +TODO: change compiler target to ES2015, complile and see the compiled code
  // +TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  // +TODO: change compiler target to ESNext, complile and see the compiled code
  // +TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
}
// TODO: compile and run the code
excercise10();

class Rectangle {
  static getArea(): any {
    throw new Error("Method not implemented.");
  }
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
    return 2*(this.#width + this.#height);
  }
  const myRectangle  = new Rectangle (10,20);
}
console.log('Area:', myRectangle.getArea()); 

console.log('Perimeter:', Rectangle.getPerimeter());

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  // +TODO: create a generic Stack class
  // +TODO: add a private data property of type array of T
  // +TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
  // +TODO: add a pop method which removes and returns the item from the top of the stack
  // +TODO: create an instance of the Stack class with number type
  // +TODO: push two numbers to the stack
  // +TODO: pop an item from the stack and print it to console, calling toFixed method on it
  // +TODO: create an instance of the Stack class with string type
  // +TODO: push two strings to the stack
  // +TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
}
// TODO: compile and run the code
excercise11();

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
  numberStack.push(10);
  numberStack.push(6);

  const poppedNumber = numberStack.pop();
  if (poppedNumber !== undefined) {
    console.log('Popped Number:', poppedNumber.toFixed(2));
  }

  const stringStack = new Stack<string>();

  stringStack.push('hello');
  stringStack.push('world');

  const poppedString = stringStack.pop();
  if (poppedString !== undefined) {
    console.log('Popped String:', poppedString.toUpperCase());
  }


// add type safety to the code which uses any
// function excercise12() {
//   // +TODO: declare a type for user object, which has a name property of type string

//   // +TODO: fix the fetchUsers function to return an array of users, not any type
//   //function fetchUsers() {
//     // +TODO: add type safety to the data variable, annotate it with the type of users
//    // const data: unknown = JSON.parse(
//     //  '{"users": [{"name": "John"}, {"name": "Jane"}]}',
//     //);

//     // TODO: add check for the data type to contain list of users
//    // return data;
//   //}
//   // TODO: fix typings of the users variable (currently it is of type any)
//   // const users = fetchUsers();
//   // TODO: add type safety to the code to print the names of the users to console
//   // users.forEach((user) => console.log(user.name));
// }
// // TODO: compile and run the code
// excercise12();

type User = {
  name: string;
};
function fetchUsers(): User[] {
  const data: { users: User[] } = JSON.parse(
    '{"users": [{"name": "John"}, {"name": "Jane"}]}'
  );

  if (Array.isArray(data.users)) {
    return data.users;
  } else {
    throw new Error('Invalid data format');
  }
}
const users: User[] = fetchUsers();

users.forEach((user) => console.log(user.name));

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVovels (input: string): string {
  return input.replace(/[aeiouAEIOU]/g, '');
}
const r1 = removeAllVovels('exception'); // 'xcptn'
const r2 = removeAllVovels('javascript'); // 'jvscrpt'

console.log(r1);
console.log(r2);

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
//export function removeVowelsFromArray() {}

export function removeVowelsFromArray(strings: string[]): string[] {
  return strings.map((str) => str.replace(/[aeiouAEIOU]/g, ''));
}

const inputArray = ['abstraction', 'javascript', 'react'];
const resultArray = removeVowelsFromArray(inputArray);
console.log(resultArray);

// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
//export function isPalindromeString() {}

export function isPalindromeString(input: string): boolean {
  const cleanedInput = input.replace(/\s/g, '').toLowerCase();
  const reversedInput = cleanedInput.split('').reverse().join('');
  return cleanedInput === reversedInput;
}

const result1 = isPalindromeString('abcba'); // true
const result2 = isPalindromeString('abc'); // false
console.log(result1);
console.log(result2);

// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
//export function getPolindropesOnly() {}

export function getPalindromesOnly(...strings: string[]): string[] {
  const isPalindrome = (input: string): boolean => {
    const cleanedInput = input.replace(/\s/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    return cleanedInput === reversedInput;
  };

  return strings.filter((str) => isPalindrome(str));
}

const resulArray = getPalindromesOnly('abc', 'def', 'aba', 'level', 'radar');
console.log(resulArray);

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
//export function reverseArrayOfStrings() {}

export function reverseArrayOfStrings(strings: string[]): string[] {
  return strings.map((str) => str.split('').reverse().join('')).reverse();
}
const inputArray1 = ['abc', 'def'];
const resultArray1 = reverseArrayOfStrings(inputArray1);
console.log(resultArray1);

// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
//export function generatePhoneNumbers() {}

export function generatePhoneNumbers(n: number): string[] {
  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomPhoneNumber = (): string => {
    const prefix = '097';
    const randomSuffix = getRandomNumber(1000000, 9999999).toString();
    return `${prefix}${randomSuffix}`;
  };

  const phoneNumbers: string[] = [];

  for (let i = 0; i < n; i++) {
    const phoneNumber = generateRandomPhoneNumber();
    phoneNumbers.push(phoneNumber);
  }

  return phoneNumbers;
}

const resultArray2 = generatePhoneNumbers(5);
console.log(resultArray2);

// TODO: write unit-tests for the six functions above

export { removeAllVowels, removeVowelsFromArray, isPalindromeString, getPalindromesOnly, reverseArrayOfStrings, generatePhoneNumbers }
