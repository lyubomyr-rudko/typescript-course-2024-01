// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */

// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // TODO: declare two variables of type tuple, each with two numbers
  // TODO: assign values to the variables (1,1) and (4,5)
  const p1: [number, number] = [1, 1];
  const p2: [number, number] = [4, 5];
  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0]; // TODO: replace with the first element of p1
    const y1 = p1[1]; // TODO: replace with the second element of p1
    const x2 = p2[0]; // TODO: replace with the first element of p2
    const y2 = p2[1]; // TODO: replace with the second element of p2
    // TODO: calculate the distance
    const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return dist;
  }
  // TODO: call the function and print the result to console
  const result = distance(p1, p2);
  console.log(result);
}
// TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  type TPoint = { x: number; y: number };
  const p1: TPoint = { x: 1, y: 1 };
  const p2: TPoint = { x: 4, y: 5 };
  function distance(p1: TPoint, p2: TPoint): number {
    //const x1 = 0; // TODO: replace with the first element of p1
    //const y1 = 0; // TODO: replace with the second element of p1
    //const x2 = 0; // TODO: replace with the first element of p2
    //const y2 = 0; // TODO: replace with the second element of p2
    // TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    // TODO: calculate the distance
    const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return dist;
  }
  // TODO: call the function and print the result to console
  const result = distance(p1, p2);
  console.log(result);
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  const PI = 3.14;
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  function calculateCircleArea(radius: number): number {
    return PI * radius * radius;
  }
  // TODO: call the function and print the result to console
  const circleArea = calculateCircleArea(2);
  console.log(circleArea);
  // TODO: check the type of PI variable
  console.log(typeof PI);
  // TODO: declare a const variable that is an object with two properties - name and age
  const person = { name: 'John', age: 25 };
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function incrementAge(person: { name: string; age: number }): void {
    person.age++;
  }
  // TODO: call the function and print the person object to console
  incrementAge(person);
  console.log(person);
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  function map(arr: number[], fn: (num: number) => number): number[] {
    // TODO: add logic here
    const result: number[] = [];
    // TODO: use regular for loop
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i]));
    }
    return result;
  }
  // TODO: create an array of numbers
  const numbers = [1, 2, 3, 4, 5];
  // TODO: create a function which doubles a number
  function double(num: number): number {
    return num * 2;
  }
  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console
  const doubledNumbers = map(numbers, double);
  console.log(doubledNumbers);
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prints greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  type User = {
    name: string;
  };
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(user: User): void {
    console.log(`Hello, ${user.name}!`);
  }
  // TODO: create a type for product, with name property and price property
  type Product = {
    name: string;
    price: number;
  };
  // TODO: create a product object, asign it some object literal
  const product: Product = {
    name: 'Tom·Ford·Oud·Wood',
    price: 12438.99,
  };
  // TODO: call the function with product as a parameter
  printGreeting(product);
  // TODO: call the function with object literal as a parameter
  printGreeting({ name: 'John' });
  // TODO: try adding extra property to the object literal - observe the error
  // const userWithExtraProperty = { name: 'John', age: 25 }; // This will result in a type error
  // TODO: fix the error with type assertion
  printGreeting({ name: 'John', age: 25 } as User);
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // +TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  // +TODO: constructor should take three parameters - title and year of publication
  // +TODO: method `getInfo` should return the book title and year as a string
  // +TODO: create a book object and call the method `getInfo`, print the result to console
  // +TODO: assign a new value to the year property
  // +TODO: call the method `getInfo` again
  // +TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
  // +TODO: call the method `getAge` and print the result to console
  // +TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
  // +TODO: call the method `revise` and pass a new year as a parameter
  // +TODO: add private modifier to the year property
  // +TODO: try to access the year property from outside of the class - observe the error
  // +TODO: change protected modifier to the year property, remove private modifier
  // +TODO: create a subclass `Magazine` which extends `Book` class
  // +TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
  // +TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
  // +TODO: use super keyword to call the `Book` class constructor with title and year parameters
  // +TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  // +TODO: use super keyword to call the `getInfo` method of the `Book` class
  // +TODO: create a magazine object and call the method `getInfo`, print the result to console
  // +TODO: call the inherited method `getAge` of the magazine object and print the result to console
  class Book {
    private year: number;

    constructor(
      public title: string,
      year: number,
    ) {
      this.year = year;
    }

    getInfo(): string {
      return `${this.title} (${this.year})`;
    }

    getAge(): number {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }

    revise(newYear: number): void {
      if (newYear <= this.year) {
        console.error('Invalid year for revision');
      } else {
        this.year = newYear;
      }
    }
  }

  const book = new Book('BookA', 2000);
  console.log(book.getInfo());

  book.revise(2022);
  console.log(book.getInfo());

  console.log(book.getAge());

  class Magazine extends Book {
    constructor(
      title: string,
      year: number,
      public month: number,
      public day: number,
    ) {
      // constructor override to the Magazine class which takes four parameters - title, year, month, and day
      // use super keyword to call the `Book` class constructor with title and year parameters
      super(title, year);
    }

    getInfo(): string {
      return `${super.getInfo()}, ${this.month}/${this.day}`;
    }
  }

  // create a magazine object and call the method `getInfo`, print the result to console
  const magazine = new Magazine('MagazineA', 2020, 5, 15);
  console.log(magazine.getInfo());
  // call the inherited method `getAge` of the magazine object and print the result to console
  console.log(magazine.getAge());
}
// TODO: compile and run the code
excercise9();

// TODO: for excercise4 and excercise5 - copy and export those functions and create a test file for them, follwo this steps
// 1. create file lesson2-homework.test.ts use src/index.test.ts as an example
// 2. import functions from lesson2-homework.js
// 3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,2) should be 1
// 4. run the tests with `npm run test`

export function distArr(p1: [number, number], p2: [number, number]): number {
  const x1 = p1[0];
  const y1 = p1[1];
  const x2 = p2[0];
  const y2 = p2[1];
  const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return dist;
}

type TPoint = { x: number; y: number };

export function distOdj(p1: TPoint, p2: TPoint): number {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;

  const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return dist;
}

// Additional tasks - optional
// TODO: create a function which takes any string and returns the string reversed
function reverseString(inputString: string): string {
  return inputString.split('').reverse().join('');
}

const originalString: string = 'Hello, World!';
const reversedString: string = reverseString(originalString);

console.log(`Original: ${originalString}`); // Hello, World!
console.log(`Reversed: ${reversedString}`); // !dlroW ,olleH

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

const numbersArray: number[] = [1, 2, 3, 4, 5];
const result: number = sumArray(numbersArray);
console.log(result); // 15

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Array is empty. Cannot calculate average.');
  }

  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }

  const average = sum / numbers.length;

  console.log('Average:', average); // 3

  return average;
}

const numberArray: number[] = [1, 2, 3, 4, 5];
calculateAverage(numberArray);

// TODO: create a function which takes an array of strings and returns the longest string
function findLongestString(strings: string[]): string {
  if (strings.length === 0) {
    return '';
  }

  let longestString = strings[0];

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }

  return longestString;
}

const stringsArray: string[] = ['apple', 'banana', 'kiwi', 'strawberry'];
const longestString: string = findLongestString(stringsArray);
console.log('Longest string', longestString); //strawberry
