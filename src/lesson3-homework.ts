// try different target compiler options
function excercise10() {
  // TODO: declare a Rectangle class, with width and height properties
  // TODO: add a constructor which takes width and height as parameters
  class Rectangle {
    #width: number;
    #height: number;
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
  const rectangle = new Rectangle(10, 20);
  // TODO: call the method `getArea` and print the result to console
  console.log('Area:', rectangle.getArea());
  // TODO: call the method `getPerimeter` and print the result to console
  console.log('Perimeter:', rectangle.getPerimeter());
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
  // TODO: add a private data property of type array of T
  class Stack<T> {
    private data: T[] = [];
    // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
    push(item: T) {
      this.data.push(item);
    }
    // TODO: add a pop method which removes and returns the item from the top of the stack
    pop(): T | undefined {
      return this.data.pop();
    }
  }
  // TODO: create an instance of the Stack class with number type
  const numberStack = new Stack<number>();
  // TODO: push two numbers to the stack
  numberStack.push(1);
  numberStack.push(2);
  // TODO: pop an item from the stack and print it to console, calling toFixed method on it
  console.log(numberStack.pop()?.toFixed());
  // TODO: create an instance of the Stack class with string type
  const stringStack = new Stack<string>();
  // TODO: push two strings to the stack
  stringStack.push('hello');
  stringStack.push('world');
  // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
  console.log(stringStack.pop()?.toUpperCase());
}
// TODO: compile and run the code
excercise11();

// add type safety to the code which uses any
function excercise12() {
  // TODO: declare a type for user object, which has a name property of type string
  type User = {
    name: string;
  };
  // TODO: fix the fetchUsers function to return an array of users, not any type
  function fetchUsers(): User[] {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: { users: User[] } = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );
    // TODO: add check for the data type to contain list of users
    if (Array.isArray(data.users)) {
      return data.users;
    } else {
      throw new Error('Invalid data format');
    }
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users: User[] = fetchUsers();
  // TODO: add type safety to the code to print the names of the users to console
  users.forEach((user) => console.log(user.name));
}
// TODO: compile and run the code
excercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVowels(inputString: string): string {
  const resultString = inputString.replace(/[aeiouAEIOU]/g, '');
  return resultString;
}

console.log(removeAllVowels('exception'));
console.log(removeAllVowels('javascript'));

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(inputArray: string[]): string[] {
  const resultArray = inputArray.map((str) => removeAllVowels(str));
  return resultArray;
}

const inputArray = ['abstraction', 'javascript', 'react'];
const resultArray = removeVowelsFromArray(inputArray);
console.log(resultArray);

// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(str: string): boolean {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

const exampleString = 'abcba';
const isPalindrome = isPalindromeString(exampleString);
console.log(`${exampleString} is a palindrome: ${isPalindrome}`);

// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPalindromesOnly(...strings: string[]): string[] {
  return strings.filter((str) => isPalindromeString(str));
}

const palindromesArray = getPalindromesOnly('abc', 'def', 'aba');
console.log('Palindromes:', palindromesArray);

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(arr: string[]): string[] {
  return arr.map((str) => str.split('').reverse().join('')).reverse();
}

const originalArray: string[] = ['abc', 'def'];
const reversedArray: string[] = reverseArrayOfStrings(originalArray);
console.log(reversedArray);

// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
export function generatePhoneNumbers(n: number): string[] {
  const kyivstarPrefix = '097';
  const phoneNumberList: string[] = [];

  for (let i = 0; i < n; i++) {
    const randomSuffix = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, '0');
    const phoneNumber = kyivstarPrefix + randomSuffix;
    phoneNumberList.push(phoneNumber);
  }

  return phoneNumberList;
}

const numberOfPhoneNumbers = 5;
const generatedNumbers = generatePhoneNumbers(numberOfPhoneNumbers);
console.log(generatedNumbers);

// TODO: write unit-tests for the six functions above
