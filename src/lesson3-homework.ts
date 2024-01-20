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
      return (this.#width + this.#height) * 2;
    }
  }

  const rectangle = new Rectangle(10, 20);

  console.log('Rectangle area =', rectangle.getArea());
  console.log('Rectangle perimeter =', rectangle.getPerimeter());
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
    #data: T[] = [];

    addItem(...item: T[]) {
      this.#data.push(...item);
    }

    removeItem() {
      return this.#data.pop();
    }
  }

  const numberStack = new Stack<number>();
  numberStack.addItem(1, 2);

  console.log(
    'Deleted number from Stack:',
    numberStack.removeItem()?.toFixed(),
  );

  const stringStack = new Stack<string>();
  stringStack.addItem('Hello', 'World!');

  console.log('Deleted String:', stringStack.removeItem()?.toUpperCase());
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
    const data: unknown = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );

    const checkData =
      data &&
      typeof data === 'object' &&
      'users' in data &&
      Array.isArray(data.users) &&
      data.users.every((user) => typeof user === 'object' && 'name' in user);

    if (checkData) {
      const users = data.users as User[];
      return users;
    }
    return [];
    // TODO: add check for the data type to contain list of users
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users = fetchUsers();
  // TODO: add type safety to the code to print the names of the users to console
  users.forEach((user) => console.log(user.name));
}
// TODO: compile and run the code
excercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVovels(str: string) {
  return str.replace(/[aeiou]/g, '');
}
// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(strArr: string[]) {
  return strArr.map((str) => removeAllVovels(str));
}
// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(str: string) {
  return str === [...str].reverse().join('');
}
// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPolindropesOnly(...strArr: string[]) {
  return strArr.filter((str) => isPalindromeString(str));
}
// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(strArr: string[]) {
  return strArr.map((str) => [...str].reverse().join('')).reverse();
}
// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
export function generatePhoneNumbers(n: number) {
  return Array(Math.abs(n))
    .fill(n)
    .map(
      () =>
        `097${Array.from({ length: 7 }, () =>
          Math.floor(Math.random() * 10),
        ).join('')}`,
    );
}
// TODO: write unit-tests for the six functions above
