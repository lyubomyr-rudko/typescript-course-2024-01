// try different target compiler options
function excercise10() {
  // +TODO: declare a Rectangle class, with width and height properties
  // +TODO: add a constructor which takes width and height as parameters
  // +TODO: add a method `getArea` which returns the area of the rectangle
  // +TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
  // +TODO: create an instance of the Rectangle class, with width 10 and height 20
  // +TODO: call the method `getArea` and print the result to console
  // +TODO: call the method `getPerimeter` and print the result to console
  // +TODO: compile and run the code
  // +TODO: change compiler target to ES5, complile and see the compiled code
  // +TODO: change width and height properties to private, recomplile and
  // +TODO: change compiler target to ES2015, complile and see the compiled code
  // +TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  // +TODO: change compiler target to ESNext, complile and see the compiled code
  // +TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
  class Rectangle {
    #width: number;
    #height: number;

    constructor(width: number, height: number) {
      this.#width = width;
      this.#height = height;
    }
    getArea(): number {
      return this.#height * this.#width;
    }
    getPerimeter(): number {
      return this.#height * 2 + this.#width * 2;
    }
  }

  const box = new Rectangle(10, 20);
  console.log(box.getArea());
  console.log(box.getPerimeter());
}
// TODO: compile and run the code
excercise10();

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

  class Stack<T> {
    #data: T[];

    constructor() {
      this.#data = [];
    }

    push(num: T): void {
      this.#data.push(num);
    }
    pop(): T | undefined {
      return this.#data.pop();
    }
  }
  const instance1 = new Stack<number>();
  instance1.push(2);
  instance1.push(5);
  console.log(instance1.pop()?.toFixed());

  const instance2 = new Stack<string>();
  instance2.push('qwerty');
  instance2.push('hello');
  console.log(instance2.pop()?.toUpperCase());
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
  function fetchUsers(): TUser[] | undefined {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: { users: TUser[] } = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );

    // TODO: add check for the data type to contain list of users
    if (data.users as TUser[]) {
      return data.users;
    }
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users: TUser[] | undefined = fetchUsers();
  // TODO: add type safety to the code to print the names of the users to console
  users?.forEach((user: TUser) => console.log(user.name));
}
// TODO: compile and run the code
excercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVowels(str: string): string {
  const strSmall = str.toLowerCase();
  const consonantArr: string[] = [];
  const vowelArr = ['a', 'e', 'i', 'o', 'u', 'y'];

  for (let i = 0; i < strSmall.length; i++) {
    if (!vowelArr.includes(strSmall[i])) {
      consonantArr.push(strSmall[i]);
    }
  }
  return consonantArr.join('');
}
// console.log(removeAllVowels('javascript')); // jvscrpt

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(arr: string[]): string[] {
  return arr.map(removeAllVowels);
}
// console.log(removeVowelsFromArray(['abstraction', 'javascript', 'react'])); //['bstrctn', 'jvscrpt', 'rct']

// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(str: string): boolean {
  const strToLower = str.toLowerCase();

  if (strToLower.length <= 1) {
    return true;
  }

  if (strToLower[0] === strToLower[strToLower.length - 1]) {
    return isPalindromeString(strToLower.slice(1, -1));
  } else {
    return false;
  }
}
// console.log(isPalindromeString('abcba')); // true
// console.log(isPalindromeString('abc')); // false
// console.log(isPalindromeString('Racecar')); // true

// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPolindropesOnly(...str: string[]): string[] {
  const polindromesArr: string[] = [];

  for (let i = 0; i < str.length; i++) {
    isPalindromeString(str[i]) ? polindromesArr.push(str[i]) : null;
  }
  return polindromesArr;
}
// console.log(getPolindropesOnly('abc', 'def', 'aba')); // ['aba']

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(arr: string[]): string[] {
  const reversedStrInArr = arr.map((el) => el.split('').reverse().join(''));

  return reversedStrInArr.reverse();
}
// console.log(reverseArrayOfStrings(['abc', 'def'])); // ['fed', 'cba']

// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
export function generatePhoneNumbers(n: number): string[] {
  const phonesNumList: string[] = [];
  const countNums = 7;
  const kyivstarCode = '097';

  for (let i = 0; i < n; i++) {
    phonesNumList.push(kyivstarCode + makeRandomNumber(countNums));
  }
  return phonesNumList;
}
function makeRandomNumber(nums: number): string {
  const randomNum = (Math.random() * 10 ** nums).toFixed();

  if (randomNum.length < nums) {
    return makeRandomNumber(nums);
  }
  return randomNum;
}
// console.log(generatePhoneNumbers(10));

// TODO: write unit-tests for the six functions above
