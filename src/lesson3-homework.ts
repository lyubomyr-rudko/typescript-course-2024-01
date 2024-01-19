// try different target compiler options
function excercise10() {
  // TODO: declare a Rectangle class, with width and height properties
  class Rectangle {
    #width: number;
    #height: number;
    // TODO: add a constructor which takes width and height as parameters
    constructor(width: number, height: number) {
      this.#height = height;
      this.#width = width;
    }
    // TODO: add a method `getArea` which returns the area of the rectangle
    getArea(): number {
      return this.#height * this.#width;
    }
    // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
    getPerimeter(): number {
      return (this.#height + this.#width) * 2;
    }
  }

  // TODO: create an instance of the Rectangle class, with width 10 and height 20
  const rectangle = new Rectangle(10, 20);

  // TODO: call the method `getArea` and print the result to console
  console.log(rectangle.getArea()); //200

  // TODO: call the method `getPerimeter` and print the result to console
  console.log(rectangle.getPerimeter()); //600

  // TODO: compile and run the code
  // TODO: change compiler target to ES5, complile and see the compiled code
  // TODO: change width and height properties to private, recomplile and
  // TODO: change compiler target to ES2015, complile and see the compiled code
  // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  // TODO: change compiler target to ESNext, complile and see the compiled code

  // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)

  //error - TS18028: Private identifiers are only available when targeting ECMAScript 2015 and higher.
  //    #year: number;

  // i don`t have errors when set ES2015+
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

    // let users: TUser[] = [];
    if (
      typeof data === 'object' &&
      data !== null &&
      Array.isArray(data.users) &&
      data.users.some((el) => el.name)
    ) {
      //   users = data.users;
      return data.users;
    }
    // return users;
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users = fetchUsers();

  // TODO: add type safety to the code to print the names of the users to console
  if (Array.isArray(users) && users.some((el) => el.name)) {
    users.forEach((user) => console.log(user.name)); // after adding let users: TUser[] = []; in fetchUsers() i don`t have errors of type
  }
}
// TODO: compile and run the code
excercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
export function removeAllVowels(str: string): string {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'y'];
  let res: string = '';
  for (let i: number = 0; i <= str.length - 1; i++) {
    if (!vowels.includes(str[i])) {
      res += str[i];
    }
  }
  return res;
}
console.log(removeAllVowels('javascript'));

// TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
export function removeVowelsFromArray(arr: string[]): string[] {
  const res: string[] = [];
  for (let i: number = 0; i <= arr.length - 1; i++) {
    res.push(removeAllVowels(arr[i]));
  }
  return res;
  //   return arr.map((el) => removeAllVowels(el));
}

console.log(removeVowelsFromArray(['abstraction', 'javascript', 'react']));

// TODO: create a function that checks if a string is a palindrome
// polindrome is a word that is the same when read backwards
// Example: 'abcba' is a palindrome, 'abc' is not a palindrome
export function isPalindromeString(str: string): boolean {
  let reversed: string = '';
  for (let i: number = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str ? true : false;
  //   return str.split('').reverse().join('') === str ? true : false;
}
console.log(isPalindromeString('abc'));

// TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// Example: ('abc', 'def', 'aba') -> ['aba']
export function getPolindropesOnly(...arr: string[]): string[] {
  const res: string[] = [];
  for (let i: number = 0; i <= arr.length - 1; i++) {
    if (isPalindromeString(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
  //   return arr.filter((el) => isPalindromeString(el));
}
console.log(getPolindropesOnly('abc', 'defed', 'aba'));

// TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// Example: ['abc', 'def'] -> ['fed', 'cba']
export function reverseArrayOfStrings(arr: string[]): string[] {
  return arr.map((el) => el.split('').reverse().join('')).reverse();
}
console.log(reverseArrayOfStrings(['abc', 'def']));

// TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// Example: (097XXXXXXX)
// export function generatePhoneNumbers() {}

// TODO: write unit-tests for the six functions above
