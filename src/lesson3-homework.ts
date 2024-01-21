function excercise10() {
  // TODO: declare a Rectangle class, with width and height properties
  // TODO: add a constructor which takes width and height as parameters
  // TODO: add a method `getArea` which returns the area of the rectangle
  // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
  class Rectangle {
    #width: number;
    #height: number;
    constructor(width: number, height: number) {
      this.#width = width;
      this.#height = height;
    }
    getArea() {
      return console.log((this.#width * this.#height) / 2);
    }
    getPerimeter() {
      return console.log((this.#width + this.#height) * 2);
    }
  }

  // TODO: create an instance of the Rectangle class, with width 10 and height 20
  const rectangle = new Rectangle(10, 20);
  // TODO: call the method `getArea` and print the result to console
  rectangle.getArea();
  // TODO: call the method `getPerimeter` and print the result to console
  rectangle.getPerimeter();
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
  // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
  // TODO: add a pop method which removes and returns the item from the top of the stack
  // TODO: create an instance of the Stack class with number type
  // TODO: push two numbers to the stack
  // TODO: pop an item from the stack and print it to console, calling toFixed method on it
  // TODO: create an instance of the Stack class with string type
  // TODO: push two strings to the stack
  // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
}
class Stack<T> {
  private data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}
type TNumber = { price: number };
const price = new Stack<TNumber>();
price.push({ price: 5 });
price.push({ price: 7 });
console.log(price);
const newPrice = price.pop();
console.log(newPrice?.price.toFixed(4));
type TString = { name: string };
const priceName = new Stack<TString>();
priceName.push({ name: 'John' });
priceName.push({ name: 'Anton' });
console.log(priceName);
const newPriceName = priceName.pop();
console.log(newPriceName?.name.toUpperCase());

// TODO: compile and run the code
excercise11();

// add type safety to the code which uses any
function excercise12() {
  // TODO: declare a type for user object, which has a name property of type string
  type TUser = { name: string };
  // TODO: fix the fetchUsers function to return an array of users, not any type
  function fetchUsers() {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: TUser = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );

    // TODO: add check for the data type to contain list of users
    if (typeof data === 'object' && data !== null) {
      return data;
    } else {
      return console.log('error');
    }
  }
  const res = fetchUsers();
  console.log(res);
  // TODO: fix typings of the users variable (currently it is of type any)
  const users = fetchUsers() as { name: string };
  // TODO: add type safety to the code to print the names of the users to console
  if (Array.isArray(users)) {
    users.forEach((user) => console.log(user.name));
  } else {
    console.log('errors users');
  }
}
// TODO: compile and run the code
excercise12();

// TODO: create a function which takes a string and returns a string with all vowels removed
// Example: 'exception' -> 'xcptn', 'javascript' -> 'jvscrpt'
function removeAllVovels(str: string): string {
  str = str.replace(/[aeiou]/gi, '');
  return str;
}
console.log(removeAllVovels('exception'));
console.log(removeAllVovels('javascript'));

// // TODO: create a function which takes an array of strings and returns the array of strings with all vowels removed
// // Example: ['abstraction', 'javascript', 'react'] -> ['bstrctn', 'jvscrpt', 'rct']
const arr: string[] = ['abstraction', 'javascript', 'react'];
function removeVowelsFromArray(arr: string[]) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].replace(/[aeiou]/gi, ''));
  }
  return res;
}
console.log(removeVowelsFromArray(arr));

// // TODO: create a function that checks if a string is a palindrome
// // polindrome is a word that is the same when read backwards
// // Example: 'abcba' is a palindrome, 'abc' is not a palindrome
function isPalindromeString(str: string) {
  const length = str.length;
  const midle = Math.floor(length / 2);

  for (let i = 0; i < midle; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return console.log('isPalindrome false');
    }
  }
  return console.log('isPalindrome true');
}
console.log(isPalindromeString('abcba'));
// // TODO: create a function which takes any number of strings and returns array of strings that are polindromes
// // Example: ('abc', 'def', 'aba') -> ['aba']
function getPolindropesOnly(...str: string[]) {
  // const arr = Array.from([...str]);
  const result = [];
  // const newarr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      if (str[i] !== str[length - 1 - i]) {
        return console.log('isPalindrome false');
      } else {
        return str;
      }
    }
    result.push(str);
  }
  return result;
}
console.log(getPolindropesOnly('abc', 'def', 'aba'));

// // TODO: create a function which takes an array of strings and returns the reversed array of reversed strings
// // Example: ['abc', 'def'] -> ['fed', 'cba']
const reverseArr = ['abc', 'def'];
function reverseArrayOfStrings(arr: string[]) {
  const res = [];
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].split('').reverse().join(''));
  }
  return res;
}
console.log(reverseArrayOfStrings(reverseArr));

// // TODO: create a function that takes n param, and generates a list of n random kyivstar phone numbers
// // Example: (097XXXXXXX)
function generatePhoneNumbers(n: number): string[] {
  const res = [];
  for (let i = 0; i < n; i++) {
    const min = 1111111;
    const max = 9999999;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    const kyivstar = '097';
    const num = `${kyivstar}${random}`;
    res.push(num);
  }
  return res;
}
console.log(generatePhoneNumbers(10));

// TODO: write unit-tests for the six functions above
