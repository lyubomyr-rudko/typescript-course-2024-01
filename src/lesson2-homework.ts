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
    const dist: number = Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2);
    return dist;
  }
  // TODO: call the function and print the result to console
  console.log(distance(p1, p2));
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
  const p1: TPoint = { x: 1, y: 2 };
  const p2: TPoint = { x: 4, y: 5 };

  function distance(p1: TPoint, p2: TPoint): number {
    // const x1 = 0; // TODO: replace with the first element of p1
    // const y1 = 0; // TODO: replace with the second element of p1
    // const x2 = 0; // TODO: replace with the first element of p2
    // const y2 = 0; // TODO: replace with the second element of p2
    // TODO: use distructuring to get x and y from p1 and p2
    // TODO: calculate the distance
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;

    const dist: number = Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2);
    return dist;
  }
  // TODO: call the function and print the result to console
  console.log(distance(p1, p2));
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  const PI = 3.14; // const PI: 3.14
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  function circleArea(r: number): number {
    return PI * r ** 2;
  }
  // TODO: call the function and print the result to console

  console.log(circleArea(4));

  // TODO: check the type of PI variable
  // TODO: declare a const variable that is an object with two properties - name and age

  const person = { name: 'Liza', age: 26 };

  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function setOlder(person: { name: string; age: number }): void {
    person.age + 1;
  }
  // TODO: call the function and print the person object to console
  console.log(setOlder(person)); //undefined if set return -> 27
  console.log(person); // { name: 'Liza', age: 26 }
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  function map(arr: number[], fn: (a: number) => number) {
    // TODO: add logic here
    const res: number[] = [];
    // TODO: use regular for loop
    for (let i: number = 0; i <= arr.length - 1; i++) {
      res.push(fn(arr[i]));
    }
    return res;
  }

  // TODO: create an array of numbers
  const numArr: number[] = [1, 3, 5];
  // TODO: create a function which doubles a number
  function double(a: number): number {
    return a * 2;
  }
  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console
  console.log(map(numArr, double));
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prints greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  type TUser = { name: string };
  //   const user: TUser = { name: 'Liza' };
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(user: TUser): void {
    console.log(`greeting ${user.name}`);
  }
  // TODO: create a type for product, with name property and price property
  type TProduct = { name: string; price: number };
  // TODO: create a product object, assign it some object literal
  let product: TProduct = { name: 'Chair', price: 99.9 };
  // TODO: call the function with product as a parameter
  printGreeting(product);

  // TODO: call the function with object literal as a parameter

  //printGreeting({ name: 'Chair', price: 99.9 }); //error - Object literal may only specify known properties, and 'price' does not exist in type 'TUser'.

  // TODO: try adding extra property to the object literal - observe the error

  //printGreeting({ name: 'Chair', price: 99.9, inCart : false }); //Object literal may only specify known properties, and 'price' does not exist in type 'TUser'. (it has any about inCart prop)

  // TODO: fix the error with type assertion
  type TProduct2 = { name: string; price: number; inCart: boolean };
  const product2: TProduct2 = { name: 'Sofa', price: 99.9, inCart: false };
  product = product2;
  printGreeting(product);
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  class Book {
    title: string;
    // private year: number;
    protected year: number;
    // TODO: constructor should take three parameters - title and year of publication
    constructor(title: string, year: number) {
      this.title = title;
      this.year = year;
    }
    // TODO: method `getInfo` should return the book title and year as a string
    getInfo(): string {
      return `${this.title} ${this.year}`;
    }

    // TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
    getAge(): number {
      const today: number = new Date().getFullYear();
      return today - this.year;
    }

    // TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
    revise(newYear: number): void {
      const todayYear: number = new Date().getFullYear();

      if (newYear > todayYear || this.year > newYear) {
        return;
      }
      this.year = newYear;
    }
  }

  // TODO: create a book object and call the method `getInfo`, print the result to console
  const book = new Book('Twilight', 2005);
  console.log(book.getInfo()); //Twilight 2005

  // TODO: assign a new value to the year property
  //book.year = 2006; // Property 'year' is private and only accessible within class 'Book'. after set private or protected to year
  // TODO: call the method `getInfo` again
  console.log(book.getInfo()); //Twilight 2006 if book.year = 2006

  // TODO: call the method `getAge` and print the result to console
  console.log(book.getAge()); //19

  // TODO: call the method `revise` and pass a new year as a parameter
  book.revise(2021);
  console.log(book); // Book { title: 'Twilight', year: 2021 }

  // TODO: add private modifier to the year property

  // TODO: try to access the year property from outside of the class - observe the error

  //book.year = 2009; // Property 'year' is private and only accessible within class 'Book'. after set private to year

  // TODO: change protected modifier to the year property, remove private modifier

  // TODO: create a subclass `Magazine` which extends `Book` class
  class Magazine extends Book {
    // TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
    month: string;
    day: number;
    // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
    constructor(title: string, year: number, month: string, day: number) {
      // TODO: use super keyword to call the `Book` class constructor with title and year parameters
      super(title, year);
      this.day = day;
      this.month = month;
    }
    // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
    getInfo(): string {
      // TODO: use super keyword to call the `getInfo` method of the `Book` class
      return super.getInfo() + ` ${this.month} ${this.day}`;
    }
  }

  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  const magazine: Magazine = new Magazine('New moon', 2007, 'april', 17);
  console.log(magazine.getInfo()); // New moon 2007 april 17

  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
  console.log(magazine.getAge()); //17
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

export function distanceArr(
  p1: [number, number],
  p2: [number, number],
): number {
  const x1 = p1[0];
  const y1 = p1[1];
  const x2 = p2[0];
  const y2 = p2[1];
  const dist: number = Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2);
  return dist;
}

type TPoint = { x: number; y: number };

export function distanceOdj(p1: TPoint, p2: TPoint): number {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;

  const dist: number = Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2);
  return dist;
}

// Additional tasks - optional
// TODO: create a function which takes any string and returns the string reversed
function excerciseA(string: string): string {
  const arr: string[] = [];
  for (let i: number = 0; i <= string.length - 1; i++) {
    arr.push(string[i]);
  }
  const arr2: string[] = [];
  for (let i: number = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  let res: string = '';
  for (let i: number = 0; i <= arr2.length - 1; i++) {
    res += arr2[i];
  }
  return res;
}
console.log(excerciseA('Hello')); // 'olleH'

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB(arr: number[]): number {
  let res: number = 0;
  for (let i: number = 0; i <= arr.length - 1; i++) {
    res += arr[i];
  }
  return res;

  //   const res: number = arr.reduce((el, acc) => (acc += el), 0);
  //   return res;
}
console.log(excerciseB([1, 3, 1])); //5

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC(arr: number[]): number {
  let res: number = 0;
  for (let i: number = 0; i <= arr.length - 1; i++) {
    res += arr[i];
  }
  return res / arr.length;
  //   const res: number = arr.reduce((el, acc) => (acc += el), 0);
  //   return res / arr.length;
}

console.log(excerciseC([4, 3, 5])); //4

// TODO: create a function which takes an array of strings and returns the longest string
function excerciseD(arr: string[]): string {
  let res: string = arr[0];
  for (let i: number = 0; i <= arr.length - 1; i++) {
    if (res.length < arr[i].length) {
      res = arr[i];
    }
  }
  return res;
}

console.log(excerciseD(['banana', 'apple', 'peach'])); //4
