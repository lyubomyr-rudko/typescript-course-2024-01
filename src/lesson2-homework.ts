/* eslint-disable @typescript-eslint/no-unused-vars */

// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // TODO: declare two variables of type tuple, each with two numbers
  let point1: [number, number];
  let point2: [number, number];

  // TODO: assign values to the variables (1,1) and (4,5)
  point1 = [1, 1];
  point2 = [4, 5];

  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: [number, number], p2: [number, number]): number {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    // const x1 = p1[0]; // TODO: replace with the first element of p1
    // const y1 = p1[1]; // TODO: replace with the second element of p1
    // const x2 = p2[0]; // TODO: replace with the first element of p2
    // const y2 = p2[1]; // TODO: replace with the second element of p2

    // TODO: calculate the distance
    let y: number = x2 - x1;
    let x: number = y2 - y1;

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  // TODO: call the function and print the result to console
  console.log(distance(point1, point2));
}
// TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  type TPoint = { x: number; y: number };

  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  let point1: TPoint = { x: 1, y: 1 };
  let point2: TPoint = { x: 4, y: 5 };

  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: TPoint, p2: TPoint): number {
    // TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    // const x1 = point1x; // TODO: replace with the first element of p1
    // const y1 = point1y; // TODO: replace with the second element of p1
    // const x2 = point2x; // TODO: replace with the first element of p2
    // const y2 = point2y; // TODO: replace with the second element of p2

    // TODO: calculate the distance
    let y: number = x2 - x1;
    let x: number = y2 - y1;

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  // TODO: call the function and print the result to console
  console.log(distance(point1, point2));
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  const PI = 3.14;

  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  function calcArea(radius: number = 20): number {
    return PI * Math.pow(radius, 2);
  }

  // TODO: call the function and print the result to console
  console.log(calcArea());

  // TODO: check the type of PI variable
  // тип PI - 3.14. Коли ми створюємо константу - значення цієї константи стає її типом

  // TODO: declare a const variable that is an object with two properties - name and age
  type TUser = {
    name: string;
    age: number;
  };

  const user: TUser = {
    name: 'Danil',
    age: 22,
  };

  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function incrementUserAge(user: TUser): () => TUser {
    let { age } = user;

    return function (): TUser {
      user.age = ++age;

      return user;
    };
  }

  // TODO: call the function and print the person object to console
  const newUserAge = incrementUserAge(user);

  console.log(newUserAge());
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: create an array of numbers
  const numbers: number[] = [1, 2, 3, 4, 5];

  // TODO: create a function which doubles a number
  function doubleNumber(num: number): number {
    return Math.pow(num, 2);
  }

  // TODO: add type annotations
  function map(arr: number[], fn: (num: number) => number): number[] {
    // TODO: add logic here
    const result: number[] = [];

    // TODO: use regular for loop
    for (let i = 0; i < arr.length; i++) {
      const doubledNumber = fn(arr[i]);

      result.push(doubledNumber);
    }

    return result;
  }

  // TODO: call map function (created earlier) with the array and the function
  const doubledArray = map(numbers, doubleNumber);

  // TODO: print the result to console
  console.log(doubledArray);
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prints greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  type TUser = { name: string };

  const user: TUser = {
    name: 'Danil',
  };

  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(user: TUser): void {
    console.log(`Hello ${user.name}!`);
  }

  printGreeting(user);

  // TODO: create a type for product, with name property and price property
  type TProduct = {
    name: string;
    price: number;
  };

  // TODO: create a product object, asign it some object literal
  const iPhone: TProduct = {
    name: 'iPhone',
    price: 1500,
  };

  // TODO: call the function with product as a parameter
  printGreeting(iPhone); // Hello iPhone!

  // TODO: call the function with object literal as a parameter
  // console.log(printGreeting({name: 'apple', price: 1.99})); // Object literal may only specify known properties, and 'price' does not exist in type 'TUser'.

  // TODO: try adding extra property to the object literal - observe the error
  printGreeting({ name: 'apple', price: 1.99 } as TProduct);
  // TODO: fix the error with type assertion
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  class Book {
    protected title: string;
    protected year: number;

    // TODO: constructor should take three parameters - title and year of publication
    constructor(title: string, year: number) {
      this.title = title;
      this.year = year;
    }

    // TODO: method `getInfo` should return the book title and year as a string
    getInfo(): string {
      return `${this.title} published at ${this.year}`;
    }

    // TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
    getAge(): number {
      return new Date().getFullYear() - this.year;
    }

    // TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method -
    // year can not be in the future, year can not be less than prev year
    revise(newYear: number): void {
      const currentYear = new Date().getFullYear();

      if (newYear <= currentYear && newYear > this.year) {
        this.year = newYear;
      }
    }
  }

  // TODO: create a book object and call the method `getInfo`, print the result to console
  const book = new Book('Harry Potter', 2001);
  console.log(book.getInfo());

  // TODO: assign a new value to the year property
  // book.year = 545;

  // TODO: call the method `getInfo` again
  console.log(book.getInfo());

  // TODO: call the method `getAge` and print the result to console
  console.log(book.getAge());

  // TODO: call the method `revise` and pass a new year as a parameter
  book.revise(2006);
  console.log(book);

  // TODO: add private modifier to the year property
  // TODO: try to access the year property from outside of the class - observe the error
  // book.year = 545; // Property 'year' is private and only accessible within class 'Book'.

  // TODO: change protected modifier to the year property, remove private modifier
  // Property 'year' is protected and only accessible within class 'Book' and its subclasses.

  // TODO: create a subclass `Magazine` which extends `Book` class
  class Magazine extends Book {
    // TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
    protected month: string;
    protected day: string;

    // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
    constructor(title: string, year: number, month: string, day: string) {
      // TODO: use super keyword to call the `Book` class constructor with title and year parameters
      super(title, year);

      this.month = month;
      this.day = day;
    }

    // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
    getInfo(): string {
      // TODO: use super keyword to call the `getInfo` method of the `Book` class
      const bookInfo = super.getInfo();

      return `${this.month} ${this.day}`;
    }
  }

  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  const magazine = new Magazine('Journal', 2012, 'November', 'eight');
  console.log(magazine.getInfo());

  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
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

export function distance1(p1: [number, number], p2: [number, number]): number {
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  let y: number = x2 - x1;
  let x: number = y2 - y1;

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

// TODO: create a function which calculates the distance between two points in 2D space
type TPoint = { x: number; y: number };

export function distance2(p1: TPoint, p2: TPoint): number {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;

  let y: number = x2 - x1;
  let x: number = y2 - y1;

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

// Additional tasks -
// TODO: create a function which takes any string and returns the string reversed
function excerciseA() {}

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB() {}

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC() {}

// TODO: create a function which takes an array of strings and returns the longest string
function excerciseD() {}
