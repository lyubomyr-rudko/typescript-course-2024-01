// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */

// try different target compiler options
function excercise10() {
  //+ TODO: declare a Rectangle class, with width and height properties
  //+ TODO: add a constructor which takes width and height as parameters
  //+ TODO: add a method `getArea` which returns the area of the rectangle
  //+ TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
  //+ TODO: create an instance of the Rectangle class, with width 10 and height 20
  //+ TODO: call the method `getArea` and print the result to console
  //+ TODO: call the method `getPerimeter` and print the result to console
  //+ TODO: compile and run the code
  //+ TODO: change compiler target to ES5, complile and see the compiled code
  //+ TODO: change width and height properties to private, recomplile and
  //+ TODO: change compiler target to ES2015, complile and see the compiled code
  //+ TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  //+ TODO: change compiler target to ESNext, complile and see the compiled code
  //+ TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
  class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.width * this.height;
    }
    getParimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  const rectangle1 = new Rectangle(10, 20);
  console.log('Task 10');
  console.log(rectangle1.getArea());
  console.log(rectangle1.getParimeter());
}
// TODO: compile and run the code
excercise10();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  //+ TODO: create a generic Stack class
  //+ TODO: add a private data property of type array of T
  //+ TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
  //+ TODO: add a pop method which removes and returns the item from the top of the stack
  //+ TODO: create an instance of the Stack class with number type
  //+ TODO: push two numbers to the stack
  //+ TODO: pop an item from the stack and print it to console, calling toFixed method on it
  //+ TODO: create an instance of the Stack class with string type
  //+ TODO: push two strings to the stack
  //+ TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
  class GenericStack<T> {
    private data: T[] = [];

    push(item: T) {
      return this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.pop();
    }
  }
  const stack1 = new GenericStack<number>();
  stack1.push(2.222);
  stack1.push(3.222);

  stack1.pop()?.toFixed(2);
  console.log('Task 11');
  console.log(stack1);

  const stack2 = new GenericStack<string>();
  stack2.push('Hello');
  stack2.push('World');
  console.log(stack2.pop()?.toUpperCase());
}
// TODO: compile and run the code
excercise11();

// add type safety to the code which uses any
function excercise12() {
  //+ TODO: declare a type for user object, which has a name property of type string
  type TUser = {
    name: string;
  };
  // TODO: fix the fetchUsers function to return an array of users, not any type
  function fetchUsers(): TUser[] {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: { users: TUser[] } = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );
    if (typeof data === 'object' && data !== null && 'users' in data) {
      console.log(data.users);
    }
    // TODO: add check for the data type to contain list of users
    return data.users;
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users: TUser[] = fetchUsers();
  // TODO: add type safety to the code to print the names of the users to console
  users.forEach((user) => console.log(user.name));
}
// TODO: compile and run the code
console.log('Task 12');
excercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVovels(str: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return str
    .split('')
    .filter((letter) => !vowels.includes(letter))
    .join('');
}
const str1 = removeAllVovels('asAdfA');
console.log('removeAllVovels:', str1);

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', '[r,e,a,c,t,]'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(arr: string[]): string[] {
  return arr.map((letter) => removeAllVovels(letter));
}
const arr1 = removeVowelsFromArray(['abstraction', 'javascript', 'react']); //['bstrctn', 'jvscrpt', 'rct']
console.log('removeVowelsFromArray', arr1);

// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(str: string): boolean {
  const cleanStr = str.toLocaleLowerCase().trim();
  const copyStr = str.split('').reverse().join('');
  return copyStr === cleanStr;
}
const polindrom1 = isPalindromeString('abcba');
console.log('isPalindromeString', polindrom1);

// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPolindropesOnly(...str: string[]): string[] {
  const result = str.filter((item) => {
    if (isPalindromeString(item)) {
      return item;
    }
  });
  return result;
}
const polindrom2 = getPolindropesOnly('abc', 'def', 'aba'); // ['aba']
console.log('getPolindropesOnly', polindrom2);

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(arr: string[]): string[] {
  const reverseArr = arr.reverse();
  const result = reverseArr.map((item) => item.split('').reverse().join(''));
  return result;
}
const reversedArr1 = reverseArrayOfStrings(['abc', 'def']);
console.log('reverseArrayOfStrings', reversedArr1);

// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
export function generatePhoneNumbers(n: number): string[] {
  const kyivstarNum = '097';
  const arr: string[] = [];
  const max = 9999999;
  const min = 1000000;
  for (let i = 0; i < n; i++) {
    const randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
    const result = kyivstarNum + '-' + randomNumbers.toString();
    arr.push(result);
  }
  return arr;
}
const numberPhone = generatePhoneNumbers(5);
console.log('generatePhoneNumbers', numberPhone);

// TODO: write unit-tests for the six functions above

//test
